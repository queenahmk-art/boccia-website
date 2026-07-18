import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_URL, getSeo, getStructuredData, staticRoutes } from "../src/data/seo.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const issues = [];

function fail(scope, message) {
  issues.push(`${scope}: ${message}`);
}

async function readRequired(relativePath) {
  const file = path.join(dist, relativePath);
  try {
    return await readFile(file, "utf8");
  } catch {
    fail(relativePath, "missing from dist output");
    return "";
  }
}

function decodeEntities(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&#039;", "'");
}

function extractAttribute(html, selector) {
  const match = html.match(selector);
  return decodeEntities(match?.[1] || "");
}

function decodeHtml(value) {
  return decodeEntities(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function assertIncludes(scope, html, value, label) {
  if (!html.includes(value)) {
    fail(scope, `missing ${label}`);
  }
}

function validateJsonLd(scope, html, seo) {
  const scripts = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  const expected = getStructuredData(seo.path);

  if (!expected) {
    if (scripts.length) {
      fail(scope, "unexpected JSON-LD on a page without applicable schema");
    }
    return;
  }

  if (scripts.length !== 1) {
    fail(scope, `expected one JSON-LD script, found ${scripts.length}`);
    return;
  }

  try {
    const data = JSON.parse(scripts[0][1]);
    const graph = data["@graph"];
    const isArticle = seo.path.endsWith("/what-is-boccia");
    const expectedTypes = isArticle
      ? ["Article", "WebPage", "BreadcrumbList"]
      : ["Organization", "SportsOrganization", "WebSite", "WebPage"];
    const types = Array.isArray(graph) ? graph.map((item) => item["@type"]) : [];

    for (const type of expectedTypes) {
      if (types.filter((value) => value === type).length !== 1) {
        fail(scope, `JSON-LD must contain exactly one ${type}`);
      }
    }

    for (const item of graph || []) {
      if (!item || Object.values(item).some((value) => value === "" || value === null)) {
        fail(scope, "JSON-LD contains an empty value");
        break;
      }
      for (const value of Object.values(item)) {
        if (typeof value === "string" && value.startsWith("http") && !value.startsWith(SITE_URL) && value !== "https://schema.org") {
          fail(scope, `JSON-LD contains an unexpected URL: ${value}`);
        }
      }
    }

    if (isArticle) {
      const article = graph.find((item) => item["@type"] === "Article");
      for (const field of ["headline", "description", "mainEntityOfPage", "inLanguage", "datePublished", "dateModified", "author", "publisher", "url"]) {
        if (!article?.[field]) fail(scope, `Article JSON-LD is missing ${field}`);
      }
      const breadcrumb = graph.find((item) => item["@type"] === "BreadcrumbList");
      if (!breadcrumb?.itemListElement?.length) fail(scope, "Article JSON-LD is missing breadcrumb items");
    }
  } catch (error) {
    fail(scope, `invalid JSON-LD: ${error.message}`);
  }
}

async function validateRoute(route) {
  const seo = getSeo(route);
  const relativePath = route === "/" ? "index.html" : path.join(route.slice(1), "index.html");
  const html = await readRequired(relativePath);
  if (!html) return;

  const scope = route;
  const title = extractAttribute(html, /<title>([\s\S]*?)<\/title>/);
  const description = extractAttribute(html, /<meta name="description" content="([^"]*)"/);
  const canonical = extractAttribute(html, /<link rel="canonical" href="([^"]*)"/);
  const lang = extractAttribute(html, /<html lang="([^"]*)"/);
  const main = extractAttribute(html, /<main>([\s\S]*?)<\/main>/);
  const decodedHtml = decodeEntities(html);

  if (title !== seo.title) fail(scope, `title does not match SEO data`);
  if (description !== seo.description) fail(scope, `meta description does not match SEO data`);
  if (canonical !== seo.canonical) fail(scope, `canonical does not match ${seo.canonical}`);
  if (lang !== seo.lang) fail(scope, `html lang does not match ${seo.lang}`);
  if ((html.match(/<h1\b/g) || []).length !== 1) fail(scope, "expected exactly one H1");
  if (html.includes('<div id="root"></div>')) fail(scope, "contains an empty root element");
  if (html.includes('noindex')) fail(scope, "official route must not contain noindex");
  const approvedGameUrls = new Set([
    "https://queenahmk-art.github.io/bocciagame/",
    "https://queenahmk-art.github.io/bocciagame/?lang=en",
  ]);
  const githubUrls = html.match(/https:\/\/[^"'\s<]*\.github\.io\/[^"'\s<]*/g) ?? [];
  if (githubUrls.some((url) => !approvedGameUrls.has(url))) {
    fail(scope, "contains an unapproved github.io URL");
  }
  if (decodeHtml(main).length < 160) fail(scope, "initial HTML does not contain enough main content");

  assertIncludes(scope, decodedHtml, `<meta property="og:title" content="${seo.title}"`, "Open Graph title");
  assertIncludes(scope, decodedHtml, `<meta property="og:description" content="${seo.description}"`, "Open Graph description");
  assertIncludes(scope, decodedHtml, `<meta property="og:url" content="${seo.canonical}"`, "Open Graph URL");
  assertIncludes(scope, decodedHtml, '<meta name="twitter:card" content="summary_large_image"', "Twitter Card metadata");
  assertIncludes(scope, decodedHtml, `<link rel="alternate" hreflang="zh-Hant" href="${seo.zhUrl}"`, "zh-Hant hreflang");
  assertIncludes(scope, decodedHtml, `<link rel="alternate" hreflang="en" href="${seo.enUrl}"`, "English hreflang");
  assertIncludes(scope, decodedHtml, `<link rel="alternate" hreflang="x-default" href="${seo.zhUrl}"`, "x-default hreflang");
  validateJsonLd(scope, html, seo);
}

async function validateSitemap() {
  const sitemap = await readRequired("sitemap.xml");
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const expected = staticRoutes.map((route) => getSeo(route).canonical);

  if (locations.length !== staticRoutes.length) fail("sitemap.xml", `expected ${staticRoutes.length} URLs, found ${locations.length}`);
  if (new Set(locations).size !== locations.length) fail("sitemap.xml", "contains duplicate URLs");
  if (locations.some((url) => url.includes("github.io") || !url.startsWith(SITE_URL))) fail("sitemap.xml", "contains a non-canonical domain");
  if (locations.some((url) => /(?:404|robots\.txt|sitemap\.xml)$/.test(url))) fail("sitemap.xml", "contains a non-page URL");

  for (const url of expected) {
    if (!locations.includes(url)) fail("sitemap.xml", `missing ${url}`);
  }
}

async function validateStaticFiles() {
  const robots = await readRequired("robots.txt");
  const cname = await readRequired("CNAME");
  const notFound = await readRequired("404.html");

  if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) fail("robots.txt", "does not reference the canonical sitemap");
  if (cname.trim() !== "hkboccia.com.hk") fail("CNAME", "does not contain hkboccia.com.hk");
  if (!notFound.includes('name="robots" content="noindex, follow"')) fail("404.html", "must include noindex, follow");
  if (notFound.includes('rel="canonical"')) fail("404.html", "must not canonicalise to another page");

  const rootEntries = await readdir(dist, { withFileTypes: true });
  const routeDirectories = rootEntries.filter((entry) => entry.isDirectory() && entry.name !== "assets" && entry.name !== ".vite").map((entry) => entry.name);
  const expectedDirectories = ["about", "rules", "services", "game", "partnership", "coaches-referees", "contact", "en"];
  for (const directory of routeDirectories) {
    if (!expectedDirectories.includes(directory)) fail("dist", `unexpected route directory: ${directory}`);
  }

  async function collectIndexFiles(directory, relative = "") {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
      const nextRelative = path.join(relative, entry.name);
      if (entry.isDirectory() && entry.name !== "assets" && entry.name !== ".vite") {
        files.push(...await collectIndexFiles(path.join(directory, entry.name), nextRelative));
      } else if (entry.isFile() && entry.name === "index.html") {
        files.push(nextRelative);
      }
    }
    return files;
  }

  const expectedIndexFiles = new Set(staticRoutes.map((route) => route === "/" ? "index.html" : path.join(route.slice(1), "index.html")));
  const actualIndexFiles = await collectIndexFiles(dist);
  for (const file of actualIndexFiles) {
    if (!expectedIndexFiles.has(file)) fail("dist", `unexpected static route output: ${file}`);
  }
  for (const file of expectedIndexFiles) {
    if (!actualIndexFiles.includes(file)) fail("dist", `missing static route output: ${file}`);
  }

  try {
    await access(path.join(dist, "index.html"));
  } catch {
    fail("dist", "missing index.html");
  }
}

for (const route of staticRoutes) {
  await validateRoute(route);
}

const titles = staticRoutes.map((route) => getSeo(route).title);
if (new Set(titles).size !== titles.length) fail("SEO metadata", "contains duplicate page titles");

await validateSitemap();
await validateStaticFiles();

const rulesHtml = await readRequired(path.join("rules", "index.html"));
for (const phrase of ["硬地滾球基本玩法", "白色目標球", "紅方", "藍方", "分數", "勝出", "策略", "專注", "準繩"]) {
  if (!rulesHtml.includes(phrase)) fail("/rules", `initial HTML is missing required topic: ${phrase}`);
}

for (const route of ["/rules/what-is-boccia", "/en/rules/what-is-boccia"]) {
  const html = await readRequired(path.join(route.slice(1), "index.html"));
  const requiredPhrases = route.startsWith("/en/")
    ? ["What Is Boccia?", "How Is Boccia Played?", "What Equipment Is Used in Boccia?", "Please share the activity audience, date, number of participants, and venue details. We can help plan a suitable format."]
    : ["什麼是硬地滾球（Boccia）？", "硬地滾球如何進行？", "硬地滾球使用什麼球具？", "歡迎提供活動對象、日期、參加人數及場地資料，本會可協助規劃合適形式。"];
  for (const phrase of requiredPhrases) {
    if (!html.includes(phrase)) fail(route, `initial HTML is missing article content: ${phrase}`);
  }
}

for (const route of staticRoutes) {
  if (route.startsWith("/knowledge")) fail("routes", `legacy Knowledge route remains: ${route}`);
}

for (const route of ["/rules", "/en/rules"]) {
  const html = await readRequired(path.join(route.slice(1), "index.html"));
  const phrase = route.startsWith("/en/") ? "Learn More About Boccia" : "延伸認識硬地滾球";
  if (!html.includes(phrase)) fail(route, "is missing the related Boccia article extension");
}

for (const route of staticRoutes) {
  const html = await readRequired(route === "/" ? "index.html" : path.join(route.slice(1), "index.html"));
  const expectedContactPath = route.startsWith("/en") ? "/en/contact/" : "/contact/";
  if (!html.includes(`href=\"${expectedContactPath}\"`)) fail(route, "footer is missing the localised Contact link");
}

if (issues.length) {
  console.error(`SEO audit failed with ${issues.length} issue(s):`);
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log(`SEO audit passed for ${staticRoutes.length} prerendered routes.`);
}

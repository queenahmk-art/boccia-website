import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import { getHomepageStructuredData, getSeo, OG_IMAGE_URL, staticRoutes } from "../src/data/seo.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createHead(seo, runtimeTags, structuredData) {
  const jsonLd = structuredData
    ? `<script type="application/ld+json" data-site-structured-data="true">${JSON.stringify(structuredData).replaceAll("<", "\\u003c")}</script>`
    : "";

  return `<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(seo.description)}" />
    <meta name="robots" content="index, follow" />
    <title>${escapeHtml(seo.title)}</title>
    <link rel="canonical" href="${seo.canonical}" />
    <link rel="alternate" hreflang="zh-Hant" href="${seo.zhUrl}" />
    <link rel="alternate" hreflang="en" href="${seo.enUrl}" />
    <link rel="alternate" hreflang="x-default" href="${seo.zhUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(seo.title)}" />
    <meta property="og:description" content="${escapeHtml(seo.description)}" />
    <meta property="og:url" content="${seo.canonical}" />
    <meta property="og:image" content="${OG_IMAGE_URL}" />
    <meta property="og:site_name" content="中國香港硬地滾球總會 | The Boccia Association of Hong Kong, China Limited" />
    <meta property="og:locale" content="${seo.locale}" />
    <meta property="og:locale:alternate" content="${seo.language === "en" ? "zh_HK" : "en_HK"}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(seo.title)}" />
    <meta name="twitter:description" content="${escapeHtml(seo.description)}" />
    <meta name="twitter:image" content="${OG_IMAGE_URL}" />
    ${jsonLd}
    ${runtimeTags}
  </head>`;
}

function getRuntimeTags(template) {
  return [
    ...(template.match(/<link\b[^>]*>/g) || []),
    ...(template.match(/<script\b[\s\S]*?<\/script>/g) || []),
  ].join("\n    ");
}

function renderDocument(template, route, appHtml) {
  const seo = getSeo(route);
  const head = createHead(seo, getRuntimeTags(template), getHomepageStructuredData(route));
  const rootTag = '<div id="root"></div>';

  if (!template.includes(rootTag)) {
    throw new Error("Unable to find the root element in the Vite build output.");
  }

  return template
    .replace(/<html\b[^>]*>/, `<html lang="${seo.lang}">`)
    .replace(/<head>[\s\S]*?<\/head>/, head)
    .replace(rootTag, `<div id="root">${appHtml}</div>`);
}

async function writeRoute(route, template, render) {
  const appHtml = resolveAssetUrls(render(route));
  const output = route === "/"
    ? path.join(dist, "index.html")
    : path.join(dist, route.replace(/^\//, ""), "index.html");

  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, renderDocument(template, route, appHtml));
}

const template = await readFile(path.join(dist, "index.html"), "utf8");
const manifest = JSON.parse(await readFile(path.join(dist, ".vite", "manifest.json"), "utf8"));
const assetPaths = Object.values(manifest)
  .filter((entry) => entry.src && entry.file)
  .map((entry) => [encodeURI(`/${entry.src}`), `/${entry.file}`]);

function resolveAssetUrls(appHtml) {
  return assetPaths.reduce(
    (html, [source, output]) => html.replaceAll(source, output),
    appHtml,
  );
}
const vite = await createServer({
  root,
  appType: "custom",
  server: { middlewareMode: true, hmr: false, ws: false },
});

try {
  const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");
  for (const route of staticRoutes) {
    await writeRoute(route, template, render);
  }
  console.log(`Prerendered ${staticRoutes.length} routes.`);
} finally {
  await vite.close();
}

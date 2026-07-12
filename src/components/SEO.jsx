import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSeo, getStructuredData, OG_IMAGE_URL } from "../data/seo.js";

function upsertMeta(attribute, name, content) {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel, href, hreflang) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
  if (hreflang) {
    element.setAttribute("hreflang", hreflang);
  }
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeo(pathname);
    const structuredData = getStructuredData(pathname);
    document.documentElement.lang = seo.lang;
    document.title = seo.title;

    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "robots", seo.noindex ? "noindex, follow" : "index, follow");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", seo.canonical);
    upsertMeta("property", "og:image", OG_IMAGE_URL);
    upsertMeta("property", "og:site_name", "中國香港硬地滾球總會 | The Boccia Association of Hong Kong, China Limited");
    upsertMeta("property", "og:locale", seo.locale);
    upsertMeta("property", "og:locale:alternate", seo.language === "en" ? "zh_HK" : "en_HK");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", OG_IMAGE_URL);
    upsertLink("canonical", seo.canonical);
    upsertLink("alternate", seo.zhUrl, "zh-Hant");
    upsertLink("alternate", seo.enUrl, "en");
    upsertLink("alternate", seo.zhUrl, "x-default");

    const existing = document.head.querySelector("script[data-site-structured-data]");
    if (structuredData) {
      const script = existing || document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.siteStructuredData = "true";
      script.textContent = JSON.stringify(structuredData);
      if (!existing) {
        document.head.appendChild(script);
      }
    } else if (existing) {
      existing.remove();
    }
  }, [pathname]);

  return null;
}

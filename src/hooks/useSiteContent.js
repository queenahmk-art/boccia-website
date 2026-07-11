import { useLocation } from "react-router-dom";
import { siteContent } from "../data/siteData.js";

export function getLanguageFromPath(pathname) {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "zh";
}

export function getLocalizedPath(path, lang) {
  const withTrailingSlash = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;

  if (lang === "en") {
    return path === "/" ? "/en/" : `/en${withTrailingSlash}`;
  }
  return withTrailingSlash;
}

export function switchLanguagePath(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;

  if (path === "/en") {
    return "/";
  }
  if (path.startsWith("/en/")) {
    return `${path.replace(/^\/en/, "")}/`;
  }
  return path === "/" ? "/en/" : `/en${path}/`;
}

export function useSiteContent() {
  const location = useLocation();
  const lang = getLanguageFromPath(location.pathname);
  const content = siteContent[lang];
  const link = (path) => getLocalizedPath(path, lang);

  return {
    lang,
    content,
    link,
    switchPath: switchLanguagePath(location.pathname),
  };
}

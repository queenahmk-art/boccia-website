import { useLocation } from "react-router-dom";
import { siteContent } from "../data/siteData.js";

export function getLanguageFromPath(pathname) {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "zh";
}

export function getLocalizedPath(path, lang) {
  if (lang === "en") {
    return path === "/" ? "/en" : `/en${path}`;
  }
  return path;
}

export function switchLanguagePath(pathname) {
  if (pathname === "/en") {
    return "/";
  }
  if (pathname.startsWith("/en/")) {
    return pathname.replace(/^\/en/, "") || "/";
  }
  return pathname === "/" ? "/en" : `/en${pathname}`;
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

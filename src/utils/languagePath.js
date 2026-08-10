const LOCALIZED_BASE_PATHS = new Set([
  "/",
  "/about",
  "/rules",
  "/services",
  "/equipment",
  "/partnership",
  "/coaches-referees",
  "/contact",
  "/game",
  "/rules/what-is-boccia",
  "/rules/who-can-play-boccia",
]);

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
  const currentLanguage = getLanguageFromPath(pathname);
  const fallbackPath = currentLanguage === "en" ? "/" : "/en/";

  if (
    typeof pathname !== "string"
    || !pathname.startsWith("/")
    || pathname.startsWith("//")
    || pathname.includes("\\")
    || /%(?:2f|5c)/i.test(pathname)
    || pathname.includes("//")
  ) {
    return fallbackPath;
  }

  const normalizedPath = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const basePath = normalizedPath === "/en"
    ? "/"
    : normalizedPath.startsWith("/en/")
      ? normalizedPath.slice(3)
      : normalizedPath;

  if (!LOCALIZED_BASE_PATHS.has(basePath)) {
    return fallbackPath;
  }

  return getLocalizedPath(basePath, currentLanguage === "en" ? "zh" : "en");
}

import { useLocation } from "react-router";
import { siteContent } from "../data/siteData.js";
import { getLanguageFromPath, getLocalizedPath, switchLanguagePath } from "../utils/languagePath.js";

export { getLanguageFromPath, getLocalizedPath, switchLanguagePath } from "../utils/languagePath.js";

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

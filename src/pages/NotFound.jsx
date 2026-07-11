import { Link } from "react-router-dom";
import { useSiteContent } from "../hooks/useSiteContent.js";

export default function NotFound() {
  const { lang, link } = useSiteContent();
  const copy = lang === "en"
    ? { kicker: "404", title: "Page not found", text: "The page you requested is not available.", action: "Return to home" }
    : { kicker: "404", title: "找不到頁面", text: "你所要求的頁面並不存在。", action: "返回首頁" };

  return (
    <section className="page-hero compact not-found-page">
      <p className="eyebrow">{copy.kicker}</p>
      <h1>{copy.title}</h1>
      <p>{copy.text}</p>
      <Link className="btn primary" to={link("/")}>{copy.action}</Link>
    </section>
  );
}

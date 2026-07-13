import { Link, useLocation } from "react-router-dom";
import { assetMeta, assets } from "../data/siteData.js";
import { getBocciaArticle } from "../data/articles.js";
import { useSiteContent } from "../hooks/useSiteContent.js";

function ArticleSection({ section }) {
  return (
    <section className="knowledge-content-section">
      <h2>{section.heading}</h2>
      {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.bullets ? (
        <ul>
          {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      ) : null}
      {section.afterBullets ? <p>{section.afterBullets}</p> : null}
      {section.afterParagraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.subsections?.map((subsection) => (
        <div className="knowledge-subsection" key={subsection.heading}>
          <h3>{subsection.heading}</h3>
          {subsection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      ))}
    </section>
  );
}

export default function KnowledgeArticle() {
  const { lang, link } = useSiteContent();
  const { pathname: locationPath } = useLocation();
  const pathname = locationPath.replace(/\/$/, "") || "/";
  const article = getBocciaArticle(pathname, lang);

  if (!article) return null;

  return (
    <>
      <article className="knowledge-article">
        <div className="knowledge-breadcrumb" aria-label={lang === "en" ? "Breadcrumb" : "麵包屑導覽"}>
          <Link to={link("/")}>{lang === "en" ? "Home" : "首頁"}</Link>
          <span aria-hidden="true">/</span>
          <Link to={link("/rules")}>{lang === "en" ? "About Boccia" : "認識硬地滾球"}</Link>
          <span aria-hidden="true">/</span>
          <span>{article.title}</span>
        </div>

        <header className="knowledge-article-header">
          <p className="eyebrow">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="knowledge-article-intro">{article.intro}</p>
          <div className="knowledge-article-meta">
            <span>{lang === "en" ? "Published by" : "發布機構"}: {article.publishedBy}</span>
            <time dateTime={article.publishedDate}>
              {lang === "en" ? "Updated" : "更新日期"}: {article.publishedDate}
            </time>
          </div>
          <Link className="btn secondary knowledge-back-link" to={link("/rules")}>
            {lang === "en" ? "Back to About Boccia" : "返回認識硬地滾球"}
          </Link>
        </header>

        <div className="knowledge-article-layout">
          <div className="knowledge-article-body">
            <p>{lang === "en"
              ? "Boccia is a precision ball sport that combines strategy, skill and concentration. It has developed into an international competitive sport and is an official event at the Paralympic Games."
              : "硬地滾球（Boccia）是一項充滿策略、技巧及專注力的球類運動，現時已發展成世界性的競技運動，並是殘疾人奧運會的正式比賽項目。"}</p>
            <p>{lang === "en"
              ? "Unlike many sports that rely mainly on speed or physical strength, Boccia places greater emphasis on accurate ball placement, tactical planning and decision-making. Players aim to place their coloured balls as close as possible to the white target ball, known as the Jack."
              : "與不少講求速度或力量的運動不同，硬地滾球更重視準確投球、戰術部署及臨場判斷。球員需要把自己的球盡量擲近白色目標球 Jack，並因應場上形勢選擇最合適的投球角度、力度及策略。"}</p>
            {article.sections.map((section) => <ArticleSection key={section.heading} section={section} />)}
          </div>

          <aside className="knowledge-article-aside">
            <img
              src={article.image || assets.bocciaImage}
              alt={article.imageAlt}
              width={article.imageWidth || assetMeta.bocciaImage.width}
              height={article.imageHeight || assetMeta.bocciaImage.height}
              loading="lazy"
              decoding="async"
            />
            <p className="program-label">{article.category}</p>
            <p>{lang === "en" ? "An introductory guide for people who want to discover Boccia." : "為想認識硬地滾球的人士而設的入門介紹。"}</p>
          </aside>
        </div>
      </article>

      <section className="section knowledge-cta">
        <div>
          <p className="section-kicker">{lang === "en" ? "Learn more" : "延伸了解"}</p>
          <h2>{article.ctaTitle}</h2>
        </div>
        <div className="knowledge-related-links">
          {article.relatedLinks.map((item) => (
            <Link className="btn light" key={item.path} to={link(item.path)}>
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

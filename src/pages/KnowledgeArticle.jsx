import { Link, useLocation } from "react-router-dom";
import { assetMeta, assets } from "../data/siteData.js";
import { getBocciaArticle } from "../data/articles.js";
import { useSiteContent } from "../hooks/useSiteContent.js";

function getArticlePath(path, lang) {
  if (lang === "en") {
    return path === "/en" || path.startsWith("/en/") ? path : `/en${path}`;
  }
  return path.startsWith("/en/") ? path.replace(/^\/en/, "") : path;
}

function ArticleLink({ link, lang, className = "knowledge-section-link" }) {
  if (!link) return null;

  return (
    <Link className={className} to={getArticlePath(link.path, lang)}>
      {link.label}
    </Link>
  );
}

function SummaryTable({ table }) {
  if (!table) return null;

  return (
    <div className="knowledge-table-block">
      <div className="knowledge-table-wrapper">
        <table>
          <caption className="sr-only">{table.caption}</caption>
          <thead>
            <tr>
              {table.headers.map((header) => <th scope="col" key={header}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) => (
                  index === 0
                    ? <th scope="row" key={cell}>{cell}</th>
                    : <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.afterText ? <p>{table.afterText}</p> : null}
    </div>
  );
}

function ArticleSection({ section, lang, summaryTable, showSummaryTable }) {
  return (
    <section className="knowledge-content-section">
      <h2>{section.heading}</h2>
      {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {showSummaryTable ? <SummaryTable table={summaryTable} /> : null}
      {section.bullets?.length ? (
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
      <ArticleLink link={section.link} lang={lang} />
    </section>
  );
}

function ArticleFaqs({ faqs, lang }) {
  if (!faqs?.length) return null;

  return (
    <section className="knowledge-content-section knowledge-faq-section" aria-labelledby="knowledge-faq-title">
      <h2 id="knowledge-faq-title">{lang === "en" ? "Frequently Asked Questions" : "常見問題"}</h2>
      <div className="knowledge-faq-list">
        {faqs.map((faq) => (
          <article className="knowledge-faq-item" key={faq.question}>
            <h3>
              <span className="knowledge-faq-prefix" aria-hidden="true">
                {lang === "en" ? "Q:" : "問："}
              </span>
              {faq.question}
            </h3>
            <p>
              <span className="knowledge-faq-prefix" aria-hidden="true">
                {lang === "en" ? "A:" : "答："}
              </span>
              {faq.answer}
            </p>
            {faq.linkLabel && faq.linkPath ? (
              <ArticleLink
                link={{ label: faq.linkLabel, path: faq.linkPath }}
                lang={lang}
                className="knowledge-section-link"
              />
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export default function KnowledgeArticle() {
  const { lang } = useSiteContent();
  const { pathname: locationPath } = useLocation();
  const pathname = locationPath.replace(/\/$/, "") || "/";
  const article = getBocciaArticle(pathname, lang);

  if (!article) return null;

  const homePath = lang === "en" ? "/en/" : "/";
  const rulesPath = lang === "en" ? "/en/rules/" : "/rules/";
  const ctaParagraphs = article.ctaText?.split("\n\n").filter(Boolean) || [];

  return (
    <>
      <article className="knowledge-article">
        <nav className="knowledge-breadcrumb" aria-label={lang === "en" ? "Breadcrumb" : "麵包屑導覽"}>
          <Link to={homePath}>{lang === "en" ? "Home" : "首頁"}</Link>
          <span aria-hidden="true">/</span>
          <Link to={rulesPath}>{lang === "en" ? "About Boccia" : "認識硬地滾球"}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{article.title}</span>
        </nav>

        <header className="knowledge-article-header">
          <p className="eyebrow">{article.category}</p>
          <h1>{article.title}</h1>
          <div className="knowledge-article-meta">
            <span>{lang === "en" ? "Published by" : "發布機構"}: {article.publishedBy}</span>
            <time dateTime={article.publishedDate}>
              {lang === "en" ? "Published" : "發布日期"}: {article.publishedDate}
            </time>
            <time dateTime={article.modifiedDate}>
              {lang === "en" ? "Updated" : "更新日期"}: {article.modifiedDate}
            </time>
          </div>
          <Link className="btn secondary knowledge-back-link" to={rulesPath}>
            {lang === "en" ? "Back to About Boccia" : "返回認識硬地滾球"}
          </Link>
        </header>

        <div className="knowledge-article-layout">
          <div className="knowledge-article-body">
            {article.introParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

            {article.notice ? (
              <aside className="knowledge-notice" aria-labelledby="knowledge-notice-title">
                <h2 id="knowledge-notice-title">{article.notice.title}</h2>
                <p>{article.notice.text}</p>
              </aside>
            ) : null}

            {article.sections.map((section, index) => (
              <ArticleSection
                key={section.heading}
                section={section}
                lang={lang}
                summaryTable={article.summaryTable}
                showSummaryTable={index === 0 && Boolean(article.summaryTable)}
              />
            ))}

            <ArticleFaqs faqs={article.faqs} lang={lang} />

            {article.relatedLinks?.length ? (
              <nav className="knowledge-related-links" aria-label={lang === "en" ? "Related articles" : "相關文章"}>
                {article.relatedLinks.map((relatedLink) => (
                  <ArticleLink key={relatedLink.path} link={relatedLink} lang={lang} />
                ))}
              </nav>
            ) : null}
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
          </aside>
        </div>
      </article>

      <section className="cta-section article-cta">
        <div>
          <h2>{article.ctaTitle}</h2>
          {ctaParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <Link className="btn primary light" to={getArticlePath(article.ctaPath, lang)}>
          {article.ctaAction}
        </Link>
      </section>
    </>
  );
}

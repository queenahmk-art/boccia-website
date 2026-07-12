import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading.jsx";
import { knowledgeArticles, knowledgeIndex } from "../data/articles.js";
import { useSiteContent } from "../hooks/useSiteContent.js";

export default function KnowledgeIndex() {
  const { lang, link } = useSiteContent();
  const page = knowledgeIndex[lang];
  const articles = knowledgeArticles[lang];

  return (
    <>
      <section className="page-hero compact knowledge-hero">
        <p className="eyebrow">{page.kicker}</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </section>

      <section className="section knowledge-list-section">
        <SectionHeading kicker={page.articleLabel} title={page.title} />
        <div className="knowledge-grid">
          {articles.map((article) => (
            <article className="knowledge-card" key={article.slug}>
              <img
                src={article.image}
                alt={article.imageAlt}
                width={article.imageWidth}
                height={article.imageHeight}
                loading="lazy"
                decoding="async"
              />
              <div className="knowledge-card-copy">
                <p className="program-label">{article.category}</p>
                <h2>{article.title}</h2>
                <p>{article.intro}</p>
                <p>{article.description}</p>
                <Link className="btn secondary" to={link(article.path.replace(/^\/en/, ""))}>
                  {page.readMore}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

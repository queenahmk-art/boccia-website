import { Link } from "react-router-dom";
import FeatureStrip from "../components/FeatureStrip.jsx";
import RuleCard from "../components/RuleCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { bocciaArticles } from "../data/articles.js";
import { assetMeta, assets } from "../data/siteData.js";
import { useSiteContent } from "../hooks/useSiteContent.js";

export default function Rules() {
  const { content, lang } = useSiteContent();
  const { rules } = content;
  const featuredArticles = bocciaArticles[lang];

  return (
    <>
      <section className="page-hero image-page-hero">
          <img
            src={assets.rulesImage}
            alt={rules.imageAlt}
            width={assetMeta.rulesImage.width}
            height={assetMeta.rulesImage.height}
            fetchpriority="high"
          />
          <div>
            <p className="eyebrow light">{rules.kicker}</p>
          {rules.title ? <h1>{rules.title}</h1> : <h1 className="sr-only">{rules.pageH1}</h1>}
          <p>{rules.intro}</p>
        </div>
      </section>

      <section className="section editorial-section">
        <SectionHeading kicker={rules.howKicker} title={rules.howTitle} />
        <div className="editorial-copy">
          {rules.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <FeatureStrip
        kicker={rules.focusKicker}
        title={rules.focusTitle}
        items={content.bocciaFocus}
        className="rules-focus-strip"
      />

      <section className="section rules-programmes">
        <SectionHeading kicker={rules.flowKicker} title={rules.flowTitle} copy={rules.flowCopy} />
        <div className="rules-grid">
          {content.ruleSteps.map((step, index) => (
            <RuleCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </section>

      <section className="section rules-article-section">
        <div className="rules-article-heading">
          <SectionHeading kicker={rules.articleKicker} copy={rules.articleCopy} />
        </div>
        <div className="rules-article-grid">
          {featuredArticles.map((article) => (
            <article className="rules-article-card" key={article.slug}>
              <img
                src={article.image}
                alt={article.imageAlt}
                width={article.imageWidth}
                height={article.imageHeight}
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="section-kicker">{article.category}</p>
                <h2>{article.title}</h2>
                <p>{article.cardDescription || article.description}</p>
                <Link className="btn secondary" to={`${article.path}/`}>
                  {rules.articleAction}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

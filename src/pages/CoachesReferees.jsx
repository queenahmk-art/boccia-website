import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading.jsx";
import { assets } from "../data/siteData.js";
import { useSiteContent } from "../hooks/useSiteContent.js";

export default function CoachesReferees() {
  const { content, link } = useSiteContent();
  const page = content.coaches;

  return (
    <>
      <section className="page-hero image-page-hero">
        <img src={assets.coachTraining} alt={page.imageAlt} />
        <div>
          <p className="eyebrow light">{page.kicker}</p>
          {page.title ? <h1>{page.title}</h1> : null}
          <p>{page.intro}</p>
        </div>
      </section>

      <section className="section editorial-section">
        <SectionHeading kicker={page.standardKicker} title={page.standardTitle} />
        <div className="editorial-copy">
          <p>{page.standardCopy}</p>
        </div>
      </section>

      <section className="section pathway-section">
        <SectionHeading kicker={page.pathwayKicker} title={page.pathwayTitle} copy={page.pathwayCopy} />
        <div className="pathway-grid">
          {content.coachPathway.map((item, index) => (
            <article key={item} className="pathway-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div>
          <p className="section-kicker">{page.ctaKicker}</p>
          <h2>{page.ctaTitle}</h2>
          <p>{page.ctaCopy}</p>
        </div>
        <Link className="btn primary light" to={link("/contact")}>
          {page.ctaAction}
        </Link>
      </section>
    </>
  );
}

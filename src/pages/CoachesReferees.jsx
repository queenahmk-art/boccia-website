import { Link } from "react-router";
import SectionHeading from "../components/SectionHeading.jsx";
import { assetMeta, assets } from "../data/siteData.js";
import { useSiteContent } from "../hooks/useSiteContent.js";

export default function CoachesReferees() {
  const { content, link } = useSiteContent();
  const page = content.coaches;

  return (
    <>
      <section className="page-hero image-page-hero coaches-page-hero">
        <img
          src={assets.coachTraining}
          alt={page.imageAlt}
          width={assetMeta.coachTraining.width}
          height={assetMeta.coachTraining.height}
          fetchpriority="high"
        />
        <div>
          {page.kicker ? <p className="eyebrow light">{page.kicker}</p> : null}
          {page.title ? <h1>{page.title}</h1> : <h1 className="sr-only">{page.pageH1}</h1>}
          <p>{page.intro}</p>
        </div>
      </section>

      {page.latestCourse ? (
        <section className="section editorial-section latest-course-section">
          <SectionHeading kicker={page.latestCourse.kicker} />
          <div className="editorial-copy">
            <h2>{page.latestCourse.title}</h2>
            <p><strong>{page.latestCourse.dateLabel}：</strong>{page.latestCourse.date}</p>
            <p><strong>{page.latestCourse.timeLabel}：</strong>{page.latestCourse.time}</p>
            <p><strong>{page.latestCourse.feeLabel}：</strong>{page.latestCourse.fee}</p>
            <p><strong>{page.latestCourse.capacityLabel}：</strong>{page.latestCourse.capacity}</p>
            <p><strong>{page.latestCourse.locationLabel}：</strong>{page.latestCourse.location}</p>
            <p className="latest-course-registration">
              <strong>{page.latestCourse.registrationLabel}：</strong>
              <a href={page.latestCourse.registrationUrl} target="_blank" rel="noreferrer">
                {page.latestCourse.registrationUrl}
              </a>
            </p>
          </div>
        </section>
      ) : null}

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

      <section className="cta-section coaches-cta">
        <div>
          {page.ctaKicker ? <p className="section-kicker">{page.ctaKicker}</p> : null}
          <h2>{page.ctaTitle}</h2>
          {page.ctaCopy ? <p>{page.ctaCopy}</p> : null}
        </div>
        <Link className="btn primary light coaches-cta-action" to={link("/contact")}>
          {page.ctaAction}
        </Link>
      </section>
    </>
  );
}

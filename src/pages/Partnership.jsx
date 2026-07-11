import { Link } from "react-router-dom";
import FeatureStrip from "../components/FeatureStrip.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { assetMeta, assets } from "../data/siteData.js";
import { useSiteContent } from "../hooks/useSiteContent.js";

export default function Partnership() {
  const { content, link } = useSiteContent();
  const page = content.partnership;

  return (
    <>
      <section className="page-hero image-page-hero">
        <img
          src={assets.promoActivity}
          alt={page.imageAlt}
          width={assetMeta.promoActivity.width}
          height={assetMeta.promoActivity.height}
          fetchpriority="high"
        />
        <div>
          <p className="eyebrow light">{page.kicker}</p>
          {page.title ? <h1>{page.title}</h1> : <h1 className="sr-only">{page.pageH1}</h1>}
          <p>{page.intro}</p>
        </div>
      </section>

      <section className="section partnership-section">
        <SectionHeading kicker={page.sectionKicker} title={page.sectionTitle} copy={page.sectionCopy} />
        <div className="partnership-grid">
          {content.partnershipGroups.map((group) => (
            <article key={group.title} className="partnership-card">
              <span>{group.label}</span>
              <h3>{group.title}</h3>
              <ul className="inline-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <FeatureStrip
        kicker={page.inclusionKicker}
        title={page.inclusionTitle}
        items={content.inclusionBenefits}
        className="partnership-inclusion-strip"
      />

      <section className="cta-section">
        <div>
          {page.ctaKicker ? <p className="section-kicker">{page.ctaKicker}</p> : null}
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

import { Link } from "react-router-dom";
import FeatureStrip from "../components/FeatureStrip.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { assetMeta, assets } from "../data/siteData.js";
import { useSiteContent } from "../hooks/useSiteContent.js";

export default function About() {
  const { content, link } = useSiteContent();
  const { about } = content;

  return (
    <>
      <section className="page-hero image-page-hero">
        <img
          src={assets.eventImage}
          alt={about.imageAlt}
          width={assetMeta.eventImage.width}
          height={assetMeta.eventImage.height}
          fetchpriority="high"
        />
        <div>
          <p className="eyebrow light">{about.kicker}</p>
          <h1>{about.title}</h1>
          <p>{about.intro}</p>
        </div>
      </section>

      <section className="section editorial-section about-mission-section">
        <SectionHeading kicker={about.missionKicker} title={about.missionTitle} />
        <div className="editorial-copy">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <FeatureStrip
        kicker={about.focusKicker}
        title={about.focusTitle}
        items={content.missionPoints}
        className="about-focus-strip"
      />

      <section className="section split-feature reverse">
        <div className="split-copy">
          <p className="section-kicker">{about.platformKicker}</p>
          <h2>{about.platformTitle}</h2>
          <p>{about.platformCopy}</p>
          <Link className="btn secondary" to={link("/partnership")}>
            {about.platformAction}
          </Link>
        </div>
        <div className="split-media">
          <img
            src={assets.promoActivity}
            alt={about.platformImageAlt}
            width={assetMeta.promoActivity.width}
            height={assetMeta.promoActivity.height}
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>
    </>
  );
}

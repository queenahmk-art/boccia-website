import { Link } from "react-router-dom";
import FeatureStrip from "../components/FeatureStrip.jsx";
import Hero from "../components/Hero.jsx";
import ProgramCard from "../components/ProgramCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { assets } from "../data/siteData.js";
import { useSiteContent } from "../hooks/useSiteContent.js";

export default function Home() {
  const { content, link } = useSiteContent();
  const { home, cta } = content;

  return (
    <>
      <Hero />

      <section className="section offer-section">
        <SectionHeading
          kicker={home.offerKicker}
          title={home.offerTitle}
          copy={home.offerCopy}
          align="center"
        />
        <div className="offer-grid">
          {content.offerings.map((item) => (
            <article key={item.title} className="offer-card">
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-feature">
        <div className="split-media equipment-media">
          <img src={assets.bocciaImage} alt="硬地滾球器材" />
        </div>
        <div className="split-copy">
          <p className="section-kicker">{home.missionKicker}</p>
          <h2>{home.missionTitle}</h2>
          <p>{home.missionCopy}</p>
          <Link className="btn secondary" to={link("/about")}>
            {home.missionAction}
          </Link>
        </div>
      </section>

      <section className="section programmes-section">
        <SectionHeading kicker={home.servicesKicker} title={home.servicesTitle} copy={home.servicesCopy} />
        <div className="program-grid">
          {content.services.map((service) => (
            <ProgramCard key={service.title} item={service} to={link("/contact")} />
          ))}
        </div>
      </section>

      <FeatureStrip
        kicker={home.audienceKicker}
        title={home.audienceTitle}
        items={content.audiences}
        className="audience-strip"
      />

      <section className="cta-section home-cta">
        <div>
          <p className="section-kicker">{cta.kicker}</p>
          <h2>{cta.title}</h2>
          <p>{cta.copy}</p>
        </div>
        <Link className="btn primary light" to={link("/contact")}>
          {cta.action}
        </Link>
      </section>
    </>
  );
}

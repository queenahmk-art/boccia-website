import { Link } from "react-router-dom";
import { assetMeta, assets } from "../data/siteData.js";
import { useSiteContent } from "../hooks/useSiteContent.js";

export default function Hero() {
  const { content, link } = useSiteContent();
  const { hero } = content;

  return (
    <section className="hero">
      <img
        className="hero-image"
        src={assets.promoActivity}
        alt={hero.imageAlt}
        width={assetMeta.promoActivity.width}
        height={assetMeta.promoActivity.height}
        fetchpriority="high"
      />
      <div className="hero-overlay"></div>
      <div className="hero-copy">
        <p className="eyebrow light">{hero.kicker}</p>
        <h1 className="hero-title-top">{hero.titleTop}</h1>
        <p className="hero-title-sub">{hero.titleSub}</p>
        <p className="lead">{hero.lead}</p>
        <p>{hero.copy}</p>
        <div className="hero-actions">
          <Link className="btn primary" to={link("/services")}>
            {hero.primaryAction}
          </Link>
          <Link className="btn ghost" to={link("/contact")}>
            {hero.secondaryAction}
          </Link>
        </div>
      </div>
      <div className="hero-stat-strip" aria-label="本會主要服務">
        {content.heroStats.map((stat) => (
          <div key={stat.value}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

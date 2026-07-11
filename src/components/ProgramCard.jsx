import { Link } from "react-router-dom";
import { getImageDimensions } from "../data/siteData.js";

export default function ProgramCard({ item, to = "/contact", compact = false }) {
  const imageDimensions = getImageDimensions(item.image);

  return (
    <article className={`program-card ${compact ? "compact" : ""} ${item.photoFrame ? "photo-frame" : ""}`}>
      <div className="program-media">
        <img
          src={item.image}
          alt={item.title}
          width={imageDimensions.width}
          height={imageDimensions.height}
          loading="lazy"
          decoding="async"
        />
        <span>{item.number}</span>
      </div>
      <div className="program-copy">
        <p className="program-label">{item.label}</p>
        <h3>{item.title}</h3>
        <p>{item.copy}</p>
        {item.bullets ? (
          <ul className="inline-list">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
        <Link to={to}>{item.action}</Link>
      </div>
    </article>
  );
}

import { Link } from "react-router-dom";

export default function ProgramCard({ item, to = "/contact", compact = false }) {
  return (
    <article className={`program-card ${compact ? "compact" : ""} ${item.photoFrame ? "photo-frame" : ""}`}>
      <div className="program-media">
        <img src={item.image} alt={item.title} />
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

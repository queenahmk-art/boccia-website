export default function FeatureStrip({ kicker, title, items, className = "" }) {
  return (
    <section className={`section feature-strip ${className}`.trim()}>
      {kicker || title ? (
        <div className="feature-strip-heading">
          {kicker ? <p className="section-kicker">{kicker}</p> : null}
          {title ? <h2>{title}</h2> : null}
        </div>
      ) : null}
      <div className="feature-strip-grid">
        {items.map((item) => (
          <article key={item.title || item.label}>
            <span>{item.label}</span>
            <strong>{item.title}</strong>
            <p>{item.text || item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

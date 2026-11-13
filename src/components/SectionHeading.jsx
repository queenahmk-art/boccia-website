export default function SectionHeading({ kicker, title, copy, align = "left", titleId }) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      {kicker ? <p className="section-kicker">{kicker}</p> : null}
      {title ? <h2 id={titleId}>{title}</h2> : null}
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

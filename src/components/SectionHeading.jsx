export default function SectionHeading({ kicker, title, copy, align = "left" }) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      {kicker ? <p className="section-kicker">{kicker}</p> : null}
      {title ? <h2>{title}</h2> : null}
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

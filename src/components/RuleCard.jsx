export default function RuleCard({ step, index }) {
  return (
    <article className="rule-card">
      <span className={`ball ${step.ball}-ball`}></span>
      <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
      <h3>{step.title}</h3>
      <p>{step.copy}</p>
      {step.en ? <p className="en">{step.en}</p> : null}
    </article>
  );
}

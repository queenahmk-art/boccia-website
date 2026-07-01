import FeatureStrip from "../components/FeatureStrip.jsx";
import RuleCard from "../components/RuleCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { assets } from "../data/siteData.js";
import { useSiteContent } from "../hooks/useSiteContent.js";

export default function Rules() {
  const { content } = useSiteContent();
  const { rules } = content;

  return (
    <>
      <section className="page-hero image-page-hero">
        <img src={assets.rulesImage} alt={rules.imageAlt} />
        <div>
          <p className="eyebrow light">{rules.kicker}</p>
          {rules.title ? <h1>{rules.title}</h1> : null}
          <p>{rules.intro}</p>
        </div>
      </section>

      <section className="section editorial-section">
        <SectionHeading kicker={rules.howKicker} title={rules.howTitle} />
        <div className="editorial-copy">
          {rules.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <FeatureStrip
        kicker={rules.focusKicker}
        title={rules.focusTitle}
        items={content.bocciaFocus}
        className="rules-focus-strip"
      />

      <section className="section rules-programmes">
        <SectionHeading kicker={rules.flowKicker} title={rules.flowTitle} copy={rules.flowCopy} />
        <div className="rules-grid">
          {content.ruleSteps.map((step, index) => (
            <RuleCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}

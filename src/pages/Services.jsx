import FeatureStrip from "../components/FeatureStrip.jsx";
import ProgramCard from "../components/ProgramCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { useSiteContent } from "../hooks/useSiteContent.js";

export default function Services() {
  const { content, link } = useSiteContent();
  const page = content.servicesPage;

  return (
    <>
      <section className="page-hero compact services-hero">
        <p className="eyebrow">{page.kicker}</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </section>

      <section className="section programmes-section first-section">
        <SectionHeading kicker={page.sectionKicker} title={page.sectionTitle} copy={page.sectionCopy} />
        <div className="program-grid large">
          {content.services.map((service) => (
            <ProgramCard key={service.title} item={service} to={link("/contact")} />
          ))}
        </div>
      </section>

      <FeatureStrip kicker={page.audienceKicker} title={page.audienceTitle} items={content.audiences} />
    </>
  );
}

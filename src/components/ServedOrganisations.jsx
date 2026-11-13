import SectionHeading from "./SectionHeading.jsx";
import { servedOrganisations } from "../data/servedOrganisations.js";
import { useSiteContent } from "../hooks/useSiteContent.js";

export default function ServedOrganisations() {
  const { lang, content } = useSiteContent();

  if (servedOrganisations.length === 0) return null;

  const { title, copy } = content.servedOrganisations;
  const titleId = "served-organisations-title";

  return (
    <section className="section served-organisations" aria-labelledby={titleId}>
      <SectionHeading title={title} copy={copy} align="center" titleId={titleId} />
      <ul className="served-organisations-grid" role="list">
        {servedOrganisations.map(({ id, nameZh, nameEn, logo }) => (
          <li key={id} className="served-organisations-card">
            <img
              src={logo.src}
              alt={lang === "en" ? (nameEn ?? logo.altEn) : (nameZh ?? logo.altZh)}
              width={logo.width}
              height={logo.height}
              loading="lazy"
              decoding="async"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

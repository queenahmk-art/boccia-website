import SectionHeading from "../components/SectionHeading.jsx";
import {
  createMailtoUrl,
  createWhatsAppUrl,
  equipmentProducts,
} from "../data/siteData.js";
import { useSiteContent } from "../hooks/useSiteContent.js";

function EnquiryActions({ page, message, className = "" }) {
  const whatsappHref = createWhatsAppUrl(message || page.whatsappMessage);
  const emailHref = createMailtoUrl(page.emailSubject, page.emailBody);

  return (
    <div className={`equipment-actions ${className}`.trim()}>
      <a className="btn primary" href={whatsappHref} target="_blank" rel="noreferrer">
        {page.whatsappAction}
      </a>
      <a className="btn ghost" href={emailHref}>
        {page.emailAction}
      </a>
    </div>
  );
}

export default function Equipment() {
  const { content } = useSiteContent();
  const page = content.equipmentPage;

  return (
    <>
      <section className="page-hero equipment-hero">
        <div className="equipment-hero-copy">
          {page.kicker ? <p className="eyebrow">{page.kicker}</p> : null}
          <h1>{page.title}</h1>
        </div>
      </section>

      <section className="section equipment-balls-section">
        <SectionHeading kicker={page.ballsKicker} />
        <div className="equipment-brand-grid" aria-label={page.brandsLabel}>
          {equipmentProducts
            .filter((product) => product.category === "boccia-balls")
            .map((product) => (
              <article key={product.brandName} className="equipment-brand-card">
                <img src={product.image} alt={product.imageAlt} loading="lazy" decoding="async" />
                <h2>{product.brandName}</h2>
              </article>
            ))}
        </div>
      </section>

      <section className="cta-section equipment-final-cta">
        <div>
          <h2>{page.finalTitle}</h2>
          <p>{page.finalCopy}</p>
        </div>
        <EnquiryActions page={page} className="equipment-final-actions" />
      </section>
    </>
  );
}

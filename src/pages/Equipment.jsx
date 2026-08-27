import SectionHeading from "../components/SectionHeading.jsx";
import {
  createMailtoUrl,
  createWhatsAppUrl,
  equipmentProducts,
} from "../data/siteData.js";
import { useSiteContent } from "../hooks/useSiteContent.js";

function EnquiryActions({
  page,
  message,
  emailSubject,
  emailBody,
  emailClassName = "ghost",
  className = "",
}) {
  const whatsappHref = createWhatsAppUrl(message || page.whatsappMessage);
  const emailHref = createMailtoUrl(
    emailSubject || page.emailSubject,
    emailBody || page.emailBody,
  );

  return (
    <div className={`equipment-actions ${className}`.trim()}>
      <a className="btn primary" href={whatsappHref} target="_blank" rel="noreferrer">
        {page.whatsappAction}
      </a>
      <a className={`btn ${emailClassName}`} href={emailHref}>
        {page.emailAction}
      </a>
    </div>
  );
}

export default function Equipment() {
  const { content, lang } = useSiteContent();
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
            .filter((product) => ["boccia-balls", "referee-equipment"].includes(product.category))
            .map((product) => {
              const details = product.details?.[lang];

              return (
                <article key={product.brandName} className="equipment-brand-card">
                  <img
                    src={product.image}
                    alt={details?.imageAlt || product.imageAlt}
                    loading="lazy"
                    decoding="async"
                    style={product.imageFit ? { objectFit: product.imageFit } : undefined}
                  />
                  <h2>{details?.name || product.brandName}</h2>
                  {details ? (
                    <>
                      <p><strong>{details.suitableLabel}</strong>{details.suitableFor}</p>
                      {details.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      <p><strong>{details.contentsTitle}</strong></p>
                      <ul>
                        {details.contents.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                      <p><strong>{details.total}</strong></p>
                    </>
                  ) : null}
                </article>
              );
            })}
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

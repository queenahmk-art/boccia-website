import { contact } from "../data/siteData.js";
import { useSiteContent } from "../hooks/useSiteContent.js";

export default function ContactBlock() {
  const { content } = useSiteContent();
  const labels = content.contactPage;

  return (
    <section className="section contact-layout no-form">
      <div className="contact-panel">
        <p className="section-kicker">{labels.panelKicker}</p>
        <h2>{labels.panelTitle}</h2>
        <p>{labels.panelCopy}</p>
        <div className="direct-contact">
          <a href={`mailto:${contact.email}`}>
            <span>{labels.emailLabel}</span>
            <strong>{contact.email}</strong>
          </a>
          <a href={contact.whatsappUrl}>
            <span>{labels.phoneLabel}</span>
            <strong>{contact.phone}</strong>
          </a>
        </div>
      </div>
    </section>
  );
}

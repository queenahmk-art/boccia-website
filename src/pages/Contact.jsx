import ContactBlock from "../components/ContactBlock.jsx";
import { useSiteContent } from "../hooks/useSiteContent.js";

export default function Contact() {
  const { content } = useSiteContent();
  const page = content.contactPage;

  return (
    <>
      <section className="page-hero compact contact-hero">
        <p className="eyebrow">{page.kicker}</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </section>
      <ContactBlock />
    </>
  );
}

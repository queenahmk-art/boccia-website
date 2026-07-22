import { Link } from "react-router-dom";
import { contact } from "../data/siteData.js";
import { useSiteContent } from "../hooks/useSiteContent.js";

export default function Footer() {
  const { content, link } = useSiteContent();
  const returnToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <p className="footer-contact-title">{content.contactPage.title}</p>
        <p>{content.brand.name}</p>
        {content.brand.subname ? <p>{content.brand.subname}</p> : null}
      </div>
      <nav className="footer-nav" aria-label="頁尾導覽">
        {content.navItems.map((item) => (
          <Link key={item.path} to={link(item.path)} onClick={returnToTop}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="footer-contact" aria-label="聯絡方式">
        <a href={`mailto:${contact.email}`}>
          {content.contactPage.emailLabel}: {contact.email}
        </a>
        <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
          {content.contactPage.phoneLabel}: {contact.phone}
        </a>
      </div>
    </footer>
  );
}

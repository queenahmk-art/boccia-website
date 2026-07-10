import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { assets } from "../data/siteData.js";
import { useSiteContent } from "../hooks/useSiteContent.js";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { content, link, switchPath } = useSiteContent();

  const closeNav = () => setIsOpen(false);

  return (
    <header className="site-header">
      <Link className="brand" to={link("/")} onClick={closeNav} aria-label={content.brand.homeAria}>
        <img src={assets.logo} alt={content.brand.logoAlt} />
        <span>
          <strong>{content.brand.name}</strong>
          {content.brand.subname ? <small>{content.brand.subname}</small> : null}
        </span>
      </Link>

      <button
        className={`nav-toggle ${isOpen ? "is-open" : ""}`}
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-nav"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span className="sr-only">{isOpen ? content.brand.navClose : content.brand.navOpen}</span>
      </button>

      <nav className={`site-nav ${isOpen ? "is-open" : ""}`} id="site-nav" aria-label="主要導覽">
        {content.navItems.map((item) => {
          const itemPath = link(item.path);
          const classes = [location.pathname === itemPath ? "is-active" : "", item.key === "contact" ? "contact-link" : ""]
            .filter(Boolean)
            .join(" ");

          return (
            <NavLink key={item.path} to={itemPath} className={classes || undefined} onClick={closeNav}>
              {item.label}
            </NavLink>
          );
        })}
        <Link className="language-link" to={switchPath} onClick={closeNav}>
          {content.otherLangLabel}
        </Link>
      </nav>
    </header>
  );
}

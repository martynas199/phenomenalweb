import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../assets/logo-blue-trimmed-optimized.png";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-study" },
  { label: "Process", to: "/process" },
  { label: "Pricing", to: "/pricing" },
  { label: "Global Delivery", to: "/global-delivery" },
  { label: "Insights", to: "/blog" },
];

const whatsappUrl = "https://wa.me/447450361893";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="Phenomenal Web Home">
          <span className="brand-mark" aria-hidden="true">
            <img src={logoImage} alt="" loading="eager" decoding="async" />
          </span>
        </Link>

        <ul className="nav-links" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            className="btn btn-primary"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            data-cta="nav_whatsapp"
            data-cta-label="Navbar WhatsApp"
            aria-label="Chat on WhatsApp at 07450361893"
          >
            Chat on WhatsApp
          </a>
          <button
            className="menu-trigger"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            <span className="menu-trigger-icon" aria-hidden="true">
              <span className="menu-trigger-bar" />
              <span className="menu-trigger-bar" />
              <span className="menu-trigger-bar" />
            </span>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu" id="mobile-nav">
          <div className="container">
            <ul role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contacts">Contact</Link>
              </li>
              <li>
                <Link to="/request-proposal">Request proposal</Link>
              </li>
              <li>
                <a
                  className="btn btn-primary"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cta="mobile_whatsapp"
                  data-cta-label="Mobile menu WhatsApp"
                  aria-label="Chat on WhatsApp at 07450361893"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

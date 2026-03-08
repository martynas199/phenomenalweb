import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../assets/logo-blue-trimmed.png";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Projects", href: "/#projects" },
  { label: "Team", href: "/#team" },
  { label: "FAQ", href: "/#faq" },
];

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
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>

        <div className="nav-actions">
          <a
            className="btn btn-primary"
            href="https://wa.me/447450361893"
            target="_blank"
            rel="noreferrer"
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
                  <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/case-study">Case Studies</Link>
              </li>
              <li>
                <Link to="/services">All Services</Link>
              </li>
              <li>
                <a
                  className="btn btn-primary"
                  href="https://wa.me/447450361893"
                  target="_blank"
                  rel="noreferrer"
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

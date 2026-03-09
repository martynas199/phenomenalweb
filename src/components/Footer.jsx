import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/logo-blue-trimmed-optimized.png";

const whatsappUrl = "https://wa.me/447450361893";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <span className="brand-mark footer-brand-mark" aria-hidden="true">
              <img src={logoImage} alt="" loading="lazy" decoding="async" />
            </span>
          </div>
          <h2>Global web and software delivery for ambitious teams.</h2>
          <p className="footer-note">
            Phenomenal Web combines strategy, UX/UI, engineering, SEO, and
            long-term support to help startups, SMEs, and established
            businesses launch faster and scale with confidence.
          </p>
        </div>

        <div className="footer-links">
          <p className="footer-heading">Explore</p>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/website-development">Website Development</Link>
          <Link to="/web-applications">Web Applications</Link>
          <Link to="/custom-software-development">Custom Software</Link>
          <Link to="/ui-ux-design">UI/UX Design</Link>
          <Link to="/seo-growth">SEO and Growth</Link>
          <Link to="/technical-consulting">Technical Consulting</Link>
          <Link to="/support-maintenance">Support and Maintenance</Link>
          <Link to="/case-study">Case Studies</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/process">Process</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/global-delivery">Global Delivery</Link>
        </div>

        <div className="footer-links">
          <p className="footer-heading">Company</p>
          <Link to="/blog">Insights</Link>
          <a href="/#faq">FAQ</a>
          <Link to="/contacts">Contact</Link>
          <Link to="/request-proposal">Request Proposal</Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            data-cta="footer_whatsapp"
            data-cta-label="Footer WhatsApp"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="container footer-meta">
        <p>(c) {new Date().getFullYear()} Phenomenal Web. All rights reserved.</p>
        <p>Remote-first. Outcome-driven. Built for global collaboration.</p>
      </div>
    </footer>
  );
}

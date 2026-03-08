import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/logo-blue-trimmed.png";

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
          <h2>Digital products that solve real growth problems.</h2>
          <p className="footer-note">
            Strategy, design, development, and support delivered by one aligned
            team. Built for ambitious start-ups and established businesses.
          </p>
        </div>

        <div className="footer-links">
          <p className="footer-heading">Explore</p>
          <a href="/#about">About</a>
          <a href="/#services">Services</a>
          <a href="/#process">Process</a>
          <a href="/#projects">Projects</a>
          <a href="/#faq">FAQ</a>
        </div>

        <div className="footer-links">
          <p className="footer-heading">Company</p>
          <a href="/#team">Team</a>
          <a href="/#contact">Contact CTA</a>
          <Link to="/case-study">Case Studies</Link>
          <Link to="/services">All Services</Link>
          <Link to="/contacts">Contact</Link>
        </div>
      </div>

      <div className="container footer-meta">
        <p>(c) {new Date().getFullYear()} Phenomenal Web. All rights reserved.</p>
        <p>Discovery-led. Design-first. Engineering-backed.</p>
      </div>
    </footer>
  );
}

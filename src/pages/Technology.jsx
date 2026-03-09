import React from "react";
import { Link } from "react-router-dom";
import SEO, { pageSEO } from "../components/SEO";

const stackGroups = [
  {
    title: "Frontend",
    items: [
      "React and modern component architecture",
      "Responsive UI systems and accessibility standards",
      "Performance-first asset loading and rendering",
      "Conversion-focused UX implementation",
    ],
  },
  {
    title: "Backend and APIs",
    items: [
      "Node.js services and web application backends",
      "REST and third-party API integrations",
      "Authentication and role-based access patterns",
      "Reliable data handling and validation workflows",
    ],
  },
  {
    title: "CMS and Content",
    items: [
      "Editor-friendly page and content structures",
      "Scalable service page and landing page systems",
      "Technical SEO-ready metadata and templates",
      "Governance for ongoing content updates",
    ],
  },
  {
    title: "Quality and Delivery",
    items: [
      "Structured QA and release readiness checks",
      "Core Web Vitals and performance optimization",
      "Accessibility and usability validation",
      "Documentation and maintainable handover",
    ],
  },
];

const trustPoints = [
  "Architecture decisions aligned to business goals",
  "Security and reliability baseline in every project phase",
  "Global remote collaboration with clear delivery rituals",
  "Long-term support model after launch",
];

export default function Technology() {
  return (
    <div className="inner-page">
      <SEO {...pageSEO.technology} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Technology and Capability</p>
            <h1>Technical depth that supports premium digital delivery.</h1>
            <p className="page-intro">
              We combine design, engineering, and operational rigor to deliver
              websites and software platforms that are fast, maintainable, and
              commercially effective.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container tile-grid tile-grid-2">
          {stackGroups.map((group) => (
            <article className="tile-card tile-card-plain" key={group.title} data-reveal>
              <div className="tile-content">
                <h3>{group.title}</h3>
                <ul className="mini-list" role="list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Delivery Confidence</p>
            <h2>How we reduce technical and execution risk.</h2>
          </div>

          <div className="tile-card tile-card-plain" data-reveal>
            <div className="tile-content">
              <ul className="mini-list" role="list">
                {trustPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" data-reveal>
          <div className="cta-band">
            <h2>Need architecture and delivery guidance for your roadmap?</h2>
            <p>
              We can assess your current stack and recommend a practical build
              approach with clear priorities and milestones.
            </p>
            <div className="hero-cta-row">
              <Link to="/technical-consulting" className="btn btn-primary">
                Explore consulting
              </Link>
              <Link to="/request-proposal" className="btn btn-secondary">
                Request proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


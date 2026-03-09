import React from "react";
import { Link } from "react-router-dom";
import SEO, { buildServiceSchema, pageSEO } from "../components/SEO";

const outcomes = [
  "Reduced operational bottlenecks",
  "Better system interoperability",
  "Higher delivery confidence for internal teams",
  "Scalable foundation for future automation",
];

const deliverables = [
  "Technical consulting and architecture",
  "Custom system and workflow development",
  "Integrations with CRM, ERP, and internal tooling",
  "Security baseline, QA, and documentation",
];

const serviceSchema = buildServiceSchema({
  name: "Custom software development services",
  description:
    "Tailored software and integration delivery aligned to business operations and growth plans.",
  url: pageSEO.customSoftware.url,
  serviceType: "Custom software development",
});

export default function CustomSoftwareDevelopment() {
  return (
    <div className="inner-page">
      <SEO {...pageSEO.customSoftware} schema={[serviceSchema]} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Custom Software Development</p>
            <h1>Tailored software systems for operational scale.</h1>
            <p className="page-intro">
              We design and build custom software aligned to how your business
              actually works, not generic off-the-shelf assumptions.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container tile-grid tile-grid-2">
          <article className="tile-card tile-card-plain" data-reveal>
            <div className="tile-content">
              <h3>Typical outcomes</h3>
              <ul className="mini-list" role="list">
                {outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
          <article className="tile-card tile-card-plain" data-reveal>
            <div className="tile-content">
              <h3>Engagement scope</h3>
              <ul className="mini-list" role="list">
                {deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container" data-reveal>
          <div className="cta-band">
            <h2>Need custom software mapped to your operations?</h2>
            <p>
              We can scope the right architecture and phased roadmap to deliver
              value early and scale safely.
            </p>
            <div className="hero-cta-row">
              <Link to="/contacts" className="btn btn-primary">
                Book strategy call
              </Link>
              <Link to="/pricing" className="btn btn-secondary">
                View packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

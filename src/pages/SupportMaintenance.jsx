import React from "react";
import { Link } from "react-router-dom";
import SEO, { buildServiceSchema, pageSEO } from "../components/SEO";

const outcomes = [
  "Lower technical risk after launch",
  "Faster fixes and proactive improvements",
  "More stable performance under growth",
  "Continuous optimization without rebuilding",
];

const deliverables = [
  "Routine maintenance and patching",
  "Performance and reliability monitoring",
  "SEO and UX improvement backlog",
  "Monthly reporting and roadmap planning",
];

const serviceSchema = buildServiceSchema({
  name: "Support and maintenance services",
  description:
    "Ongoing website and software support retainers covering reliability, updates, and optimization.",
  url: pageSEO.supportMaintenance.url,
  serviceType: "Website and software support",
});

export default function SupportMaintenance() {
  return (
    <div className="inner-page">
      <SEO {...pageSEO.supportMaintenance} schema={[serviceSchema]} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Support and Maintenance</p>
            <h1>Ongoing support that protects and improves your platform.</h1>
            <p className="page-intro">
              We provide retained support for websites and software so your team
              can move faster with fewer technical surprises.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container tile-grid tile-grid-2">
          <article className="tile-card tile-card-plain" data-reveal>
            <div className="tile-content">
              <h3>Business outcomes</h3>
              <ul className="mini-list" role="list">
                {outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
          <article className="tile-card tile-card-plain" data-reveal>
            <div className="tile-content">
              <h3>Retainer scope</h3>
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
            <h2>Need dependable post-launch support?</h2>
            <p>
              We can define a support model that matches your growth stage and
              internal team capacity.
            </p>
            <div className="hero-cta-row">
              <Link to="/contacts" className="btn btn-primary">
                Book strategy call
              </Link>
              <Link to="/pricing" className="btn btn-secondary">
                View retainer options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

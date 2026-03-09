import React from "react";
import { Link } from "react-router-dom";
import SEO, { buildServiceSchema, pageSEO } from "../components/SEO";

const outcomes = [
  "Faster technical decision-making",
  "Lower delivery risk before build starts",
  "Clearer architecture and tooling choices",
  "Improved alignment between business and engineering teams",
];

const deliverables = [
  "Technical audits and architecture reviews",
  "Platform and stack recommendations",
  "Delivery roadmap and milestone planning",
  "Integration and scalability advisory",
];

const serviceSchema = buildServiceSchema({
  name: "Technical consulting services",
  description:
    "Architecture and delivery advisory for web and software projects before major implementation decisions.",
  url: pageSEO.technicalConsulting.url,
  serviceType: "Technical consulting",
});

export default function TechnicalConsulting() {
  return (
    <div className="inner-page">
      <SEO {...pageSEO.technicalConsulting} schema={[serviceSchema]} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Technical Consulting</p>
            <h1>Strategic technical guidance for better delivery decisions.</h1>
            <p className="page-intro">
              We help teams evaluate architecture, scope, and implementation
              trade-offs before costly build commitments are made.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container tile-grid tile-grid-2">
          <article className="tile-card tile-card-plain" data-reveal>
            <div className="tile-content">
              <h3>Where consulting adds value</h3>
              <ul className="mini-list" role="list">
                {outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
          <article className="tile-card tile-card-plain" data-reveal>
            <div className="tile-content">
              <h3>Typical engagement outputs</h3>
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
            <h2>Need technical clarity before committing budget?</h2>
            <p>
              We can run a focused advisory engagement to define the right
              architecture and delivery path for your goals.
            </p>
            <div className="hero-cta-row">
              <Link to="/contacts" className="btn btn-primary">
                Book strategy call
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

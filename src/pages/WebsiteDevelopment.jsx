import React from "react";
import { Link } from "react-router-dom";
import SEO, { buildServiceSchema, pageSEO } from "../components/SEO";

const outcomes = [
  "Stronger market positioning and trust",
  "Higher conversion quality from existing traffic",
  "Scalable page systems for marketing teams",
  "Improved performance and technical SEO baseline",
];

const deliverables = [
  "Messaging and information architecture",
  "Custom UX/UI design system",
  "Responsive development and CMS setup",
  "Analytics and conversion tracking implementation",
];

const serviceSchema = buildServiceSchema({
  name: "Website development services",
  description:
    "Conversion-focused custom website design and development for global teams.",
  url: pageSEO.websiteDevelopment.url,
  serviceType: "Custom website design and development",
});

export default function WebsiteDevelopment() {
  return (
    <div className="inner-page">
      <SEO {...pageSEO.websiteDevelopment} schema={[serviceSchema]} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Website Development</p>
            <h1>High-converting websites engineered for growth.</h1>
            <p className="page-intro">
              We design and develop premium websites that clarify your offer,
              strengthen trust, and convert the right audience.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container tile-grid tile-grid-2">
          <article className="tile-card tile-card-plain" data-reveal>
            <div className="tile-content">
              <h3>What you gain</h3>
              <ul className="mini-list" role="list">
                {outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
          <article className="tile-card tile-card-plain" data-reveal>
            <div className="tile-content">
              <h3>Typical delivery scope</h3>
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
            <h2>Need a website that performs commercially, not just visually?</h2>
            <p>
              We can map your website roadmap around conversion goals, delivery
              constraints, and long-term maintainability.
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

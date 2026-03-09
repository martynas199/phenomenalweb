import React from "react";
import { Link } from "react-router-dom";
import SEO, { buildServiceSchema, pageSEO } from "../components/SEO";

const outcomes = [
  "Stronger organic visibility for service and product pages",
  "Higher-quality inbound traffic",
  "Improved conversion from existing traffic",
  "Better technical performance and crawl efficiency",
];

const deliverables = [
  "Technical SEO audit and implementation",
  "Service-page keyword and content structure mapping",
  "Core Web Vitals and performance optimization",
  "Conversion-focused growth iteration roadmap",
];

const serviceSchema = buildServiceSchema({
  name: "SEO and growth services",
  description:
    "Technical SEO and conversion optimization services for higher-quality traffic and lead growth.",
  url: pageSEO.seoGrowth.url,
  serviceType: "Technical SEO and digital growth",
});

export default function SeoGrowth() {
  return (
    <div className="inner-page">
      <SEO {...pageSEO.seoGrowth} schema={[serviceSchema]} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">SEO and Growth</p>
            <h1>Search visibility and conversion growth, aligned.</h1>
            <p className="page-intro">
              We combine technical SEO, content structure, and UX improvements
              to improve both traffic quality and commercial performance.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container tile-grid tile-grid-2">
          <article className="tile-card tile-card-plain" data-reveal>
            <div className="tile-content">
              <h3>What improves</h3>
              <ul className="mini-list" role="list">
                {outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
          <article className="tile-card tile-card-plain" data-reveal>
            <div className="tile-content">
              <h3>Typical scope</h3>
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
            <h2>Need a practical SEO and conversion roadmap?</h2>
            <p>
              We can prioritize high-impact technical and content improvements
              based on your goals and current platform state.
            </p>
            <div className="hero-cta-row">
              <Link to="/contacts" className="btn btn-primary">
                Book strategy call
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore full services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

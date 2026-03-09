import React from "react";
import { Link } from "react-router-dom";
import SEO, { buildServiceSchema, pageSEO } from "../components/SEO";

const outcomes = [
  "Clearer user journeys and lower friction",
  "Higher conversion confidence across key pages",
  "Consistent interface quality across touchpoints",
  "Design systems that scale with your roadmap",
];

const deliverables = [
  "UX research and journey mapping",
  "Wireframes and conversion architecture",
  "High-fidelity UI and component design",
  "Design system documentation for dev handoff",
];

const serviceSchema = buildServiceSchema({
  name: "UI UX design services",
  description:
    "Conversion-focused UX strategy and UI design systems for websites and software products.",
  url: pageSEO.uiuxDesign.url,
  serviceType: "UI and UX design",
});

export default function UiUxDesign() {
  return (
    <div className="inner-page">
      <SEO {...pageSEO.uiuxDesign} schema={[serviceSchema]} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">UI/UX Design</p>
            <h1>Experience design that improves trust and conversion.</h1>
            <p className="page-intro">
              We design digital experiences that balance brand quality,
              usability, and business outcomes across websites and software
              products.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container tile-grid tile-grid-2">
          <article className="tile-card tile-card-plain" data-reveal>
            <div className="tile-content">
              <h3>Outcome focus</h3>
              <ul className="mini-list" role="list">
                {outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
          <article className="tile-card tile-card-plain" data-reveal>
            <div className="tile-content">
              <h3>Design scope</h3>
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
            <h2>Need a stronger UX foundation before development?</h2>
            <p>
              We can define your user journeys and interface system so delivery
              decisions stay consistent and commercially focused.
            </p>
            <div className="hero-cta-row">
              <Link to="/contacts" className="btn btn-primary">
                Book strategy call
              </Link>
              <Link to="/process" className="btn btn-secondary">
                See process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

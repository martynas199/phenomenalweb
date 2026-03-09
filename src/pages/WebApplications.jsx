import React from "react";
import { Link } from "react-router-dom";
import SEO, { buildServiceSchema, pageSEO } from "../components/SEO";

const outcomes = [
  "Faster launch cycles for digital products",
  "Clear product UX for adoption and retention",
  "Scalable architecture for future features",
  "Reduced rework through strong discovery",
];

const deliverables = [
  "Product discovery and scope planning",
  "Web app UX/UI design",
  "Frontend and backend engineering",
  "QA, release, and post-launch improvements",
];

const serviceSchema = buildServiceSchema({
  name: "Web application development services",
  description:
    "Product-grade web application design and development for scalable digital platforms.",
  url: pageSEO.webApplications.url,
  serviceType: "Web application development",
});

export default function WebApplications() {
  return (
    <div className="inner-page">
      <SEO {...pageSEO.webApplications} schema={[serviceSchema]} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Web Applications</p>
            <h1>Product-grade web apps for teams building at speed.</h1>
            <p className="page-intro">
              We help startups and established teams design and build web
              applications that balance usability, reliability, and scale.
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
              <h3>Delivery components</h3>
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
            <h2>Planning a new web application or MVP?</h2>
            <p>
              We can help define scope, architecture, and release priorities so
              your team launches with confidence.
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

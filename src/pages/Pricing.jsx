import React from "react";
import { Link } from "react-router-dom";
import SEO, { pageSEO } from "../components/SEO";

const packages = [
  {
    name: "Starter Website",
    range: "From 6,000",
    fit: "Early-stage teams needing a credible launch platform",
    includes: [
      "Positioning and page strategy workshop",
      "Custom UX/UI for core marketing pages",
      "CMS implementation and analytics baseline",
      "Launch support and handover",
    ],
  },
  {
    name: "Growth Website",
    range: "From 12,000",
    fit: "SMEs focused on conversion and inbound quality",
    includes: [
      "Conversion-first service architecture",
      "Advanced UX/UI and interaction patterns",
      "CRM and tracking integration",
      "Technical SEO and performance baseline",
    ],
  },
  {
    name: "Web App MVP",
    range: "From 20,000",
    fit: "Startups and product teams validating a digital service",
    includes: [
      "Discovery and scope definition",
      "UX/UI and MVP engineering",
      "QA and release management",
      "Post-launch iteration plan",
    ],
  },
  {
    name: "Custom Software Delivery",
    range: "From 35,000",
    fit: "Businesses solving operational complexity",
    includes: [
      "Technical consulting and architecture",
      "Custom build and integration delivery",
      "Security and role-based access model",
      "Documentation and team onboarding",
    ],
  },
  {
    name: "Growth and Support Retainer",
    range: "From 2,000 / month",
    fit: "Teams needing continuous optimization and technical reliability",
    includes: [
      "Ongoing maintenance and updates",
      "SEO and conversion improvement backlog",
      "Performance and reliability monitoring",
      "Monthly reporting and roadmap planning",
    ],
  },
];

const pricingNotes = [
  {
    title: "Scope-first pricing",
    text: "Every estimate is mapped to goals, complexity, and delivery speed so investment aligns with outcomes.",
  },
  {
    title: "Phased engagement options",
    text: "Where needed, we structure delivery in phases to reduce risk and improve budget predictability.",
  },
  {
    title: "Global remote model",
    text: "Delivery can run across regions and time zones without changing quality or accountability.",
  },
];

export default function Pricing() {
  return (
    <div className="inner-page">
      <SEO {...pageSEO.pricing} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Pricing and Packages</p>
            <h1>Clear packages for faster decisions and stronger fit.</h1>
            <p className="page-intro">
              Choose a package as a starting point, then we refine scope based
              on your goals, complexity, and timeline.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tile-grid tile-grid-3">
            {packages.map((pack) => (
              <article className="tile-card tile-card-plain" key={pack.name} data-reveal>
                <div className="tile-content">
                  <p className="detail-meta">{pack.range}</p>
                  <h3>{pack.name}</h3>
                  <p>{pack.fit}</p>
                  <ul className="mini-list" role="list">
                    {pack.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">How Pricing Works</p>
            <h2>Commercial clarity before delivery starts.</h2>
          </div>
          <div className="capability-grid">
            {pricingNotes.map((item) => (
              <article className="capability-card" key={item.title} data-reveal>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" data-reveal>
          <div className="cta-band">
            <h2>Need a tailored estimate for your roadmap?</h2>
            <p>
              We can review your objectives and return a practical proposal with
              phased options, timeline guidance, and delivery priorities.
            </p>
            <div className="hero-cta-row">
              <Link to="/contacts" className="btn btn-primary">
                Book strategy call
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

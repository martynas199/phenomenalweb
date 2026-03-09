import React from "react";
import { Link } from "react-router-dom";
import SEO, { pageSEO } from "../components/SEO";

const pillars = [
  {
    title: "Remote-first operating model",
    text: "Delivery is designed for distributed teams, with structured rituals that keep progress visible and decisions fast.",
  },
  {
    title: "Timezone-aware collaboration",
    text: "We schedule critical sessions around your stakeholders and maintain async communication to protect momentum.",
  },
  {
    title: "Single source of truth",
    text: "Scope, milestones, ownership, and active decisions are documented clearly for everyone involved.",
  },
  {
    title: "Engineering-grade quality controls",
    text: "QA, performance, accessibility, and security checks are embedded into the delivery process, not added later.",
  },
];

const tooling = [
  "Structured weekly delivery updates",
  "Recorded walkthroughs for async stakeholders",
  "Transparent issue and backlog tracking",
  "Shared documentation and decision logs",
  "Milestone-based release communication",
  "Post-launch support channels",
];

export default function GlobalDelivery() {
  return (
    <div className="inner-page">
      <SEO {...pageSEO.globalDelivery} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">How We Work Globally</p>
            <h1>Built for international collaboration and dependable execution.</h1>
            <p className="page-intro">
              Phenomenal Web operates as a global digital partner with a
              delivery model that supports startups, SMEs, and established teams
              across regions and time zones.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="capability-grid">
            {pillars.map((pillar) => (
              <article className="capability-card" key={pillar.title} data-reveal>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Collaboration Infrastructure</p>
            <h2>Predictable communication and delivery governance.</h2>
          </div>
          <div className="tile-card tile-card-plain" data-reveal>
            <div className="tile-content">
              <ul className="mini-list" role="list">
                {tooling.map((item) => (
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
            <h2>Need a partner your global team can rely on?</h2>
            <p>
              Book a strategy call and we will map the right collaboration model
              and delivery plan for your organization.
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


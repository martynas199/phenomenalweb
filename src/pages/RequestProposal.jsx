import React from "react";
import { Link } from "react-router-dom";
import SEO, { pageSEO } from "../components/SEO";

const checklist = [
  "Business goals and what success looks like",
  "Current platform or website constraints",
  "Project scope priorities and must-haves",
  "Integrations needed (CRM, booking, payments, APIs)",
  "Target launch window and decision timeline",
  "Budget range for phase one delivery",
];

const outcomes = [
  {
    title: "Proposal with practical scope",
    text: "We focus on what should be built first, what can be phased, and where risk needs mitigation.",
  },
  {
    title: "Commercially grounded timeline",
    text: "Your estimate includes milestones and delivery assumptions so planning is realistic.",
  },
  {
    title: "Clear next-step path",
    text: "You get recommended package fit, execution model, and a straightforward start process.",
  },
];

export default function RequestProposal() {
  return (
    <div className="inner-page">
      <SEO {...pageSEO.requestProposal} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Request Proposal</p>
            <h1>Get a practical proposal for your website or software project.</h1>
            <p className="page-intro">
              Share your scope and priorities, and we will return a clear
              recommendation covering approach, phases, and timeline guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container tile-grid tile-grid-2">
          <article className="tile-card tile-card-plain" data-reveal>
            <div className="tile-content">
              <h3>What to include in your brief</h3>
              <ul className="mini-list" role="list">
                {checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="tile-card tile-card-plain" data-reveal>
            <div className="tile-content">
              <h3>Fastest way to send your scope</h3>
              <p>
                Use WhatsApp for a quick first conversation or send a full brief
                by email if you already have detailed requirements.
              </p>
              <div className="hero-cta-row">
                <a
                  className="btn btn-primary"
                  href="https://wa.me/447450361893?text=Hi%20Phenomenal%20Web%2C%20I%20want%20to%20request%20a%20proposal%20for%20my%20project."
                  target="_blank"
                  rel="noreferrer"
                  data-cta="proposal_whatsapp"
                  aria-label="Start WhatsApp proposal conversation"
                >
                  Start on WhatsApp
                </a>
                <a
                  className="btn btn-secondary"
                  href="mailto:hello@phenomenalweb.com?subject=Project%20Proposal%20Request"
                >
                  Send proposal brief by email
                </a>
              </div>
              <p className="form-disclaimer">
                Typical response window: within one business day.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="capability-grid">
            {outcomes.map((item) => (
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
            <h2>Need help defining scope before requesting a proposal?</h2>
            <p>
              Book a strategy call first and we will help shape requirements,
              priorities, and the right delivery model.
            </p>
            <div className="hero-cta-row">
              <Link to="/process" className="btn btn-secondary">
                View process
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

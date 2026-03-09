import React from "react";
import { Link } from "react-router-dom";
import SEO, { pageSEO } from "../components/SEO";

const phases = [
  {
    name: "Discover",
    detail:
      "Business goals, user needs, constraints, and technical context are aligned before scope is drafted.",
    outputs: [
      "Commercial objective map",
      "Current-state audit",
      "Risk and dependency log",
      "Decision-ready brief",
    ],
  },
  {
    name: "Define",
    detail:
      "We convert strategy into a practical delivery plan with clear scope, timeline, and ownership.",
    outputs: [
      "Delivery roadmap",
      "Architecture and platform decisions",
      "Milestone and release plan",
      "Success metrics and tracking model",
    ],
  },
  {
    name: "Design",
    detail:
      "UX and interface systems are built around conversion paths, usability, and brand trust.",
    outputs: [
      "User journeys and wireframes",
      "UI direction and component system",
      "Prototype and review cycles",
      "Content and page hierarchy",
    ],
  },
  {
    name: "Develop",
    detail:
      "Engineering implementation with QA, performance optimization, and accessibility standards baked in.",
    outputs: [
      "Production-ready codebase",
      "Integration and automation setup",
      "QA and pre-launch validation",
      "Documentation and handover",
    ],
  },
  {
    name: "Grow",
    detail:
      "After launch we optimize against real performance data and keep your platform improving.",
    outputs: [
      "Post-launch support plan",
      "CRO and SEO iteration backlog",
      "Performance and reliability monitoring",
      "Monthly improvement reporting",
    ],
  },
];

const collaborationModel = [
  {
    title: "Remote-first delivery",
    text: "Structured async updates with focused live sessions keep momentum high across locations.",
  },
  {
    title: "Timezone-aware planning",
    text: "Project rituals are scheduled around stakeholder availability, not one local market.",
  },
  {
    title: "Transparent communication",
    text: "Weekly progress, active decisions, and blockers are visible to your team at all times.",
  },
  {
    title: "Single accountable team",
    text: "Strategy, UX/UI, development, and growth support remain aligned through one delivery model.",
  },
];

export default function Process() {
  return (
    <div className="inner-page">
      <SEO {...pageSEO.process} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Process</p>
            <h1>A transparent delivery model built for global teams.</h1>
            <p className="page-intro">
              Our process is designed to reduce risk, accelerate decisions, and
              keep delivery aligned to measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ol className="process-track" role="list">
            {phases.map((phase, index) => (
              <li className="process-step" key={phase.name} data-reveal>
                <span className="step-number">0{index + 1}</span>
                <h3>{phase.name}</h3>
                <p>{phase.detail}</p>
                <ul className="mini-list" role="list">
                  {phase.outputs.map((output) => (
                    <li key={output}>{output}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">How We Work</p>
            <h2>Global collaboration without delivery friction.</h2>
          </div>

          <div className="capability-grid">
            {collaborationModel.map((item) => (
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
            <h2>Need a delivery roadmap for your next project?</h2>
            <p>
              Book a strategy call and we will define the right scope, timeline,
              and execution model for your team.
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

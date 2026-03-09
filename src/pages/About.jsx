import React from "react";
import { Link } from "react-router-dom";
import SEO, { pageSEO } from "../components/SEO";

const principles = [
  {
    title: "Outcomes before output",
    text: "We prioritize measurable commercial impact over decorative deliverables.",
  },
  {
    title: "Design and engineering aligned",
    text: "UX quality and technical architecture are developed together from day one.",
  },
  {
    title: "Transparent execution",
    text: "Scope, milestones, and decisions stay visible throughout delivery.",
  },
  {
    title: "Long-term partnership mindset",
    text: "We support clients beyond launch with optimization and technical evolution.",
  },
];

const capabilities = [
  "Custom website design and development",
  "Web application development",
  "Custom software development",
  "UI/UX design",
  "SEO and digital marketing support",
  "Technical consulting",
  "Ongoing support and maintenance",
];

export default function About() {
  return (
    <div className="inner-page">
      <SEO {...pageSEO.about} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">About</p>
            <h1>A global digital partner built for serious growth goals.</h1>
            <p className="page-intro">
              Phenomenal Web helps startups, SMEs, and established companies
              worldwide design, build, and optimize digital platforms that
              improve conversion, scale operations, and support long-term growth.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split-block" data-reveal>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=72"
              alt="Global digital team collaborating"
              loading="lazy"
              decoding="async"
              width="1200"
              height="820"
            />
            <div className="split-content">
              <h3>Why clients choose us</h3>
              <p>
                We combine strategy, UX/UI, engineering, and growth support in
                one accountable model. That means fewer handoff failures,
                clearer delivery governance, and faster path to business impact.
              </p>
              <ul role="list">
                {capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Operating Principles</p>
            <h2>How we deliver with consistency and trust.</h2>
          </div>
          <div className="capability-grid">
            {principles.map((item) => (
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
            <h2>Looking for a long-term digital delivery partner?</h2>
            <p>
              Book a strategy call and we will map a clear scope, timeline, and
              delivery approach for your next initiative.
            </p>
            <div className="hero-cta-row">
              <Link to="/contacts" className="btn btn-primary">
                Book strategy call
              </Link>
              <Link to="/case-study" className="btn btn-secondary">
                View case studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



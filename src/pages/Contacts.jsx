import React from "react";
import { Link } from "react-router-dom";
import SEO, { pageSEO } from "../components/SEO";

const channels = [
  {
    title: "WhatsApp",
    detail: "+44 7450 361893",
    note: "Fastest route for first contact and project planning.",
  },
  {
    title: "Email",
    detail: "hello@phenomenalweb.com",
    note: "Best for detailed briefs and procurement conversations.",
  },
  {
    title: "Delivery model",
    detail: "Remote-first global collaboration",
    note: "Structured communication across regions and time zones.",
  },
];

const nextSteps = [
  "Share your project goals and current blockers",
  "Get practical guidance on scope and delivery model",
  "Receive recommended next steps within one business day",
];

export default function Contacts() {

  return (
    <div className="inner-page">
      <SEO {...pageSEO.contacts} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Contact</p>
            <h1>Tell us what you need to build next.</h1>
            <p className="page-intro">
              Share your goals, timeline, and constraints. We will recommend a
              practical scope and delivery approach within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <article className="form-surface" data-reveal>
            <h2>Start your conversation on WhatsApp</h2>
            <p>
              For the fastest response, message us on WhatsApp with your goals,
              timeline, and project type.
            </p>
            <div className="hero-cta-row">
              <a
                className="btn btn-primary"
                href="https://wa.me/447450361893?text=Hi%20Phenomenal%20Web%2C%20I%20want%20to%20discuss%20a%20new%20project."
                target="_blank"
                rel="noreferrer"
                data-cta="contact_whatsapp"
                aria-label="Chat with Phenomenal Web on WhatsApp"
              >
                Chat on WhatsApp
              </a>
              <a className="btn btn-secondary" href="mailto:hello@phenomenalweb.com">
                Email us instead
              </a>
            </div>
            <ul className="mini-list" role="list">
              {nextSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <aside className="contact-side" data-reveal>
            <div className="contact-side-card" id="proposal">
              <h3>Need a full proposal?</h3>
              <p>
                Use our proposal page for a structured checklist before sharing
                your scope by WhatsApp or email.
              </p>
              <Link className="btn btn-secondary" to="/request-proposal">
                Open proposal guide
              </Link>
            </div>

            <div className="channel-list">
              {channels.map((channel) => (
                <article className="channel-card" key={channel.title}>
                  <h4>{channel.title}</h4>
                  <p className="channel-detail">{channel.detail}</p>
                  <p>{channel.note}</p>
                </article>
              ))}
            </div>

            <div className="contact-side-card">
              <h3>How we work globally</h3>
              <ul className="mini-list" role="list">
                <li>Remote-first communication and delivery rituals</li>
                <li>Timezone-aware scheduling for stakeholder meetings</li>
                <li>Weekly progress visibility and clear action tracking</li>
                <li>Shared documentation for alignment across teams</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container" data-reveal>
          <div className="cta-band">
            <h2>Want to review services first?</h2>
            <p>
              Explore our delivery scope across websites, web applications,
              custom software, SEO, and ongoing support.
            </p>
            <div className="hero-cta-row">
              <Link to="/services" className="btn btn-secondary">
                Explore services
              </Link>
              <Link to="/global-delivery" className="btn btn-secondary">
                How we work globally
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

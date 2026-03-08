import React from "react";
import { Link } from "react-router-dom";
import SEO, { pageSEO } from "../components/SEO";

const services = [
  {
    title: "Brochure websites",
    summary:
      "Strategic marketing websites that explain your offer clearly and convert qualified interest.",
    deliverables: [
      "Messaging and page hierarchy",
      "Responsive design system",
      "CMS setup and editor training",
      "Analytics and conversion tracking",
    ],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8b6a40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "E-commerce experiences",
    summary:
      "Conversion-first storefronts with stronger product discovery, checkout flow, and lifecycle growth.",
    deliverables: [
      "Product architecture and UX",
      "Checkout optimization",
      "Platform integrations",
      "Order and reporting setup",
    ],
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Custom software",
    summary:
      "Business-critical tools built around your operations, team workflows, and customer journeys.",
    deliverables: [
      "Discovery and technical scope",
      "Frontend and backend delivery",
      "Role-based access and security",
      "Documentation and handover",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Support and maintenance",
    summary:
      "Ongoing support to keep your platform reliable, secure, and improving month by month.",
    deliverables: [
      "Priority support response",
      "Platform updates and fixes",
      "Performance monitoring",
      "Continuous improvement backlog",
    ],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "SEO and performance",
    summary:
      "Technical and on-page improvements that increase visibility and make every visit faster.",
    deliverables: [
      "Technical SEO baseline",
      "Core Web Vitals tuning",
      "Schema and crawl setup",
      "Content structure guidance",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Conversion optimization",
    summary:
      "Hypothesis-led testing and funnel improvements focused on measurable revenue outcomes.",
    deliverables: [
      "Behavior analysis",
      "Experiment roadmap",
      "Landing page iterations",
      "Reporting and learnings",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
];

const process = [
  {
    title: "Discover",
    text: "Clarify commercial goals, audience, and technical constraints.",
  },
  {
    title: "Scope",
    text: "Define priorities, timelines, and delivery phases with no ambiguity.",
  },
  {
    title: "Design",
    text: "Create page and interface systems that support buyer decisions.",
  },
  {
    title: "Build",
    text: "Develop robust, scalable solutions with QA at every milestone.",
  },
  {
    title: "Improve",
    text: "Review data post-launch and improve what matters most.",
  },
];

export default function Services() {
  return (
    <div className="inner-page">
      <SEO {...pageSEO.services} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Services</p>
            <h1>Digital delivery tailored to your growth goals.</h1>
            <p className="page-intro">
              We combine strategy, design, development, and ongoing support so
              your digital stack performs as one connected system.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tile-grid tile-grid-3">
            {services.map((service) => (
              <article key={service.title} className="tile-card" data-reveal>
                <img
                  src={service.image}
                  alt={`${service.title} service visual`}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="820"
                />
                <div className="tile-content">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <ul className="mini-list" role="list">
                    {service.deliverables.map((item) => (
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
            <p className="eyebrow">How We Work</p>
            <h2>A clear process from idea to measurable delivery.</h2>
          </div>

          <ol className="process-track" role="list">
            {process.map((step, index) => (
              <li className="process-step" key={step.title} data-reveal>
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container" data-reveal>
          <div className="cta-band">
            <h2>Need help choosing the right service mix?</h2>
            <p>
              We can review your current setup and recommend the most practical
              scope for speed, impact, and budget.
            </p>
            <Link to="/contacts" className="btn btn-primary">
              Book a strategy call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

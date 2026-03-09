import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO, { pageSEO } from "../components/SEO";

const studies = [
  {
    id: "services-rebrand",
    label: "Professional services",
    title: "Consultancy repositioning and lead system rebuild",
    client: "Northforge Advisory",
    timeline: "10 weeks",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=72",
    challenge:
      "The previous website looked dated, service pages were difficult to navigate, and inbound leads were poorly qualified.",
    solution:
      "We rebuilt the entire information architecture, introduced clearer service pathways, and implemented conversion-focused page templates with improved trust signals.",
    results: [
      { metric: "Qualified enquiries", value: "+68%" },
      { metric: "Average time on service pages", value: "+42%" },
      { metric: "Contact form completion", value: "+31%" },
      { metric: "Page load time", value: "1.9s" },
    ],
    stack: ["React", "Headless CMS", "GA4", "Search Console"],
    quote:
      "The new site made our offer instantly clearer and lead quality improved within the first month.",
    author: "Commercial Director, Northforge Advisory",
  },
  {
    id: "health-platform",
    label: "Healthcare",
    title: "Regional healthcare platform modernization",
    client: "Aster Health Group",
    timeline: "14 weeks",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=72",
    challenge:
      "Patients struggled to locate the right services and internal teams found content updates slow and error-prone.",
    solution:
      "We designed a service-led navigation model, rebuilt booking journeys for mobile first, and created a reusable content framework for internal teams.",
    results: [
      { metric: "Appointment bookings", value: "+54%" },
      { metric: "Mobile completion rate", value: "+37%" },
      { metric: "Support call reduction", value: "-29%" },
      { metric: "Content update speed", value: "3x" },
    ],
    stack: ["Next.js", "Contentful", "Accessibility QA", "HubSpot"],
    quote:
      "The patient journey is now significantly easier and our content team has full control.",
    author: "Digital Lead, Aster Health Group",
  },
  {
    id: "commerce-growth",
    label: "E-commerce",
    title: "Storefront optimization for growth-stage retail",
    client: "Westbridge Retail",
    timeline: "12 weeks",
    image:
      "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=1200&q=72",
    challenge:
      "Acquisition spend was rising but conversion rates and average order value were stagnating.",
    solution:
      "We optimized category structure, product page hierarchy, and checkout UX, then introduced test-ready templates for continuous improvement.",
    results: [
      { metric: "Revenue per visitor", value: "+26%" },
      { metric: "Checkout completion", value: "+22%" },
      { metric: "Average order value", value: "+15%" },
      { metric: "Return customer rate", value: "+19%" },
    ],
    stack: ["Shopify", "Klaviyo", "GA4", "CRO Experiments"],
    quote:
      "They helped us focus on what actually moves revenue, not vanity metrics.",
    author: "Head of E-commerce, Westbridge Retail",
  },
];

export default function CaseStudy() {
  const [activeId, setActiveId] = useState(studies[0].id);

  const activeStudy = useMemo(
    () => studies.find((study) => study.id === activeId) ?? studies[0],
    [activeId]
  );

  return (
    <div className="inner-page">
      <SEO {...pageSEO.caseStudy} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Case Studies</p>
            <h1>Proof of delivery across strategy, design, and engineering.</h1>
            <p className="page-intro">
              A snapshot of engagements where focused digital decisions drove
              measurable business outcomes.
            </p>
          </div>

          <div className="pill-row" data-reveal>
            {studies.map((study) => (
              <button
                key={study.id}
                type="button"
                onClick={() => setActiveId(study.id)}
                className={`pill-btn ${activeId === study.id ? "is-active" : ""}`}
              >
                {study.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="detail-card" data-reveal>
            <img
              src={activeStudy.image}
              alt={`${activeStudy.title} case study visual`}
              loading="lazy"
              decoding="async"
              width="1400"
              height="900"
            />

            <div className="detail-content">
              <p className="detail-meta">
                {activeStudy.client} | {activeStudy.timeline}
              </p>
              <h2>{activeStudy.title}</h2>

              <div className="detail-split">
                <div>
                  <h3>Challenge</h3>
                  <p>{activeStudy.challenge}</p>
                </div>
                <div>
                  <h3>Solution</h3>
                  <p>{activeStudy.solution}</p>
                </div>
              </div>

              <div className="metric-grid">
                {activeStudy.results.map((result) => (
                  <article className="metric-item" key={result.metric}>
                    <strong>{result.value}</strong>
                    <span>{result.metric}</span>
                  </article>
                ))}
              </div>

              <div className="stack-row" role="list">
                {activeStudy.stack.map((item) => (
                  <span className="stack-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <blockquote className="study-quote">
                <p>"{activeStudy.quote}"</p>
                <cite>{activeStudy.author}</cite>
              </blockquote>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container" data-reveal>
          <div className="cta-band">
            <h2>Want similar outcomes for your team?</h2>
            <p>
              Share your commercial goals and we will map the right digital
              roadmap with realistic scope and timing.
            </p>
            <Link to="/contacts" className="btn btn-primary">
              Book strategy call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


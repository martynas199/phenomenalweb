import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const pageTypes = [
  {
    title: "Landing pages",
    summary:
      "Campaign and offer pages designed around one clear conversion objective.",
    points: [
      "Message-first layout",
      "Conversion-focused CTA structure",
      "A/B testing ready",
      "Analytics instrumentation",
    ],
  },
  {
    title: "Service pages",
    summary:
      "Template-driven service pages that scale without losing clarity or brand consistency.",
    points: [
      "Reusable content blocks",
      "Trust and proof components",
      "Clear internal linking",
      "SEO structured content",
    ],
  },
  {
    title: "Product pages",
    summary:
      "Detailed product pages that support both discovery and confident buying decisions.",
    points: [
      "Feature-benefit hierarchy",
      "Media and social proof sections",
      "Performance optimized assets",
      "Conversion tracking events",
    ],
  },
  {
    title: "Case study pages",
    summary:
      "Outcome-driven project narratives built to support sales and procurement conversations.",
    points: [
      "Challenge / solution framing",
      "Metrics-led impact sections",
      "Industry-specific context",
      "Strong next-step CTA",
    ],
  },
  {
    title: "Resource and blog pages",
    summary:
      "Content hubs that improve discoverability and build long-term authority.",
    points: [
      "Taxonomy and filtering",
      "Search-friendly structure",
      "Editorial workflows",
      "Lead capture moments",
    ],
  },
  {
    title: "Contact and conversion pages",
    summary:
      "Low-friction forms and qualification flows that reduce drop-off and improve lead quality.",
    points: [
      "Form UX best practices",
      "Progressive disclosure",
      "Validation and error states",
      "CRM-ready handoff",
    ],
  },
];

const standards = [
  "Responsive by default across mobile, tablet, and desktop",
  "Accessibility-conscious markup and interaction patterns",
  "Performance-first component and media decisions",
  "Consistent design language across every page type",
  "SEO technical baseline baked into every template",
  "Editable CMS architecture for internal teams",
];

export default function Pages() {
  return (
    <div className="inner-page">
      <SEO
        title="Pages and Templates | Phenomenal Web"
        description="Structured page systems and templates designed for growth, clarity, and long-term maintainability."
        keywords="website templates, landing page systems, scalable page design"
        url="https://phenomenal-web.vercel.app/pages"
      />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Page Systems</p>
            <h1>Scalable page systems for consistent global delivery.</h1>
            <p className="page-intro">
              We design and build page frameworks that keep brand quality,
              clarity, and conversion performance consistent as you scale.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tile-grid tile-grid-3">
            {pageTypes.map((type) => (
              <article className="tile-card tile-card-plain" key={type.title} data-reveal>
                <div className="tile-content">
                  <h3>{type.title}</h3>
                  <p>{type.summary}</p>
                  <ul className="mini-list" role="list">
                    {type.points.map((point) => (
                      <li key={point}>{point}</li>
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
            <p className="eyebrow">Quality Baseline</p>
            <h2>Every page we ship follows the same standards.</h2>
          </div>

          <div className="capability-grid">
            {standards.map((standard) => (
              <article className="capability-card" key={standard} data-reveal>
                <h3>{standard}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" data-reveal>
          <div className="cta-band">
            <h2>Need a template system your team can maintain?</h2>
            <p>
              We can build your page framework with reusable components and a
              clear editorial workflow from day one.
            </p>
            <Link to="/contacts" className="btn btn-primary">
              Discuss your content system
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

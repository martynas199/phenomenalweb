import React from "react";
import SEO, { pageSEO } from "../components/SEO";

const industries = [
  {
    title: "Professional services",
    challenge:
      "Complex services are hard to explain quickly, so high-value global buyers drop before contacting.",
    outcomes: [
      "Clearer offer architecture",
      "Improved trust and credibility",
      "Higher quality inbound leads",
    ],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=72",
  },
  {
    title: "Healthcare and wellness",
    challenge:
      "Compliance, accessibility, and patient clarity all need to work together without friction.",
    outcomes: [
      "Accessible patient journeys",
      "Structured service navigation",
      "Operationally efficient content",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=72",
  },
  {
    title: "Property and construction",
    challenge:
      "Service lines, project portfolios, and location-specific pages often become hard to maintain.",
    outcomes: [
      "Scalable project templates",
      "Stronger project proof sections",
      "Better international search structure",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=72",
  },
  {
    title: "Retail and e-commerce",
    challenge:
      "High acquisition spend needs stronger conversion and retention to stay profitable.",
    outcomes: [
      "Optimized product journeys",
      "Faster mobile checkout",
      "Improved average order value",
    ],
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=72",
  },
  {
    title: "Technology and SaaS",
    challenge:
      "Buyers need technical confidence and commercial clarity before booking demos.",
    outcomes: [
      "Sharper product messaging",
      "Clear value proposition hierarchy",
      "Improved demo conversion rates",
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=72",
  },
  {
    title: "Logistics and operations",
    challenge:
      "Operational complexity makes platform and reporting design difficult to execute cleanly.",
    outcomes: [
      "Workflow-driven interfaces",
      "Clear operational dashboards",
      "Reduced manual bottlenecks",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=72",
  },
];

const stats = [
  { value: "20+", label: "Industry verticals supported" },
  { value: "300+", label: "Projects delivered" },
  { value: "14+", label: "Years of delivery experience" },
  { value: "95%", label: "Partner retention over 12 months" },
];

export default function Industries() {
  return (
    <div className="inner-page">
      <SEO {...pageSEO.industries} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Industries</p>
            <h1>Industry-ready digital delivery for global teams.</h1>
            <p className="page-intro">
              We adapt strategy, UX, and engineering to sector-specific needs
              while keeping delivery simple and accountable.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tile-grid tile-grid-2">
            {industries.map((industry) => (
              <article className="tile-card" key={industry.title} data-reveal>
                <img
                  src={industry.image}
                  alt={`${industry.title} industry visual`}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="820"
                />
                <div className="tile-content">
                  <h3>{industry.title}</h3>
                  <p>{industry.challenge}</p>
                  <ul className="mini-list" role="list">
                    {industry.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
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
          <div className="page-stat-grid" data-reveal>
            {stats.map((stat) => (
              <article className="hero-meta-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


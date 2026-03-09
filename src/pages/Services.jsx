import React from "react";
import { Link } from "react-router-dom";
import SEO, { pageSEO } from "../components/SEO";

const serviceTracks = [
  {
    title: "Websites and Growth",
    description:
      "Conversion-focused websites, UX optimization, SEO foundations, and digital growth execution.",
    bullets: [
      "Custom website design and development",
      "UI/UX design and conversion architecture",
      "Technical SEO and on-page optimization",
      "Digital marketing alignment and analytics",
    ],
  },
  {
    title: "Product and Software Engineering",
    description:
      "Web applications, custom software systems, integrations, and long-term technical support.",
    bullets: [
      "Web application design and development",
      "Custom software development",
      "API and CRM/system integrations",
      "Support, maintenance, and roadmap delivery",
    ],
  },
];

const services = [
  {
    title: "Website development",
    summary:
      "High-trust websites engineered for clearer positioning, stronger conversion, and long-term scalability.",
    deliverables: [
      "Messaging architecture and page strategy",
      "Responsive UX/UI system",
      "CMS build with editing workflows",
      "Analytics and conversion tracking setup",
    ],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8b6a40?auto=format&fit=crop&w=1000&q=72",
    path: "/website-development",
  },
  {
    title: "Web application development",
    summary:
      "Product-grade web platforms designed for usability, performance, and operational reliability.",
    deliverables: [
      "Product discovery and requirements mapping",
      "Frontend and backend development",
      "Quality assurance and release readiness",
      "Post-launch iteration support",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=72",
    path: "/web-applications",
  },
  {
    title: "Custom software development",
    summary:
      "Tailored software solutions that reduce manual work and connect disconnected business systems.",
    deliverables: [
      "Technical consulting and solution architecture",
      "Integration planning and implementation",
      "Role-based access and security baseline",
      "Documentation and handover",
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=72",
    path: "/custom-software-development",
  },
  {
    title: "UI/UX design",
    summary:
      "Outcome-led design systems that balance visual quality, usability, and commercial intent.",
    deliverables: [
      "User journey mapping",
      "Wireframes and interface design",
      "Design systems and component logic",
      "Prototype validation",
    ],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=72",
    path: "/ui-ux-design",
  },
  {
    title: "SEO and digital marketing",
    summary:
      "Technical and content-led growth support to increase visibility and improve acquisition efficiency.",
    deliverables: [
      "Technical SEO baseline",
      "Content structure and keyword mapping",
      "Performance optimization for search",
      "Growth reporting and iteration",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=72",
    path: "/seo-growth",
  },
  {
    title: "Technical consulting",
    summary:
      "Advisory support for architecture, scope, and implementation planning before critical build decisions.",
    deliverables: [
      "Technical audits and risk assessment",
      "Architecture and stack recommendations",
      "Roadmap and milestone planning",
      "Integration strategy",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=72",
    path: "/technical-consulting",
  },
  {
    title: "Support and maintenance",
    summary:
      "Reliable post-launch support keeping your website and software secure, stable, and continuously improving.",
    deliverables: [
      "Priority support response",
      "Security updates and platform maintenance",
      "Performance monitoring",
      "Delivery roadmap backlog",
    ],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=72",
    path: "/support-maintenance",
  },
];

const packages = [
  {
    name: "Starter Website",
    fit: "Early-stage teams needing a credible launch presence",
    includes: [
      "Strategy session and messaging foundation",
      "Core page design and responsive build",
      "CMS setup and analytics baseline",
      "Launch support",
    ],
  },
  {
    name: "Growth Website",
    fit: "SMEs with traffic and lead quality goals",
    includes: [
      "Conversion-focused UX redesign",
      "Service-page and funnel optimization",
      "CRM and tracking integration",
      "SEO and performance baseline",
    ],
  },
  {
    name: "Web App MVP",
    fit: "Startups validating a product or platform",
    includes: [
      "Discovery and product scope",
      "UX/UI and MVP development",
      "QA and deployment",
      "Post-launch roadmap support",
    ],
  },
  {
    name: "Custom Software Delivery",
    fit: "Businesses with operational complexity",
    includes: [
      "Technical consulting and architecture",
      "Custom feature development",
      "System integrations",
      "Security and documentation",
    ],
  },
  {
    name: "Support Retainer",
    fit: "Teams needing long-term optimization and reliability",
    includes: [
      "Ongoing maintenance and updates",
      "Performance and SEO improvements",
      "Conversion iteration backlog",
      "Monthly reporting and planning",
    ],
  },
];

const process = [
  {
    title: "Discover",
    text: "Clarify goals, constraints, user needs, and commercial priorities.",
  },
  {
    title: "Define",
    text: "Set scope, architecture, timeline, and delivery model with clear ownership.",
  },
  {
    title: "Design",
    text: "Build conversion-focused UX and interface systems aligned to outcomes.",
  },
  {
    title: "Develop",
    text: "Implement robust solutions with QA, performance, and accessibility standards.",
  },
  {
    title: "Optimize",
    text: "Track performance and iterate based on evidence, not assumptions.",
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
            <h1>Global website and software services built around outcomes.</h1>
            <p className="page-intro">
              From conversion-focused websites to custom software platforms, we
              deliver strategy, design, engineering, and growth support in one
              accountable model.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="tile-grid tile-grid-2">
            {serviceTracks.map((track) => (
              <article key={track.title} className="tile-card tile-card-plain" data-reveal>
                <div className="tile-content">
                  <h3>{track.title}</h3>
                  <p>{track.description}</p>
                  <ul className="mini-list" role="list">
                    {track.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Execution Areas</p>
            <h2>Service depth across design, engineering, and growth.</h2>
          </div>

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
                  <Link to={service.path} className="text-link">
                    Explore service page
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="packages">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Packages</p>
            <h2>Clear delivery packages that reduce buying friction.</h2>
            <p>
              Productized options for faster decisions, clearer scope, and
              better-fit engagements.
            </p>
          </div>

          <div className="capability-grid">
            {packages.map((pack) => (
              <article className="capability-card" key={pack.name} data-reveal>
                <h3>{pack.name}</h3>
                <p>{pack.fit}</p>
                <ul className="mini-list" role="list">
                  {pack.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Process</p>
            <h2>A transparent delivery model for global collaboration.</h2>
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

      <section className="section section-soft">
        <div className="container" data-reveal>
          <div className="cta-band">
            <h2>Need help choosing the right package and scope?</h2>
            <p>
              Share your goals and constraints. We will map a practical
              recommendation for delivery model, timeline, and next steps.
            </p>
            <div className="hero-cta-row">
              <Link to="/contacts" className="btn btn-primary">
                Book strategy call
              </Link>
              <Link to="/process" className="btn btn-secondary">
                View process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


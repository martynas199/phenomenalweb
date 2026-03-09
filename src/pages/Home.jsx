import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEO, { pageSEO } from "../components/SEO";
import heroHeaderImage from "../assets/case-studies/hero-optimized.jpg";
import nobleEleganceImage from "../assets/noble-elegance-optimized.jpg";
import eliteBookerImage from "../assets/elite-booker-optimized.jpg";
import justesWebImage from "../assets/justes-web-optimized.jpg";

const stockMedia = {
  headerImage: heroHeaderImage,
  about:
    "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1000&q=72",
  team:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=72",
  website:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=72",
  webApp:
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=72",
  software:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=72",
  uiux:
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=72",
  seo:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=72",
  support:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=72",
};

const heroStats = [
  { value: "Global", label: "Remote delivery for teams worldwide" },
  {
    value: "End-to-end",
    label: "Strategy, UX/UI, engineering, SEO, and support",
  },
  {
    value: "Senior-led",
    label: "Clear ownership from discovery to long-term growth",
  },
];

const momentumItems = [
  "Global remote collaboration",
  "Website and software delivery",
  "Conversion-focused UX",
  "Technical SEO readiness",
  "Performance and accessibility standards",
  "Transparent delivery milestones",
  "Long-term support retainers",
];

const dilemmaCards = [
  {
    title: "Strong traffic, weak conversion",
    text: "Visitors arrive, but enquiry quality and conversion rates do not reflect your growth targets.",
  },
  {
    title: "Outdated platform limiting credibility",
    text: "Your business has evolved, but your current website or product experience signals a smaller operation.",
  },
  {
    title: "Disconnected tools and workflows",
    text: "Marketing, CRM, content, and operations are not aligned, creating friction for your team and your customers.",
  },
];

const serviceLanes = [
  {
    title: "Website development",
    text: "High-performing websites built to improve positioning, trust, and conversion.",
    image: stockMedia.website,
    path: "/website-development",
  },
  {
    title: "Web application development",
    text: "Product and platform builds for teams launching or scaling digital services.",
    image: stockMedia.webApp,
    path: "/web-applications",
  },
  {
    title: "Custom software development",
    text: "Business-specific systems and integrations designed around operational goals.",
    image: stockMedia.software,
    path: "/custom-software-development",
  },
  {
    title: "UI/UX design",
    text: "User experience strategy and interface systems that balance usability and commercial intent.",
    image: stockMedia.uiux,
    path: "/ui-ux-design",
  },
  {
    title: "SEO and digital growth",
    text: "Technical SEO, on-page structure, and growth-focused optimization across key journeys.",
    image: stockMedia.seo,
    path: "/seo-growth",
  },
  {
    title: "Support and maintenance",
    text: "Ongoing improvement, performance tuning, and technical support after launch.",
    image: stockMedia.support,
    path: "/support-maintenance",
  },
];

const processSteps = [
  {
    title: "Discover",
    text: "Align on goals, audience, systems, and the constraints shaping delivery decisions.",
  },
  {
    title: "Strategize",
    text: "Define scope, architecture, messaging priorities, and delivery milestones.",
  },
  {
    title: "Design",
    text: "Create conversion-focused user journeys and premium interface systems.",
  },
  {
    title: "Build",
    text: "Develop robust, scalable solutions with QA, performance, and accessibility built in.",
  },
  {
    title: "Grow",
    text: "Track results, iterate quickly, and support your team with ongoing improvements.",
  },
];

const projectCards = [
  {
    title: "Noble Elegance",
    summary: "Salon booking and e-commerce platform",
    image: nobleEleganceImage,
    url: "https://www.nobleelegance.co.uk",
    badge: "Project 01",
  },
  {
    title: "Elitebooker",
    summary: "Appointment booking system",
    image: eliteBookerImage,
    url: "https://www.elitebooker.co.uk",
    badge: "Project 02",
  },
  {
    title: "Permanent by Juste",
    summary: "Brochure website with booking integration",
    image: justesWebImage,
    url: "https://permanentbyjuste.co.uk",
    badge: "Project 03",
  },
];

const testimonials = [
  {
    quote:
      "Phenomenal Web translated complex requirements into a clear delivery plan and shipped faster than expected.",
    name: "Product Director",
    company: "SaaS Platform, UK",
  },
  {
    quote:
      "They improved both our technical foundation and our conversion flow. The commercial impact was immediate.",
    name: "Head of Growth",
    company: "E-commerce Brand, EU",
  },
  {
    quote:
      "The collaboration was smooth across time zones, and communication stayed clear from week one.",
    name: "Operations Lead",
    company: "B2B Services Group, US",
  },
];

const faqs = [
  {
    question: "Can you work with clients outside the UK?",
    answer:
      "Yes. We are remote-first and collaborate with teams globally using a structured communication and delivery model.",
  },
  {
    question: "Do you provide both websites and custom software?",
    answer:
      "Yes. We deliver conversion-focused websites, web applications, and custom software systems depending on your business needs.",
  },
  {
    question: "How do projects typically start?",
    answer:
      "Most engagements begin with a strategy call followed by discovery, scope definition, timeline planning, and phased delivery.",
  },
  {
    question: "Do you support projects after launch?",
    answer:
      "Yes. We offer ongoing support and maintenance retainers covering updates, optimization, performance, and roadmap improvements.",
  },
];

const clientNames = [
  "SaaS Platforms",
  "Professional Services",
  "Healthcare",
  "E-commerce",
  "Operations",
  "B2B Technology",
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Phenomenal Web",
  url: "https://phenomenal-web.vercel.app/",
  description:
    "Phenomenal Web is a global digital partner delivering websites, web applications, custom software, SEO, and long-term support.",
  areaServed: "Global",
  serviceType: [
    "Website Design and Development",
    "Web Application Development",
    "Custom Software Development",
    "UI UX Design",
    "SEO",
    "Digital Marketing",
    "Technical Consulting",
    "Support and Maintenance",
  ],
};

export default function Home() {
  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }),
    []
  );

  return (
    <div className="home-page home-refresh">
      <Helmet>
        <link rel="preload" as="image" href={stockMedia.headerImage} />
      </Helmet>

      <SEO
        {...pageSEO.home}
        image={stockMedia.headerImage}
        schema={[organizationSchema, faqSchema]}
      />

      <section className="hero-video" id="top">
        <div className="hero-video-shell">
          <img
            className="hero-video-media"
            src={stockMedia.headerImage}
            alt="Global website and software collaboration"
            width="1920"
            height="1080"
            decoding="async"
            fetchPriority="high"
          />
          <div className="hero-video-overlay" />

          <div className="container hero-video-content">
            <p className="hero-kicker">Global web and software partner</p>
            <h1 className="hero-title">Websites and software engineered for growth.</h1>
            <p className="hero-copy">
              Phenomenal Web helps startups, SMEs, and established businesses
              worldwide launch faster, convert better, and scale with
              confidence through strategy, UX/UI, engineering, SEO, and ongoing
              support.
            </p>
            <div className="hero-cta-row">
              <Link
                to="/contacts"
                className="btn btn-primary"
                data-cta="home_hero_book_call"
              >
                Book strategy call
              </Link>
              <Link
                to="/services"
                className="btn btn-secondary"
                data-cta="home_hero_explore_services"
              >
                Explore services
              </Link>
            </div>

            <div className="hero-floating-row" aria-hidden="true">
              <article className="hero-floating-chip">
                <span>Delivery model</span>
                <strong>Remote-first global collaboration</strong>
              </article>
              <article className="hero-floating-chip">
                <span>Execution</span>
                <strong>Strategy, design, and engineering aligned</strong>
              </article>
              <article className="hero-floating-chip">
                <span>Quality</span>
                <strong>Performance and accessibility ready</strong>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section hero-meta">
        <div className="container hero-meta-grid">
          {heroStats.map((item) => (
            <article className="hero-meta-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="momentum-strip" aria-label="Trust indicators">
        <div className="container momentum-shell">
          <div className="momentum-track">
            {momentumItems.map((item) => (
              <span className="momentum-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">About Phenomenal Web</p>
            <h2>A global delivery partner focused on business outcomes.</h2>
            <p>
              We combine strategic thinking, premium design, and technical
              execution to help teams ship digital platforms that perform in
              real-world conditions.
            </p>
          </div>

          <div className="dilemma-grid">
            {dilemmaCards.map((item) => (
              <article className="dilemma-card" key={item.title} data-reveal>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="split-block" data-reveal>
            <img
              src={stockMedia.about}
              alt="Global digital team workshop"
              loading="lazy"
              decoding="async"
              width="1200"
              height="820"
            />
            <div className="split-content">
              <h3>One accountable team from discovery to long-term support.</h3>
              <p>
                We are built for remote collaboration and senior-led delivery,
                so decisions stay clear, timelines stay controlled, and your
                roadmap stays connected to measurable goals.
              </p>
              <ul role="list">
                <li>Commercial outcomes embedded in delivery decisions.</li>
                <li>Technical rigor across architecture, QA, and performance.</li>
                <li>Post-launch support for continuous growth.</li>
              </ul>
              <Link to="/process" className="text-link">
                Explore our delivery process
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="services">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Services</p>
            <h2>Two service tracks, one high-performance partner.</h2>
            <p>
              Websites and growth systems for market visibility, plus web apps
              and custom software for operational scale.
            </p>
          </div>

          <div className="service-lanes">
            {serviceLanes.map((service) => (
              <article className="lane-card" key={service.title} data-reveal>
                <img
                  src={service.image}
                  alt={`${service.title} service visual`}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="900"
                />
                <div className="lane-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <Link to={service.path} className="text-link">
                    See delivery scope
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Process</p>
            <h2>A transparent framework that lowers delivery risk.</h2>
            <p>
              Clear phases, clear owners, and clear communication across every
              stage of strategy, design, build, and optimization.
            </p>
          </div>

          <ol className="process-track" role="list">
            {processSteps.map((step, index) => (
              <li className="process-step" key={step.title} data-reveal>
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-soft" id="projects">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Selected Work</p>
            <h2>Recent launches built for measurable impact.</h2>
          </div>

          <div className="latest-projects-grid">
            {projectCards.map((project) => (
              <article className="project-showcase-card" key={project.title} data-reveal>
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="900"
                />

                <div className="project-showcase-top">
                  <span>{project.badge}</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} website`}
                  >
                    &gt;
                  </a>
                </div>

                <div className="project-showcase-bottom">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    {project.url}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="team">
        <div className="container split-block split-block-reverse" data-reveal>
          <img
            src={stockMedia.team}
            alt="Remote-first team collaboration"
            loading="lazy"
            decoding="async"
            width="1200"
            height="820"
          />
          <div className="split-content">
            <p className="eyebrow">Global Collaboration</p>
            <h2>Built for distributed teams and international delivery.</h2>
            <p>
              We run a remote-first model with clear documentation, weekly
              delivery visibility, and timezone-aware communication so global
              teams can move quickly without confusion.
            </p>
            <div className="audience-grid">
              <article className="audience-card">
                <h3>Startups and scale-ups</h3>
                <p>Launch faster with clear priorities and technical focus.</p>
              </article>
              <article className="audience-card">
                <h3>SMEs and established teams</h3>
                <p>Modernize platforms without disrupting business operations.</p>
              </article>
            </div>
            <Link to="/global-delivery" className="text-link">
              See how we work globally
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="capabilities">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Why Phenomenal Web</p>
            <h2>Creative quality backed by technical rigor.</h2>
          </div>

          <div className="capability-grid">
            <article className="capability-card" data-reveal>
              <h3>Outcome-led strategy and UX</h3>
              <p>
                Every design decision is tied to buyer behavior, conversion
                flow, and commercial objectives.
              </p>
            </article>
            <article className="capability-card" data-reveal>
              <h3>Engineering depth for scale</h3>
              <p>
                Modern architecture, robust QA, and maintainable systems ready
                for growth and iteration.
              </p>
            </article>
            <article className="capability-card" data-reveal>
              <h3>Long-term partnership mindset</h3>
              <p>
                Beyond launch, we support roadmap evolution, optimization, and
                technical maintenance.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Testimonials</p>
            <h2>Trusted by teams that need reliable digital execution.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="quote-card" key={item.company} data-reveal>
                <p className="testimonial-quote">\"{item.quote}\"</p>
                <p className="testimonial-name">{item.name}</p>
                <p className="testimonial-role">{item.company}</p>
              </article>
            ))}
          </div>

          <ul className="client-strip" role="list" data-reveal>
            {clientNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-soft" id="faq">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">FAQ</p>
            <h2>Answers before you commit.</h2>
          </div>

          <div className="faq-list" data-reveal>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-panel" id="contact">
        <div className="container contact-shell contact-shell-single" data-reveal>
          <div className="contact-cta-single">
            <p className="eyebrow">Ready to build?</p>
            <h2>Book a strategy call and get a practical delivery plan.</h2>
            <p>
              Share your goals, timeline, and current constraints. We will
              recommend the right scope, architecture, and next steps.
            </p>
            <div className="hero-cta-row">
              <Link
                className="btn btn-primary whatsapp-cta-btn"
                to="/contacts"
                data-cta="home_final_book_call"
              >
                Book strategy call
              </Link>
              <Link
                className="btn btn-secondary"
                to="/request-proposal"
                data-cta="home_final_request_proposal"
              >
                Request proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


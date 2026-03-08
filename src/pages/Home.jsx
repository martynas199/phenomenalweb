import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import SEO, { pageSEO } from "../components/SEO";
import heroHeaderImage from "../assets/case-studies/hero.jpg";
import nobleEleganceImage from "../assets/noble-elegance.png";
import eliteBookerImage from "../assets/elite-booker.png";
import justesWebImage from "../assets/justes-web.png";

const stockMedia = {
  headerImage: heroHeaderImage,
  about:
    "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80",
  team:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  brochure:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  ecommerce:
    "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
  custom:
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
  support:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
};

const heroStats = [
  { value: "14+ years", label: "In digital delivery" },
  { value: "300+", label: "Sites launched" },
  { value: "4.9/5", label: "Average partner rating" },
];

const momentumItems = [
  "Positioning workshops",
  "Conversion-focused design",
  "Rapid technical delivery",
  "CRO iteration loops",
  "SEO-ready architecture",
  "Integration with CRM and tooling",
  "Post-launch growth support",
];

const dilemmaCards = [
  {
    title: "No clear digital strategy",
    text: "Traffic comes in, but enquiries stay flat and conversion paths are unclear.",
  },
  {
    title: "Outdated website holding growth back",
    text: "Your brand has evolved, but your current site still signals a smaller business.",
  },
  {
    title: "Disconnected systems and tools",
    text: "Marketing, CRM, and content workflows do not talk to each other efficiently.",
  },
];

const serviceLanes = [
  {
    title: "Brochure websites",
    text: "Clean, high-trust websites built to position your business clearly and convert interest.",
    image: stockMedia.brochure,
  },
  {
    title: "E-commerce websites",
    text: "Conversion-focused storefronts with better product discovery and checkout flow.",
    image: stockMedia.ecommerce,
  },
  {
    title: "Custom software",
    text: "Internal platforms and customer tools designed around your operations.",
    image: stockMedia.custom,
  },
  {
    title: "Support and maintenance",
    text: "Proactive monitoring, updates, and roadmap improvements after launch.",
    image: stockMedia.support,
  },
];

const processSteps = [
  {
    title: "Discuss",
    text: "We align on audience, commercial goals, and what success should look like.",
  },
  {
    title: "Define",
    text: "We shape architecture, messaging, and technical scope before design starts.",
  },
  {
    title: "Design",
    text: "We craft interface systems and key pages around your buyer journey.",
  },
  {
    title: "Develop",
    text: "We build robust, responsive experiences with performance and accessibility in mind.",
  },
  {
    title: "Deliver",
    text: "We launch, hand over clearly, and support your team as the site starts performing.",
  },
];

const projectCards = [
  {
    title: "Noble elegance",
    summary: "Salon booking and e-commerce",
    image: nobleEleganceImage,
    url: "https://www.nobleelegance.co.uk",
    badge: "Project 01",
  },
  {
    title: "elitebooker",
    summary: "Appointment booking system",
    image: eliteBookerImage,
    url: "https://www.elitebooker.co.uk",
    badge: "Project 02",
  },
  {
    title: "Permanent by Juste",
    summary: "Brochure site with appointment booking integration",
    image: justesWebImage,
    url: "https://permanentbyjuste.co.uk",
    badge: "Project 03",
  },
];
const testimonials = [
  {
    quote:
      "Phenomenal Web gave us structure and clarity. The site now reflects the quality of our work.",
    name: "Operations Director",
    company: "Northforge Group",
  },
  {
    quote:
      "The process was practical and transparent from day one. We launched faster than expected.",
    name: "Founder",
    company: "Harbor Digital",
  },
  {
    quote:
      "They challenged our assumptions in the right places and delivered a better product than we briefed.",
    name: "Marketing Lead",
    company: "Aster & Co.",
  },
];

const faqs = [
  {
    question: "What does a typical project timeline look like?",
    answer:
      "Most brochure websites take 4 to 8 weeks. Larger integrated builds usually run from 8 to 16 weeks depending on complexity.",
  },
  {
    question: "Do you only build websites?",
    answer:
      "No. We also build custom digital tools, internal systems, and integrations where website and operations overlap.",
  },
  {
    question: "Can you work with our internal team?",
    answer:
      "Yes. We regularly collaborate with in-house marketing, design, and engineering teams and can flex around your delivery model.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer retained support for maintenance, UX updates, and conversion-focused iterations after launch.",
  },
];

const clientNames = [
  "Northforge",
  "Altura",
  "Beacon Hill",
  "Morrow Labs",
  "Westbridge",
  "Meridian",
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Phenomenal Web",
  url: "https://phenomenal-web.vercel.app/",
  description:
    "Phenomenal Web designs, develops, and supports growth-focused websites and digital systems.",
  areaServed: ["United Kingdom", "United States"],
  serviceType: ["Web Design", "Web Development", "Digital Product Development"],
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -36px 0px",
      }
    );

    const revealElements = document.querySelectorAll("[data-reveal]");
    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page home-refresh">
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
            alt="Hero background image"
            width="1920"
            height="1080"
            decoding="async"
            fetchPriority="high"
          />
          <div className="hero-video-overlay" />

          <div className="container hero-video-content">
            <p className="hero-kicker">Premium digital growth partner</p>
            <h1 className="hero-title">The digital team that gets it.</h1>
            <p className="hero-copy">
              We solve digital dilemmas with practical strategy, purposeful
              design, and robust development. Websites, e-commerce, and custom
              software delivered by one aligned team.
            </p>
            <div className="hero-cta-row">
              <Link to="/contacts" className="btn btn-primary">
                Book your strategy call
              </Link>
              <a href="#projects" className="btn btn-secondary">
                View recent projects
              </a>
            </div>

            <div className="hero-floating-row" aria-hidden="true">
              <article className="hero-floating-chip">
                <span>Conversion focused</span>
                <strong>+42% lead growth</strong>
              </article>
              <article className="hero-floating-chip">
                <span>Launch velocity</span>
                <strong>Average 6-week sprint</strong>
              </article>
              <article className="hero-floating-chip">
                <span>Platform quality</span>
                <strong>Core Web Vitals ready</strong>
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

      <section className="momentum-strip" aria-label="Delivery capabilities">
        <div className="container momentum-shell">
          <div className="momentum-track">
            {[...momentumItems, ...momentumItems].map((item, index) => (
              <span className="momentum-chip" key={`${item}-${index}`}>
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
            <h2>A close-knit team of digital problem solvers.</h2>
            <p>
              We combine strategy, design, development, and post-launch support
              to move brands from uncertainty to clear momentum.
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
              alt="Workshop session with designers and developers"
              loading="lazy"
              decoding="async"
              width="1200"
              height="820"
            />
            <div className="split-content">
              <h3>Built for ambitious teams that need clarity and execution.</h3>
              <p>
                Whether you are launching from scratch or replacing an
                underperforming platform, we shape the right scope and deliver
                it without overcomplication.
              </p>
              <ul role="list">
                <li>Clear ownership from brief to launch.</li>
                <li>Commercial thinking in every design decision.</li>
                <li>Reliable engineering and long-term maintainability.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="services">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Our Services</p>
            <h2>Digital solutions tailored to your growth stage.</h2>
          </div>

          <div className="service-lanes">
            {serviceLanes.map((service) => (
              <article className="lane-card" key={service.title} data-reveal>
                <img
                  src={service.image}
                  alt={`${service.title} stock visual`}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="900"
                />
                <div className="lane-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <Link to="/services" className="text-link">
                    Explore service details
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
            <p className="eyebrow">Our Process</p>
            <h2>Discuss, define, design, develop, deliver.</h2>
            <p>
              A delivery model that keeps momentum high and gives your team full
              visibility at every stage.
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
            <p className="eyebrow">Latest Projects</p>
            <h2>Recent launches built for real-world growth.</h2>
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
            alt="Creative and technical team collaborating"
            loading="lazy"
            decoding="async"
            width="1200"
            height="820"
          />
          <div className="split-content">
            <p className="eyebrow">Who We Help</p>
            <h2>From start-ups to established organizations.</h2>
            <p>
              We support fast-moving teams needing a credible launch and mature
              businesses that need to modernize without disrupting operations.
            </p>
            <div className="audience-grid">
              <article className="audience-card">
                <h3>Start-ups</h3>
                <p>Launch-ready sites and product marketing platforms.</p>
              </article>
              <article className="audience-card">
                <h3>Established businesses</h3>
                <p>Modernized digital systems with reduced operational drag.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="capabilities">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">What We Do</p>
            <h2>Design. Develop. Scale.</h2>
          </div>

          <div className="capability-grid">
            <article className="capability-card" data-reveal>
              <h3>Brand-first UI/UX design</h3>
              <p>
                Interface systems and journeys tailored to your offer and buyer
                behavior.
              </p>
            </article>
            <article className="capability-card" data-reveal>
              <h3>Modern web development</h3>
              <p>
                Fast, accessible builds with maintainable architecture and clean
                handover.
              </p>
            </article>
            <article className="capability-card" data-reveal>
              <h3>Custom software integrations</h3>
              <p>
                Connect your website to operations, automation, and data
                workflows.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Testimonials</p>
            <h2>Trusted by teams that value delivery quality.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="quote-card" key={item.company} data-reveal>
                <p className="testimonial-quote">"{item.quote}"</p>
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
            <p className="eyebrow">Frequently Asked Questions</p>
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
            <p className="eyebrow">Ready for progress?</p>
            <h2>Let's plan your next digital move.</h2>
            <p>
              Share your goals and constraints. We will recommend scope, timing,
              and a practical path to launch.
            </p>
            <a
              className="btn btn-primary whatsapp-cta-btn"
              href="https://wa.me/447450361893"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp at 07450361893"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}






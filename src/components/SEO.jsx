import { Helmet } from "react-helmet-async";

const SITE_URL = "https://phenomenal-web.vercel.app";

const ORGANIZATION_SCHEMA = {
  "@type": "Organization",
  name: "Phenomenal Web",
  url: SITE_URL,
  areaServed: "Global",
};

function getPageName(rawTitle, siteName) {
  const suffix = `| ${siteName}`;
  if (rawTitle.endsWith(suffix)) {
    return rawTitle.slice(0, -suffix.length).trim();
  }
  return rawTitle.trim();
}

function hasSchemaType(schemaItems, schemaType) {
  return schemaItems.some((item) => item && item["@type"] === schemaType);
}

export function buildBreadcrumbSchema(url, pageName) {
  try {
    const parsedUrl = new URL(url);
    const normalizedPath = parsedUrl.pathname.replace(/\/+$/, "") || "/";
    const breadcrumbs = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
    ];

    if (normalizedPath !== "/") {
      breadcrumbs.push({
        "@type": "ListItem",
        position: 2,
        name: pageName || "Page",
        item: `${SITE_URL}${normalizedPath}`,
      });
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs,
    };
  } catch {
    return null;
  }
}

export function buildServiceSchema({
  name,
  description,
  url,
  serviceType = name,
  areaServed = "Global",
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    areaServed,
    provider: ORGANIZATION_SCHEMA,
    url,
  };
}

export default function SEO({
  title = "Phenomenal Web | Global Web and Software Partner",
  description =
    "Phenomenal Web is a global digital partner delivering websites, web applications, custom software, SEO, and growth-focused support for ambitious companies.",
  keywords =
    "global web development company, custom software development partner, UI UX design agency, web application development, SEO and digital growth",
  image = "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
  url = `${SITE_URL}/`,
  type = "website",
  siteName = "Phenomenal Web",
  schema = [],
}) {
  const fullTitle =
    title.includes(siteName) || !siteName ? title : `${title} | ${siteName}`;
  const isAbsoluteImage = image.startsWith("http://") || image.startsWith("https://");
  const ogImage = isAbsoluteImage ? image : `${SITE_URL}${image}`;
  const pageName = getPageName(fullTitle, siteName);
  const breadcrumbSchema = buildBreadcrumbSchema(url, pageName);

  const mergedSchema = [...schema];
  if (!hasSchemaType(schema, "WebPage")) {
    mergedSchema.unshift({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pageName,
      description,
      url,
      inLanguage: "en",
    });
  }
  if (breadcrumbSchema && !hasSchemaType(schema, "BreadcrumbList")) {
    mergedSchema.unshift(breadcrumbSchema);
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {mergedSchema.map((item, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}

export const pageSEO = {
  home: {
    title: "Websites and Software Engineered for Growth",
    description:
      "Phenomenal Web helps companies worldwide launch, optimize, and scale through strategy, UX/UI, web development, software engineering, SEO, and ongoing support.",
    keywords:
      "global web agency, custom website development, web app development, custom software partner, conversion focused UX",
    url: "https://phenomenal-web.vercel.app/",
  },
  services: {
    title: "Global Services | Websites, Web Apps, Software, SEO",
    description:
      "Explore Phenomenal Web services across website development, web applications, custom software, SEO, digital marketing, consulting, and ongoing support.",
    keywords:
      "website development services, web application development company, custom software services, SEO growth partner",
    url: "https://phenomenal-web.vercel.app/services",
  },
  industries: {
    title: "Industries | Phenomenal Web",
    description:
      "Industry-specific digital delivery for startups, SMEs, and established businesses across professional services, healthcare, e-commerce, SaaS, and operations.",
    keywords:
      "industry web development partner, sector specific software delivery, global digital agency",
    url: "https://phenomenal-web.vercel.app/industries",
  },
  caseStudy: {
    title: "Case Studies | Phenomenal Web",
    description:
      "See measurable outcomes from website, web app, and software engagements delivered by Phenomenal Web for growth-focused teams.",
    keywords: "web development case studies, software delivery results, digital transformation outcomes",
    url: "https://phenomenal-web.vercel.app/case-study",
  },
  contacts: {
    title: "Contact | Start Your Project with Phenomenal Web",
    description:
      "Start your project conversation with Phenomenal Web through WhatsApp or email and get clear next steps for your scope and delivery plan.",
    keywords: "book strategy call web agency, request software proposal, contact global digital partner",
    url: "https://phenomenal-web.vercel.app/contacts",
  },
  requestProposal: {
    title: "Request Proposal | Website and Software Delivery Scope",
    description:
      "Request a practical proposal for your website, web app, or custom software project with clear scope, phases, and timeline guidance.",
    keywords:
      "request website development proposal, custom software proposal, web application project estimate",
    url: "https://phenomenal-web.vercel.app/request-proposal",
  },
  technology: {
    title: "Technology and Capability | Delivery Standards and Stack",
    description:
      "Explore Phenomenal Web technical capabilities across frontend, backend, CMS, quality assurance, performance, and global delivery workflows.",
    keywords:
      "web development technology stack, software delivery standards, technical capabilities digital agency",
    url: "https://phenomenal-web.vercel.app/technology",
  },
  blog: {
    title: "Insights | Web, Software, SEO, and Conversion Strategy",
    description:
      "Practical insights on web strategy, software delivery, UX, SEO, conversion optimization, and digital growth for modern teams.",
    keywords: "web development insights, SEO strategy articles, conversion optimization guides",
    url: "https://phenomenal-web.vercel.app/blog",
  },
  process: {
    title: "Process | Transparent Global Delivery Framework",
    description:
      "Discover the Phenomenal Web process from discovery to growth, built for global collaboration, technical quality, and measurable outcomes.",
    keywords: "web development process, software delivery framework, global remote project delivery",
    url: "https://phenomenal-web.vercel.app/process",
  },
  pricing: {
    title: "Pricing and Packages | Websites, Web Apps, Custom Software",
    description:
      "Review Phenomenal Web service packages for websites, web apps, custom software, and ongoing support with clear scope and delivery options.",
    keywords: "website development pricing, custom software packages, web app development cost",
    url: "https://phenomenal-web.vercel.app/pricing",
  },
  globalDelivery: {
    title: "How We Work Globally | Remote-First Delivery Partner",
    description:
      "Learn how Phenomenal Web collaborates with international teams through remote-first processes, transparent communication, and reliable execution.",
    keywords: "global digital agency, remote web development team, international software partner",
    url: "https://phenomenal-web.vercel.app/global-delivery",
  },
  about: {
    title: "About | Global Web, Software, and Growth Partner",
    description:
      "Learn how Phenomenal Web combines strategy, UX/UI, engineering, SEO, and support to deliver measurable outcomes for global clients.",
    keywords: "about phenomenal web, global digital partner, web software growth agency",
    url: "https://phenomenal-web.vercel.app/about",
  },
  websiteDevelopment: {
    title: "Website Development | Conversion-Focused Digital Platforms",
    description:
      "Custom website design and development focused on positioning, trust, and conversion performance.",
    keywords: "custom website development, conversion focused website design, business website partner",
    url: "https://phenomenal-web.vercel.app/website-development",
  },
  webApplications: {
    title: "Web Application Development | Product-Grade Delivery",
    description:
      "Web application design and development for startups and scaling teams building reliable digital products.",
    keywords: "web application development company, SaaS MVP development, product web app partner",
    url: "https://phenomenal-web.vercel.app/web-applications",
  },
  customSoftware: {
    title: "Custom Software Development | Tailored Business Systems",
    description:
      "Custom software delivery and integration services designed around your operations, workflows, and growth plans.",
    keywords: "custom software development services, business software partner, software integration delivery",
    url: "https://phenomenal-web.vercel.app/custom-software-development",
  },
  seoGrowth: {
    title: "SEO and Growth | Technical SEO and Conversion Optimization",
    description:
      "Technical SEO, growth strategy, and conversion optimization to improve traffic quality and commercial performance.",
    keywords: "technical SEO agency, SEO growth services, conversion optimization partner",
    url: "https://phenomenal-web.vercel.app/seo-growth",
  },
  supportMaintenance: {
    title: "Support and Maintenance | Ongoing Website and Software Support",
    description:
      "Retained support and maintenance services for websites and software, including updates, monitoring, and continuous optimization.",
    keywords: "website support retainer, software maintenance services, ongoing technical support",
    url: "https://phenomenal-web.vercel.app/support-maintenance",
  },
  uiuxDesign: {
    title: "UI/UX Design | Conversion-Focused Experience Design",
    description:
      "UI/UX design services for websites and software products focused on usability, trust, and measurable business outcomes.",
    keywords: "ui ux design agency, conversion UX design, product interface design",
    url: "https://phenomenal-web.vercel.app/ui-ux-design",
  },
  technicalConsulting: {
    title: "Technical Consulting | Architecture and Delivery Advisory",
    description:
      "Technical consulting for architecture decisions, delivery planning, and integration strategy across web and software projects.",
    keywords: "technical consulting web projects, software architecture advisory, digital delivery consulting",
    url: "https://phenomenal-web.vercel.app/technical-consulting",
  },
};

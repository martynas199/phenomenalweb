import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Phenomenal Web | Premium Web Design & Development",
  description =
    "Phenomenal Web designs and builds high-performing websites for brands that want stronger positioning, faster pages, and higher-quality enquiries.",
  keywords =
    "premium web design agency, conversion focused web development, website redesign, landing page design",
  image = "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
  url = "https://phenomenal-web.vercel.app/",
  type = "website",
  siteName = "Phenomenal Web",
  schema = [],
}) {
  const fullTitle =
    title.includes(siteName) || !siteName ? title : `${title} | ${siteName}`;
  const isAbsoluteImage = image.startsWith("http://") || image.startsWith("https://");
  const ogImage = isAbsoluteImage ? image : `https://phenomenal-web.vercel.app${image}`;

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

      {schema.map((item, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}

export const pageSEO = {
  home: {
    title: "Phenomenal Web | The Digital Team That Gets It",
    description:
      "Solve digital dilemmas with strategy, design, development, and support from one close-knit team.",
    keywords:
      "digital problem solvers, web design and development agency, e-commerce web agency, custom software partner",
    url: "https://phenomenal-web.vercel.app/",
  },
  services: {
    title: "Services | Phenomenal Web",
    description:
      "Design and development services for websites, landing pages, and CRO-focused growth sprints.",
    keywords:
      "web design services, website development services, conversion optimization services",
    url: "https://phenomenal-web.vercel.app/services",
  },
  industries: {
    title: "Industries | Phenomenal Web",
    description:
      "Industry-focused website design and development for service businesses and product-led teams.",
    keywords:
      "industry web design, sector specific website development",
    url: "https://phenomenal-web.vercel.app/industries",
  },
  caseStudy: {
    title: "Case Studies | Phenomenal Web",
    description:
      "Explore selected project outcomes and implementation approaches from Phenomenal Web.",
    keywords: "website case studies, web redesign outcomes",
    url: "https://phenomenal-web.vercel.app/case-study",
  },
  contacts: {
    title: "Contact | Phenomenal Web",
    description:
      "Book a strategy call and get a clear website roadmap tailored to your goals.",
    keywords: "book web design call, contact web agency",
    url: "https://phenomenal-web.vercel.app/contacts",
  },
  blog: {
    title: "Insights | Phenomenal Web",
    description:
      "Articles on conversion-focused web design, development, and digital product strategy.",
    keywords: "web design insights, CRO articles",
    url: "https://phenomenal-web.vercel.app/blog",
  },
};

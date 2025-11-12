import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Phenomenal Web - Your Vision, Our Code",
  description = "Transform your vision into reality with our expert web development services. We build performant, beautiful web experiences tailored for your business.",
  keywords = "web development, custom websites, e-commerce, web applications, React development, responsive design",
  image = "https://phenomenal-web.vercel.app/og-image.png",
  url = "https://phenomenal-web.vercel.app",
  type = "website",
}) {
  const siteUrl = url;
  const fullTitle = title.includes("Phenomenal Web")
    ? title
    : `${title} | Phenomenal Web`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Phenomenal Web" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO Tags */}
      <link rel="canonical" href={siteUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Phenomenal Web" />

      {/* Structured Data / Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Phenomenal Web",
          description: description,
          url: siteUrl,
          logo: `${siteUrl}/logo.png`,
          foundingDate: "2020",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-PHENOM",
            contactType: "Customer Service",
            availableLanguage: ["English"],
          },
          sameAs: [
            "https://twitter.com/phenomenalweb",
            "https://linkedin.com/company/phenomenalweb",
            "https://github.com/phenomenalweb",
          ],
          areaServed: "Worldwide",
          award: [
            "Best Web Agency 2024",
            "Top Rated Developer - Clutch",
            "Excellence in Design - Awwwards",
          ],
        })}
      </script>
    </Helmet>
  );
}

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: "Phenomenal Web - Award-Winning Web Development Agency",
    description:
      "Transform your vision into reality with our expert web development services. We build performant, beautiful web experiences tailored for your business. 50+ happy clients, 98% satisfaction rate.",
    keywords:
      "web development agency, custom websites, e-commerce development, web applications, React development, responsive design, UI/UX design",
  },
  services: {
    title: "Our Services - Web Development, Design & Consulting",
    description:
      "Comprehensive web development services including custom websites, e-commerce platforms, web applications, mobile development, UI/UX design, and digital strategy consulting.",
    keywords:
      "web development services, custom web design, e-commerce solutions, mobile app development, UI/UX design, digital consulting",
  },
  industries: {
    title: "Industries We Serve - Real Estate, Healthcare, E-Commerce & More",
    description:
      "Specialized web solutions for various industries including real estate, healthcare, e-commerce, booking systems, payment processing, and more. Industry-specific expertise.",
    keywords:
      "industry web solutions, real estate websites, healthcare portals, e-commerce platforms, booking systems, payment integration",
  },
  caseStudy: {
    title: "Case Studies - Success Stories & Client Results",
    description:
      "Explore our portfolio of successful projects. Real results: 245% revenue increase, 95% client satisfaction, 100+ projects delivered. See what we can do for you.",
    keywords:
      "web development portfolio, case studies, client success stories, project results, web development examples",
  },
  contacts: {
    title: "Contact Us - Get Your Free Project Quote",
    description:
      "Ready to start your project? Get a free consultation and project estimate. 24-hour response time, no commitment required. Contact Phenomenal Web today.",
    keywords:
      "contact web developer, free project quote, web development consultation, get started, hire web developers",
  },
  blog: {
    title: "Blog - Web Development Insights & Tutorials",
    description:
      "Expert insights, tutorials, and industry trends to help you build better web experiences. Learn about development, design, and business strategies.",
    keywords:
      "web development blog, programming tutorials, design trends, tech articles, development insights",
  },
};

import React, { useMemo, useState } from "react";
import SEO, { pageSEO } from "../components/SEO";

const posts = [
  {
    id: 1,
    title: "How to structure a high-converting service page",
    excerpt:
      "A practical framework for message hierarchy, trust, and conversion flow on service-led websites.",
    category: "design",
    date: "Mar 2, 2026",
    readTime: "6 min read",
    author: "Editorial Team",
    image:
      "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=1200&q=80",
    tags: ["UX", "Conversion", "Services"],
  },
  {
    id: 2,
    title: "Choosing the right CMS for growth-stage teams",
    excerpt:
      "What to evaluate when balancing editor usability, scalability, and engineering flexibility.",
    category: "development",
    date: "Feb 25, 2026",
    readTime: "8 min read",
    author: "Platform Lead",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    tags: ["CMS", "Architecture", "Operations"],
  },
  {
    id: 3,
    title: "Why performance is now a revenue conversation",
    excerpt:
      "The link between page speed, search visibility, ad efficiency, and buyer confidence.",
    category: "business",
    date: "Feb 18, 2026",
    readTime: "5 min read",
    author: "Strategy Director",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Performance", "SEO", "Revenue"],
  },
  {
    id: 4,
    title: "Building a realistic CRO roadmap in 90 days",
    excerpt:
      "How to prioritize experiments, avoid noise, and build a test program that compounds results.",
    category: "business",
    date: "Feb 12, 2026",
    readTime: "9 min read",
    author: "Growth Analyst",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    tags: ["CRO", "Testing", "Analytics"],
  },
  {
    id: 5,
    title: "Designing enterprise contact flows that convert",
    excerpt:
      "Contact and lead forms are often under-designed. Here is how to reduce friction and improve lead quality.",
    category: "design",
    date: "Feb 4, 2026",
    readTime: "7 min read",
    author: "UX Lead",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80",
    tags: ["Forms", "UX", "Lead Gen"],
  },
  {
    id: 6,
    title: "When to use custom software instead of plugin stacks",
    excerpt:
      "A decision guide for teams deciding between quick integrations and purpose-built internal tools.",
    category: "development",
    date: "Jan 29, 2026",
    readTime: "10 min read",
    author: "Engineering Manager",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
    tags: ["Software", "Integration", "Technical Strategy"],
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "design", name: "Design" },
  { id: "development", name: "Development" },
  { id: "business", name: "Business" },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = useMemo(
    () =>
      selectedCategory === "all"
        ? posts
        : posts.filter((post) => post.category === selectedCategory),
    [selectedCategory]
  );

  const featured = posts[0];

  return (
    <div className="inner-page">
      <SEO {...pageSEO.blog} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Insights</p>
            <h1>Practical notes on digital growth and delivery.</h1>
            <p className="page-intro">
              Short, tactical articles on strategy, design, development, and
              optimization for teams building modern digital experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="blog-feature" data-reveal>
            <img
              src={featured.image}
              alt={`${featured.title} featured article visual`}
              loading="lazy"
              decoding="async"
              width="1200"
              height="820"
            />
            <div className="blog-feature-content">
              <p className="detail-meta">Featured | {featured.readTime}</p>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <p className="blog-meta">
                {featured.author} | {featured.date}
              </p>
            </div>
          </article>

          <div className="pill-row" data-reveal>
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`pill-btn ${
                  selectedCategory === category.id ? "is-active" : ""
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="post-grid">
            {filteredPosts.map((post) => (
              <article className="post-card" key={post.id} data-reveal>
                <img
                  src={post.image}
                  alt={`${post.title} article visual`}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="820"
                />
                <div className="post-content">
                  <p className="detail-meta">
                    {post.category} | {post.readTime}
                  </p>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="stack-row" role="list">
                    {post.tags.map((tag) => (
                      <span className="stack-chip" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="blog-meta">
                    {post.author} | {post.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "development", name: "Development", count: 5 },
    { id: "design", name: "Design", count: 4 },
    { id: "business", name: "Business", count: 3 },
  ];

  const posts = [
    {
      id: 1,
      title: "10 Web Design Trends Dominating 2024",
      excerpt:
        "Discover the latest design trends that are shaping the future of web development. From AI-powered interfaces to immersive 3D experiences.",
      category: "design",
      date: "Nov 10, 2024",
      readTime: "5 min read",
      author: "Sarah Chen",
      image: "🎨",
      tags: ["UI/UX", "Trends", "Design"],
    },
    {
      id: 2,
      title: "How to Choose the Right Tech Stack for Your Startup",
      excerpt:
        "A comprehensive guide to selecting the perfect technology stack that scales with your business needs and budget constraints.",
      category: "development",
      date: "Nov 8, 2024",
      readTime: "8 min read",
      author: "Michael Rodriguez",
      image: "⚙️",
      tags: ["Tech Stack", "Startup", "Development"],
    },
    {
      id: 3,
      title: "ROI-Driven Web Development: Measuring Success",
      excerpt:
        "Learn how to track and optimize your website's return on investment with data-driven strategies and analytics.",
      category: "business",
      date: "Nov 5, 2024",
      readTime: "6 min read",
      author: "Emily Thompson",
      image: "📊",
      tags: ["ROI", "Analytics", "Business"],
    },
    {
      id: 4,
      title: "The Complete Guide to E-Commerce Conversion Optimization",
      excerpt:
        "Proven techniques to turn more visitors into customers. Boost your online store's conversion rate with these actionable tips.",
      category: "business",
      date: "Nov 3, 2024",
      readTime: "10 min read",
      author: "David Park",
      image: "🛒",
      tags: ["E-Commerce", "Conversion", "Optimization"],
    },
    {
      id: 5,
      title: "React vs Vue vs Angular: Which Framework to Choose in 2024",
      excerpt:
        "An in-depth comparison of the three major JavaScript frameworks to help you make an informed decision for your next project.",
      category: "development",
      date: "Nov 1, 2024",
      readTime: "12 min read",
      author: "Lisa Martinez",
      image: "⚛️",
      tags: ["React", "Vue", "Angular"],
    },
    {
      id: 6,
      title: "Accessibility Best Practices for Modern Web Apps",
      excerpt:
        "Make your website accessible to everyone. Essential WCAG guidelines and implementation strategies for inclusive design.",
      category: "design",
      date: "Oct 28, 2024",
      readTime: "7 min read",
      author: "James Wilson",
      image: "♿",
      tags: ["Accessibility", "WCAG", "UX"],
    },
    {
      id: 7,
      title: "Microservices Architecture: When and Why to Use It",
      excerpt:
        "Understanding microservices architecture patterns, benefits, challenges, and real-world implementation examples.",
      category: "development",
      date: "Oct 25, 2024",
      readTime: "15 min read",
      author: "Sarah Chen",
      image: "🏗️",
      tags: ["Architecture", "Microservices", "Backend"],
    },
    {
      id: 8,
      title: "Color Psychology in Web Design: A Practical Guide",
      excerpt:
        "How colors influence user behavior and decision-making. Learn to choose the perfect color palette for your brand.",
      category: "design",
      date: "Oct 22, 2024",
      readTime: "6 min read",
      author: "Emily Thompson",
      image: "🎨",
      tags: ["Color Theory", "Branding", "Design"],
    },
    {
      id: 9,
      title: "API Security Best Practices Every Developer Should Know",
      excerpt:
        "Protect your APIs from common vulnerabilities. Authentication, authorization, rate limiting, and more.",
      category: "development",
      date: "Oct 20, 2024",
      readTime: "9 min read",
      author: "Michael Rodriguez",
      image: "🔒",
      tags: ["Security", "API", "Backend"],
    },
    {
      id: 10,
      title: "Building a Successful SaaS Product: Lessons from 50+ Launches",
      excerpt:
        "Insights and strategies from successful SaaS entrepreneurs. What works, what doesn't, and how to avoid common pitfalls.",
      category: "business",
      date: "Oct 18, 2024",
      readTime: "11 min read",
      author: "David Park",
      image: "🚀",
      tags: ["SaaS", "Product", "Strategy"],
    },
    {
      id: 11,
      title: "Progressive Web Apps: The Future of Mobile Development",
      excerpt:
        "PWAs combine the best of web and mobile apps. Learn how to build fast, reliable, and engaging progressive web applications.",
      category: "development",
      date: "Oct 15, 2024",
      readTime: "8 min read",
      author: "Lisa Martinez",
      image: "📱",
      tags: ["PWA", "Mobile", "Web"],
    },
    {
      id: 12,
      title: "User Research Methods That Actually Work",
      excerpt:
        "Effective techniques for understanding your users. From surveys to usability testing and everything in between.",
      category: "design",
      date: "Oct 12, 2024",
      readTime: "7 min read",
      author: "James Wilson",
      image: "🔍",
      tags: ["Research", "UX", "Testing"],
    },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const featuredPost = posts[0];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="block">Our</span>
            <span className="hero-accent">Blog</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expert insights, tutorials, and industry trends to help you build
            better web experiences.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass card-border rounded-2xl overflow-hidden mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-12">
              <div className="text-9xl">{featuredPost.image}</div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                  Featured
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400 text-sm">
                  {featuredPost.readTime}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  By {featuredPost.author} • {featuredPost.date}
                </div>
                <button className="btn-primary px-6 py-2 rounded-lg">
                  Read Article →
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "glass border border-white/10 text-gray-300 hover:border-white/30"
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">
                ({category.count})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass card-border rounded-xl overflow-hidden hover:border-blue-500/50 transition-all group"
            >
              {/* Image */}
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-12 flex items-center justify-center group-hover:scale-105 transition-transform">
                <div className="text-6xl">{post.image}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm">
                  <span className="px-2 py-1 bg-white/5 rounded text-blue-300 capitalize">
                    {post.category}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="text-xs text-gray-500">{post.date}</div>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass card-border rounded-2xl p-8 md:p-12 text-center mt-20"
        >
          <div className="text-5xl mb-4">📬</div>
          <h3 className="text-3xl font-bold mb-4">
            Subscribe to Our <span className="hero-accent">Newsletter</span>
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get the latest articles, tutorials, and insights delivered straight
            to your inbox. No spam, unsubscribe anytime.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              className="btn-primary px-8 py-3 rounded-lg font-semibold whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4 text-sm text-gray-500">
            Join 5,000+ developers and designers
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";

const PagesIcon = () => (
  <svg
    viewBox="0 0 200 150"
    className="w-full h-32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="pagesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>

    {/* Multiple Pages */}
    <rect
      x="60"
      y="40"
      width="80"
      height="60"
      fill="rgba(139, 92, 246, 0.8)"
      rx="6"
      transform="rotate(-5 100 70)"
    />
    <rect
      x="65"
      y="35"
      width="80"
      height="60"
      fill="rgba(236, 72, 153, 0.8)"
      rx="6"
      transform="rotate(0 105 65)"
    />
    <rect
      x="70"
      y="30"
      width="80"
      height="60"
      fill="url(#pagesGradient)"
      rx="6"
      transform="rotate(5 110 60)"
    />

    {/* Page Content Lines */}
    <g transform="rotate(5 110 60) translate(70 30)">
      <rect
        x="10"
        y="15"
        width="40"
        height="3"
        fill="rgba(255, 255, 255, 0.8)"
        rx="1"
      />
      <rect
        x="10"
        y="22"
        width="50"
        height="2"
        fill="rgba(255, 255, 255, 0.6)"
        rx="1"
      />
      <rect
        x="10"
        y="28"
        width="35"
        height="2"
        fill="rgba(255, 255, 255, 0.6)"
        rx="1"
      />
      <rect
        x="10"
        y="40"
        width="25"
        height="8"
        fill="rgba(255, 255, 255, 0.4)"
        rx="2"
      />
      <rect
        x="40"
        y="40"
        width="25"
        height="8"
        fill="rgba(255, 255, 255, 0.4)"
        rx="2"
      />
    </g>

    {/* Floating Elements */}
    <circle cx="40" cy="60" r="3" fill="rgba(245, 158, 11, 0.8)">
      <animate
        attributeName="cy"
        values="60;55;60"
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="160" cy="80" r="2" fill="rgba(139, 92, 246, 0.8)">
      <animate
        attributeName="cy"
        values="80;75;80"
        dur="4s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default function Pages() {
  const pageFeatures = [
    {
      title: "Landing Pages",
      description:
        "High-converting landing pages optimized for lead generation and user engagement.",
      features: [
        "A/B Testing",
        "Analytics Integration",
        "Mobile Responsive",
        "SEO Optimized",
      ],
      icon: "🎯",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      title: "Corporate Websites",
      description:
        "Professional corporate websites that build trust and showcase your brand effectively.",
      features: [
        "Multi-language Support",
        "Content Management",
        "Team Profiles",
        "News & Updates",
      ],
      icon: "🏢",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Portfolio Websites",
      description:
        "Stunning portfolio websites for creatives, agencies, and professionals.",
      features: [
        "Gallery Management",
        "Project Showcases",
        "Client Testimonials",
        "Contact Forms",
      ],
      icon: "🎨",
      gradient: "from-pink-600 to-red-600",
    },
    {
      title: "Blog Platforms",
      description:
        "Feature-rich blogging platforms with modern design and powerful functionality.",
      features: [
        "Content Editor",
        "Categories & Tags",
        "Comment System",
        "Social Sharing",
      ],
      icon: "📝",
      gradient: "from-green-600 to-teal-600",
    },
    {
      title: "Documentation Sites",
      description:
        "User-friendly documentation websites with search, navigation, and version control.",
      features: [
        "Search Functionality",
        "Version Control",
        "API Documentation",
        "Code Examples",
      ],
      icon: "📚",
      gradient: "from-teal-600 to-blue-600",
    },
    {
      title: "Custom Dashboards",
      description:
        "Interactive dashboards for data visualization and business intelligence.",
      features: [
        "Real-time Data",
        "Custom Charts",
        "User Management",
        "Export Functions",
      ],
      icon: "📊",
      gradient: "from-orange-600 to-yellow-600",
    },
  ];

  const technologies = [
    { name: "React", icon: "⚛️", description: "Modern UI library" },
    { name: "Next.js", icon: "▲", description: "Full-stack framework" },
    { name: "TypeScript", icon: "🔷", description: "Type-safe development" },
    { name: "Tailwind CSS", icon: "🎨", description: "Utility-first styling" },
    { name: "Node.js", icon: "🟢", description: "Backend runtime" },
    { name: "MongoDB", icon: "🍃", description: "NoSQL database" },
    { name: "AWS", icon: "☁️", description: "Cloud infrastructure" },
    { name: "Docker", icon: "🐳", description: "Containerization" },
  ];

  return (
    <div className="min-h-screen pt-20 px-8 md:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-800/50 to-slate-700/30 flex items-center justify-center card-border">
              <PagesIcon />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Custom{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Pages
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We create custom web pages tailored to your specific needs, from
            landing pages to complex web applications.
          </p>
        </motion.div>

        {/* Page Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pageFeatures.map((page, index) => (
            <motion.div
              key={page.title}
              className="card-border glass p-6 rounded-xl hover:glass-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${page.gradient} flex items-center justify-center text-3xl mb-4`}
              >
                {page.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">{page.title}</h3>
              <p className="text-gray-400 mb-4">{page.description}</p>

              <ul className="space-y-2 mb-6">
                {page.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                className="w-full px-4 py-2 rounded-md glass text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="card-border glass p-4 rounded-lg text-center hover:glass-hover transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="font-semibold text-sm mb-1">{tech.name}</div>
                <div className="text-xs text-gray-400">{tech.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="card-border glass p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">
              Development Features
            </h3>
            <div className="space-y-4">
              {[
                "Responsive Design",
                "Performance Optimization",
                "SEO Best Practices",
                "Cross-browser Compatibility",
                "Accessibility Standards",
                "Progressive Web App (PWA)",
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-border glass p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-pink-400">
              Business Benefits
            </h3>
            <div className="space-y-4">
              {[
                "Increased Conversion Rates",
                "Better User Engagement",
                "Enhanced Brand Image",
                "Mobile-First Experience",
                "Search Engine Visibility",
                "Analytics & Insights",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-pink-500 mr-3"></div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold mb-12">Our Development Process</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Discovery",
                desc: "Understanding requirements",
                icon: "🔍",
              },
              {
                step: "2",
                title: "Planning",
                desc: "Architecture & wireframes",
                icon: "📋",
              },
              {
                step: "3",
                title: "Design",
                desc: "UI/UX and visual design",
                icon: "🎨",
              },
              {
                step: "4",
                title: "Development",
                desc: "Coding & implementation",
                icon: "💻",
              },
              {
                step: "5",
                title: "Launch",
                desc: "Testing & deployment",
                icon: "🚀",
              },
            ].map((process, index) => (
              <div key={process.step} className="relative">
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  <span className="text-3xl">{process.icon}</span>
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-400 text-sm">{process.desc}</p>

                {/* Connection Line */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-10 left-full w-full">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center card-border glass p-12 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Perfect Website?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's create a custom solution that perfectly fits your business
            needs and exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="btn-primary px-8 py-4 rounded-lg text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
            <motion.button
              className="px-8 py-4 rounded-lg glass text-gray-300 hover:text-white transition-colors text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

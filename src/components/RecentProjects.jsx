import React from "react";
import { motion } from "framer-motion";

export default function RecentProjects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      client: "TechMart Global",
      description: "Modern shopping experience with 245% revenue growth",
      image: "🛒",
      gradient: "from-blue-600 to-purple-600",
      tags: ["React", "Node.js", "AWS"],
      stats: { metric: "+245%", label: "Revenue Growth" },
    },
    {
      title: "Healthcare Portal",
      client: "MediCare Plus",
      description: "HIPAA-compliant patient management system",
      image: "🏥",
      gradient: "from-green-600 to-teal-600",
      tags: ["React", "Python", "Azure"],
      stats: { metric: "95%", label: "Patient Satisfaction" },
    },
    {
      title: "Booking Platform",
      client: "ReserveNow",
      description: "Real-time reservation system for hospitality",
      image: "📅",
      gradient: "from-cyan-600 to-blue-600",
      tags: ["Next.js", "PostgreSQL", "Stripe"],
      stats: { metric: "50K+", label: "Bookings/Month" },
    },
    {
      title: "Payment Gateway",
      client: "PayFlow Systems",
      description: "Secure payment processing with multi-currency support",
      image: "💳",
      gradient: "from-purple-600 to-pink-600",
      tags: ["Node.js", "MongoDB", "Blockchain"],
      stats: { metric: "$5M+", label: "Processed Monthly" },
    },
  ];

  return (
    <section className="px-8 md:px-20 py-16 bg-gradient-to-b from-transparent to-slate-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Recent{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our latest work and see how we've helped businesses achieve
            remarkable results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card-border glass p-6 rounded-xl hover:glass-hover transition-all duration-300 group"
            >
              {/* Project Header */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  {project.image}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-1">{project.title}</h4>
                  <p className="text-sm text-blue-400">{project.client}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Stats */}
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 p-4 rounded-lg mb-4">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {project.stats.metric}
                </div>
                <div className="text-sm text-gray-400">
                  {project.stats.label}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Project Link */}
              <motion.div
                className="mt-4 pt-4 border-t border-white/10"
                whileHover={{ x: 5 }}
              >
                <a
                  href="#"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
                >
                  View Case Study
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg glass text-gray-300 hover:text-white transition-all duration-300 inline-flex items-center gap-2"
          >
            View All Projects
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

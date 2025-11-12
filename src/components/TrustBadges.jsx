import React from "react";
import { motion } from "framer-motion";

export default function TrustBadges() {
  const awards = [
    {
      icon: "🏆",
      title: "Best Web Agency 2024",
      org: "WebAwards",
    },
    {
      icon: "⭐",
      title: "Top Rated Developer",
      org: "Clutch",
    },
    {
      icon: "🎖️",
      title: "Excellence in Design",
      org: "Awwwards",
    },
    {
      icon: "✨",
      title: "Innovation Award",
      org: "CSS Design Awards",
    },
  ];

  const certifications = [
    { name: "Google Partner", icon: "🔵" },
    { name: "AWS Certified", icon: "🟠" },
    { name: "React Certified", icon: "⚛️" },
    { name: "Verified Agency", icon: "✓" },
  ];

  const partners = [
    { name: "Vercel", color: "from-black to-gray-800" },
    { name: "Stripe", color: "from-purple-600 to-blue-500" },
    { name: "Figma", color: "from-pink-500 to-orange-500" },
    { name: "GitHub", color: "from-gray-700 to-gray-900" },
  ];

  return (
    <section className="relative py-16 px-8 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Award-Winning <span className="hero-accent">Excellence</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass card-border rounded-xl p-6"
              >
                <div className="text-5xl mb-3">{award.icon}</div>
                <div className="font-semibold text-white mb-1">
                  {award.title}
                </div>
                <div className="text-sm text-gray-400">{award.org}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h4 className="text-2xl font-bold text-center mb-6 text-gray-300">
            Certified & Trusted
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-full px-6 py-3 flex items-center gap-3 border border-white/10"
              >
                <span className="text-2xl">{cert.icon}</span>
                <span className="text-gray-300 font-medium">{cert.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h4 className="text-2xl font-bold text-center mb-6 text-gray-300">
            Technology Partners
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${partner.color} rounded-xl p-6 flex items-center justify-center h-24 relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <span className="text-white text-xl font-bold relative z-10">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass card-border rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">🔒</div>
              <div className="font-semibold text-white mb-1">
                Bank-Level Security
              </div>
              <div className="text-sm text-gray-400">
                SSL, encryption, & compliance
              </div>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold text-white mb-1">
                Lightning Fast
              </div>
              <div className="text-sm text-gray-400">
                99.9% uptime guarantee
              </div>
            </div>
            <div>
              <div className="text-3xl mb-2">💼</div>
              <div className="font-semibold text-white mb-1">
                Business Insured
              </div>
              <div className="text-sm text-gray-400">
                $2M liability coverage
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

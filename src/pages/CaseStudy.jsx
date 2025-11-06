import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CaseStudyIcon = () => (
  <svg
    viewBox="0 0 200 150"
    className="w-full h-32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="caseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="50%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>

    {/* Document/Portfolio */}
    <rect
      x="50"
      y="30"
      width="100"
      height="90"
      fill="rgba(15, 23, 42, 0.8)"
      stroke="url(#caseGradient)"
      strokeWidth="2"
      rx="8"
    />

    {/* Document Content */}
    <rect
      x="60"
      y="50"
      width="60"
      height="4"
      fill="url(#caseGradient)"
      rx="2"
    />
    <rect
      x="60"
      y="60"
      width="45"
      height="3"
      fill="rgba(245, 158, 11, 0.6)"
      rx="1"
    />
    <rect
      x="60"
      y="70"
      width="50"
      height="3"
      fill="rgba(239, 68, 68, 0.6)"
      rx="1"
    />

    {/* Chart/Graph */}
    <rect
      x="60"
      y="85"
      width="8"
      height="15"
      fill="rgba(245, 158, 11, 0.8)"
      rx="1"
    />
    <rect
      x="72"
      y="80"
      width="8"
      height="20"
      fill="rgba(239, 68, 68, 0.8)"
      rx="1"
    />
    <rect
      x="84"
      y="75"
      width="8"
      height="25"
      fill="rgba(236, 72, 153, 0.8)"
      rx="1"
    />
    <rect
      x="96"
      y="70"
      width="8"
      height="30"
      fill="url(#caseGradient)"
      rx="1"
    />

    {/* Success Indicators */}
    <circle cx="130" cy="55" r="3" fill="#10b981">
      <animate
        attributeName="r"
        values="3;5;3"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <path
      d="M127 55 L129 57 L133 51"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Floating Elements */}
    <circle cx="30" cy="60" r="2" fill="rgba(245, 158, 11, 0.7)">
      <animate
        attributeName="cy"
        values="60;55;60"
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="170" cy="80" r="2" fill="rgba(236, 72, 153, 0.7)">
      <animate
        attributeName="cy"
        values="80;75;80"
        dur="4s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default function CaseStudy() {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      title: "E-Commerce Platform Revolution",
      client: "TechMart Global",
      industry: "E-Commerce",
      duration: "8 months",
      team: "6 developers",
      challenge:
        "Legacy e-commerce platform couldn't handle growing traffic and needed complete modernization to support international expansion.",
      solution:
        "Built a modern, scalable e-commerce platform using React, Node.js, and cloud infrastructure with microservices architecture.",
      results: [
        {
          metric: "Revenue Growth",
          value: "+245%",
          description: "Increased online sales within 6 months",
        },
        {
          metric: "Page Load Speed",
          value: "2.1s",
          description: "Average page load time improvement",
        },
        {
          metric: "User Engagement",
          value: "+180%",
          description: "Session duration and conversion rate",
        },
        {
          metric: "Global Reach",
          value: "15 countries",
          description: "Successfully expanded to new markets",
        },
      ],
      tech: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Kubernetes"],
      image: "🛒",
      gradient: "from-blue-600 to-purple-600",
      testimonial:
        "Phenomenal Web transformed our business completely. The new platform exceeded all expectations and delivered results beyond our projections.",
      clientRole: "CTO, TechMart Global",
    },
    {
      title: "Healthcare Management System",
      client: "MediCare Plus",
      industry: "Healthcare",
      duration: "12 months",
      team: "8 developers",
      challenge:
        "Hospital needed HIPAA-compliant system to manage patient records, appointments, and telemedicine capabilities during COVID-19.",
      solution:
        "Developed comprehensive healthcare management system with secure patient portals, telemedicine integration, and real-time analytics.",
      results: [
        {
          metric: "Patient Satisfaction",
          value: "95%",
          description: "Improved patient experience scores",
        },
        {
          metric: "Administrative Efficiency",
          value: "+60%",
          description: "Reduced manual paperwork and processing time",
        },
        {
          metric: "Telemedicine Adoption",
          value: "80%",
          description: "Patients using virtual consultations",
        },
        {
          metric: "Cost Reduction",
          value: "35%",
          description: "Operational cost savings achieved",
        },
      ],
      tech: ["React", "Python", "PostgreSQL", "Azure", "HL7 FHIR", "WebRTC"],
      image: "🏥",
      gradient: "from-green-600 to-teal-600",
      testimonial:
        "The system has revolutionized how we deliver healthcare. Patient satisfaction is at an all-time high and our staff efficiency has dramatically improved.",
      clientRole: "Chief Medical Officer, MediCare Plus",
    },
    {
      title: "Smart Logistics Platform",
      client: "LogiFlow Solutions",
      industry: "Logistics",
      duration: "10 months",
      team: "7 developers",
      challenge:
        "Growing logistics company needed real-time tracking, route optimization, and warehouse management to handle 500% business growth.",
      solution:
        "Created AI-powered logistics platform with real-time GPS tracking, machine learning route optimization, and automated warehouse management.",
      results: [
        {
          metric: "Delivery Efficiency",
          value: "+150%",
          description: "Faster delivery times with optimized routes",
        },
        {
          metric: "Fuel Savings",
          value: "40%",
          description: "Reduced fuel costs through route optimization",
        },
        {
          metric: "Customer Satisfaction",
          value: "98%",
          description: "On-time delivery rate achieved",
        },
        {
          metric: "Operational Scale",
          value: "500%",
          description: "Business growth supported seamlessly",
        },
      ],
      tech: ["Vue.js", "Python", "TensorFlow", "Redis", "GCP", "IoT"],
      image: "🚛",
      gradient: "from-orange-600 to-red-600",
      testimonial:
        "This platform enabled us to scale from a regional player to a national logistics leader. The ROI was evident within the first quarter.",
      clientRole: "Operations Director, LogiFlow Solutions",
    },
    {
      title: "Financial Trading Platform",
      client: "InvestPro Capital",
      industry: "FinTech",
      duration: "14 months",
      team: "10 developers",
      challenge:
        "Investment firm required high-frequency trading platform with real-time market data, advanced analytics, and regulatory compliance.",
      solution:
        "Built enterprise-grade trading platform with microsecond latency, real-time risk management, and comprehensive compliance reporting.",
      results: [
        {
          metric: "Trade Execution Speed",
          value: "50μs",
          description: "Ultra-low latency trade execution",
        },
        {
          metric: "Trading Volume",
          value: "$2.5B",
          description: "Monthly trading volume processed",
        },
        {
          metric: "System Uptime",
          value: "99.99%",
          description: "Platform reliability achieved",
        },
        {
          metric: "Compliance Score",
          value: "100%",
          description: "Regulatory requirements met",
        },
      ],
      tech: ["C++", "React", "Kafka", "TimescaleDB", "AWS", "Blockchain"],
      image: "💰",
      gradient: "from-emerald-600 to-cyan-600",
      testimonial:
        "The platform's performance and reliability have given us a significant competitive advantage in high-frequency trading markets.",
      clientRole: "Head of Technology, InvestPro Capital",
    },
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
              <CaseStudyIcon />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Success{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Stories
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital
            presence and achieve remarkable growth through innovative technology
            solutions.
          </p>
        </motion.div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCase(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCase === index
                  ? "bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/50 text-white"
                  : "glass text-gray-300 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {study.industry}
            </motion.button>
          ))}
        </div>

        {/* Selected Case Study */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="card-border glass p-8 rounded-2xl"
          >
            {/* Case Study Header */}
            <div className="flex items-start gap-6 mb-8">
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-r ${caseStudies[selectedCase].gradient} flex items-center justify-center text-4xl flex-shrink-0`}
              >
                {caseStudies[selectedCase].image}
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">
                  {caseStudies[selectedCase].title}
                </h2>
                <p className="text-xl text-gray-300 mb-4">
                  {caseStudies[selectedCase].client}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <span>📅 {caseStudies[selectedCase].duration}</span>
                  <span>👥 {caseStudies[selectedCase].team}</span>
                  <span>🏢 {caseStudies[selectedCase].industry}</span>
                </div>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400">
                  Challenge
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {caseStudies[selectedCase].challenge}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  Solution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {caseStudies[selectedCase].solution}
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">
                Results & Impact
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {caseStudies[selectedCase].results.map((result, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 p-6 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-green-400 mb-2">
                      {result.value}
                    </div>
                    <div className="text-lg font-semibold mb-2">
                      {result.metric}
                    </div>
                    <div className="text-sm text-gray-400">
                      {result.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {caseStudies[selectedCase].tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-slate-800/30 to-slate-700/20 p-6 rounded-lg">
              <div className="text-4xl text-gray-500 mb-4">"</div>
              <p className="text-lg text-gray-300 mb-4 italic">
                {caseStudies[selectedCase].testimonial}
              </p>
              <div className="text-gray-400">
                — {caseStudies[selectedCase].clientRole}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our growing list of successful clients who have transformed
            their businesses with our innovative solutions.
          </p>
          <motion.button
            className="btn-primary px-8 py-4 rounded-lg text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

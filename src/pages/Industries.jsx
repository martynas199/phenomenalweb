import React from "react";
import { motion } from "framer-motion";

const IndustryHeroIcon = () => (
  <svg
    viewBox="0 0 200 150"
    className="w-full h-32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="industryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="50%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>

    {/* Industry Buildings */}
    <rect
      x="20"
      y="80"
      width="25"
      height="50"
      fill="url(#industryGradient)"
      rx="3"
      opacity="0.8"
    />
    <rect
      x="50"
      y="70"
      width="30"
      height="60"
      fill="rgba(59, 130, 246, 0.8)"
      rx="3"
    />
    <rect
      x="85"
      y="85"
      width="20"
      height="45"
      fill="rgba(6, 182, 212, 0.8)"
      rx="3"
    />
    <rect
      x="110"
      y="75"
      width="35"
      height="55"
      fill="rgba(16, 185, 129, 0.8)"
      rx="3"
    />
    <rect
      x="150"
      y="90"
      width="25"
      height="40"
      fill="url(#industryGradient)"
      rx="3"
      opacity="0.9"
    />

    {/* Building Details */}
    <rect
      x="25"
      y="90"
      width="3"
      height="3"
      fill="rgba(255, 255, 255, 0.6)"
      rx="0.5"
    />
    <rect
      x="30"
      y="90"
      width="3"
      height="3"
      fill="rgba(255, 255, 255, 0.6)"
      rx="0.5"
    />
    <rect
      x="35"
      y="90"
      width="3"
      height="3"
      fill="rgba(255, 255, 255, 0.6)"
      rx="0.5"
    />

    <rect
      x="55"
      y="80"
      width="4"
      height="4"
      fill="rgba(255, 255, 255, 0.6)"
      rx="0.5"
    />
    <rect
      x="65"
      y="80"
      width="4"
      height="4"
      fill="rgba(255, 255, 255, 0.6)"
      rx="0.5"
    />
    <rect
      x="55"
      y="90"
      width="4"
      height="4"
      fill="rgba(255, 255, 255, 0.6)"
      rx="0.5"
    />
    <rect
      x="65"
      y="90"
      width="4"
      height="4"
      fill="rgba(255, 255, 255, 0.6)"
      rx="0.5"
    />

    {/* Network Connections */}
    <path
      d="M45 100 Q75 90 105 100"
      stroke="rgba(16, 185, 129, 0.5)"
      strokeWidth="2"
      strokeDasharray="3,3"
    >
      <animate
        attributeName="stroke-dashoffset"
        values="0;-12"
        dur="3s"
        repeatCount="indefinite"
      />
    </path>
    <path
      d="M80 105 Q110 95 140 105"
      stroke="rgba(59, 130, 246, 0.5)"
      strokeWidth="2"
      strokeDasharray="3,3"
    >
      <animate
        attributeName="stroke-dashoffset"
        values="0;-12"
        dur="3s"
        begin="1s"
        repeatCount="indefinite"
      />
    </path>

    {/* Data Points */}
    <circle cx="32" cy="60" r="2" fill="#10b981" opacity="0.8">
      <animate
        attributeName="r"
        values="2;3;2"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="65" cy="50" r="2" fill="#3b82f6" opacity="0.8">
      <animate
        attributeName="r"
        values="2;3;2"
        dur="2.5s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="125" cy="55" r="2" fill="#06b6d4" opacity="0.8">
      <animate
        attributeName="r"
        values="2;3;2"
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default function Industries() {
  const industries = [
    {
      title: "Real Estate",
      description:
        "Comprehensive solutions for property management, real estate agencies, and investment platforms.",
      image: "🏢",
      features: [
        "Property Management Systems",
        "Virtual Tours & 3D Visualization",
        "CRM for Real Estate",
        "Investment Tracking Platforms",
      ],
      caseStudy:
        "Built a property management platform serving 10,000+ properties",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      title: "Healthcare",
      description:
        "HIPAA-compliant solutions for healthcare providers, telemedicine, and patient management.",
      image: "🏥",
      features: [
        "Electronic Health Records",
        "Telemedicine Platforms",
        "Patient Portals",
        "Medical Device Integration",
      ],
      caseStudy:
        "Developed telehealth platform used by 500+ medical professionals",
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      title: "E-Commerce",
      description:
        "Scalable online stores and marketplaces that drive sales and enhance customer experience.",
      image: "🛒",
      features: [
        "Multi-vendor Marketplaces",
        "Payment Gateway Integration",
        "Inventory Management",
        "Customer Analytics",
      ],
      caseStudy: "E-commerce platform processing $2M+ in monthly transactions",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Logistics & Supply Chain",
      description:
        "End-to-end logistics solutions for warehousing, delivery, and supply chain optimization.",
      image: "🚛",
      features: [
        "Warehouse Management",
        "Route Optimization",
        "Fleet Tracking",
        "Supply Chain Analytics",
      ],
      caseStudy: "Logistics platform managing 50,000+ deliveries per month",
      gradient: "from-orange-600 to-red-600",
    },
    {
      title: "Financial Services",
      description:
        "Secure fintech solutions for banking, payments, and financial management applications.",
      image: "💰",
      features: [
        "Digital Banking Platforms",
        "Payment Processing",
        "Risk Management",
        "Regulatory Compliance",
      ],
      caseStudy: "Fintech app with 100,000+ active users and $50M+ processed",
      gradient: "from-green-600 to-emerald-600",
    },
    {
      title: "Education Technology",
      description:
        "Interactive learning platforms and educational management systems for modern education.",
      image: "🎓",
      features: [
        "Learning Management Systems",
        "Virtual Classrooms",
        "Student Information Systems",
        "Assessment Tools",
      ],
      caseStudy: "EdTech platform serving 25,000+ students across 100+ schools",
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      title: "Manufacturing",
      description:
        "Industrial IoT solutions and manufacturing execution systems for smart factories.",
      image: "🏭",
      features: [
        "IoT Device Integration",
        "Production Analytics",
        "Quality Control Systems",
        "Predictive Maintenance",
      ],
      caseStudy:
        "Manufacturing platform reducing downtime by 40% for major client",
      gradient: "from-slate-600 to-gray-600",
    },
    {
      title: "Entertainment & Media",
      description:
        "Streaming platforms, content management, and digital media distribution solutions.",
      image: "🎬",
      features: [
        "Video Streaming Platforms",
        "Content Management",
        "Digital Rights Management",
        "Audience Analytics",
      ],
      caseStudy:
        "Streaming service with 1M+ hours of content delivered monthly",
      gradient: "from-violet-600 to-purple-600",
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
              <IndustryHeroIcon />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Industry{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We've delivered successful solutions across diverse industries,
            understanding unique challenges and compliance requirements for each
            sector.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              className="card-border glass p-8 rounded-xl hover:glass-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Industry Header */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${industry.gradient} flex items-center justify-center text-3xl`}
                >
                  {industry.image}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{industry.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {industry.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-3 text-gray-200">
                  Key Solutions
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {industry.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-400 to-blue-500 mr-2 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study */}
              <div className="bg-gradient-to-r from-slate-800/30 to-slate-700/20 p-4 rounded-lg mb-4">
                <h4 className="text-sm font-semibold text-green-400 mb-1">
                  Case Study
                </h4>
                <p className="text-sm text-gray-300">{industry.caseStudy}</p>
              </div>

              {/* CTA */}
              <motion.button
                className="w-full px-4 py-3 rounded-md bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 text-green-300 hover:from-green-600/30 hover:to-blue-600/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Solutions
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Success Stats */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            {
              number: "50+",
              label: "Industries Served",
              color: "text-blue-400",
            },
            {
              number: "200+",
              label: "Projects Delivered",
              color: "text-green-400",
            },
            {
              number: "99%",
              label: "Client Satisfaction",
              color: "text-purple-400",
            },
            {
              number: "24/7",
              label: "Support Available",
              color: "text-orange-400",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="card-border glass p-6 rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

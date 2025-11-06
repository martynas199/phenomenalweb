import React from "react";
import { motion } from "framer-motion";

const ServicesIcon = () => (
  <svg
    viewBox="0 0 200 150"
    className="w-full h-32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="serviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>

    {/* Gear Icons */}
    <g transform="translate(50, 75)">
      <circle
        cx="0"
        cy="0"
        r="25"
        fill="none"
        stroke="url(#serviceGradient)"
        strokeWidth="3"
      />
      <circle cx="0" cy="0" r="15" fill="rgba(59, 130, 246, 0.2)" />
      <g>
        <rect
          x="-3"
          y="-30"
          width="6"
          height="8"
          fill="url(#serviceGradient)"
          rx="2"
        />
        <rect
          x="-3"
          y="22"
          width="6"
          height="8"
          fill="url(#serviceGradient)"
          rx="2"
        />
        <rect
          x="-30"
          y="-3"
          width="8"
          height="6"
          fill="url(#serviceGradient)"
          rx="2"
        />
        <rect
          x="22"
          y="-3"
          width="8"
          height="6"
          fill="url(#serviceGradient)"
          rx="2"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0;360"
          dur="10s"
          repeatCount="indefinite"
        />
      </g>
    </g>

    <g transform="translate(150, 75)">
      <circle
        cx="0"
        cy="0"
        r="20"
        fill="none"
        stroke="rgba(16, 185, 129, 0.8)"
        strokeWidth="2"
      />
      <circle cx="0" cy="0" r="12" fill="rgba(16, 185, 129, 0.2)" />
      <g>
        <rect x="-2" y="-25" width="4" height="6" fill="#10b981" rx="1" />
        <rect x="-2" y="19" width="4" height="6" fill="#10b981" rx="1" />
        <rect x="-25" y="-2" width="6" height="4" fill="#10b981" rx="1" />
        <rect x="19" y="-2" width="6" height="4" fill="#10b981" rx="1" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360;0"
          dur="8s"
          repeatCount="indefinite"
        />
      </g>
    </g>

    {/* Connection Lines */}
    <path
      d="M75 75 L125 75"
      stroke="rgba(139, 92, 246, 0.5)"
      strokeWidth="2"
      strokeDasharray="5,5"
    >
      <animate
        attributeName="stroke-dashoffset"
        values="0;-20"
        dur="2s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Full-stack web applications using modern technologies like React, Node.js, and cloud services.",
      features: [
        "Custom Web Apps",
        "E-commerce Platforms",
        "API Development",
        "Database Design",
      ],
      icon: "💻",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design that converts visitors into customers through intuitive interfaces.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
      ],
      icon: "🎨",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: [
        "iOS Development",
        "Android Apps",
        "React Native",
        "App Store Optimization",
      ],
      icon: "📱",
      gradient: "from-green-600 to-blue-600",
    },
    {
      title: "Digital Strategy",
      description:
        "Comprehensive digital transformation strategies to grow your business online.",
      features: [
        "SEO Optimization",
        "Performance Analytics",
        "Conversion Optimization",
        "Digital Marketing",
      ],
      icon: "📈",
      gradient: "from-orange-600 to-red-600",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment solutions for modern applications.",
      features: [
        "AWS/Azure Setup",
        "DevOps Implementation",
        "Scalability Planning",
        "Security Audits",
      ],
      icon: "☁️",
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      title: "Consulting",
      description:
        "Technical consulting and code reviews to optimize your existing digital assets.",
      features: [
        "Code Reviews",
        "Architecture Planning",
        "Performance Optimization",
        "Team Training",
      ],
      icon: "🔧",
      gradient: "from-indigo-600 to-purple-600",
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
              <ServicesIcon />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to transform your ideas
            into powerful, scalable applications that drive business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card-border glass p-6 rounded-xl hover:glass-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Service Icon */}
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl mb-4`}
              >
                {service.icon}
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                className="mt-6 w-full px-4 py-2 rounded-md glass text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery",
                desc: "Understanding your goals and requirements",
              },
              {
                step: "2",
                title: "Design",
                desc: "Creating wireframes and visual designs",
              },
              {
                step: "3",
                title: "Develop",
                desc: "Building your solution with best practices",
              },
              {
                step: "4",
                title: "Deploy",
                desc: "Launching and optimizing performance",
              },
            ].map((process, index) => (
              <div key={process.step} className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-400 text-sm">{process.desc}</p>

                {/* Connection Arrow */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-full">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent mx-auto"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

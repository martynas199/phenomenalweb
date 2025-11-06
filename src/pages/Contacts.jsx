import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactIcon = () => (
  <svg
    viewBox="0 0 200 150"
    className="w-full h-32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="50%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>

    {/* Phone */}
    <rect
      x="30"
      y="40"
      width="50"
      height="80"
      fill="rgba(59, 130, 246, 0.8)"
      rx="8"
    />
    <rect
      x="35"
      y="50"
      width="40"
      height="55"
      fill="rgba(15, 23, 42, 0.8)"
      rx="4"
    />
    <circle cx="55" cy="115" r="6" fill="rgba(6, 182, 212, 0.8)" />

    {/* Email Icon */}
    <rect
      x="120"
      y="55"
      width="60"
      height="40"
      fill="none"
      stroke="url(#contactGradient)"
      strokeWidth="3"
      rx="4"
    />
    <path
      d="M120 55 L150 75 L180 55"
      stroke="url(#contactGradient)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Message Bubbles */}
    <circle cx="100" cy="30" r="15" fill="rgba(139, 92, 246, 0.6)" />
    <path
      d="M85 30 Q85 20 100 20 Q115 20 115 30 Q115 40 100 40 L95 40 L85 50 Z"
      fill="rgba(139, 92, 246, 0.6)"
    />
    <circle cx="97" cy="27" r="2" fill="white" />
    <circle cx="103" cy="27" r="2" fill="white" />
    <path
      d="M94 32 Q100 36 106 32"
      stroke="white"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />

    {/* Signal Waves */}
    <path
      d="M90 60 Q95 55 100 60"
      stroke="rgba(6, 182, 212, 0.6)"
      strokeWidth="2"
      fill="none"
    >
      <animate
        attributeName="opacity"
        values="0.6;1;0.6"
        dur="2s"
        repeatCount="indefinite"
      />
    </path>
    <path
      d="M85 65 Q95 50 105 65"
      stroke="rgba(6, 182, 212, 0.4)"
      strokeWidth="2"
      fill="none"
    >
      <animate
        attributeName="opacity"
        values="0.4;0.8;0.4"
        dur="2s"
        begin="0.5s"
        repeatCount="indefinite"
      />
    </path>

    {/* Location Pin */}
    <circle cx="160" cy="25" r="8" fill="rgba(239, 68, 68, 0.8)" />
    <circle cx="160" cy="22" r="4" fill="white" />
    <path
      d="M160 33 L160 40"
      stroke="rgba(239, 68, 68, 0.8)"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      detail: "hello@phenomenalweb.com",
      description: "Send us an email anytime",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: "📱",
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST",
      gradient: "from-green-600 to-teal-600",
    },
    {
      icon: "🏢",
      title: "Visit Us",
      detail: "123 Innovation Street",
      description: "San Francisco, CA 94105",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: "💬",
      title: "Live Chat",
      detail: "Available 24/7",
      description: "Instant support online",
      gradient: "from-orange-600 to-red-600",
    },
  ];

  const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "E-Commerce Platform",
    "Custom Software",
    "Digital Transformation",
    "Consulting",
    "Other",
  ];

  const budgetRanges = [
    "Under $10K",
    "$10K - $25K",
    "$25K - $50K",
    "$50K - $100K",
    "$100K+",
    "Let's Discuss",
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
              <ContactIcon />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project
            and create something phenomenal together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-border glass p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Start Your Project</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    >
                      <option value="">Select Project Type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    >
                      <option value="">Select Budget Range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary px-6 py-4 rounded-lg text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="card-border glass p-6 rounded-xl hover:glass-hover transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-r ${info.gradient} flex items-center justify-center text-2xl`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{info.title}</h3>
                      <p className="text-lg text-blue-300">{info.detail}</p>
                      <p className="text-sm text-gray-400">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="card-border glass p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Quick Answers</h3>
              <div className="space-y-4">
                {[
                  {
                    q: "How long does a typical project take?",
                    a: "Most projects are completed within 2-6 months, depending on complexity.",
                  },
                  {
                    q: "Do you provide ongoing support?",
                    a: "Yes, we offer maintenance and support packages for all our projects.",
                  },
                  {
                    q: "Can you work with existing teams?",
                    a: "Absolutely! We integrate seamlessly with your existing development teams.",
                  },
                  {
                    q: "What's your development process?",
                    a: "We follow agile methodology with regular updates and client collaboration.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-slate-600 pb-4 last:border-b-0"
                  >
                    <h4 className="font-semibold text-gray-200 mb-2">
                      {faq.q}
                    </h4>
                    <p className="text-gray-400 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="card-border glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  {
                    name: "LinkedIn",
                    icon: "💼",
                    color: "from-blue-600 to-blue-700",
                  },
                  {
                    name: "Twitter",
                    icon: "🐦",
                    color: "from-sky-500 to-sky-600",
                  },
                  {
                    name: "GitHub",
                    icon: "⚡",
                    color: "from-gray-700 to-gray-800",
                  },
                  {
                    name: "Dribbble",
                    icon: "🎨",
                    color: "from-pink-500 to-pink-600",
                  },
                ].map((social) => (
                  <motion.div
                    key={social.name}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${social.color} flex items-center justify-center cursor-pointer`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

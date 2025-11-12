import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO",
      company: "TechMart Global",
      image: "SC",
      rating: 5,
      text: "Phenomenal Web transformed our e-commerce platform completely. Sales increased by 245% in just 3 months. Their attention to detail and technical expertise is unmatched.",
      logo: "🛍️",
    },
    {
      name: "Michael Rodriguez",
      role: "Director of Operations",
      company: "MediCare Plus",
      image: "MR",
      rating: 5,
      text: "The booking system they built handles 50,000+ appointments monthly without a hitch. Patient satisfaction jumped to 95%. Best investment we've made.",
      logo: "🏥",
    },
    {
      name: "Emily Thompson",
      role: "Founder",
      company: "ReserveNow",
      image: "ET",
      rating: 5,
      text: "From concept to launch in 8 weeks. The team understood our vision perfectly and delivered beyond expectations. The platform is fast, beautiful, and converts like crazy.",
      logo: "📅",
    },
    {
      name: "David Park",
      role: "CTO",
      company: "PayFlow Systems",
      image: "DP",
      rating: 5,
      text: "Security and performance were critical for our payment gateway. They delivered enterprise-grade code with bank-level security. Processing $5M+ monthly with zero issues.",
      logo: "💳",
    },
    {
      name: "Lisa Martinez",
      role: "Marketing Director",
      company: "StyleHub Fashion",
      image: "LM",
      rating: 5,
      text: "Our conversion rate doubled after the redesign. The site is gorgeous, loads instantly, and works perfectly on all devices. Customer compliments daily!",
      logo: "👗",
    },
    {
      name: "James Wilson",
      role: "Owner",
      company: "PropertyPro Realty",
      image: "JW",
      rating: 5,
      text: "The real estate platform they built generates 40+ qualified leads per week. The virtual tour integration is incredible. ROI achieved in first month.",
      logo: "🏡",
    },
  ];

  return (
    <section className="relative py-20 px-8 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Client <span className="hero-accent">Success Stories</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about
            working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="glass card-border rounded-xl p-6 relative"
            >
              {/* Company Logo */}
              <div className="absolute top-4 right-4 text-4xl opacity-20">
                {testimonial.logo}
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: "50+", label: "Happy Clients" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "100+", label: "Projects Delivered" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass card-border rounded-xl p-6 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

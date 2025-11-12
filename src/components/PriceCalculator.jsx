import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PriceCalculator() {
  const [selections, setSelections] = useState({
    projectType: "",
    features: [],
    timeline: "",
    design: "",
  });

  const projectTypes = [
    { id: "landing", name: "Landing Page", basePrice: 2500 },
    { id: "corporate", name: "Corporate Website", basePrice: 5000 },
    { id: "ecommerce", name: "E-Commerce Store", basePrice: 8000 },
    { id: "webapp", name: "Web Application", basePrice: 15000 },
    { id: "custom", name: "Custom Solution", basePrice: 20000 },
  ];

  const features = [
    { id: "cms", name: "Content Management", price: 1500 },
    { id: "auth", name: "User Authentication", price: 2000 },
    { id: "payment", name: "Payment Integration", price: 2500 },
    { id: "booking", name: "Booking System", price: 3000 },
    { id: "api", name: "API Development", price: 3500 },
    { id: "analytics", name: "Analytics Dashboard", price: 2000 },
    { id: "seo", name: "Advanced SEO", price: 1000 },
    { id: "mobile", name: "Mobile App", price: 8000 },
  ];

  const timelines = [
    { id: "rush", name: "Rush (2-3 weeks)", multiplier: 1.5 },
    { id: "standard", name: "Standard (4-6 weeks)", multiplier: 1.0 },
    { id: "flexible", name: "Flexible (6-8 weeks)", multiplier: 0.9 },
  ];

  const designs = [
    { id: "template", name: "Template Based", price: 0 },
    { id: "custom", name: "Custom Design", price: 3000 },
    { id: "premium", name: "Premium Design", price: 6000 },
  ];

  const handleProjectType = (id) => {
    setSelections({ ...selections, projectType: id });
  };

  const handleFeatureToggle = (id) => {
    const newFeatures = selections.features.includes(id)
      ? selections.features.filter((f) => f !== id)
      : [...selections.features, id];
    setSelections({ ...selections, features: newFeatures });
  };

  const calculatePrice = () => {
    let total = 0;

    // Base project price
    const projectType = projectTypes.find(
      (p) => p.id === selections.projectType
    );
    if (projectType) total += projectType.basePrice;

    // Add features
    selections.features.forEach((featureId) => {
      const feature = features.find((f) => f.id === featureId);
      if (feature) total += feature.price;
    });

    // Add design
    const design = designs.find((d) => d.id === selections.design);
    if (design) total += design.price;

    // Apply timeline multiplier
    const timeline = timelines.find((t) => t.id === selections.timeline);
    if (timeline) total *= timeline.multiplier;

    return total;
  };

  const estimatedPrice = calculatePrice();

  return (
    <section className="relative py-20 px-8 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Project <span className="hero-accent">Price Calculator</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get an instant estimate for your project. Select your requirements
            below for a transparent pricing breakdown.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Type */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass card-border rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm">
                  1
                </span>
                Project Type
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleProjectType(type.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selections.projectType === type.id
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="font-semibold text-white">{type.name}</div>
                    <div className="text-sm text-gray-400 mt-1">
                      From ${type.basePrice.toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass card-border rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm">
                  2
                </span>
                Features (Select Multiple)
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => handleFeatureToggle(feature.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left flex items-center justify-between ${
                      selections.features.includes(feature.id)
                        ? "border-green-500 bg-green-500/10"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-white">
                        {feature.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        +${feature.price.toLocaleString()}
                      </div>
                    </div>
                    {selections.features.includes(feature.id) && (
                      <svg
                        className="w-6 h-6 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass card-border rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm">
                  3
                </span>
                Timeline
              </h3>
              <div className="grid md:grid-cols-3 gap-3">
                {timelines.map((timeline) => (
                  <button
                    key={timeline.id}
                    onClick={() =>
                      setSelections({ ...selections, timeline: timeline.id })
                    }
                    className={`p-4 rounded-lg border-2 transition-all text-center ${
                      selections.timeline === timeline.id
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="font-semibold text-white">
                      {timeline.name}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {timeline.multiplier > 1 && "+"}
                      {timeline.multiplier < 1 && "-"}
                      {timeline.multiplier !== 1 &&
                        Math.abs((1 - timeline.multiplier) * 100).toFixed(0)}
                      {timeline.multiplier !== 1 && "%"}
                      {timeline.multiplier === 1 && "Standard"}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Design Level */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass card-border rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm">
                  4
                </span>
                Design Level
              </h3>
              <div className="grid md:grid-cols-3 gap-3">
                {designs.map((design) => (
                  <button
                    key={design.id}
                    onClick={() =>
                      setSelections({ ...selections, design: design.id })
                    }
                    className={`p-4 rounded-lg border-2 transition-all text-center ${
                      selections.design === design.id
                        ? "border-pink-500 bg-pink-500/10"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="font-semibold text-white">
                      {design.name}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {design.price === 0
                        ? "Included"
                        : `+$${design.price.toLocaleString()}`}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Price Summary - Sticky */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass card-border rounded-xl p-6 sticky top-24"
            >
              <h3 className="text-2xl font-bold mb-6">Estimated Price</h3>

              <AnimatePresence mode="wait">
                {estimatedPrice > 0 ? (
                  <motion.div
                    key="price"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
                      ${estimatedPrice.toLocaleString()}
                    </div>

                    <div className="space-y-3 mb-6 text-sm">
                      {selections.projectType && (
                        <div className="flex justify-between text-gray-300">
                          <span>Base Project</span>
                          <span>
                            $
                            {projectTypes
                              .find((p) => p.id === selections.projectType)
                              ?.basePrice.toLocaleString()}
                          </span>
                        </div>
                      )}
                      {selections.features.length > 0 && (
                        <div className="flex justify-between text-gray-300">
                          <span>Features ({selections.features.length})</span>
                          <span>
                            +$
                            {selections.features
                              .reduce((sum, fId) => {
                                const f = features.find(
                                  (feat) => feat.id === fId
                                );
                                return sum + (f?.price || 0);
                              }, 0)
                              .toLocaleString()}
                          </span>
                        </div>
                      )}
                      {selections.design && (
                        <div className="flex justify-between text-gray-300">
                          <span>Design</span>
                          <span>
                            +$
                            {designs
                              .find((d) => d.id === selections.design)
                              ?.price.toLocaleString()}
                          </span>
                        </div>
                      )}
                    </div>

                    <button className="w-full btn-primary py-3 rounded-lg font-semibold">
                      Get Detailed Quote →
                    </button>

                    <div className="mt-4 text-xs text-gray-400 text-center">
                      💡 Final price may vary based on specific requirements
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-4">💰</div>
                    <p className="text-gray-400">
                      Select options to see your estimate
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

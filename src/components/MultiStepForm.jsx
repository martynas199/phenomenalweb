import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Project Type
    projectType: "",
    // Step 2: Details
    name: "",
    email: "",
    company: "",
    phone: "",
    // Step 3: Requirements
    budget: "",
    timeline: "",
    features: [],
    // Step 4: Additional Info
    description: "",
    hasDesign: "",
  });

  const totalSteps = 4;

  const projectTypes = [
    { id: "website", name: "Website", icon: "🌐" },
    { id: "webapp", name: "Web Application", icon: "⚡" },
    { id: "ecommerce", name: "E-Commerce", icon: "🛒" },
    { id: "mobile", name: "Mobile App", icon: "📱" },
  ];

  const budgetRanges = [
    { id: "small", label: "$5K - $15K", value: "5-15k" },
    { id: "medium", label: "$15K - $50K", value: "15-50k" },
    { id: "large", label: "$50K - $100K", value: "50-100k" },
    { id: "enterprise", label: "$100K+", value: "100k+" },
  ];

  const timelines = [
    { id: "rush", label: "ASAP (2-4 weeks)", value: "rush" },
    { id: "standard", label: "Standard (1-3 months)", value: "standard" },
    { id: "flexible", label: "Flexible (3-6 months)", value: "flexible" },
  ];

  const availableFeatures = [
    "User Authentication",
    "Payment Integration",
    "Admin Dashboard",
    "API Development",
    "Mobile Responsive",
    "SEO Optimization",
    "Analytics",
    "Third-party Integrations",
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you within 24 hours.");
  };

  const handleFeatureToggle = (feature) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <section className="relative py-20 px-8 md:px-20 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Start Your <span className="hero-accent">Project</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tell us about your project in a few simple steps
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-2 text-sm text-gray-400">
            <span>
              Step {currentStep} of {totalSteps}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          {/* Step Indicators */}
          <div className="flex justify-between mt-4">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex items-center ${
                  step < totalSteps ? "flex-1" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    step < currentStep
                      ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                      : step === currentStep
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white ring-4 ring-blue-500/30"
                      : "bg-white/10 text-gray-500"
                  }`}
                >
                  {step < currentStep ? "✓" : step}
                </div>
                {step < totalSteps && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded ${
                      step < currentStep ? "bg-green-500" : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {/* Step 1: Project Type */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass card-border rounded-2xl p-8"
              >
                <h3 className="text-3xl font-bold mb-6">
                  What type of project do you need?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, projectType: type.id })
                      }
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        formData.projectType === type.id
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="text-4xl mb-2">{type.icon}</div>
                      <div className="font-semibold text-lg text-white">
                        {type.name}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Contact Details */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass card-border rounded-2xl p-8"
              >
                <h3 className="text-3xl font-bold mb-6">
                  Tell us about yourself
                </h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Requirements */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass card-border rounded-2xl p-8"
              >
                <h3 className="text-3xl font-bold mb-6">
                  Project Requirements
                </h3>
                <div className="space-y-6">
                  {/* Budget */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-3">
                      Budget Range
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {budgetRanges.map((range) => (
                        <button
                          key={range.id}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, budget: range.value })
                          }
                          className={`p-4 rounded-lg border-2 transition-all ${
                            formData.budget === range.value
                              ? "border-green-500 bg-green-500/10"
                              : "border-white/10 hover:border-white/30"
                          }`}
                        >
                          <div className="font-semibold text-white">
                            {range.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-3">
                      Preferred Timeline
                    </label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {timelines.map((timeline) => (
                        <button
                          key={timeline.id}
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              timeline: timeline.value,
                            })
                          }
                          className={`p-4 rounded-lg border-2 transition-all ${
                            formData.timeline === timeline.value
                              ? "border-purple-500 bg-purple-500/10"
                              : "border-white/10 hover:border-white/30"
                          }`}
                        >
                          <div className="font-semibold text-white text-sm">
                            {timeline.label}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-3">
                      Required Features (Select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {availableFeatures.map((feature) => (
                        <button
                          key={feature}
                          type="button"
                          onClick={() => handleFeatureToggle(feature)}
                          className={`p-3 rounded-lg border-2 transition-all text-left flex items-center justify-between ${
                            formData.features.includes(feature)
                              ? "border-blue-500 bg-blue-500/10"
                              : "border-white/10 hover:border-white/30"
                          }`}
                        >
                          <span className="text-white text-sm">{feature}</span>
                          {formData.features.includes(feature) && (
                            <svg
                              className="w-5 h-5 text-blue-400"
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
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Additional Info */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass card-border rounded-2xl p-8"
              >
                <h3 className="text-3xl font-bold mb-6">
                  Almost there! Tell us more
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Project Description
                    </label>
                    <textarea
                      rows={6}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your project goals, target audience, and any specific requirements..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-3">
                      Do you have existing designs?
                    </label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {["Yes, complete", "Yes, partial", "No, need design"].map(
                        (option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, hasDesign: option })
                            }
                            className={`p-4 rounded-lg border-2 transition-all ${
                              formData.hasDesign === option
                                ? "border-blue-500 bg-blue-500/10"
                                : "border-white/10 hover:border-white/30"
                            }`}
                          >
                            <div className="font-semibold text-white text-sm">
                              {option}
                            </div>
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 1
                  ? "opacity-50 cursor-not-allowed glass"
                  : "glass hover:bg-white/10"
              }`}
            >
              ← Back
            </button>
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="btn-primary px-8 py-3 rounded-lg font-semibold"
              >
                Continue →
              </button>
            ) : (
              <button
                type="submit"
                className="btn-primary px-8 py-3 rounded-lg font-semibold"
              >
                Submit Project →
              </button>
            )}
          </div>
        </form>

        {/* Trust Badge */}
        <div className="mt-8 text-center text-sm text-gray-400">
          🔒 Your information is secure and will never be shared
        </div>
      </div>
    </section>
  );
}

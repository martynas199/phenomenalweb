import React, { useState } from "react";
import { motion } from "framer-motion";

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e) => {
    if (!isDragging && e.type !== "click") return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div
      className="relative w-full aspect-video overflow-hidden rounded-xl cursor-col-resize select-none group"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseMove={handleMove}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleMove}
      onClick={handleMove}
    >
      {/* Before Image (Full) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📱</div>
            <div className="text-2xl font-bold text-gray-400">Old Design</div>
            <div className="text-gray-500 mt-2">Outdated Interface</div>
          </div>
        </div>
      </div>

      {/* After Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <div className="text-2xl font-bold text-white">New Design</div>
              <div className="text-blue-200 mt-2">Modern & Fast</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold">
        After
      </div>
    </div>
  );
}

// Example usage component
export function BeforeAfterShowcase() {
  const examples = [
    {
      title: "E-Commerce Redesign",
      description:
        "Modern shopping experience with 245% increase in conversions",
      metrics: { before: "2.1%", after: "7.2%", label: "Conversion Rate" },
    },
    {
      title: "Healthcare Portal",
      description: "Simplified booking system with 95% user satisfaction",
      metrics: { before: "52%", after: "95%", label: "User Satisfaction" },
    },
    {
      title: "Real Estate Platform",
      description: "Interactive property listings with virtual tours",
      metrics: { before: "18s", after: "2.1s", label: "Load Time" },
    },
  ];

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
            Before & <span className="hero-accent">After</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See the dramatic transformation. Drag the slider to compare the
            before and after results.
          </p>
        </motion.div>

        {/* Examples */}
        <div className="space-y-16">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass card-border rounded-2xl p-6 md:p-8"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2">{example.title}</h3>
                <p className="text-gray-400">{example.description}</p>
              </div>

              <BeforeAfterSlider />

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-gray-400 text-sm mb-1">Before</div>
                  <div className="text-2xl font-bold text-red-400">
                    {example.metrics.before}
                  </div>
                </div>
                <div className="glass rounded-xl p-4 text-center border-2 border-green-500/30">
                  <div className="text-gray-400 text-sm mb-1">
                    {example.metrics.label}
                  </div>
                  <div className="text-green-400 font-semibold">
                    <svg
                      className="w-6 h-6 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Improved
                  </div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-gray-400 text-sm mb-1">After</div>
                  <div className="text-2xl font-bold text-green-400">
                    {example.metrics.after}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg">
            Transform Your Website →
          </button>
        </motion.div>
      </div>
    </section>
  );
}

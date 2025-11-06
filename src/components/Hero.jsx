import React from "react";
import laptopImg from "../assets/laptop.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-8 md:px-20 pt-32 pb-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-6xl md:text-7xl font-extrabold leading-tight">
            <span className="block">Your Vision</span>
            <span className="block text-white/70">
              Our <span className="hero-accent">Code</span>
            </span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-xl">
            We build performant, beautiful web experiences tailored for your
            business. From concept and design to development and maintenance.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button className="btn-primary px-6 py-3 rounded-md font-medium">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-md glass text-gray-300">
              Learn More
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="w-[360px] h-[240px] card-border glass rounded-xl p-4 flex items-center justify-center">
            <svg
              viewBox="0 0 360 240"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Code Editor Window */}
              <rect
                x="20"
                y="40"
                width="140"
                height="90"
                rx="8"
                fill="rgba(15, 23, 42, 0.8)"
                stroke="rgba(148, 163, 184, 0.3)"
                strokeWidth="1"
              />

              {/* Window Controls */}
              <circle cx="30" cy="50" r="3" fill="#ef4444" />
              <circle cx="42" cy="50" r="3" fill="#f59e0b" />
              <circle cx="54" cy="50" r="3" fill="#10b981" />

              {/* Code Lines */}
              <rect
                x="30"
                y="65"
                width="40"
                height="2"
                rx="1"
                fill="#3b82f6"
                opacity="0.8"
              />
              <rect
                x="75"
                y="65"
                width="25"
                height="2"
                rx="1"
                fill="#8b5cf6"
                opacity="0.8"
              />
              <rect
                x="30"
                y="75"
                width="60"
                height="2"
                rx="1"
                fill="#06b6d4"
                opacity="0.8"
              />
              <rect
                x="95"
                y="75"
                width="20"
                height="2"
                rx="1"
                fill="#f59e0b"
                opacity="0.8"
              />
              <rect
                x="30"
                y="85"
                width="35"
                height="2"
                rx="1"
                fill="#10b981"
                opacity="0.8"
              />
              <rect
                x="70"
                y="85"
                width="45"
                height="2"
                rx="1"
                fill="#ef4444"
                opacity="0.8"
              />
              <rect
                x="30"
                y="95"
                width="50"
                height="2"
                rx="1"
                fill="#8b5cf6"
                opacity="0.8"
              />
              <rect
                x="85"
                y="95"
                width="30"
                height="2"
                rx="1"
                fill="#3b82f6"
                opacity="0.8"
              />

              {/* Arrow Transformation */}
              <path
                d="M175 85 L195 85 M190 80 L195 85 L190 90"
                stroke="url(#arrowGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Web Interface */}
              <rect
                x="210"
                y="30"
                width="130"
                height="100"
                rx="8"
                fill="rgba(255, 255, 255, 0.05)"
                stroke="rgba(148, 163, 184, 0.3)"
                strokeWidth="1"
              />

              {/* Browser Bar */}
              <rect
                x="210"
                y="30"
                width="130"
                height="20"
                rx="8"
                fill="rgba(148, 163, 184, 0.1)"
              />
              <circle cx="220" cy="40" r="2" fill="rgba(148, 163, 184, 0.5)" />
              <circle cx="230" cy="40" r="2" fill="rgba(148, 163, 184, 0.5)" />
              <circle cx="240" cy="40" r="2" fill="rgba(148, 163, 184, 0.5)" />

              {/* Website Content */}
              <rect
                x="220"
                y="60"
                width="40"
                height="4"
                rx="2"
                fill="url(#primaryGradient)"
              />
              <rect
                x="220"
                y="70"
                width="80"
                height="2"
                rx="1"
                fill="rgba(148, 163, 184, 0.6)"
              />
              <rect
                x="220"
                y="76"
                width="60"
                height="2"
                rx="1"
                fill="rgba(148, 163, 184, 0.4)"
              />

              {/* Interactive Elements */}
              <rect
                x="220"
                y="90"
                width="25"
                height="8"
                rx="4"
                fill="url(#buttonGradient)"
              />
              <rect
                x="250"
                y="90"
                width="25"
                height="8"
                rx="4"
                fill="rgba(148, 163, 184, 0.2)"
                stroke="rgba(148, 163, 184, 0.4)"
                strokeWidth="1"
              />

              {/* Design Elements */}
              <rect
                x="285"
                y="60"
                width="15"
                height="15"
                rx="2"
                fill="url(#cardGradient)"
                opacity="0.8"
              />
              <rect
                x="305"
                y="60"
                width="15"
                height="15"
                rx="2"
                fill="url(#cardGradient2)"
                opacity="0.8"
              />
              <rect
                x="285"
                y="80"
                width="35"
                height="2"
                rx="1"
                fill="rgba(148, 163, 184, 0.3)"
              />
              <rect
                x="285"
                y="86"
                width="25"
                height="2"
                rx="1"
                fill="rgba(148, 163, 184, 0.3)"
              />

              {/* Floating Code Particles */}
              <circle cx="80" cy="25" r="2" fill="#3b82f6" opacity="0.6">
                <animate
                  attributeName="cy"
                  values="25;15;25"
                  dur="3s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="120" cy="20" r="1.5" fill="#8b5cf6" opacity="0.5">
                <animate
                  attributeName="cy"
                  values="20;10;20"
                  dur="4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.5;1;0.5"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="260" cy="160" r="2" fill="#10b981" opacity="0.7">
                <animate
                  attributeName="cy"
                  values="160;150;160"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.7;1;0.7"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Connection Lines */}
              <path
                d="M165 65 Q180 50 210 65"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1"
                fill="none"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0,100;50,50;100,0"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
              <path
                d="M165 85 Q180 100 210 85"
                stroke="rgba(139, 92, 246, 0.3)"
                strokeWidth="1"
                fill="none"
              >
                <animate
                  attributeName="stroke-dasharray"
                  values="0,100;50,50;100,0"
                  dur="4s"
                  begin="1s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Gradients */}
              <defs>
                <linearGradient
                  id="primaryGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient
                  id="buttonGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient
                  id="cardGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
                <linearGradient
                  id="cardGradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <linearGradient
                  id="arrowGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

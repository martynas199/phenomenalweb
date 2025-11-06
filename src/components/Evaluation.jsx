import React from "react";

export default function Evaluation() {
  return (
    <section className="px-8 md:px-20 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="card-border glass p-8 rounded-xl">
          <h3 className="text-3xl font-bold">Evaluation & Design</h3>
          <p className="mt-4 text-gray-400">
            We research, prototype and create UI/UX that converts. Product
            design, user research, and brand design included.
          </p>
          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2 rounded-md glass text-gray-300">
              Product Design
            </button>
            <button className="px-4 py-2 rounded-md glass text-gray-300">
              UX Review
            </button>
            <button className="px-4 py-2 rounded-md glass text-gray-300">
              Branding
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-slate-900/80 to-slate-800/60 flex items-center justify-center card-border backdrop-blur-sm">
            <svg
              width="220"
              height="220"
              viewBox="0 0 220 220"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="designGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <linearGradient
                  id="prototypeGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient
                  id="researchGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Research Phase - Top */}
              <g transform="translate(110, 40)">
                {/* Magnifying Glass */}
                <circle
                  cx="0"
                  cy="0"
                  r="15"
                  fill="none"
                  stroke="url(#researchGradient)"
                  strokeWidth="3"
                  opacity="0.9"
                />
                <circle cx="0" cy="0" r="8" fill="rgba(245, 158, 11, 0.2)" />
                <line
                  x1="12"
                  y1="12"
                  x2="20"
                  y2="20"
                  stroke="url(#researchGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Research Data Points */}
                <circle cx="-25" cy="-5" r="2" fill="#f59e0b" opacity="0.8">
                  <animate
                    attributeName="r"
                    values="2;3;2"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="25" cy="8" r="1.5" fill="#ef4444" opacity="0.7">
                  <animate
                    attributeName="r"
                    values="1.5;2.5;1.5"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  x="0"
                  y="-30"
                  textAnchor="middle"
                  fill="#f59e0b"
                  fontSize="8"
                  opacity="0.8"
                >
                  Research
                </text>
              </g>

              {/* Design Phase - Center */}
              <g transform="translate(110, 110)">
                {/* Design Canvas */}
                <rect
                  x="-30"
                  y="-20"
                  width="60"
                  height="40"
                  fill="rgba(59, 130, 246, 0.1)"
                  stroke="url(#designGradient)"
                  strokeWidth="2"
                  rx="4"
                />

                {/* Design Elements */}
                <rect
                  x="-25"
                  y="-15"
                  width="15"
                  height="8"
                  fill="url(#designGradient)"
                  rx="2"
                  opacity="0.8"
                />
                <rect
                  x="-5"
                  y="-15"
                  width="20"
                  height="4"
                  fill="rgba(139, 92, 246, 0.6)"
                  rx="2"
                />
                <rect
                  x="-25"
                  y="-3"
                  width="25"
                  height="4"
                  fill="rgba(236, 72, 153, 0.6)"
                  rx="2"
                />
                <rect
                  x="-25"
                  y="5"
                  width="35"
                  height="6"
                  fill="rgba(59, 130, 246, 0.7)"
                  rx="2"
                />

                {/* Design Tools */}
                <circle cx="20" cy="-10" r="3" fill="#8b5cf6" opacity="0.8" />
                <rect
                  x="15"
                  y="0"
                  width="10"
                  height="2"
                  fill="#3b82f6"
                  rx="1"
                />
                <rect x="15" y="5" width="8" height="2" fill="#ec4899" rx="1" />

                {/* Floating Design Elements */}
                <circle cx="-40" cy="0" r="2" fill="rgba(139, 92, 246, 0.7)">
                  <animate
                    attributeName="cx"
                    values="-40;-35;-40"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <rect
                  x="35"
                  y="-5"
                  width="4"
                  height="4"
                  fill="rgba(236, 72, 153, 0.6)"
                  rx="1"
                >
                  <animate
                    attributeName="x"
                    values="35;40;35"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </rect>
              </g>

              {/* Prototype Phase - Bottom */}
              <g transform="translate(110, 180)">
                {/* Mobile Device */}
                <rect
                  x="-12"
                  y="-20"
                  width="24"
                  height="40"
                  fill="rgba(16, 185, 129, 0.1)"
                  stroke="url(#prototypeGradient)"
                  strokeWidth="2"
                  rx="6"
                />
                <rect
                  x="-10"
                  y="-15"
                  width="20"
                  height="25"
                  fill="rgba(15, 23, 42, 0.8)"
                  rx="2"
                />

                {/* Screen Content */}
                <rect
                  x="-8"
                  y="-12"
                  width="16"
                  height="3"
                  fill="url(#prototypeGradient)"
                  rx="1"
                />
                <rect
                  x="-8"
                  y="-7"
                  width="12"
                  height="2"
                  fill="rgba(6, 182, 212, 0.6)"
                  rx="1"
                />
                <rect
                  x="-8"
                  y="-3"
                  width="10"
                  height="2"
                  fill="rgba(16, 185, 129, 0.6)"
                  rx="1"
                />
                <rect
                  x="-6"
                  y="2"
                  width="6"
                  height="4"
                  fill="rgba(6, 182, 212, 0.8)"
                  rx="1"
                />
                <rect
                  x="2"
                  y="2"
                  width="6"
                  height="4"
                  fill="rgba(16, 185, 129, 0.8)"
                  rx="1"
                />

                {/* Interactive Elements */}
                <circle cx="0" cy="15" r="2" fill="#10b981" />

                {/* Connection Lines to Design */}
                <path
                  d="M0 -20 Q0 -35 0 -50"
                  stroke="rgba(16, 185, 129, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="3,3"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-12"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>

                <text
                  x="0"
                  y="35"
                  textAnchor="middle"
                  fill="#10b981"
                  fontSize="8"
                  opacity="0.8"
                >
                  Prototype
                </text>
              </g>

              {/* Process Flow Arrows */}
              <g opacity="0.6">
                {/* Research to Design */}
                <path
                  d="M95 60 Q85 80 95 100"
                  stroke="rgba(245, 158, 11, 0.5)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,50;25,25;50,0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>

                {/* Design to Prototype */}
                <path
                  d="M125 130 Q135 150 125 170"
                  stroke="rgba(59, 130, 246, 0.5)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,50;25,25;50,0"
                    dur="3s"
                    begin="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>

              {/* Iteration Loop */}
              <path
                d="M140 170 Q170 140 170 110 Q170 80 140 60"
                stroke="rgba(16, 185, 129, 0.3)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-20"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>

              {/* User Feedback Icons */}
              <g transform="translate(60, 80)">
                <path
                  d="M0 0 Q-5 -8 -15 -8 Q-25 -8 -25 0 Q-25 8 -15 8 L-8 8 L0 15 Z"
                  fill="rgba(245, 158, 11, 0.6)"
                  opacity="0.8"
                />
                <circle cx="-20" cy="-2" r="1" fill="#f59e0b" />
                <circle cx="-15" cy="-2" r="1" fill="#f59e0b" />
                <path
                  d="M-22 2 Q-17 6 -12 2"
                  stroke="#f59e0b"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>

              <g transform="translate(160, 140)">
                <path
                  d="M0 0 Q5 -8 15 -8 Q25 -8 25 0 Q25 8 15 8 L8 8 L0 15 Z"
                  fill="rgba(16, 185, 129, 0.6)"
                  opacity="0.8"
                />
                <circle cx="20" cy="-2" r="1" fill="#10b981" />
                <circle cx="15" cy="-2" r="1" fill="#10b981" />
                <path
                  d="M12 2 Q17 6 22 2"
                  stroke="#10b981"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>

              {/* Arrow Marker Definition */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3.5, 0 7"
                    fill="rgba(255, 255, 255, 0.5)"
                  />
                </marker>
              </defs>

              {/* Ambient Particles */}
              <circle
                cx="50"
                cy="50"
                r="1"
                fill="rgba(59, 130, 246, 0.5)"
                opacity="0.6"
              >
                <animate
                  attributeName="cy"
                  values="50;45;50"
                  dur="5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="170"
                cy="60"
                r="1.5"
                fill="rgba(139, 92, 246, 0.5)"
                opacity="0.5"
              >
                <animate
                  attributeName="cy"
                  values="60;55;60"
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
              <circle
                cx="40"
                cy="170"
                r="1"
                fill="rgba(16, 185, 129, 0.6)"
                opacity="0.7"
              >
                <animate
                  attributeName="cy"
                  values="170;165;170"
                  dur="6s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.7;1;0.7"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

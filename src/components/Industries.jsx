import React from "react";

// Real Estate Icon Component
const RealEstateIcon = () => (
  <svg
    viewBox="0 0 112 64"
    className="w-28 h-16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="houseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
      <linearGradient id="keyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>

    {/* Main House */}
    <path d="M20 45 L35 25 L50 45 Z" fill="url(#houseGradient)" opacity="0.9" />
    <rect
      x="22"
      y="35"
      width="26"
      height="20"
      fill="rgba(59, 130, 246, 0.8)"
      rx="2"
    />

    {/* House Details */}
    <rect
      x="26"
      y="42"
      width="6"
      height="8"
      fill="rgba(255, 255, 255, 0.3)"
      rx="1"
    />
    <rect
      x="36"
      y="39"
      width="4"
      height="4"
      fill="rgba(255, 255, 255, 0.4)"
      rx="0.5"
    />
    <rect
      x="42"
      y="39"
      width="4"
      height="4"
      fill="rgba(255, 255, 255, 0.4)"
      rx="0.5"
    />
    <rect
      x="36"
      y="45"
      width="4"
      height="4"
      fill="rgba(255, 255, 255, 0.4)"
      rx="0.5"
    />
    <rect
      x="42"
      y="45"
      width="4"
      height="4"
      fill="rgba(255, 255, 255, 0.4)"
      rx="0.5"
    />

    {/* Second Building */}
    <rect
      x="55"
      y="25"
      width="20"
      height="30"
      fill="rgba(139, 92, 246, 0.8)"
      rx="2"
    />
    <rect
      x="58"
      y="30"
      width="3"
      height="3"
      fill="rgba(255, 255, 255, 0.4)"
      rx="0.5"
    />
    <rect
      x="64"
      y="30"
      width="3"
      height="3"
      fill="rgba(255, 255, 255, 0.4)"
      rx="0.5"
    />
    <rect
      x="70"
      y="30"
      width="3"
      height="3"
      fill="rgba(255, 255, 255, 0.4)"
      rx="0.5"
    />
    <rect
      x="58"
      y="36"
      width="3"
      height="3"
      fill="rgba(255, 255, 255, 0.4)"
      rx="0.5"
    />
    <rect
      x="64"
      y="36"
      width="3"
      height="3"
      fill="rgba(255, 255, 255, 0.4)"
      rx="0.5"
    />
    <rect
      x="70"
      y="36"
      width="3"
      height="3"
      fill="rgba(255, 255, 255, 0.4)"
      rx="0.5"
    />

    {/* Key Icon */}
    <circle cx="85" cy="15" r="6" fill="url(#keyGradient)" opacity="0.9" />
    <rect x="88" y="13" width="12" height="4" fill="url(#keyGradient)" rx="2" />
    <rect x="96" y="11" width="2" height="2" fill="url(#keyGradient)" />
    <rect x="96" y="15" width="2" height="2" fill="url(#keyGradient)" />

    {/* Floating Elements */}
    <circle cx="15" cy="20" r="2" fill="rgba(59, 130, 246, 0.6)" opacity="0.8">
      <animate
        attributeName="cy"
        values="20;15;20"
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="95"
      cy="45"
      r="1.5"
      fill="rgba(245, 158, 11, 0.7)"
      opacity="0.8"
    >
      <animate
        attributeName="cy"
        values="45;40;45"
        dur="4s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

// Logistics Icon Component
const LogisticsIcon = () => (
  <svg
    viewBox="0 0 112 64"
    className="w-28 h-16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="truckGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="boxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>

    {/* Truck Body */}
    <rect
      x="45"
      y="25"
      width="35"
      height="20"
      fill="url(#truckGradient)"
      rx="3"
    />
    <rect
      x="30"
      y="30"
      width="20"
      height="15"
      fill="url(#truckGradient)"
      rx="2"
    />

    {/* Truck Details */}
    <rect
      x="32"
      y="33"
      width="4"
      height="3"
      fill="rgba(255, 255, 255, 0.4)"
      rx="0.5"
    />
    <rect
      x="38"
      y="33"
      width="4"
      height="3"
      fill="rgba(255, 255, 255, 0.4)"
      rx="0.5"
    />

    {/* Wheels */}
    <circle
      cx="40"
      cy="50"
      r="5"
      fill="rgba(55, 65, 81, 0.8)"
      stroke="rgba(156, 163, 175, 0.6)"
      strokeWidth="2"
    />
    <circle
      cx="70"
      cy="50"
      r="5"
      fill="rgba(55, 65, 81, 0.8)"
      stroke="rgba(156, 163, 175, 0.6)"
      strokeWidth="2"
    />

    {/* Packages */}
    <rect
      x="15"
      y="35"
      width="8"
      height="8"
      fill="url(#boxGradient)"
      rx="1"
      opacity="0.9"
    />
    <rect
      x="85"
      y="30"
      width="6"
      height="6"
      fill="rgba(139, 92, 246, 0.8)"
      rx="1"
    />
    <rect
      x="95"
      y="35"
      width="7"
      height="7"
      fill="rgba(59, 130, 246, 0.8)"
      rx="1"
    />

    {/* Delivery Route Line */}
    <path
      d="M10 15 Q35 10 60 15 Q85 20 105 15"
      stroke="rgba(16, 185, 129, 0.4)"
      strokeWidth="2"
      fill="none"
      strokeDasharray="5,5"
    >
      <animate
        attributeName="stroke-dashoffset"
        values="0;-20"
        dur="3s"
        repeatCount="indefinite"
      />
    </path>

    {/* Location Pins */}
    <circle cx="15" cy="18" r="3" fill="#ef4444" />
    <path
      d="M15 15 L15 21 M13 18 L17 18"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
    />

    <circle cx="95" cy="18" r="3" fill="#10b981" />
    <path
      d="M95 15 L95 21 M93 18 L97 18"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

// E-Commerce Icon Component
const ECommerceIcon = () => (
  <svg
    viewBox="0 0 112 64"
    className="w-28 h-16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="cartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
    </defs>

    {/* Computer Screen */}
    <rect
      x="25"
      y="15"
      width="40"
      height="25"
      fill="url(#screenGradient)"
      rx="2"
    />
    <rect
      x="27"
      y="17"
      width="36"
      height="21"
      fill="rgba(15, 23, 42, 0.8)"
      rx="1"
    />

    {/* Screen Content - Product Grid */}
    <rect
      x="30"
      y="20"
      width="8"
      height="6"
      fill="rgba(245, 158, 11, 0.8)"
      rx="1"
    />
    <rect
      x="40"
      y="20"
      width="8"
      height="6"
      fill="rgba(16, 185, 129, 0.8)"
      rx="1"
    />
    <rect
      x="50"
      y="20"
      width="8"
      height="6"
      fill="rgba(239, 68, 68, 0.8)"
      rx="1"
    />

    <rect
      x="30"
      y="28"
      width="8"
      height="6"
      fill="rgba(139, 92, 246, 0.8)"
      rx="1"
    />
    <rect
      x="40"
      y="28"
      width="8"
      height="6"
      fill="rgba(59, 130, 246, 0.8)"
      rx="1"
    />
    <rect
      x="50"
      y="28"
      width="8"
      height="6"
      fill="rgba(236, 72, 153, 0.8)"
      rx="1"
    />

    {/* Screen Stand */}
    <rect
      x="42"
      y="40"
      width="6"
      height="8"
      fill="rgba(156, 163, 175, 0.6)"
      rx="1"
    />
    <rect
      x="35"
      y="48"
      width="20"
      height="3"
      fill="rgba(156, 163, 175, 0.8)"
      rx="1"
    />

    {/* Shopping Cart */}
    <rect
      x="70"
      y="25"
      width="15"
      height="10"
      fill="url(#cartGradient)"
      rx="2"
      opacity="0.9"
    />
    <rect
      x="72"
      y="27"
      width="11"
      height="6"
      fill="rgba(255, 255, 255, 0.1)"
      rx="1"
    />

    {/* Cart Handle */}
    <path
      d="M85 30 L90 30"
      stroke="url(#cartGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Cart Wheels */}
    <circle cx="75" cy="40" r="3" fill="rgba(75, 85, 99, 0.8)" />
    <circle cx="82" cy="40" r="3" fill="rgba(75, 85, 99, 0.8)" />

    {/* Shopping Items in Cart */}
    <rect
      x="74"
      y="29"
      width="3"
      height="3"
      fill="rgba(245, 158, 11, 0.9)"
      rx="0.5"
    />
    <rect
      x="78"
      y="29"
      width="3"
      height="3"
      fill="rgba(16, 185, 129, 0.9)"
      rx="0.5"
    />

    {/* Currency Symbols */}
    <text
      x="15"
      y="25"
      fill="rgba(16, 185, 129, 0.7)"
      fontSize="8"
      fontFamily="monospace"
    >
      $
    </text>
    <text
      x="95"
      y="20"
      fill="rgba(245, 158, 11, 0.7)"
      fontSize="6"
      fontFamily="monospace"
    >
      €
    </text>

    {/* Growth Arrow */}
    <path
      d="M15 45 L25 35"
      stroke="rgba(16, 185, 129, 0.6)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M20 35 L25 35 L25 40"
      stroke="rgba(16, 185, 129, 0.6)"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Floating Elements */}
    <circle cx="10" cy="35" r="1.5" fill="rgba(139, 92, 246, 0.7)">
      <animate
        attributeName="cy"
        values="35;30;35"
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="100" cy="40" r="2" fill="rgba(59, 130, 246, 0.6)">
      <animate
        attributeName="cy"
        values="40;35;40"
        dur="4s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default function Industries() {
  const items = [
    {
      title: "Real Estate",
      desc: "Solutions for property managers and agencies",
      icon: <RealEstateIcon />,
    },
    {
      title: "Logistic",
      desc: "Delivery and warehouse management systems",
      icon: <LogisticsIcon />,
    },
    {
      title: "ECommerce",
      desc: "Online stores that scale",
      icon: <ECommerceIcon />,
    },
  ];
  return (
    <section className="px-8 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">
          Solutions for Every Industry
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="flex items-center gap-4 card-border glass p-4 rounded-lg hover:glass-hover transition-all duration-300"
            >
              <div className="flex-shrink-0 rounded-md overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-700/30 p-2">
                {it.icon}
              </div>
              <div>
                <h4 className="font-semibold">{it.title}</h4>
                <p className="text-sm text-gray-400">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

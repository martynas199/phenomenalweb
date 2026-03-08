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

// Booking Systems Icon Component
const BookingIcon = () => (
  <svg
    viewBox="0 0 112 64"
    className="w-28 h-16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="calendarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#0891b2" />
      </linearGradient>
      <linearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>

    {/* Calendar/Booking Interface */}
    <rect
      x="25"
      y="15"
      width="45"
      height="40"
      fill="url(#calendarGradient)"
      rx="4"
      opacity="0.9"
    />
    <rect
      x="27"
      y="20"
      width="41"
      height="33"
      fill="rgba(15, 23, 42, 0.8)"
      rx="2"
    />

    {/* Calendar Header */}
    <rect
      x="27"
      y="15"
      width="41"
      height="8"
      fill="rgba(6, 182, 212, 0.8)"
      rx="4"
    />
    <circle cx="33" cy="19" r="1.5" fill="white" opacity="0.8" />
    <circle cx="62" cy="19" r="1.5" fill="white" opacity="0.8" />

    {/* Calendar Grid */}
    <rect
      x="30"
      y="26"
      width="5"
      height="5"
      fill="rgba(148, 163, 184, 0.3)"
      rx="1"
    />
    <rect
      x="37"
      y="26"
      width="5"
      height="5"
      fill="rgba(148, 163, 184, 0.3)"
      rx="1"
    />
    <rect
      x="44"
      y="26"
      width="5"
      height="5"
      fill="rgba(148, 163, 184, 0.3)"
      rx="1"
    />
    <rect
      x="51"
      y="26"
      width="5"
      height="5"
      fill="rgba(148, 163, 184, 0.3)"
      rx="1"
    />
    <rect
      x="58"
      y="26"
      width="5"
      height="5"
      fill="rgba(148, 163, 184, 0.3)"
      rx="1"
    />

    <rect
      x="30"
      y="33"
      width="5"
      height="5"
      fill="rgba(148, 163, 184, 0.3)"
      rx="1"
    />
    <rect
      x="37"
      y="33"
      width="5"
      height="5"
      fill="url(#checkGradient)"
      rx="1"
    />
    <rect
      x="44"
      y="33"
      width="5"
      height="5"
      fill="rgba(148, 163, 184, 0.3)"
      rx="1"
    />
    <rect
      x="51"
      y="33"
      width="5"
      height="5"
      fill="url(#checkGradient)"
      rx="1"
    />
    <rect
      x="58"
      y="33"
      width="5"
      height="5"
      fill="rgba(148, 163, 184, 0.3)"
      rx="1"
    />

    <rect
      x="30"
      y="40"
      width="5"
      height="5"
      fill="rgba(148, 163, 184, 0.3)"
      rx="1"
    />
    <rect
      x="37"
      y="40"
      width="5"
      height="5"
      fill="rgba(148, 163, 184, 0.3)"
      rx="1"
    />
    <rect
      x="44"
      y="40"
      width="5"
      height="5"
      fill="url(#checkGradient)"
      rx="1"
    />
    <rect
      x="51"
      y="40"
      width="5"
      height="5"
      fill="rgba(148, 163, 184, 0.3)"
      rx="1"
    />
    <rect
      x="58"
      y="40"
      width="5"
      height="5"
      fill="rgba(148, 163, 184, 0.3)"
      rx="1"
    />

    {/* Clock Icon */}
    <circle cx="85" cy="25" r="8" fill="rgba(6, 182, 212, 0.8)" />
    <circle cx="85" cy="25" r="6" fill="rgba(15, 23, 42, 0.9)" />
    <line
      x1="85"
      y1="25"
      x2="85"
      y2="21"
      stroke="#06b6d4"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="85"
      y1="25"
      x2="88"
      y2="25"
      stroke="#06b6d4"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Checkmarks */}
    <circle cx="39" cy="35" r="1.5" fill="white" opacity="0.9" />
    <circle cx="53" cy="35" r="1.5" fill="white" opacity="0.9" />
    <circle cx="46" cy="42" r="1.5" fill="white" opacity="0.9" />

    {/* Floating notification */}
    <circle cx="15" cy="30" r="6" fill="#10b981" opacity="0.9">
      <animate
        attributeName="r"
        values="6;7;6"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <path
      d="M12 30 L14 32 L18 28"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Floating Elements */}
    <circle cx="95" cy="45" r="2" fill="rgba(6, 182, 212, 0.7)" opacity="0.8">
      <animate
        attributeName="cy"
        values="45;40;45"
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

// Payment Processing Icon Component
const PaymentIcon = () => (
  <svg
    viewBox="0 0 112 64"
    className="w-28 h-16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>

    {/* Credit Card */}
    <rect
      x="20"
      y="20"
      width="50"
      height="30"
      fill="url(#cardGradient)"
      rx="4"
      opacity="0.9"
    />

    {/* Magnetic Strip */}
    <rect x="20" y="28" width="50" height="6" fill="rgba(0, 0, 0, 0.3)" />

    {/* Chip */}
    <rect
      x="26"
      y="38"
      width="8"
      height="7"
      fill="rgba(255, 215, 0, 0.8)"
      rx="1"
    />
    <rect
      x="27"
      y="39"
      width="6"
      height="5"
      fill="rgba(0, 0, 0, 0.2)"
      rx="0.5"
    />

    {/* Card Numbers */}
    <rect
      x="38"
      y="40"
      width="3"
      height="3"
      fill="rgba(255, 255, 255, 0.6)"
      rx="0.5"
    />
    <rect
      x="42"
      y="40"
      width="3"
      height="3"
      fill="rgba(255, 255, 255, 0.6)"
      rx="0.5"
    />
    <rect
      x="46"
      y="40"
      width="3"
      height="3"
      fill="rgba(255, 255, 255, 0.6)"
      rx="0.5"
    />
    <rect
      x="50"
      y="40"
      width="3"
      height="3"
      fill="rgba(255, 255, 255, 0.6)"
      rx="0.5"
    />

    {/* Coins */}
    <circle cx="80" cy="25" r="8" fill="url(#coinGradient)" opacity="0.9" />
    <circle cx="80" cy="25" r="6" fill="rgba(245, 158, 11, 0.3)" />
    <text x="77" y="29" fill="white" fontSize="8" fontWeight="bold">
      $
    </text>

    <circle cx="92" cy="32" r="7" fill="url(#coinGradient)" opacity="0.8" />
    <circle cx="92" cy="32" r="5" fill="rgba(245, 158, 11, 0.3)" />
    <text x="89" y="36" fill="white" fontSize="7" fontWeight="bold">
      $
    </text>

    {/* Transaction Arrow */}
    <path
      d="M45 52 Q56 48 65 52"
      stroke="#10b981"
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
    <path
      d="M62 50 L65 52 L62 54"
      stroke="#10b981"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Secure Lock */}
    <rect
      x="10"
      y="38"
      width="8"
      height="10"
      fill="rgba(16, 185, 129, 0.8)"
      rx="2"
    />
    <circle
      cx="14"
      cy="35"
      r="3"
      fill="none"
      stroke="rgba(16, 185, 129, 0.8)"
      strokeWidth="1.5"
    />
    <circle cx="14" cy="43" r="1" fill="white" />

    {/* Floating Elements */}
    <circle cx="100" cy="15" r="2" fill="rgba(139, 92, 246, 0.7)" opacity="0.8">
      <animate
        attributeName="cy"
        values="15;10;15"
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="12"
      cy="55"
      r="1.5"
      fill="rgba(245, 158, 11, 0.7)"
      opacity="0.8"
    >
      <animate
        attributeName="cy"
        values="55;50;55"
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
      title: "Booking Systems",
      desc: "Reservation and scheduling management platforms",
      icon: <BookingIcon />,
    },
    {
      title: "Payment Processing",
      desc: "Secure payment integrations and financial transactions",
      icon: <PaymentIcon />,
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

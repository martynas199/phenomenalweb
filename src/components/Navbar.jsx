import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Case Study", path: "/case-study" },
    { name: "Pages", path: "/pages" },
    { name: "Contacts", path: "/contacts" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-8 py-6 glass fixed top-0 left-0 right-0 z-50">
      <Link to="/" className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[#ff6b2b] flex items-center justify-center text-black font-bold">
          PW
        </div>
        <h1 className="text-xl font-semibold">Phenomenal Web</h1>
      </Link>

      <ul className="hidden md:flex items-center gap-8 text-gray-300">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`cursor-pointer hover:text-white transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-white font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        to="/contacts"
        className="btn-primary px-4 py-2 rounded-md hidden md:block hover:scale-105 transition-transform duration-200"
      >
        Contact Us
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 glass backdrop-blur-lg border-t border-white/10">
          <ul className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "bg-primary/20 text-white font-semibold"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contacts"
                onClick={handleLinkClick}
                className="block btn-primary px-4 py-3 rounded-md text-center"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

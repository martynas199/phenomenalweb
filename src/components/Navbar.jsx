import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Case Study", path: "/case-study" },
    { name: "Pages", path: "/pages" },
    { name: "Contacts", path: "/contacts" },
  ];

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
    </nav>
  );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import FloatingCTA from "./components/FloatingCTA";

// Import Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import CaseStudy from "./pages/CaseStudy";
import Pages from "./pages/Pages";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen relative">
          <AnimatedBackground />
          <Navbar />
          <FloatingCTA />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

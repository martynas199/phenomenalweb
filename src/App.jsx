import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Pages = lazy(() => import("./pages/Pages"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Blog = lazy(() => import("./pages/Blog"));

function RouteFallback() {
  return (
    <div className="route-fallback" role="status" aria-live="polite">
      Loading page...
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>

        <div className="app-shell">
          <Navbar />
          <Suspense fallback={<RouteFallback />}>
            <main id="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/case-study" element={<CaseStudy />} />
                <Route path="/pages" element={<Pages />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/blog" element={<Blog />} />
              </Routes>
            </main>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

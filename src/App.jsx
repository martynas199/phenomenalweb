import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {
  extractCtaMetadata,
  trackCtaClick,
  trackPageView,
} from "./utils/analytics";

const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Pages = lazy(() => import("./pages/Pages"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Blog = lazy(() => import("./pages/Blog"));
const Process = lazy(() => import("./pages/Process"));
const Pricing = lazy(() => import("./pages/Pricing"));
const GlobalDelivery = lazy(() => import("./pages/GlobalDelivery"));
const About = lazy(() => import("./pages/About"));
const WebsiteDevelopment = lazy(() => import("./pages/WebsiteDevelopment"));
const WebApplications = lazy(() => import("./pages/WebApplications"));
const CustomSoftwareDevelopment = lazy(() =>
  import("./pages/CustomSoftwareDevelopment")
);
const SeoGrowth = lazy(() => import("./pages/SeoGrowth"));
const SupportMaintenance = lazy(() => import("./pages/SupportMaintenance"));
const UiUxDesign = lazy(() => import("./pages/UiUxDesign"));
const TechnicalConsulting = lazy(() => import("./pages/TechnicalConsulting"));
const RequestProposal = lazy(() => import("./pages/RequestProposal"));
const Technology = lazy(() => import("./pages/Technology"));

function RouteFallback() {
  return (
    <div className="route-fallback" role="status" aria-live="polite">
      Loading page...
    </div>
  );
}

function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    const handleClick = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const ctaElement = event.target.closest("[data-cta], a.btn, button.btn, .text-link");
      if (!ctaElement) {
        return;
      }

      const metadata = extractCtaMetadata(ctaElement);
      if (!metadata) {
        return;
      }

      trackCtaClick({
        ctaId: metadata.ctaId,
        ctaText: metadata.ctaText,
        destination: metadata.destination,
        pagePath: window.location.pathname,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -36px 0px",
      }
    );

    const revealElements = document.querySelectorAll("[data-reveal]");
    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      trackPageView({
        pagePath: `${location.pathname}${location.search}`,
        pageTitle: document.title,
      });
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname, location.search]);

  return (
    <>
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
              <Route path="/process" element={<Process />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/global-delivery" element={<GlobalDelivery />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/website-development"
                element={<WebsiteDevelopment />}
              />
              <Route path="/web-applications" element={<WebApplications />} />
              <Route
                path="/custom-software-development"
                element={<CustomSoftwareDevelopment />}
              />
              <Route path="/seo-growth" element={<SeoGrowth />} />
              <Route
                path="/support-maintenance"
                element={<SupportMaintenance />}
              />
              <Route path="/ui-ux-design" element={<UiUxDesign />} />
              <Route
                path="/technical-consulting"
                element={<TechnicalConsulting />}
              />
              <Route path="/request-proposal" element={<RequestProposal />} />
              <Route path="/technology" element={<Technology />} />
            </Routes>
          </main>
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <SiteLayout />
      </Router>
    </HelmetProvider>
  );
}

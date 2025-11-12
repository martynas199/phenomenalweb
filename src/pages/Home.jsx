import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Evaluation from "../components/Evaluation";
import Industries from "../components/Industries";
import RecentProjects from "../components/RecentProjects";
import Testimonials from "../components/Testimonials";
import TrustBadges from "../components/TrustBadges";
import PriceCalculator from "../components/PriceCalculator";
import { BeforeAfterShowcase } from "../components/BeforeAfterSlider";
import SEO, { pageSEO } from "../components/SEO";

export default function Home() {
  return (
    <main>
      <SEO {...pageSEO.home} />
      <Hero />
      <Services />
      <TrustBadges />
      <RecentProjects />
      <BeforeAfterShowcase />
      <Evaluation />
      <Industries />
      <PriceCalculator />
      <Testimonials />
    </main>
  );
}

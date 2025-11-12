import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Evaluation from "../components/Evaluation";
import Industries from "../components/Industries";
import RecentProjects from "../components/RecentProjects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Evaluation />
      <Industries />
      <RecentProjects />
    </main>
  );
}

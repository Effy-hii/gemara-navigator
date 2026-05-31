import React from "react";
import { createRoot } from "react-dom/client";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  Intro,
  ThreeStage,
  Planning,
  Teaching,
  Engagement,
} from "@/components/site/ContentSections";
import { GamesLibrary, Tools } from "@/components/site/ShowcaseSections";
import {
  Services,
  About,
  FinalCTA,
  Footer,
} from "@/components/site/ClosingSections";
import "./styles.css";

function StaticPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <ThreeStage />
        <Planning />
        <Teaching />
        <Engagement />
        <GamesLibrary />
        <Tools />
        <Services />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <StaticPage />
    </React.StrictMode>,
  );
}

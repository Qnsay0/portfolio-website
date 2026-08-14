"use client";

import { useEffect } from "react";
import Introduction from "@/components/sections/Introduction";
import Projects from "@/components/sections/Projects";
import DesignPhilosophy from "@/components/sections/DesignPhilosophy";
import Footer from "@/components/layout/Footer";
import { lenisSmoothScroll } from "@/lib/animations";
import GridBackground from "@/components/ui/GridBackground";
import Home from "@/components/sections/Home";

export default function Main() {
  useEffect(() => {
    lenisSmoothScroll();
  }, []);

  return (
    <main>
      <GridBackground />
      <Home />
      <DesignPhilosophy />
      <Introduction />
      <Projects />
      <Footer />
    </main>
  );
}

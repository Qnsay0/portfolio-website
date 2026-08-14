"use client";

import { useEffect } from "react";

import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Introduction from "@/components/sections/Introduction";
import Projects from "./projects/page";
import DesignPhilosophy from "@/components/sections/DesignPhilosophy";
import Footer from "@/components/layout/Footer";
import { lenisSmoothScroll } from "@/lib/animations";
import GridBackground from "@/components/ui/GridBackground";
import Home from "@/components/sections/Home";
export default function Main() {
  useEffect(() => {
    lenisSmoothScroll();
  }, []);

  useGSAP(() => {
    const splitH1 = new SplitType("#main-text", { types: "words" });

    gsap.from(splitH1.words, {
      opacity: 0,
      x: 50,
      delay: 1,
      stagger: {
        amount: 1,
      },
    });
  }, []);

  return (
    <main>
      <GridBackground />
      <Home />
      <DesignPhilosophy
        content={
          <>
            "Design is not just what it looks like and feels like. Design is how
            it works." <br />~ Steve Jobs
          </>
        }
      />
      <Introduction
        title="Introduction"
        subtitle="
          [Passionate developer and second-year student driven by a constant
              desire to learn and tackle new challenges. While programming is my
              main focus, my active role in the student council and love for team
              sports shape how I work. I thrive in collaborative environments,
              combining technical problem-solving with a strong team-oriented
              mindset.]"
      />
      <Projects />
      <Footer />
    </main>
  );
}

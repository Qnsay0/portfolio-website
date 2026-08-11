"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Introduction from "./introduction/page";
import Projects from "./projects/page";
import DesignPhilosophy from "./components/DesignPhilosophy/DesignPhilosophy";
import Footer from "./components/footer/footer";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  useEffect(() => {
    const lenis = new Lenis();
    let rafId = 0;

    const animate = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
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
      <div
        className="absolute inset-0 z-0 h-full w-full 
        bg-[linear-gradient(to_right,#ffffff10_1px,transparent_5px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] 
        bg-[size:40px_40px] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />
      <div className="container">
        <div className="content-box" id="home">
          <div className="lg-col">
            <div className="text-box">
              <h1 id="main-text">
                HELLO. <br /> I'M BARTŁOMIEJ KLIMEK.
                <br />A FRONTEND WEB & MOBILE DEVELOPER FOCUSED ON CRAFTING
                RESPONSIVE, HIGH-PERFORMANCE USER INTERFACES.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <DesignPhilosophy />
        <Introduction />
      </div>
      <Projects />
      <Footer />
    </main>
  );
}

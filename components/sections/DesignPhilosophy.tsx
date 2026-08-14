"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { philosophyTextAnimation } from "@/lib/animations";
import { portfolioData } from "@/data/constans";

export default function DesignPhilosophy() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    philosophyTextAnimation(textRef, containerRef);
  }, []);

  return (
    <section ref={containerRef}>
      <div className="text-box">
        <h1 ref={textRef}>
          {portfolioData.designPhilosophy.quote}
          <br />
          {portfolioData.designPhilosophy.author}
        </h1>
      </div>
    </section>
  );
}

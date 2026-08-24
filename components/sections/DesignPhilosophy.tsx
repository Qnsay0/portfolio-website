"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { philosophyTextAnimation } from "@/lib/animations";
import { portfolioData } from "@/data/constans";

export default function DesignPhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    philosophyTextAnimation(textRef, containerRef);
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-black px-6 md:px-12 py-20"
    >
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        <h1
          ref={textRef}
          className="text-white uppercase font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tighter"
        >
          "{portfolioData.designPhilosophy.quote}"
        </h1>

        <p className="mt-8 md:mt-12 text-zinc-500 uppercase font-medium text-xl sm:text-2xl md:text-4xl tracking-widest">
          ~ {portfolioData.designPhilosophy.author}
        </p>
      </div>
    </section>
  );
}

"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {
  introductionContainerAnimation,
  introductionTextAnimation,
  introductionTitleAnimation,
} from "@/lib/animations";
import { portfolioData } from "@/data/constans";

export default function Introduction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    introductionContainerAnimation(containerRef);
    introductionTextAnimation(containerRef, textRef);
    introductionTitleAnimation(containerRef, titleRef);
  }, []);

  return (
    <div
      className="bg-white min-h-dvh text-black flex flex-wrap content-start gap-[1em] py-[2em] px-[clamp(2em,10%,8em)]"
      ref={containerRef}
    >
      <h1
        ref={titleRef}
        className="text-[clamp(4rem,10vw,12rem)] font-bold uppercase tracking-tighter leading-none"
      >
        {portfolioData.introduction.title}
      </h1>

      <div className="sectionTextBox">
        <p
          className="text-[clamp(1.6rem,6vw,3.5rem)] tracking-tighter leading-tight font-normal text-zinc-800 max-w-7xl"
          ref={textRef}
        >
          {portfolioData.introduction.subtitle}
        </p>
      </div>
    </div>
  );
}

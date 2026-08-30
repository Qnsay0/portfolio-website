"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {
  introductionContainerAnimation,
  introductionTextAnimation,
  introductionTitleAnimation,
} from "@/src/lib/animations";

interface ProjectProps {
  title: string;
  text: string;
}

export default function Introduction(props: ProjectProps) {
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
      className="bg-white min-h-dvh text-black flex flex-col  content-start gap-[1em] py-[2rem] px-[5vw]"
      ref={containerRef}
    >
      <h1
        ref={titleRef}
        className="text-[clamp(3.2rem,min(10vw,15vh),12rem)] font-bold uppercase tracking-tighter leading-none"
      >
        {props.title}
      </h1>

      <div className="sectionTextBox">
        <p
          className="text-[clamp(1.4rem,min(6vw,7vh),3.5rem)] tracking-tighter leading-tight font-normal text-zinc-800 max-w-7xl"
          ref={textRef}
        >
          {props.text}
        </p>
      </div>
    </div>
  );
}

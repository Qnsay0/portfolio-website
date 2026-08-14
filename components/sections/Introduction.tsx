"use client";

import { useGSAP } from "@gsap/react";
import "@/app/introduction/style.css";
import { useRef } from "react";
import {
  introductionContainerAnimation,
  introductionTextAnimation,
  introductionTitleAnimation,
} from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

export default function Introduction() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    introductionContainerAnimation(containerRef);
    introductionTextAnimation(containerRef, textRef);
    introductionTitleAnimation(containerRef, titleRef);
  }, []);

  return (
    <div className="IntroductionContainer" ref={containerRef}>
      <div className="titleBox " ref={titleRef}>
        <h1>{props.title}</h1>
      </div>

      <div className="sectionTextBox">
        <p id="introductionTExt" ref={textRef}>
          {props.subtitle}
        </p>
      </div>
    </div>
  );
}

"use client";

import { useGSAP } from "@gsap/react";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function Introduction() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=1200",
        scrub: true,
        pin: true,
      },
    });
    const splitTitle = new SplitType(".titleBox", { types: "chars" });
    gsap.from(splitTitle.chars, {
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: "top 10%",
        end: "+=1000",
        markers: true,
      },
      opacity: 0,
      y: 30,
      stagger: { amount: 1.5 },
      duration: 1,
      ease: "power2.out",
    });

    if (!textRef.current) return;

    const splitText = new SplitType(textRef.current, {
      types: "words",
    });

    gsap.from(splitText.words, {
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        start: "top 10%",
        end: "+=1000",
        markers: true,
      },
      opacity: 0,
      y: 30,
      stagger: { amount: 3 },
      duration: 2,
      ease: "power2.out",
    });

    return () => {
      splitText.revert();
    };
  }, []);

  return (
    <div className="IntroductionContainer" ref={containerRef}>
      <div id="titleBox" className="titleBox " ref={titleRef}>
        <h1>Introduction</h1>
      </div>

      <div className="sectionTextBox">
        <p id="introductionTExt" ref={textRef}>
          [Passionate developer and second-year student driven by a constant
          desire to learn and tackle new challenges. While programming is my
          main focus, my active role in the student council and love for team
          sports shape how I work. I thrive in collaborative environments,
          combining technical problem-solving with a strong team-oriented
          mindset.]
        </p>
      </div>
    </div>
  );
}

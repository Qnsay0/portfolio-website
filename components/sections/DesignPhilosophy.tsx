"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { philosophyTextAnimation } from "@/lib/animations";

interface DesignPhilosophyProps {
  content: React.ReactNode;
}

export default function DesignPhilosophy(props: DesignPhilosophyProps) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    philosophyTextAnimation(textRef, containerRef);
  }, []);

  return (
    <section ref={containerRef}>
      <div className="text-box">
        <h1 ref={textRef}>{props.content}</h1>
      </div>
    </section>
  );
}

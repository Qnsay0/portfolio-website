"use client";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { devNull } from "os";

gsap.registerPlugin(ScrollTrigger);

export default function DesignPhilosophy() {
  const container = useRef(null);
  useGSAP(() => {
    const splitType = new SplitType("#modern", { types: "chars" });
    gsap.from(splitType.chars, {
      scrollTrigger: {
        trigger: container.current,
        start: "center center",
        end: "+=1500",
        scrub: true,
        pin: true,
      },
      opacity: 0.05,
      stagger: {
        amount: 1,
      },
    });
  }, []);

  return (
    <section ref={container}>
      <div className="text-box">
        <h1 id="modern">
          "Design is not just what it looks like and feels like. Design is how
          it works." <br />~ Steve Jobs
        </h1>
      </div>
    </section>
  );
}

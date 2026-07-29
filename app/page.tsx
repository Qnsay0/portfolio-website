"use client"
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Introduction from "./introduction/page";
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

  const homeScreenText = 

  useGSAP(() => {
    const splitType = new SplitType("#modern", { types: "chars" });
    const splitH1 = new SplitType("#main-text", { types: "words" });
    gsap.from(splitType.chars, {
      scrollTrigger: {
        trigger: "#modern",
        start: "top 70%",
        end: "top 30%",
        scrub: true,
        markers: false,
      },
      opacity: 0,
      x: 20,
      y: 20,
   
    
      
      stagger: {
        amount: 1,
      },
    });

    

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
      <div className="container">
        <div className="content-box" id="home">
          <div className="lg-col">
            <div className="text-box">
              <h1 id="main-text">
                HELLO. <br/> I'M BARTŁOMIEJ KLIMEK.<br/>
                A FRONTEND WEB & MOBILE DEVELOPER FOCUSED ON CRAFTING RESPONSIVE, HIGH-PERFORMANCE USER INTERFACES. I SPECIALIZE IN BUILDING SEAMLESS DIGITAL EXPERIENCES.
              </h1>
            </div>
          </div>
        </div>
        <section>
          <div className="text-box">
            <h1 id="modern">Modern UI designbners will expand thier skillsets to inbclude frontend.</h1>
          </div>
        </section>
        <Introduction/>
      </div>
      
    
    </main>
  );
}

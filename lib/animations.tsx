import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

export const lenisSmoothScroll = () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

export const philosophyTextAnimation = (splitItem, triggerItem) => {
  const splitType = new SplitType(splitItem.current, { types: "chars" });

  gsap.from(splitType.chars, {
    scrollTrigger: {
      trigger: triggerItem.current,
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

  return splitType;
};

export const introductionContainerAnimation = (containerRef) => {
  if (!containerRef.current) return;

  gsap.from(containerRef.current, {
    scrollTrigger: {
      trigger: containerRef.current,
      start: "center center",
      end: "+=1200",
      scrub: true,
      pin: true,
    },
  });
};

export const introductionTextAnimation = (containerRef, textRef) => {
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
};

export const introductionTitleAnimation = (containerRef, titleRef) => {
  if (!containerRef.current) return;
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
};

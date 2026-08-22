import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

export const lenisSmoothScroll = () => {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

export const philosophyTextAnimation = (
  splitItem: React.RefObject<HTMLElement | null>,
  triggerItem: React.RefObject<HTMLElement | null>,
) => {
  if (!splitItem.current || !triggerItem.current) return;
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

export const introductionContainerAnimation = (
  containerRef: React.RefObject<HTMLElement | null>,
) => {
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

export const introductionTextAnimation = (
  containerRef: React.RefObject<HTMLElement | null>,
  textRef: React.RefObject<HTMLParagraphElement | null>,
) => {
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

export const introductionTitleAnimation = (
  containerRef: React.RefObject<HTMLElement | null>,
  titleRef: React.RefObject<HTMLParagraphElement | null>,
) => {
  if (!containerRef.current || !titleRef.current) return;
  const splitTitle = new SplitType(titleRef.current, { types: "chars" });

  gsap.from(splitTitle.chars, {
    scrollTrigger: {
      trigger: containerRef.current,
      scrub: true,
      start: "top 10%",
      end: "+=1000",
    },
    opacity: 0,
    y: 30,
    stagger: { amount: 1.5 },
    duration: 1,
    ease: "power2.out",
  });
};

export const homeTextAnimation = (
  textRef: React.RefObject<HTMLParagraphElement | null>,
) => {
  if (!textRef.current) return;
  const splitH1 = new SplitType(textRef.current, { types: "words" });
  if (!textRef.current) return;
  gsap.from(splitH1.words, {
    opacity: 0,
    x: 50,
    delay: 1,
    stagger: {
      amount: 1,
    },
  });
};

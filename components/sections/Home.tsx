import { useGSAP } from "@gsap/react";

import { homeTextAnimation } from "@/lib/animations";
import { useRef } from "react";
import { portfolioData } from "@/data/constans";
export default function Home() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    homeTextAnimation(textRef);
  });

  return (
    <div className="min-h-dvh px-5 md:px-10">
      <div className="flex flex-row">
        <div className="min-h-dvh flex items-center">
          <div className="text-white flex flex-col text  gap-5">
            <div className="flex flex-col" ref={textRef}>
              <p className="text-xl sm:text-2xl md:text-3xl font-medium mb-2">
                Hi, I'm
              </p>
              <span className="font-extrabold uppercase tracking-tighter leading-[0.85] text-[15vw] sm:text-[14vw] lg:text-[12vw] select-none">
                {portfolioData.home.name}
              </span>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-600 dark:text-gray-300 mt-6 max-w-4xl">
                {portfolioData.home.paragraphe}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

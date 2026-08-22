import { useGSAP } from "@gsap/react";

import { homeTextAnimation } from "@/lib/animations";
import { useRef } from "react";
import LanguageBox from "../ui/languagePref";
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
                Cześć, jestem
              </p>
              <span className="font-extrabold uppercase tracking-tighter leading-[0.85] text-[15vw] sm:text-[14vw] lg:text-[12vw] select-none">
                Bartłomiej Klimek
              </span>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-600 dark:text-gray-300 mt-6 max-w-4xl">
                Jestem studentem drugiego roku Informatyki Technicznej na
                Politechnice Wrocławskiej. Specjalizuję się w tworzeniu
                nowoczesnych aplikacji webowych i mobilnych, z wykorzystaniem
                technologii takich jak React, Next.js, TypeScript oraz Swift.
                Łączę inżynierskie podejście do kodu z dbałością o detale i
                płynne animacje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useGSAP } from "@gsap/react";

import { homeTextAnimation } from "@/lib/animations";
import { useRef } from "react";

export default function Home() {
  const textRef = useRef(null);

  useGSAP(() => {
    homeTextAnimation(textRef);
  });

  return (
    <div className="h-full w-full m-auto min-h-dvh">
      <div className="content-box" id="home">
        <div className="text-box">
          <h1 className="text-white" ref={textRef}>
            HELLO. <br /> I'M BARTŁOMIEJ KLIMEK.
            <br />A FRONTEND WEB & MOBILE DEVELOPER FOCUSED ON CRAFTING
            RESPONSIVE, HIGH-PERFORMANCE USER INTERFACES.
          </h1>
        </div>
      </div>
    </div>
  );
}

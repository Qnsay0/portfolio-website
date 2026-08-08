import { useGSAP } from '@gsap/react';
import './style.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { start } from 'repl';
import { FaGithub,FaLinkedin } from "react-icons/fa6";


export default function Introduction() {


  
  
  useGSAP(() => {
    gsap.from("#lgCol", {
      opacity: 0,
      duration: 1.25,
      scrollTrigger: {
        trigger: "#lgCol", 
        start: "top 70%",  
        toggleActions: "play none none none", 
      },
      x: 200,
      
    });

    gsap.from("#smCol", {
       opacity: 0,
      duration: 1.25,
      scrollTrigger: {
        trigger: "#smCol", 
        start: "top 70%",  
        toggleActions: "play none none none", 
      },
      x: -200,
    
    })
    
  });

  return (
    <div className="IntroductionContainer">
        <div className="titleBox">
          <h1>Introduction</h1>
        </div>
        <div className="sectionTextBox">
          <p>[Welcome to the analysis of your competitors. This document will help you understand your industry better and see where you can fit and stand out in the market. Let’s do the research and overthrow your competition strategically. Refresh this document every year or so.]</p>
        </div>
        
    </div>
  );
}

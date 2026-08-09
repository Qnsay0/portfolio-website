"use client";

import { useEffect, useState } from 'react';
import ProjectCard from '../components/projectCard/projectCard'
import './style.css'
export default function Projects() {
  const [isButtonToggle, setIsButtonToggle] = useState(false);
  const toggleButtonFunc = () => {
    setIsButtonToggle(!isButtonToggle);                            
  }
  useEffect(() => {
    isButtonToggle ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')
    
  })

  const projectsCard = [
    {
      cardTitle: "Planer - Uloz swoj plan",
      cardDescription: "",
      usedFramework: ["NextJs", "AdonisJs", "TailwindCSS", "Coolify"],
    }
  ] 
 

  return (
    <div className="projectsContainer">
        <div className="contentBox">
          <div className="projectTextContentBox">
            <h1>projects</h1>
            <p>[Projekty w ktorych mialem przyjemnosc brac udzial i tworzyc nowe rzeczy!]</p>
          </div>
        </div>
        
        {
          projectsCard.map((projectCard, index) => (
            <ProjectCard 
              key={index} 
              onClick={toggleButtonFunc} 
              indexNumber={index}
              cardTitle={projectCard.cardTitle}
            />
          ))
        }
       
        
         
      <div className={`${isButtonToggle ? "buttonProjectActive": "" } cardOverlay`}>
          <button onClick={toggleButtonFunc}>
             close
          </button>   
      </div>
    </div>
  );
}
 
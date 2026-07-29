import { useGSAP } from '@gsap/react';
import './style.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { start } from 'repl';
import { FaGithub,FaLinkedin } from "react-icons/fa6";


export default function Introduction() {

  const socials = [
    {name:"github" , icon: "", link: ""},
    {name:"LinkedIn" , icon: "",link: ""},
    {name:"github" , icon: "",link: ""},
    
  ]
  useGSAP(() => {
    gsap.from("#lgCol", {
      opacity: 0,
      duration: 1.25,
      scrollTrigger: {
        trigger: "#lgCol", 
        start: "top 70%",  
        toggleActions: "play none none none", 
        markers: true   
        
      },
      x: 200,
      y: 50,
    });

    gsap.from("#smCol", {
       opacity: 0,
      duration: 1.25,
      scrollTrigger: {
        trigger: "#smCol", 
        start: "top 70%",  
        toggleActions: "play none none none", 
        markers: true   
      },
      x: -200,
      y: 50,
    })
    
  });

  return (
    <div className="IntroductionContainer">
        <div className="smCol" id="smCol">
            <div className=""><p>Basic information <br/> about myself</p></div>
            <div className="socials">
                
            </div>
        </div>
        <div className="lgCol" id="lgCol">
          <div className="lgColThema">
            <div className="title"><h1>[Introduction]</h1></div>
            <div className="subtitle"><h2>"Is that boring Thing?</h2></div>
          </div>
          
          <div className="textBox"><p>Lorem Ipsum is simply dummy text 
            of the printing and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since 1966, when designers 
            at Letraset and James Mosley,standard dummy text ever since 1966, when designers 
            at Letraset and James Mosley,<br/><br/> the librarian at St Bride Printing Library 
            in London, took a 1914 Cicero translation and scrambled it to 
            make dummy text for Letraset's Body Type sheets.</p>
          </div>
          <div className="socials">
            <button className="portfolio-btn">Downloade CV</button>
            <div className="social-links-box">
              <div className="link" id="link"><a href="#"><FaGithub /></a></div>
              <div className="link" id="link"><a href="#"><FaLinkedin /></a></div>
              <div className="link" id="link"><a href="#"><FaLinkedin /></a></div>
            </div>
          </div>      
        </div>     
    </div>
  );
}

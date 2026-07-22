"use client"
import React, { useState, useRef, useEffect } from 'react'
import './menu.css'

import gsap from 'gsap'
import { useRouter } from 'next/navigation';
import {useGSAP} from "@gsap/react"

export default function Menu(){

    const menuLinks = [
        {href: "/", label: "Home"},
        {href: "/introduction", label: "Introduction"},
        {href: "/education", label: "Education"},
        {href: "/projects", label: "Projects"},
        {href: "/contact", label: "Contact"},
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const container = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);
    const router = useRouter();

    const menuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    
    const haviToggle =  (e, href) => {
        e.preventDefault();
        gsap.to(".menu-overlay", {
            onComplete: () => {
                setIsMenuOpen(false);
                router.push(href);
            }
        });
    }

    useGSAP(() => {
        gsap.set(".menu-link-info", {y: 50, opacity: 0})
        gsap.set(".menu-link" , {y: 50, opacity: 0},)
        gsap.set(".menu-close", {x: 50, opacity: 0})
        gsap.set(".menu-open", {x: 0, opacity: 1})
        tl.current = gsap.timeline({paused: true})
         .to(".menu-open",{
            x: 50,
            duration: 0.5,
            opacity: 0,
            ease: "power4.inOut",
        })
        .to(".menu-overlay", {
            duration: 1.25,
           
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power4.inOut",
            delay: -0.60,
            
        })
       
        .to(".menu-link",{
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            opacity: 1,
            ease: "power4.inOut",
            delay: -.75,
        })
        .to(".menu-link-info",{
            y: 0,
            duration: 0.5,
            opacity: 1,
            ease: "power4.inOut",
            stagger: 0.1,
            delay: -0.75,
        })
        .to(".menu-close",{
            x: 0,
            duration: 0.5,
            opacity: 1,
            delay: -0.75,
            ease: "power4.inOut",
        })
        
    }, {scope: container})


    useEffect(() => {
        if(isMenuOpen) {
            tl.current?.play();
        } else {
            tl.current?.reverse();
        }
    }, [isMenuOpen])

    return(
    <div className="menu-container" ref={container}>
        <div className="menu-bar">
            <div className="menu-logo">
                <a href="/">portfolio</a>
            </div>
            <div className='menu-open' onClick={menuToggle} style={{cursor: 'pointer'}}>
                <p>Menu</p>
            </div>
        </div>
        <div className="menu-overlay">
            <div className="menu-overlay-bar">
                <div className="menu-logo">
                    <a href="/">portfolio</a>
                </div>
                <div className='menu-close' onClick={menuToggle} style={{cursor: 'pointer'}}>
                    <p>Close</p>
                </div>
            </div>
            <div className="menu-cp">
                <div className="menu-links">
                    {
                        menuLinks.map(({href, label}, index)=> (
                            <div className="menu-link" key={index}>
                                <a onClick={(e) => haviToggle(e, href)} href={href}>{label}</a>
                            </div>
                        ))   
                    }
                </div>
                <div className="menu-info">
                    <div className="menu-info-col">
                        <a className='menu-link-info' href="#">X &#8599;</a>
                        <a className='menu-link-info' href="#">LinkedIn &#8599;</a>
                        <a className='menu-link-info' href="#">Instagram &#8599;</a>
                        <a className='menu-link-info' href="#">Github &#8599;</a>
                    </div>
                    <div className="menu-info-col">
                        <p className='menu-link-info'>emial@gmail.com</p>
                        <p className='menu-link-info'>747 747 4774</p>
                    </div>
                </div>
            </div>
            <div className="menu-preview"></div>
        </div>
    </div>
    )
}
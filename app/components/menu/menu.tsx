"use client";
import React, { useState, useRef, useEffect } from "react";
import "./menu.css";

import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-bar">
        <div className="menu-logo">
          <a href="/">portfolio</a>
        </div>
        <div className="btn-dw">
          <button className="">Downloade CV</button>
        </div>
      </div>
    </div>
  );
}

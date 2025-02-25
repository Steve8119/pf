// src/components/Layout.jsx
import React, { useEffect } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  useEffect(() => {
    const gradient = document.getElementById("gradient-bg");
    let angle = 0;
    const animateGradient = () => {
      angle += 1;
      gradient.style.background = `linear-gradient(${angle}deg, #000428, #004e92)`;
      requestAnimationFrame(animateGradient);
    };
    animateGradient();
  }, []);

  return (
    <div id="gradient-bg" className="min-h-screen text-white">
      <Navbar />
      <div className="pt-20">{children}</div>
    </div>
  );
}

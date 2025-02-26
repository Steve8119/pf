// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css"; // Import custom CSS

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for toggling menu

  return (
    <nav className="navbar">
      <h1>STEPHEN WAITHAKA</h1>
      
      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        {["Home", "Skills", "Experience", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

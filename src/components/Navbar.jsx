// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css"; // Import custom CSS

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>STEPHEN WAITHAKA</h1>
      <ul>
        {["Home", "Skills", "Experience", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

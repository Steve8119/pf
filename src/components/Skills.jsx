// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skillsData = [
  { name: "JavaScript", description: "A versatile language for web development." },
  { name: "React", description: "A powerful library for building UI components." },
  { name: "Tailwind CSS", description: "A utility-first CSS framework for rapid design." },
  { name: "Node.js", description: "A JavaScript runtime for building backend applications." },
  { name: "UI/UX Design", description: "Creating intuitive and engaging user interfaces." }
];

export default function Skills() {
  return (
    <motion.section 
      id="skills" 
      className="skills-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 
        className="animated-title"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        Skills
      </motion.h2>
      
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-box"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

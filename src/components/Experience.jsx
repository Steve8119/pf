import React, { useState } from "react";
import "./Experience.css";
import hackathonImg from "../assets/hackathon.png";
import socialMediaImg from "../assets/social_media.png";
import streamingImg from "../assets/streaming.png";

const experienceData = [
  { 
    title: "Software & Graphic Design Hackathons", 
    fullDescription: "I have actively participated in multiple hackathons...",
    image: hackathonImg
  },
  { 
    title: "Social Media Management", 
    fullDescription: "I specialize in Social Media Management, helping brands...",
    image: socialMediaImg
  },
  { 
    title: "Church Event Streaming", 
    fullDescription: "I am currently managing the live streaming of Ridgeways...",
    image: streamingImg
  }
];

export default function Experience() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="experience" className="experience-container">
      <h2 className="animated-title">Experience</h2>
      <div className="experience-list">
        {experienceData.map((item, index) => (
          <div 
            key={index} 
            className={`experience-item ${index % 2 === 0 ? "row" : "row-reverse"}`}
          >
            <div className="image-container">
              <img src={item.image} alt={item.title} className="experience-image" />
            </div>
            <div className="text-container">
              <h3>{item.title}</h3>
              <p>
                {expanded[index] 
                  ? item.fullDescription 
                  : `${item.fullDescription.split(" ").slice(0, 20).join(" ")}... `}
              </p>
              <button className="read-more-btn" onClick={() => toggleExpand(index)}>
                {expanded[index] ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

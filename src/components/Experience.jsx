import React, { useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import "./Experience.css";
import hackathonImg from "../assets/hackathon.png";
import socialMediaImg from "../assets/social_media.png";
import streamingImg from "../assets/streaming.png";

const experienceData = [
  { 
    title: "Software & Graphic Design Hackathons", 
    fullDescription: `I have actively participated in multiple hackathons, both in software development and graphic design. 
    These events allowed me to develop problem-solving skills, work under tight deadlines, and collaborate with diverse teams. 
    I built full-stack applications, designed user interfaces, and developed branding solutions. Hackathons gave me exposure 
    to technologies like React, Django, Figma, and Node.js...`,
    image: hackathonImg
  },
  { 
    title: "Social Media Management", 
    fullDescription: `Managing social media platforms involves more than just posting content. I specialize in creating engaging 
    digital strategies that increase brand visibility. Over the years, I have handled content creation, performance analysis, 
    and audience engagement for businesses, churches, and influencers. My expertise includes designing promotional graphics...`,
    image: socialMediaImg
  },
  { 
    title: "Church Event Streaming", 
    fullDescription: `I have managed live streaming for Ridgeways Church, ensuring high-quality broadcasts that reach global audiences. 
    This role involves setting up cameras, adjusting sound levels, and troubleshooting issues in real-time. Broadcasting church 
    services requires a deep understanding of streaming software like OBS, vMix, and YouTube Live...`,
    image: streamingImg
  }
];

export default function Experience() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <section id="experience" className="experience-container">
      <h2 className="animated-title">My Experience</h2>
      <div className="experience-list">
        {experienceData.map((item, index) => (
          <div key={index} className={`experience-item ${index % 2 === 0 ? "row" : "row-reverse"}`}>
            <div className="image-container">
              <img src={item.image} alt={item.title} className="experience-image" />
            </div>
            <div className="text-container">
              <h3>{item.title}</h3>
              {/* Show only first 15 words before the 'Read More' button */}
              <p className="preview-text">{item.fullDescription.split(" ").slice(0, 15).join(" ")}...</p>
              <button className="read-more-btn" onClick={() => openModal(item)}>
                Read More <FaArrowRight className="arrow" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}><FaTimes /></button>
            <h2 className="modal-title">{modalContent.title}</h2>
            <p className="modal-description">{modalContent.fullDescription}</p>
          </div>
        </div>
      )}
    </section>
  );
}

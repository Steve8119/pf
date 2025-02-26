// src/components/Experience.jsx
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // Import arrow icon
import "./Experience.css";
import hackathonImg from "../assets/hackathon.png";
import socialMediaImg from "../assets/social_media.png";
import streamingImg from "../assets/streaming.png";

const experienceData = [
  { 
    title: "Software & Graphic Design Hackathons", 
    fullDescription: `I have actively participated in multiple hackathons, both in software development and graphic design. 
    These events have allowed me to challenge my problem-solving skills, work under strict deadlines, and collaborate with 
    teams of diverse talents. During these hackathons, I have built full-stack applications, designed user-friendly interfaces, 
    and developed creative branding solutions. One of the key takeaways has been the ability to brainstorm innovative ideas 
    and convert them into functional products in a short time frame. Hackathons have also given me exposure to various 
    technologies such as React, Django, Figma, and Node.js. Networking with industry professionals and receiving mentorship 
    have further enhanced my understanding of the field. I strongly believe hackathons provide an excellent opportunity 
    to push creative boundaries and refine technical skills.`,
    image: hackathonImg
  },
  { 
    title: "Social Media Management", 
    fullDescription: `I specialize in Social Media Management, helping brands build their online presence, engage with their audience, 
    and create content that drives growth. My expertise includes crafting compelling posts, analyzing engagement metrics, 
    and running paid advertising campaigns. Over the years, I have managed social media pages for businesses, churches, 
    and influencers, focusing on consistency and audience engagement. By leveraging analytics, I refine content strategies 
    to maximize reach and conversions. Understanding platform algorithms allows me to optimize content for better visibility. 
    I also experiment with different media formats such as videos, infographics, and live streams to keep content fresh and engaging. 
    The ability to adapt to trends and stay updated with changes in digital marketing makes me highly effective in this field.`,
    image: socialMediaImg
  },
  { 
    title: "Church Event Streaming", 
    fullDescription: `I am currently managing the live streaming of Ridgeways Church events, ensuring smooth, high-quality broadcasts. 
    This involves setting up camera equipment, managing audio levels, and troubleshooting technical issues in real-time. 
    Live streaming requires careful coordination to ensure the best viewer experience. I have worked on improving stream stability, 
    enhancing video clarity, and integrating interactive elements like live chats and overlays. My role also includes post-production 
    editing, where I refine recorded sessions for replays. The ability to engage a virtual audience is critical, and I focus on 
    making services accessible to a global audience. I enjoy utilizing modern streaming platforms such as YouTube Live, Facebook Live, 
    and Zoom to deliver content effectively. Managing a digital congregation has taught me adaptability and crisis management, 
    especially in handling unexpected disruptions.`,
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
              <button 
                className={`read-more-btn ${expanded[index] ? "expanded" : ""}`} 
                onClick={() => toggleExpand(index)}
              >
                {expanded[index] ? "Read Less" : "Read More"}  
                <FaArrowRight className="arrow" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React, { useState } from "react";
import "./Experience.css";
import hackathonImg from "../assets/hackathon.png";
import socialMediaImg from "../assets/social_media.png";
import streamingImg from "../assets/streaming.png";

const experienceData = [
  { 
    title: "Software & Graphic Design Hackathons", 
    fullDescription: "I have actively participated in multiple hackathons, including a Blockchain Hackathon where my team built a blockchain-based software solution, ultimately emerging as the winners. Additionally, I have taken part in several graphic design hackathons at SwahiliPot Mombasa, Red Cross, and other venues, further refining my design and creative problem-solving skills. Beyond hackathons, I have worked extensively as a freelance graphic designer, creating logos, posters, banners, business cards, and stickers for various clients. My experience spans multiple industries, allowing me to craft unique and visually compelling designs that align with brand identities. Currently, I am engaged in graphic design work for Ridgeways Pentecostal Church, where I contribute to their branding and visual communication. My passion for design and technology continues to drive me toward innovative and impactful creative solutions.",
    image: hackathonImg
  },
  { 
    title: "Social Media Management", 
    fullDescription: "I specialize in Social Media Management, helping brands and organizations build a strong digital presence. Currently, I manage Ridgeways Pentecostal Church’s social media platforms, including Facebook (Ridgeways Pentecostal Church), YouTube, Instagram, and TikTok. My role involves creating and curating engaging content, designing eye-catching graphics, scheduling posts, and ensuring consistent branding across all platforms. Through strategic content planning, I enhance audience engagement, increase reach, and foster a sense of community. From crafting compelling captions and producing video content to managing live streams and responding to audience interactions, I ensure the church's message reaches and impacts as many people as possible. My experience extends beyond church media management—I have successfully handled various social media accounts, creating digital marketing strategies that drive growth and visibility. With a passion for storytelling, brand communication, and audience engagement, I aim to create meaningful digital experiences that inspire and connect communities. 🚀 #SocialMediaManager #DigitalEngagement",
    image: socialMediaImg
  },
  { 
    title: "Church Event Streaming", 
    fullDescription: "I am currently managing the live streaming of Ridgeways Pentecostal Church services and events exclusively on YouTube. Through high-quality broadcasts, I ensure that sermons, worship sessions, and special programs reach a global audience, allowing members and followers to engage in real time from anywhere. My role includes setting up and optimizing live streams, ensuring clear audio and video quality, and managing real-time interactions in the live chat. I also handle post-stream tasks such as video editing, thumbnail design, and SEO optimization to maximize reach and engagement. By leveraging YouTube’s platform, I help the church expand its digital ministry, making worship more accessible to those who cannot attend in person. My goal is to enhance the online worship experience, foster community engagement, and grow the church’s digital presence through consistent, high-quality content.",
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
          <div key={index} className={`experience-item ${index % 2 === 0 ? "reverse" : ""}`}>
            <img src={item.image} alt={item.title} className="experience-image" />
            <div className="experience-text">
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

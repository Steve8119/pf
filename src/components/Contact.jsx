import React from "react";
import { FaEnvelope, FaPhone, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const contactDetails = [
  { icon: <FaPhone />, title: "Phone", info: "+254 794 194 058", link: "tel:+254794194058" },
  { icon: <FaEnvelope />, title: "Email", info: "stevenwaithaka8119@mail.com", link: "mailto:stevenwaithaka8119@mail.com" },
  { icon: <FaFacebook />, title: "Facebook", info: "Stephen Waithaka", link: "https://www.facebook.com/stephen.waithaka" },
  { icon: <FaLinkedin />, title: "LinkedIn", info: "Steve Waithaka", link: "https://www.linkedin.com/in/steve-waithaka" },
  { icon: <FaGithub />, title: "GitHub", info: "steve8119", link: "https://github.com/steve8119" }
];

export default function Contact() {
  return (
    <section id="contact" className="contact-container">
      <h2 className="animated-title">Contact</h2>
      <div className="contact-row">
        {contactDetails.map((item, index) => (
          <a key={index} href={item.link} className="contact-box" target="_blank" rel="noopener noreferrer">
            <div className="contact-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.info}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

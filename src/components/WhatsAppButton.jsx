import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css"; // Import the CSS file

export default function WhatsAppButton() {
  const phoneNumber = "254794194058"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
}

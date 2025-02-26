// src/components/Home.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
import profileImage from "../assets/1.jpg";

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.section 
      id="home" 
      className="home-container"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 1 }}
    >
      <div className="content-container">
        <motion.div 
          className="about-me"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <h2>Hello, I'm <span>Stephen Waithaka</span></h2>
          <h3>
            <Typewriter
              words={["Software Developer", "React & Django Expert", "Graphic Designer", "Live Stream Specialist"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          <p>
            I am skilled in <span>Django, React JS, Graphic Design, Social Media Management,</span> 
            and <span>Live Streaming</span>.
          </p>
          <motion.button 
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Learn More"}
          </motion.button>

          {showMore && (
            <motion.div 
              className="extra-info"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p>
                I specialize in building dynamic web applications using Django and React JS.
              </p>
              <p>
                I also have experience in Graphic Design, Social Media Management, and Live Streaming.
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div 
          className="profile-container"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <img src={profileImage} alt="Profile" className="responsive-img" />
        </motion.div>
      </div>
    </motion.section>
  );
}

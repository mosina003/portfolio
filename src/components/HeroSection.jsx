import React from "react";
import Typewriter from "typewriter-effect";
import "../styles/HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Side - Text Content */}
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Mosina S</span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "AI & Data Science Enthusiast",
                  "Web Developer",
                  "Tech Innovator",
                  "React & Flask Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          <div className="hero-buttons">
            <a href="/resume.pdf" download className="btn">
              Download Resume
            </a>
            <Link to="/contact" className="btn">
              Contact Me
              </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hero-image">
          <img src="/mos.jpg" alt="Mosina Profile" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

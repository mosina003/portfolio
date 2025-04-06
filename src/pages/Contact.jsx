import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <p>I'd love to connect with you! Reach out to me through any of the platforms below.</p>

        <div className="contact-info">
          <div className="contact-item">
            📞 <span>+91 9123582088</span>
          </div>
          <div className="contact-item">
            📧 <span>smosina003@gmail.com</span>
          </div>
          <div className="contact-item">
            💼 <a href="https://www.linkedin.com/in/mosina-s-a1455b326/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className="contact-item">
            🖥️ <a href="https://github.com/mosina003" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import "../Styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-wrapper">
        <h2>My Projects</h2>
        <div className="projects-grid">

          {/* Project 1 */}
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <h3>AI Chatbot</h3>
                <p>React + Flask + NLP</p>
              </div>
              <div className="flip-back">
                <p>
                  Built an AI chatbot with seamless frontend/backend integration and NLP.
                </p>
                <div className="btn-group">
                  <a href="https://github.com/yourusername/ai-chatbot" target="_blank" rel="noopener noreferrer" className="btn">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <h3>IoT Fan Automation</h3>
                <p>Offline Voice Control</p>
              </div>
              <div className="flip-back">
                <p>
                  Designed an offline voice-controlled fan using Arduino and IR modules.
                </p>
                <div className="btn-group">
                  <a href="https://github.com/yourusername/iot-fan" target="_blank" rel="noopener noreferrer" className="btn">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-front">
                <h3>Virtual AI Painter</h3>
                <p>Python + Mediapipe</p>
              </div>
              <div className="flip-back">
                <p>
                  Created a virtual painter using real-time hand tracking via Mediapipe.
                </p>
                <div className="btn-group">
                  <a href="https://github.com/yourusername/ai-painter" target="_blank" rel="noopener noreferrer" className="btn">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;

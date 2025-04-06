import React from "react";
import "./../styles/About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-card">
        <h2>About Me</h2>
        <p>
  I'm a B.Tech graduate in <strong> AI & Data Science</strong> with a passion for blending <strong>technology</strong> and <strong>intelligence</strong>.
</p>

<p>
  I specialize in <strong>Artificial Intelligence (AI)</strong>, <strong>Machine Learning</strong>, and <strong>Web Development</strong>, turning ideas into smart, user-friendly solutions
</p>

<p>
  Proficient in <strong>Python</strong>, <strong>React</strong>, and <strong>Java</strong>, I love crafting <strong>intelligent applications</strong> and <strong>sleek web interfaces</strong>.
</p>

<p>
  Always curious and growth-driven , I aim to build <strong>impactful products</strong> with <strong>data-driven insights</strong> and <strong>clean design</strong>.
</p>


        

        {/* Areas of Interest Section */}
        <div className="interest-section">
          <h3>Areas of Interest</h3>
          <div className="interest-grid">
            <div className="interest-card">
              <span role="img" aria-label="AI">🤖</span>
              <p>Artificial Intelligence</p>
            </div>
            <div className="interest-card">
              <span role="img" aria-label="Data">📊</span>
              <p>Data Analysis</p>
            </div>
            <div className="interest-card">
              <span role="img" aria-label="ML">🧠</span>
              <p>Machine Learning</p>
            </div>
            <div className="interest-card">
              <span role="img" aria-label="Web">🌐</span>
              <p>Web Development</p>
            </div>
            <div className="interest-card">
              <span role="img" aria-label="Solve">🧪</span>
              <p>Problem Solving</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

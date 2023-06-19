import React from "react";
import skills from "../../assets/skills.png";
import crayon from "../../assets/crayon.png";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h1>Skills</h1>
      <div className="skills">
        <span className="skill">
          <img src={crayon} alt="crayon" />
          <span className="skillText">
            <p>I am always developing my skills</p>
          </span>
        </span>
        <img src={skills} alt="skills" />
      </div>
      <div className="skillsets">
        <div className="skillset">
          <ul>
            <li>User Research</li>
            <li>Information Architecture</li>
            <li>Wireframing and Prototyping</li>
            <li>Interaction Design</li>
            <li>User-Centered Design</li>
            <li>Visual Design</li>
          </ul>
        </div>
        <div className="skillset">
          <ul>
            <li>Usability Testing</li>
            <li>Design Thinking</li>
            <li>Collaborative Skills</li>
            <li>Prototyping Tools</li>
            <li>Analytical Skills</li>
            <li>Communication and Presentation</li>
            <li>Adaptability and iteration</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;

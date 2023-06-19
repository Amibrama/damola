import React from "react";
import cv from "../../assets/cv.png";
import "./Education.css";

const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="educations">
        <div className="education__item">
          <ul>
            <li>
              <span className="yellow">
                Bachelor of Physiotherapy, Assam Downtown University:{" "}
              </span>
              I pursued my Bachelor's degree in Physiotherapy at Assam Downtown
              University.
            </li>
            <li>
              <span className="underlined">Google UX Design Course,</span>
              Coursera: I further expanded my knowledge and expertise in UX
              design through the Google UX Design Course on Coursera.{" "}
            </li>
            <li>
              UI/UX Design Boot camp: To enhance my skills and stay up-to-date
              with the latest industry practices, I completed a rigorous UI/UX
              Design Bootcamp.
            </li>
          </ul>
        </div>
        <div className="cv">
          <img src={cv} alt="cv" />
        </div>
      </div>
    </div>
  );
};

export default Education;

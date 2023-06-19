import React from "react";
import damola from "../../assets/damola.png";
import crayon from "../../assets/crayon.png";
import line from "../../assets/line.png";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="aboutMe">
        <h2>Hello,</h2>
        <p>
          As a Passionate Junior UX Designer with a love for reading, exploring,
          and traveling. I am dedicated to creating intuitive and user-centered
          digital experiences.
          <span className="underline">
            {" "}
            Through my attention to detail and empathetic
            <span className="line">
              <img src={line} alt="line" />
            </span>
          </span>
          <span className="underline">
            approach, I strive to design seamless and delightful interactions.
            <span className="line">
              <img src={line} alt="line" />
            </span>
          </span>
          <span className="underline">
            With a thirst for knowledge, I am committed to continuous learning
            and
            <span className="line">
              <img src={line} alt="line" />
            </span>
          </span>
          {/* <span className="underline"> */}
          staying up-to-date with industry trends. When I'm not designing,
          {/* <span className="line">
              <img src={line} alt="line" />
            </span>
          </span> */}
          you'll find me immersed in a good book, exploring new places, or
          seeking inspiration in different cultures.
        </p>
      </div>
      <div className="aboutImage">
        <div className="column">
          <div className="top">
            <img src={crayon} alt="crayon" />
            <span>Empathetic</span>
          </div>
          <div className="row">
            <div className="left">
              <img src={crayon} alt="crayon" />
              <span>Dedicated</span>
            </div>
            <div className="middle">
              <img src={damola} alt="damola" />
            </div>
            <div className="right">
              <img src={crayon} alt="crayon" />
              <span>Attentive</span>
            </div>
          </div>

          <div className="bottom">
            <img src={crayon} alt="crayon" />
            <span>Sociable</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

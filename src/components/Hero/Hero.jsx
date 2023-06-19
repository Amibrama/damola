import React from "react";
import star from "../../assets/star.png";
import scribble from "../../assets/scribble.png";
import doddle from "../../assets/dooddle.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="main">
      <div className="hero">
        <h1>
          P
          <span className="oo">
            O
            <span className="number">
              20
              <br />
              23
            </span>
          </span>
          RTF
          <span className="oo">
            O
            <span className="number">
              <img src={star} alt="star" />
            </span>
            <span className="scribble">
              <img src={scribble} alt="scribble" />
            </span>
          </span>
          L
          <span className="oo">
            I
            <span className="name">
              {/* link to the about section */}

              <a href="#about">
                <p>Adedamola Alao</p>
              </a>
            </span>
          </span>
          <span className="oo">
            O
            <span className="number">
              {/* link to my resume */}

              <a href="./ade.pdf" target="_blank">
                CV
              </a>
            </span>
          </span>
        </h1>
      </div>
      <div className="designer">
        <p>UX/UI Designer</p>
        <span className="doddle">
          <img src={doddle} alt="doddle" />
        </span>
      </div>
    </div>
  );
};

export default Hero;

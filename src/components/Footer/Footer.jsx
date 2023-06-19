import React from "react";
import damola from "../../assets/damola.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="image__email">
        <div className="footer_image">
          <img src={damola} alt="damola" />
        </div>
        <div className="footer_email">
          <button className="btn">
            {" "}
            Get in touch!
            <div className="background"></div>
          </button>
        </div>
      </div>
      <div className="footer__text">
        <p>
          As a junior UX designer, I may be early in my career, but my passion
          and determination drive me to excel. With a solid foundation in UX
          principles, I bring fresh perspectives and a hunger for growth to
          every project. I embrace challenges, continuously learn, and strive to
          create meaningful experiences that leave a lasting impact. Let's
          collaborate and unleash the full potential of user-centered design
          together.
        </p>
      </div>
    </div>
  );
};

export default Footer;

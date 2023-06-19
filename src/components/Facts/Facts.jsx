import React from "react";
import board from "../../assets/board.png";
import "./Facts.css";

const Facts = () => {
  return (
    <div className="fact__container">
      <h1>Facts About Me!</h1>
      <div className="facts">
        <div className="fact__board">
          <img src={board} alt="board" />
        </div>
        <div className="fact__text">
          <p>
            Fun Fact: I'm a Multifaceted Adventurer! From crafting captivating
            stories to exploring new horizons, my passions know no bounds. I'm a
            writer who conjures enchanting worlds, a traveler who embraces
            diverse cultures, and a fashion enthusiast who loves creating unique
            looks. With a knack for mind games, I enjoy solving puzzles that
            challenge my intellect. forgot to include i am a pod caster where i
            speak to young adult around the globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facts;

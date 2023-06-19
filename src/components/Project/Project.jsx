import React from "react";
import "./Project.css";
import phone from "../../assets/phone.png";
import laptop from "../../assets/laptop.png";
import cloth from "../../assets/cloth.png";
import smiks from "../../assets/smiks.png";
import ProjectData from "./ProjectData";

const Project = () => {
  return (
    <div className="project">
      <h1>projects</h1>
      <div className="images">
        <img src={cloth} alt="ptimages" />
        <img src={laptop} alt="ptimages" />
        <img src={smiks} alt="ptimages" />
        <img src={phone} alt="ptimages" />
      </div>

      <div className="projects">
        <h1> Recent works</h1>

        {ProjectData.map((data) => (
          <div className="project__card" key={data.id}>
            <div className="projectimage">
              <img src={data.image} alt="project" />
            </div>
            <div className="project__info">
              <h2>{data.title}</h2>
              <p>{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

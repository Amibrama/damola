import React from "react";
import "./Project.css";
import ProjectData from "./ProjectData";

const Project = () => {
  return (
    <div className="project">
      <div className="projects">
        <h1>Recent works</h1>
        <div className="project__card1" key={ProjectData[0].id}>
          <div className="projectimage">
            <img src={ProjectData[0].image} alt="project" />
          </div>
          <div className="project__info">
            <h2>{ProjectData[0].title}</h2>
            <p>{ProjectData[0].desc}</p>
          </div>
        </div>
        <div className="project__cards">
          {ProjectData.slice(1).map((data) => (
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
    </div>
  );
};

export default Project;

import React from "react";
import colmarImg from "../public/assets/projects/Colmar.png";
import gymminiImg from "../public/assets/projects/Gymmini.png";
import weatherImg from "../public/assets/projects/Weather.png";
import cryptoImg from "../public/assets/projects/Crypto.png";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div id="projects" className="projects-outer">
      <div className="projects-container">
        <p className="projects-1st-p">Projects</p>
        <h2 className="projects-1st-h2">What I&apos;ve Built</h2>
        <div className="projects-card-container">
          <ProjectItem
            title="Colmar Academy"
            backgroundImg={colmarImg}
            projectUrl="/colmar"
            toolsUse="HTML CSS"
          />
          <ProjectItem
            title="Gymmini(In Progress)"
            backgroundImg={gymminiImg}
            projectUrl="/gymmini"
            toolsUse="Next Tailwind Express MongoDB"
          />
          <ProjectItem
            title="Weather App"
            backgroundImg={weatherImg}
            projectUrl="/weather"
            toolsUse="Next Tailwind"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            toolsUse="React Tailwind Firebase"
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ title, backgroundImg, projectUrl, toolsUse }) => {
  return (
    <div className="projects-card">
      <Image className="card-img" src={backgroundImg} alt="/" />
      <div className="card-text-container">
        <h3>{title}</h3>
        <p className="card-1st-p">{toolsUse}</p>
        <Link href={projectUrl}>
          <p className="card-2nd-p">More Info</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;

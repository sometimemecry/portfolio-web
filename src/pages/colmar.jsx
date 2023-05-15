import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import colmarImg from "../../public/assets/projects/Colmar.png";
import Link from "next/link";

export default function Colmar() {
  return (
    <div className="route-project-outer">
      <div className="route-project-container">
        <div className="route-project-top" />
        <div className="route-project-img-container">
          <Image
            className="route-project-img"
            layout="fill"
            objectFit="cover"
            src={colmarImg}
            alt="Colmar Academy project"
          />
        </div>
        <div className="top-text-container">
          <h2 className="top-text-h2">Colmar Academy</h2>
          <h3 className="top-text-h3">HTML / CSS</h3>
        </div>
      </div>
      <div className="bottom-text-container">
        <div className="bottom-text">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            &ldquo;This project is from Codecademy and is being used as an
            assessment to test participants&apos; knowledge of HTML and CSS
            within the JSD4 bootcamp of Generation Thailand. The assessment/test
            is being given to evaluate the skills of the participants.&rdquo;
          </p>

          <button className="route-project-button">
            <a
              href="https://sometimemecry-colmar.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </button>
          <button className="route-project-button">
            <a
              href="https://github.com/sometimemecry/Colmar-Academy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </button>
        </div>
        <div className="tech-container">
          <div className="tech-p-container">
            <p className="tech-1st-p">Technologies</p>
            <div className="tech-items-container">
              <p className="tech-items">
                <RiRadioButtonFill className="tech-icon" /> HTML
              </p>
              <p className="tech-items">
                <RiRadioButtonFill className="tech-icon" /> CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects" className="back-button">
          Back
        </Link>
      </div>
    </div>
  );
}

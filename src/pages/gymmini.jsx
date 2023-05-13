import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import gymminiImg from "../../public/assets/projects/Gymmini.png";
import Link from "next/link";

export default function gymmini() {
  return (
    <div className="route-project-outer">
      <div className="route-project-container">
        <div className="route-project-top" />
        <Image
          className="route-project-img"
          layout="fill"
          objectFit="cover"
          src={gymminiImg}
          alt=""
        />
        <div className="top-text-container">
          <h2 className="top-text-h2">Gymmini</h2>
          <h3 className="top-text-h3">Next / Tailwind / Express / MongoDB</h3>
        </div>
      </div>
      <div className="bottom-text-container">
        <div className="bottom-text">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            &quot;This project is the final project of JSD4 bootcamp from
            Generation Thailand, which is an activity tracker project that can
            create cards to record input data such as title, duration, distance,
            date, and description, and also allows editing or deleting those
            cards. This project implements CRUD functionality using Next.js as
            the core framework, Tailwind for styling, Express and Axios for API
            development to connect with the backend, and MongoDB as the
            database.&quot;
          </p>
          <button className="route-project-button">Demo</button>
          <button className="route-project-button">Code</button>
        </div>
        <div className="tech-container">
          <div className="tech-p-container">
            <p className="tech-1st-p">Technologies</p>
            <div className="tech-items-container">
              <p className="tech-items">
                <RiRadioButtonFill className="tech-icon" /> NextJS
              </p>
              <p className="tech-items">
                <RiRadioButtonFill className="tech-icon" /> Tailwind
              </p>
              <p className="tech-items">
                <RiRadioButtonFill className="tech-icon" /> Express
              </p>
              <p className="tech-items">
                <RiRadioButtonFill className="tech-icon" /> Axios
              </p>
              <p className="tech-items">
                <RiRadioButtonFill className="tech-icon" /> MongoDB
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

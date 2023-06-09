import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import weatherImg from "../../public/assets/projects/Weather.png";
import Link from "next/link";

export default function weather() {
  return (
    <div className="route-project-outer">
      <div className="route-project-container">
        <div className="route-project-top" />
        <Image
          className="route-project-img"
          layout="fill"
          objectFit="cover"
          src={weatherImg}
          alt=""
        />
        <div className="top-text-container">
          <h2 className="top-text-h2">Weather</h2>
          <h3 className="top-text-h3">Next / Tailwind </h3>
        </div>
      </div>
      <div className="bottom-text-container">
        <div className="bottom-text">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            &quot;This project is for me to practice using APIs and integrating
            data obtained from them. The project is built with Next.js as the
            main framework and styled with Tailwind. In this project, Axios is
            used to send API requests to OpenWeather to display weather
            data.&quot;
          </p>
          <a
            href="https://weather-app-sometimemecry.vercel.app/"
            target="_blank"
          >
            <button className="route-project-button">Demo</button>
          </a>
          <a
            href="https://github.com/sometimemecry/weather-app"
            target="_blank"
          >
            <button className="route-project-button">Code</button>
          </a>
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
                <RiRadioButtonFill className="tech-icon" /> Axios
              </p>
              <p className="tech-items">
                <RiRadioButtonFill className="tech-icon" /> OpenWeather API
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

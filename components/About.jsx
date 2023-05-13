import React from "react";
import Image from "next/image";
import aboutmeImage from "../public/assets/aboutme.jpg";
import Link from "next/link";

export default function About() {
  return (
    <div id="about" className="about-outer">
      <div className="about-container">
        <div className="left-container">
          <p className="about-1st-p">ABOUT</p>
          <h2 className="about-h2">Who I Am</h2>
          <p className="about-2nd-p">
            I am a recent graduate of the Junior Software Developer program at
            Generation Thailand, with solid technical skills in web development
            using React, Tailwind, Express and MongoDB. I also have two years of
            experience working as a food delivery rider, which has improved my
            communication skills and problem-solving abilities. My goal is to
            secure a position as a Frontend Developer, where I can use my
            technical expertise and prior experience to help my team succeed.
          </p>
          <p className="about-3rd-p">
            <Link href="/#projects">
              Check out some of my lastest projects.
            </Link>
          </p>
        </div>
        <div className="about-image-container">
          <Image className="about-image" src={aboutmeImage} alt="About me" />
        </div>
      </div>
    </div>
  );
}

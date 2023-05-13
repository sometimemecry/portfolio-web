import Image from "next/image";
import React from "react";

export default function Skills() {
  return (
    <div id="skills" className="skills-outer">
      <div className="skills-container">
        <p className="skills-1st-p">Skills</p>
        <h2 className="skills-h2">What I Can Do</h2>
        <div className="skills-items-container">
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image
                  src="/../public/assets/skills/html.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="skills-text">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image
                  src="/../public/assets/skills/css.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="skills-text">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="skills-text">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image
                  src="/../public/assets/skills/react.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="skills-text">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="skills-text">
                <h3>Next.Js</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="skills-text">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image
                  src="/../public/assets/skills/github1.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="skills-text">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image
                  src="/../public/assets/skills/mongo.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="skills-text">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import htmlImg from "../public/assets/skills/html.png";
import cssImg from "../public/assets/skills/css.png";
import jsImg from "../public/assets/skills/javascript.png";
import reactImg from "../public/assets/skills/react.png";
import nextImg from "../public/assets/skills/nextjs.png";
import tailwindImg from "../public/assets/skills/tailwind.png";
import githubImg from "../public/assets/skills/github1.png";
import mongoImg from "../public/assets/skills/mongo.png";
import firebaseImg from "../public/assets/skills/firebase.png";
import nodeImg from "../public/assets/skills/node.png";
import jiraImg from "../public/assets/skills/jira.png";
import figmaImg from "../public/assets/skills/figma.png";

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
                <Image src={htmlImg} width="64" height="64" alt="/" />
              </div>
              <div className="skills-text">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image src={cssImg} width="64" height="64" alt="/" />
              </div>
              <div className="skills-text">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image src={jsImg} width="64" height="64" alt="/" />
              </div>
              <div className="skills-text">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image src={reactImg} width="64" height="64" alt="/" />
              </div>
              <div className="skills-text">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image src={nextImg} width="64" height="64" alt="/" />
              </div>
              <div className="skills-text">
                <h3>Next.Js</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image src={tailwindImg} width="64" height="64" alt="/" />
              </div>
              <div className="skills-text">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image src={githubImg} width="64" height="64" alt="/" />
              </div>
              <div className="skills-text">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image src={firebaseImg} width="64" height="64" alt="/" />
              </div>
              <div className="skills-text">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image src={figmaImg} width="64" height="64" alt="/" />
              </div>
              <div className="skills-text">
                <h3>Figma</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image src={jiraImg} width="64" height="64" alt="/" />
              </div>
              <div className="skills-text">
                <h3>Jira</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image src={nodeImg} width="64" height="64" alt="/" />
              </div>
              <div className="skills-text">
                <h3>NodeJs</h3>
              </div>
            </div>
          </div>
          <div className="skills-items">
            <div className="skills-items-inner">
              <div className="skills-items-image">
                <Image src={mongoImg} width="64" height="64" alt="/" />
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

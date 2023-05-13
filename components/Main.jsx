import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Main() {
  return (
    <div id="home" className="main-outer">
      <div className="main-container">
        <div>
          <p className="main-1st-p"></p>
          <h1 className="main-h1">
            Hi, I&apos;m <span className="main-span"> Songphon</span>
          </h1>
          <h1 className="main-h1">A Frontend Web Developer</h1>
          <p className="main-2nd-p">
            I&apos;m focused on building frontend web applications integrating
            back-end technologies
          </p>
          <div className="main-menu-container">
            <a
              href="https://www.linkedin.com/in/songphon-yuenyaw/"
              target="_blank"
            >
              <div className="main-menu-items">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/sometimemecry" target="_blank">
              <div className="main-menu-items">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:songphon.yy@hotmail.com">
              <div className="main-menu-items">
                <AiOutlineMail />
              </div>
            </a>
            <a
              href="https://drive.google.com/file/d/1v458MfhDm4RAqbCyEEJtenPcZG7NjpsH/view?usp=sharing"
              target="_blank"
            >
              <div className="main-menu-items">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

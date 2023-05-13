import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/colmar" ||
      router.asPath === "/gymmini" ||
      router.asPath === "/weather" ||
      router.asPath === "/crypto"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  });

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={shadow ? "navbar-container" : "navbar-container-scroll"}
      style={{ backgroundColor: `${navBg}` }}
    >
      <div className="navbar-logo">
        <Image />
        <div>
          <ul className="menu-container" style={{ color: `${linkColor}` }}>
            <Link href="/">
              <li className="navbar-menu">Home</li>
            </Link>
            <Link href="/#about">
              <li className="navbar-menu">About</li>
            </Link>
            <Link href="/#skills">
              <li className="navbar-menu">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="navbar-menu">Projects</li>
            </Link>
            <Link href="/#certificate">
              <li className="navbar-menu">certificate</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="menu-slide">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={nav ? "sidebar-slide" : ""}>
        <div
          className={nav ? "sidebar-container" : "sidebar-container-inactive"}
        >
          <div>
            <div className="sidebar-logo">
              <Image />
              <div onClick={handleNav} className="sidebar-close">
                <AiOutlineClose />
              </div>
            </div>
            <div className="sidebar-text-container">
              <p className="sidebar-text"></p>
            </div>
          </div>
          <div className="sidebar-outer">
            <ul className="sidebar-menu-container">
              <Link href="/">
                <li onClick={() => setNav(false)} className="sidebar-menu">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="sidebar-menu">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="sidebar-menu">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="sidebar-menu">
                  Projects
                </li>
              </Link>
              <Link href="/#certificate">
                <li onClick={() => setNav(false)} className="sidebar-menu">
                  certificate
                </li>
              </Link>
            </ul>
            <div className="sidebar-bot">
              <p>Let's Connect</p>
              <div className="bot-icon-container">
                <div className="bot-icon">
                  <a
                    href="https://www.linkedin.com/in/songphon-yuenyaw/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="bot-icon">
                  <a href="https://github.com/sometimemecry" target="_blank">
                    <FaGithub />
                  </a>
                </div>
                <div className="bot-icon">
                  <a href="mailto:songphon.yy@hotmail.com">
                    <AiOutlineMail />
                  </a>
                </div>
                <div className="bot-icon">
                  <a
                    href="https://drive.google.com/file/d/1v458MfhDm4RAqbCyEEJtenPcZG7NjpsH/view?usp=sharing"
                    target="_blank"
                  >
                    <BsFillPersonLinesFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

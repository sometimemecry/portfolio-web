import React from "react";
import Image from "next/image";
import contactImg from "../public/assets/contact.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

export default function Contact() {
  return (
    <div id="contact" className="contact-outer">
      <div className="contact-container">
        <p className="contact-container-p">Contact</p>
        <h2 className="contact-container-h2">Get In Touch</h2>
        <div className="contact-inner-container">
          <div className="left-contact-container">
            <div className="left-contact-items">
              <div>
                <Image src={contactImg} className="contact-items-img" />
              </div>
              <div>
                <h2 className="left-contact-h2">Songphon Yuenyaw</h2>
                <p>Frontend Developer</p>
                <p className="left-contact-p">
                  I am avaible for full-time positions. Contact me and let's
                  talk.
                </p>
              </div>
              <div>
                <p className="left-contact-p2">Connect With Me</p>
                <div className="contact-menu">
                  <div className="main-menu-items">
                    <a
                      href="https://www.linkedin.com/in/songphon-yuenyaw/"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="main-menu-items">
                    <a href="https://github.com/sometimemecry" target="_blank">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="main-menu-items">
                    <a href="mailto:songphon.yy@hotmail.com">
                      <AiOutlineMail />
                    </a>
                  </div>
                  <div className="main-menu-items">
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
          <div className="right-contact-container">
            <div className="form-container">
              <form>
                <div className="form-inner">
                  <div className="short-items-items">
                    <label className="form-label">Name</label>
                    <input className="form-input" type="text" />
                  </div>
                  <div className="short-items-items">
                    <label className="form-label">Phone Number</label>
                    <input className="form-input" type="text" />
                  </div>
                </div>
                <div className="normal-form-container">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" />
                </div>
                <div className="normal-form-container">
                  <label className="form-label">Subject</label>
                  <input className="form-input" type="text" />
                </div>
                <div className="normal-form-container">
                  <label className="form-label">Message</label>
                  <textarea rows="10" className="form-message"></textarea>
                </div>
                <button className="contact-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="backtotop-button">
          <Link href="/">
            <div className="icon-container">
              <HiOutlineChevronDoubleUp className="icon" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

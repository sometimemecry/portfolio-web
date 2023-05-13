import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import cryptoImg from "../../public/assets/projects/Crypto.png";
import Link from "next/link";

export default function CryptoBase() {
  return (
    <div className="route-project-outer">
      <div className="route-project-container">
        <div className="route-project-top" />
        <Image
          className="route-project-img"
          layout="fill"
          objectFit="cover"
          src={cryptoImg}
          alt="CryptoBase project image"
        />
        <div className="top-text-container">
          <h2 className="top-text-h2">Cryptobase</h2>
          <h3 className="top-text-h3">React / Tailwind</h3>
        </div>
      </div>
      <div className="bottom-text-container">
        <div className="bottom-text">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            &ldquo;This project is a practice project for me to learn how to use
            APIs. The main framework of this project is React, and the styling
            is done using Tailwind. The API requests are made using Axios to
            query the CoinGecko API for cryptocurrency data, which is then
            mapped and displayed in a table. For user management, Firebase Auth
            is used to handle sign-ins, sign-ups, and logouts throughout the
            system. When a user signs up and logs in, they can click a star icon
            on the crypto page they want to add to their watchlist. When the
            user visits their account page, the cryptocurrencies they&rsquo;ve
            chosen will be displayed. The watchlist management uses Firestore
            database to store the data for each user&rsquo;s selected
            cryptocurrency, and the project is deployed using Firebase.&rdquo;
          </p>
          <a
            href="https://cryptobase-3130a.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="route-project-button">Demo</button>
          </a>
          <a
            href="https://github.com/sometimemecry/cryptobase-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="route-project-button">Code</button>
          </a>
        </div>
        <div className="tech-container">
          <div className="tech-p-container">
            <p className="tech-1st-p">Technologies</p>
            <div className="tech-items-container">
              <p className="tech-items">
                <RiRadioButtonFill className="tech-icon" /> ReactJS
              </p>
              <p className="tech-items">
                <RiRadioButtonFill className="tech-icon" /> Tailwind
              </p>
              <p className="tech-items">
                <RiRadioButtonFill className="tech-icon" /> Axios
              </p>
              <p className="tech-items">
                <RiRadioButtonFill className="tech-icon" /> CoinGecko API
              </p>
              <p className="tech-items">
                <RiRadioButtonFill className="tech-icon" /> Firebase Auth
              </p>
              <p className="tech-items">
                <RiRadioButtonFill className="tech-icon" /> Firestore Database
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

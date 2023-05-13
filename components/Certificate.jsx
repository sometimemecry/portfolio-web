import React, { useState } from "react";
import HTMLcer from "../public/assets/certificate/HTMLcer.png";
import CSScer from "../public/assets/certificate/CSScer.png";
import JScer from "../public/assets/certificate/JScer.png";
import reactcer from "../public/assets/certificate/reactcer.png";
import mongoaggre from "../public/assets/certificate/mongo-aggregation.png";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function Certificate() {
  return (
    <div id="certificate" className="certificate-outer">
      <div className="certificate-container">
        <p className="certificate-container-1st-p">Certificate</p>
        <h2 className="certificate-container-1st-h2">What I&apos;ve Learned</h2>
        <Carousel className="image-container">
          <div>
            <Image className="cert-img" src={HTMLcer} alt="" />
          </div>
          <div>
            <Image className="cert-img" src={CSScer} alt="" />
          </div>
          <div>
            <Image className="cert-img" src={JScer} alt="" />
          </div>
          <div>
            <Image className="cert-img" src={reactcer} alt="" />
          </div>
          <div>
            <Image className="cert-img" src={mongoaggre} alt="" />
          </div>
        </Carousel>
      </div>
      <div className="backtotop-button">
        <Link href="/">
          <div className="icon-container">
            <HiOutlineChevronDoubleUp className="icon" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
}

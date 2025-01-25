"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const Hero = ({ props }) => {
  const [ismobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-[100%] h-[100vh] m-0 p-0 box-border fixed top-0">
      <div
        className="absolute inset-0 h-full z-10"
        style={{
          backgroundColor: "#000",
          opacity: 0.1,
        }}
      ></div>
      <div
        className="relative container-fluid w-[100%] h-[100%] flex flex-col text-center justify-center items-center bg-cover bg-center pt-5"
        style={{ backgroundImage: "url('./landingaltaltaltalt.jpg')" }}
      >
        <div className="absolute flex flex-col justify-center items-center -translate-y-5">
          {/* DEPARTMENT OF aligned to the left */}
          <p className="text-white font-saira lg-xl:text-[2rem] lg:text-[1.8rem] md:text-[1.5rem] sm:text-[1.3rem] text-[1rem]  font-extrabold text-left w-full leading-tight">
            DEPARTMENT OF
          </p>
          {/* COMPUTER SCIENCE AND ENGINEERING centered */}
          <p className="text-white font-saira lg-xl:text-[4rem] lg:text-[3rem] md:text-[2.7rem] sm:text-[2.2rem] text-[2.3rem] font-extrabold text-left md:text-center w-full leading-tight">
            COMPUTER SCIENCE{" "}
            {ismobile && (
              <span className="block -m-7 md:-m-8 w-[10%] h-[10%] mx-auto ">
                <br />
              </span>
            )}{" "}
            AND ENGINEERING
          </p>
          {/* NATIONAL INSTITUTE OF TECHNOLOGY, CALICUT aligned to the right */}
          <p className="text-white font-saira lg-xl:text-[2rem] lg:text-[1.8rem] md:text-[1.5rem] sm:text-[1.3rem] text-[1rem]  font-extrabold text-right w-full leading-tight">
            NATIONAL INSTITUTE OF TECHNOLOGY, CALICUT
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const Hero = ({ props }) => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    

    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
     
    });
  }, []);

  return (
    <div className="relative w-[100%] h-[100vh] m-0 p-0 box-border">
      <div
        className="container-fluid w-[100%] h-[100%] flex flex-col text-center justify-center items-center bg-cover bg-center pt-5"
        style={{ backgroundImage: "url('./Hero/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <p
          ref={titleRef}
          className="text-white font-saira max-400:text-3xl max-400:mb-[40vh] text-4xl sm:text-6xl font-extrabold z-10 max-w-[80%] sm:max-w-[600px] lg:max-w-[800px] p-auto mb-[35vh] sm:mb-20"
        >
          DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
        </p>
        <div
          ref={containerRef}
          className="bg-[#FFFBF2] pr-8 sm:px-0 text-left sm:min-w-[500px] rounded-2xl sm:rounded-b-none absolute bottom-10 sm:bottom-0 sm:right-auto z-10"
        >
          <div className="flex flex-col sm:flex-row justify-around px-6 sm:px-12 py-4 w-[100%] text-[#812981] font-teko sm:text-left sm:gap-12">
            {/* NEWS Section */}
            <div className="flex flex-col border-b sm:border-b-0 border-[#DEBDDD] mt-4 pb-3">
              <a className="text-xl sm:text-3xl font-bold tracking-widest">NEWS</a>
              {props.news.map((item, index) => (
                <Link key={index} href={item.href} passHref>
                  <p className="text-[#696969] text-left text-md md:text-lg whitespace-nowrap hover:underline">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>

            <div className="h-[100px] w-1 bg-[#DEBDDD] my-auto rounded-lg sm:block hidden"></div>
            <div className="flex flex-col border-b sm:border-b-0 border-[#DEBDDD] mt-4 pb-3">
              <a className="text-xl sm:text-3xl font-bold tracking-widest">UPDATES</a>
              {props.updates.map((item, index) => (
                <Link key={index} href={item.href} passHref>
                  <p className="text-[#696969] text-left text-md md:text-lg whitespace-nowrap hover:underline">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
            <div className="h-[100px] w-1 bg-[#DEBDDD] my-auto rounded-lg sm:block hidden"></div>
            <div className="flex flex-col mt-4 pb-3">
              <a className="text-xl sm:text-3xl font-bold tracking-widest">EVENTS</a>
              {props.events.map((item, index) => (
                <Link key={index} href={item.href} passHref>
                  <p className="text-[#696969] text-left text-md md:text-lg whitespace-nowrap hover:underline">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

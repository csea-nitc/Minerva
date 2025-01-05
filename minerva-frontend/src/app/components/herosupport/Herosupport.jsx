"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import DownloadButton from "../downloadbutton/DownloadButton";
import { gsap } from "gsap";
import styles from "./squigglyLine.module.css";

const Herosupport = ({ props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []); // Create a ref for the navbar
  return (
    <div className="w-[100%] mt-[-15vh] ">
      <div className="relative container-fluid w-[100%] h-[100%] flex flex-col text-center justify-center items-center bg-cover bg-center pt-5 ">
        <div
          ref={containerRef}
          className="bg-[#FFFBF2] min-[400px]:w-[40%] w-[45%] md:w-[60%] rounded-lg relative bottom-12 mb-5 mt-auto z-20 translate-y-4"
        >
          {/* <div className="flex flex-col md:flex-row  justify-around p-5 w-[100%] text-[#812981] font-teko md:text-left">
            <div className="flex flex-col md:w-[33%] border-b md:border-b-0 md:border-r-4 border-[#DEBDDD] md:mr-3 mt-3 pb-3 md:pb-0 md:pr-3">
              <a className="text-xl md:text-3xl font-bold tracking-widest">
                NEWS
              </a>
              {props.news.map((item, index) => (
                <Link key={index} href={item.href} passHref>
                  <p className="text-[#696969] text-left text-md md:text-lg md:w-[85%] hover:underline">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>

            <div className="flex flex-col md:w-[33%] border-b md:border-b-0 md:border-r-4 border-[#DEBDDD] md:mr-3 mt-3 pb-3 md:pb-0 md:pr-3">
              <a className="text-xl md:text-3xl font-bold tracking-widest">
                UPDATES
              </a>
              {props.updates.map((item, index) => (
                <Link key={index} href={item.href} passHref>
                  <p className="text-[#696969] text-left text-md md:text-lg md:w-[85%] hover:underline">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>

            <div className="flex flex-col md:w-[33%] md:mr-3 mt-3 pb-3 md:pb-0 md:pr-3">
              <a className="text-xl md:text-3xl font-bold tracking-widest">
                EVENTS
              </a>
              {props.events.map((item, index) => (
                <Link key={index} href={item.href} passHref>
                  <p className="text-[#696969] text-left text-md md:text-lg md:w-[85%] hover:underline">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      <div
        className={`w-full h-[20vh] relative z-10 bottom-[6.5vh] ${styles.topSquiggly}`}
      />
      <div className="w-full bg-accent flex flex-col">
        <div className="w-full bg-accent flex flex-col md:flex-row relative z-10 bottom-[12vh] mb-[-12vh] mt-10  ">
          <div className="flex flex-col w-[100%] md:w-[66%] items-center justify-center lg:mt-10 relative   h-[100%] ">
            <div className="text-white text-6xl text-bold font-Teko">
              Our Programmes
            </div>
            <div className="h-[30%] md:h-[22%] p-10 mt-[10px] -translate-y-7 flex flex-col md:flex-row justify-center items-center gap-4">
              <DownloadButton
                text="UG BROCHURE"
                href="https://example.com"
                isExternal={false}
              />
              <DownloadButton
                text="PG BROCHURE"
                href="https://example.com"
                isExternal={false}
              />
            </div>
          </div>
          <div className="flex flex-col relative bottom-14 md:bottom-0 md:top-2 mt-10 2xl:mx-10 lg:left-24 font-teko h-[100%] items-center justify-center text-center ">
            <div className="border-l-2">
              {" "}
              <div className="text-white text-3xl text-bold font-Teko m-2 mb-4">
                LINKS
              </div>
              <div className="flex flex-row md:flex-col">
                <div className="text-white text-3xl px-5 py-2">
                  Placeholder1
                </div>
                <div className="text-white text-3xl px-5 py-2">
                  Placeholder1
                </div>
              </div>
            </div>
        </div>
        <div
          className={`hidden md:flex border-l-[10px] border-[#800080] w-full h-[10vh] absolute z-10 ${styles.bottomSquiggly} translate-y-[14vh] overflow-hidden`}
        />
      </div>
    </div>
  );

};

export default Herosupport;

/*
<div className='flex flex-col mt-10 relative bottom-8 left-10 font-teko h-[100%] items-center justify-center'>
                <div className='text-white text-3xl m-2'>Placeholder1</div>
                <div className='text-white text-3xl m-2'>Placeholder1</div>
                <div className='text-white text-3xl m-2'>Placeholder3</div>
</div>
*/

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
    }, []);


  return (
    <div className="relative mt-[90vh] z-10">
      <div className="w-[100%] mt-[15vh]">
        <div
          className={`w-full h-[20vh] relative z-10 bottom-[6.5vh] translate-y-3 ${styles.topSquiggly}`}
        />


                <div className="w-full bg-accent flex flex-col items-center justify-center">
                    <div className="w-[100%] bg-accent justify-center flex flex-col md:flex-row relative z-10 bottom-[12vh] mb-[-18vh] mt-10">
                        <div className="flex flex-col  items-center justify-center lg:mt-10 relative h-[100%] ">
                            <div className="md:p-10 md:pl-3 pt-0 md:pr-3 ">
                                <div className="text-white text-4xl text-bold font-Teko text-left mb-10">
                                    Our Programmes
                                </div>
                                <div className="h-[30%] md:h-[22%] mt-[35px] -translate-y-7 flex flex-col justify-center items-center gap-4 mb-5">
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
                        </div>

                        <div className="flex flex-col relative bottom-14 md:bottom-0 md:top-2 mt-10 font-teko mb-3 h-[100%] items-center justify-center text-center ">
                            <div className="border-l-2 md:mb-12 mb-10">
                                <div className="text-white pl-5 text-left text-3xl lg:text-4xl text-bold font-Teko pb-2 ">
                                    Links
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-white text-left text-2xl lg:text-3xl pl-5 pr-3 py-1 text-wrap break-words lg:w-[600px] sm:w-[300px] w-[250px]">
                                        DCC Minutes
                                    </div>
                                    <div className="text-white text-left text-2xl lg:text-3xl pl-5 pr-3 py-1 text-wrap break-words lg:w-[600px] sm:w-[300px] w-[250px]">
                                        PlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlacehol
                                    </div>
                                    <div className="text-white text-left text-2xl lg:text-3xl pl-5 pr-3 py-1 text-wrap break-words lg:w-[600px] sm:w-[300px] w-[250px]">
                                        PlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlacehol
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`hidden md:flex border-l-[10px] border-[#800080] w-full h-[10vh] absolute z-10 ${styles.bottomSquiggly} relative  overflow-hidden`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Herosupport;

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
        <div className="relative mt-[75vh] sm:mt-[70vh] md:mt-[65vh] lg:mt-[70vh] z-10">
            <div className="w-[100%] mt-[15vh]">
                <div
                    className={`w-full h-[20vh] relative z-10 bottom-[6.5vh] ${styles.topSquiggly}`}
                />


                <div className="w-full bg-accent flex flex-col">
                    <div className="w-full bg-accent justify-center flex flex-col md:flex-row relative z-10 bottom-[12vh] mb-[-12vh] mt-10">
                        <div className="flex flex-col  items-center justify-center lg:mt-10 relative h-[100%] ">
                            <div className="p-10 pt-0">
                                <div className="text-white text-6xl text-bold font-Teko text-left mb-10">
                                    Our Programmes
                                </div>
                                <div className="h-[30%] md:h-[22%]  mt-[35px] -translate-y-7 flex flex-col md:flex-row justify-center items-center gap-4">
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

                        <div className="flex flex-col relative bottom-14 md:bottom-0 md:top-2 mt-10 font-teko h-[100%] items-center justify-center text-center ">
                            <div className="border-l-2 md:mb-12">
                                <div className="text-white px-5 text-left text-3xl lg:text-4xl text-bold font-Teko pb-2 ">
                                    LINKS
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-white text-left text-2xl lg:text-3xl px-5 py-1 text-wrap break-words lg:w-[600px] sm:w-[400px] w-[250px]">
                                        DCC Minutes
                                    </div>
                                    <div className="text-white text-left text-2xl lg:text-3xl px-5 py-1 text-wrap break-words lg:w-[600px] sm:w-[400px] w-[250px]">
                                        Placeholder1
                                    </div>
                                    <div className="text-white text-left text-2xl lg:text-3xl px-5 py-1 text-wrap break-words lg:w-[600px] sm:w-[400px] w-[250px]">
                                        PlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlaceholPlacehol
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`hidden md:flex border-l-[10px] border-[#800080] w-full h-[10vh] absolute z-10 ${styles.bottomSquiggly} translate-y-[12vh] mt-7 overflow-hidden`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Herosupport;

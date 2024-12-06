"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const History = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.fromTo(
                ".history-text",
                { x: 200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: ".history-image",
                        start: "top bottom",
                        end: "top center",
                        scrub: true,
                    },
                }
            );
        }
    }, []);
    return (
        <div className="flex relative flex-col">
            <div className="bg-[#800080] h-[100%] sm:w-[2.5rem] w-[1.2rem] absolute"></div>
            <div className="text-center text-[#800080] md:text-[10rem] sm:text-[6rem] text-[4.5rem]  md:w-[52rem] sm:h-[10.75rem] flex justify-center items-center right-[-28rem] font-bold md:ml-[1.9rem] flex-grow md:flex-grow-0 mb-[4rem]">
                HISTORY
            </div>
            <div className="text-black w-[89%]  text-justify md:mr-[2rem] lg:mr-[0rem] flex justify-center items-center md:text-[1.8rem] sm:text-[1.6rem] text-[1.3rem] md:ml-[3rem] sm:ml-[3rem] ml-[1.6rem]">
                <p className="w-[90%]">
                    From its inception about a century ago, computing has become
                    the defining technology of our age. The study of computing
                    is the study of the process of abstraction and its power,
                    the practice of design and implementation, mathematical
                    theory of computation and its implications.
                </p>
            </div>

            <div className="relative w-[90%] flex justify-end mt-8">
                <div className=" absolute history-text text-[#800080] font-bold text-[15rem] font-[verdana] right-[500px]">
                    1985
                </div>
                <Image
                    src="/images/history-img.png"
                    alt="History Image"
                    width={500}
                    height={300}
                    className="history-image rounded-md mb-[10rem]"
                />
            </div>
        </div>
    );
};

export default History;

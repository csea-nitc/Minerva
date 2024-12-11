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
                { x: 500, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: ".history-image",
                        start: "center bottom",
                        end: "center center",
                        scrub: true,
                        toggleActions: "play reverse play reverse",
                    },
                }
            );

            gsap.fromTo(
                ".history-text-top",
                { y: 300, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: ".history-image",
                        start: "center bottom",
                        end: "center center",
                        scrub: true,
                        toggleActions: "play reverse play reverse",
                    },
                }
            );

            const matchMedia = gsap.matchMedia();
            matchMedia.add(
                {
                    isMd: "(min-width: 768px) and (max-width: 1024px)",
                },
                () => {
                    const timeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".history-image",
                            start: "center bottom",
                            end: "center center",
                            scrub: true,
                            toggleActions: "play reverse play reverse",
                        },
                    });

                    timeline
                        .fromTo(
                            ".history-text-md",
                            { y: 50, opacity: 0 },
                            {
                                y: 0,
                                opacity: 1,
                                duration: 0.5,
                                ease: "power2.out",
                            }
                        )
                        .fromTo(
                            ".history-text-md",
                            { x: 0 },
                            {
                                x: -175,
                                duration: 0.5,
                                ease: "power2.out",
                            }
                        );

                    return () => {
                        timeline.kill();
                    };
                }
            );
        }
    }, []);

    return (
        <div className="flex relative flex-col pb-6">
            <div className="bg-[#800080] h-[101%] sm:w-[2.5rem] w-[1.2rem] absolute"></div>
            <div className="flex items-center justify-center">
                <div className="text-center text-[#800080] md:text-[8rem] sm:text-[6rem] text-[4.5rem] md:w-[45rem] sm:h-[10.75rem] flex justify-center items-center font-bold flex-grow lg:flex-grow-0 md:mb-[4rem]">
                    HISTORY
                </div>
            </div>
            <div className="text-black w-[89%] text-justify md:mr-[2rem] lg:mr-[0rem] flex justify-center items-center xl:text-[1.7rem] md:text-[1.5rem] sm:text-[1.3rem] text-[1.1rem] md:ml-[3rem] sm:ml-[3rem] ml-[1.6rem]">
                <p className="w-[90%]">
                    From its inception about a century ago, computing has become
                    the defining technology of our age. The study of computing
                    is the study of the process of abstraction and its power,
                    the practice of design and implementation, mathematical
                    theory of computation and its implications.
                </p>
            </div>

            <div className="relative flex justify-end md:mt-[15rem] mt-[8rem] lg:mt-[5rem] mb-[5rem] md:ml-[5rem] md:mr-[13rem] w-[90%] ml-[2.5rem] sm:ml-[3.5rem]">
                {/** Slide Left (for lg+) **/}
                <div className="lg:static absolute history-text text-[#800080] font-bold 2xl:text-[12rem] lg:text-[8rem] text-[7rem] font-[verdana] right-[60%] lg:flex hidden justify-center items-center">
                    1985
                </div>
                {/** Slide up (for md-) **/}
                <div className="text-center lg:static absolute history-text-top text-[#800080] font-bold 2xl:mt-[5rem] 2xl:text-[12rem] md:text-[10rem] sm:text-[8rem] text-[4rem] font-[verdana] lg:right-[60%] right-[1rem] sm:right-0 md:right-8 md:hidden justify-center items-center lg:mt-[2rem] w-[100%] md:top-[-15rem] sm:top-[-10rem] top-[-7rem]">
                    1985
                </div>
                {/** Slide up and Slide Left (for md-lg) **/}
                <div className="text-center lg:static absolute history-text-md text-[#800080] font-bold 2xl:mt-[5rem] 2xl:text-[12rem] md:text-[10rem] sm:text-[8rem] text-[4rem] font-[verdana] lg:right-[60%] right-[1rem] sm:right-0 md:right-8 hidden md:flex lg:hidden justify-center items-center lg:mt-[2rem] w-[100%] md:top-[-15rem] sm:top-[-10rem] top-[-7rem] pl-[8rem]">
                    1985
                </div>
                <Image
                    src="/images/history-img.png"
                    alt="History Image"
                    width={500}
                    height={300}
                    className="history-image rounded-md lg:w-[50%] md:w-[70%] w-[90%] mr-[2rem] md:mr-[4.5rem] lg:mr-[6rem] xl:mr-[8rem] z-10"
                />
            </div>

            <div className="text-black w-[89%] text-justify md:mr-[2rem] lg:mr-[0rem] flex justify-center items-center xl:text-[1.7rem] md:text-[1.6rem] sm:text-[1.4rem] text-[1.2rem] md:ml-[3rem] sm:ml-[3rem] ml-[1.6rem]">
                <p className="w-[95%]">
                    Undergraduate programme in Computer Science and Engineering
                    started in the year 1985 in the then Electrical Engineering
                    Department. The Department of Computer Science and
                    Engineering (CSE) was formally established as an independent
                    entity in the year 1997 as a result of trifurcation of the
                    Department of Electrical Engineering.
                </p>
            </div>
        </div>
    );
};

export default History;

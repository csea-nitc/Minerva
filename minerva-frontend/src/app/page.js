"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/heropage/Hero";
import Data from "./data.json";
import Herosupport from "./components/herosupport/Herosupport";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        ".history-text",
        { x: 500, opacity: 0 },
        {
          x: -30,
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
          y: 50,
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
    <div>
      <Hero props={Data} />
      <Herosupport props={Data} />
      <div className=" w-[100vw]  relative z-10 bg-white">
        <div className="bg-[#800080] h-[100%] w-[10px] absolute"></div>

        <div className="w-[85%] mx-auto">
          <div className=" relative md:h-[25rem] md:flex m-0 p-0 overflow-hidden flex overflow-y-hidden overflow-x-hidden">
            <div className="flex flex-col md:flex-row w-[100%] ">
              <div className="flex justify-center items-center">
                <div className="md:transform md:rotate-90 font-saira text-justify text-[#800080] lg:text-[4.3rem] xl-lg:text-[12rem] md:text-[10rem] sm:text-[4rem] text-[4rem] md:absolute  md:w-[52rem] sm:h-[10.75rem] flex justify-center items-center md:top-[30%] lg:right-[-17rem] md:right-[-20.5rem] right-[-28rem] font-bold ">
                  PROFILE
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="sm:h-[50%] h-[50%] font-mont font-bold text-black xl:text-[1.6rem] md:text-[1.5rem] sm:text-[1.3rem] text-[1.1rem] xl:w-[75%] lg:w-[65%] md:w-[68%] sm:w-[80%] w-[85%]  flex flex-col md:justify-center justify-start text-justify  md:mr-[5rem] lg:mr-[9rem] lg-xl:mr-[10rem] xl:mr-[15rem]  ">
                  <p className="mb-3 md:block hidden">
                    The Department of Computer Science and Engineering, NIT
                    Calicut offers undergraduate and postgraduate programs in
                    computer science and engineering and doctoral degree
                    program.
                  </p>
                  <p className="md:block hidden">
                    The fast changing scenario in Information Technology
                    necessitates the department to actively extend its research
                    and development activities. The{" "}
                    <span className="text-[#800080]">
                      current research interests of the department
                    </span>{" "}
                    include major areas of research in computer science.
                  </p>
                </div>
              </div>
              <div className="text-black font-mont w-[89%] font-bold text-justify md:mr-[2rem] lg:mr-[0rem] flex flex-col justify-center items-center xl:text-[1.6rem] md:text-[1.5rem] sm:text-[1.3rem] text-[1.1rem] md:ml-[3rem] sm:ml-[3rem] ml-[1.6rem] md:hidden">
                <p className="w-[90%] pb-10">
                  Department of Computer Science and Engineering offers
                  undergraduate and postgraduate programs in computer science
                  and engineering and doctoral degree program.
                </p>
                <p className="w-[90%] pb-10">
                  The fast changing scenario in Information Technology
                  necessitates the department to actively extend its research
                  and development activities. The{" "}
                  <span className="text-[#800080]">
                    current research interests of the department
                  </span>{" "}
                  include major areas of research in computer science.
                </p>
              </div>
            </div>
          </div>

          <div className=" relative md:h-[25rem] md:flex m-0 p-0 overflow-hidden flex flex-col overflow-y-hidden overflow-x-hidden w-[85%] mx-auto">
            <div className="flex ">
              <div className=" w-[30%] font-saira text-[#800080] lg:text-[8rem] xl-lg:text-[12rem] md:text-[10rem] sm:text-[8rem] text-[5rem]  sm:h-[10.75rem]  justify-center items-center font-bold">
                VISION
              </div>
              <div className="w-[70%]">
                <p className="w-[90%]  text-black font-mont font-bold text-right justify-center align-middle xl:text-[1.6rem] md:text-[1.5rem] sm:text-[1.3rem] text-[1.1rem] my-auto">
                  To be a Centre of Excellence in the Discipline of Computing.
                </p>
              </div>
            </div>
            <div className="border-t-4 border-[#800080] translate-y-2"></div>
            <div className="flex ">
              <div className="w-[72%]">
                <p className="w-[90%]  text-black font-mont font-bold text-justify justify-center align-middle xl:text-[1.6rem] md:text-[1.5rem] sm:text-[1.3rem] text-[1.1rem] my-auto">
                  To develop human resource with sound knowledge- theory and
                  practical - in the discipline of computing and the ability to
                  apply the knowledge to the benefit of the society at large.
                </p>
              </div>
              <div className=" w-[28%] font-saira text-[#800080] lg:text-[8rem] xl-lg:text-[12rem] md:text-[10rem] sm:text-[8rem] text-[5rem] sm:h-[10.75rem]   items-center font-bold  lg:mr-[10rem] xl:mr-[10rem]">
                MISSION
              </div>
            </div>
          </div>

          <div className="flex relative flex-col pb-6">
            <div className="flex items-center justify-center">
              <div className="text-center text-[#800080] font-saira lg:text-[11.5rem] xl-lg:text-[12rem] md:text-[10rem] sm:text-[8rem] text-[5rem] md:w-[45rem] sm:h-[10.75rem] flex justify-center items-center font-bold flex-grow lg:flex-grow-0 md:mb-[4rem]">
                HISTORY
              </div>
            </div>
            <div className="text-black font-mont w-[89%] font-bold text-justify md:mr-[2rem] lg:mr-[0rem] flex justify-center items-center xl:text-[1.6rem] md:text-[1.5rem] sm:text-[1.3rem] text-[1.1rem] md:ml-[3rem] sm:ml-[3rem] ml-[1.6rem]">
              <p className="w-[90%]">
                From its inception about a century ago, computing has become the
                defining technology of our age. The study of computing is the
                study of the process of abstraction and its power, the practice
                of design and implementation, mathematical theory of computation
                and its implications.
              </p>
            </div>

            <div className="relative flex justify-end font-saira md:mt-[15rem] mt-[8rem] lg:mt-[5rem] mb-[5rem] md:ml-[5rem] md:mr-[13rem] w-[90%] ml-[2.5rem] sm:ml-[3.5rem] pr-[0.7rem] md-lg:pr-[0.9rem]">
              {/** Slide Left (for lg+) **/}
              <div className="lg:static absolute history-text text-[#800080] font-bold 2xl:text-[12rem] lg:text-[8rem] text-[7rem]  right-[60%] lg:flex hidden justify-center items-center">
                1985
              </div>
              {/** Slide up (for md-) **/}
              <div className="text-center lg:static absolute history-text-top text-[#800080] font-bold 2xl:mt-[5rem] 2xl:text-[12rem] md:text-[10rem] sm:text-[9rem] text-[5rem]  lg:right-[60%] right-[1rem] sm:right-0 md:right-8 md:hidden justify-center items-center lg:mt-[2rem] w-[100%] md:top-[-15rem] sm:top-[-10rem] top-[-7rem]">
                1985
              </div>
              {/** Slide up and Slide Left (for md-lg) **/}
              <div className="text-center lg:static absolute history-text-md text-[#800080] font-bold 2xl:mt-[5rem] 2xl:text-[12rem] md:text-[10rem] sm:text-[8rem] text-[4rem]  lg:right-[60%] right-[1rem] sm:right-0 md:right-8 hidden md:flex lg:hidden justify-center items-center lg:mt-[2rem] w-[100%] md:top-[-15rem] sm:top-[-10rem] top-[-7rem] pl-[8rem]">
                1985
              </div>
              <Image
                src="/images/history-img.png"
                alt="History Image"
                width={500}
                height={300}
                className="history-image rounded-md lg:w-[50%] md:w-[70%] w-[90%] mr-[2rem] md:mr-[4.5rem] lg:mr-[6rem] xl:mr-[8rem] z-10 hidden md:block"
              />
            </div>

            <div className="text-black font-mont w-[89%] font-bold text-justify md:mr-[2rem] lg:mr-[0rem] flex justify-center items-center xl:text-[1.6rem] md:text-[1.5rem] sm:text-[1.3rem] text-[1.1rem] md:ml-[3rem] sm:ml-[3rem] ml-[1.6rem]">
              <Image
                src="/images/history-img.png"
                alt="History Image"
                width={500}
                height={300}
                className="history-image rounded-md md:hidden w-[90%] z-10 mb-12"
              />
            </div>
            <div className="text-black font-mont w-[89%] font-bold text-justify md:mr-[2rem] lg:mr-[0rem] flex justify-center items-center xl:text-[1.6rem] md:text-[1.5rem] sm:text-[1.3rem] text-[1.1rem] md:ml-[3rem] sm:ml-[3rem] ml-[1.6rem]">
              <p className="w-[90%] pb-10">
                Undergraduate programme in Computer Science and Engineering
                started in the year 1985 in the then Electrical Engineering
                Department. The Department of Computer Science and Engineering
                (CSE) was formally established as an independent entity in the
                year 1997 as a result of trifurcation of the Department of
                Electrical Engineering.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#800080] font-mont text-white lg:h-[25rem] overflow-hidden relative sm-md:rounded-tr-[250px] sm-md:p-[2rem]">
          <div className="w-[80%] mx-auto">
            <div className="relative text-white font-mont w-[89%] font-bold text-justify md:mr-[2rem] lg:mr-[0rem]  xl:text-[1.6rem] md:text-[1.5rem] sm:text-[1.3rem] text-[1.1rem] md:ml-[3rem] sm:ml-[3rem] ml-[1.6rem]">
              <img
                src="/images/csea.png"
                alt="csea img"
                className="circular-img hidden sm-md:block lg:w-[20rem] sm-md:w-[16rem] sm:w-[14rem] "
              />

              <p className="text-justify xl:text-[1.6rem] md:text-[1.5rem] sm:text-[1.3rem] text-[1.1rem] mb-[2rem] hidden sm-md:block">
                The three-year MCA programme started in 1988. The two-year
                M.Tech. programme in Computer Science and Engineering started in
                1998. The two-year M.Tech. programme in Computer Science and
                Engineering (Information Security) started in 2006. The two-year
                M.Tech. programme in Computer Science and Engineering
                (Artificial Intelligence and Data Analytics) started in 2023.
                PhD programme started in 2002.
              </p>
            </div>
            <div className="text-white font-mont w-[89%] font-bold text-justify md:mr-[2rem] lg:mr-[0rem] flex justify-center items-center xl:text-[1.6rem] md:text-[1.5rem] sm:text-[1.3rem] text-[1.1rem] md:ml-[3rem] sm:ml-[3rem] ml-[1.6rem] sm-md:hidden pt-[5rem]">
              <p className="w-[90%]">
                The three-year MCA programme started in 1988. The two-year
                M.Tech. programme in Computer Science and Engineering started in
                1998. The two-year M.Tech. programme in Computer Science and
                Engineering (Information Security) started in 2006. The two-year
                M.Tech. programme in Computer Science and Engineering
                (Artificial Intelligence and Data Analytics) started in 2023.
                PhD programme started in 2002.
              </p>
            </div>
            <div className="flex items-center justify-center mt-[4rem]">
              <img
                src="/images/csea.png"
                alt="csea img"
                className=" block sm-md:hidden lg:w-[20rem] w-[14rem] pb-[5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

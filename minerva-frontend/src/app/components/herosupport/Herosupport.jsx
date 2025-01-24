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

  // fetching latest announcements
  const [data, setData] = useState([]);

  // fetching for phd and department brochures
  const [dept_brochure, Setdept] = useState([]);
  const [phd_brochure, Setphd] = useState([]);

  const token = process.env.NEXT_PUBLIC_TOKEN;
  const backend_url = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [announcementsRes, deptBrochureRes, phdBrochureRes] = await Promise.all([
          fetch(`${backend_url}/api/announcements?sort[0]=createdAt:desc&pagination[pageSize]=3`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch(`${backend_url}/api/deparment-brochure?populate=pdf`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch(`${backend_url}/api/ph-d-brochure?populate=pdf`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        const [announcementsData, deptBrochureData, phdBrochureData] = await Promise.all([
          announcementsRes.json(),
          deptBrochureRes.json(),
          phdBrochureRes.json(),
        ]);

        setData(announcementsData.data || []);
        Setdept(deptBrochureData.data || []);
        Setphd(phdBrochureData.data || []);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchAllData();
  }, []);

  return (
    <div className="relative mt-[90vh] z-10">
      <div className="w-[100%] mt-[15vh]">
        <div
          className={`w-full h-[20vh] relative z-10 bottom-[6.5vh] translate-y-3 ${styles.topSquiggly}`}
        />

        <div className="w-full bg-accent flex flex-col items-center justify-center">
          <div className="w-[100%] bg-accent md:gap-10 justify-center flex flex-col md:flex-row relative z-10 bottom-[12vh] mb-[-18vh] mt-10">
            <div className="flex flex-col gap items-center justify-center lg:mt-10 relative h-[100%] ">
              <div className="md:px-10 md:pl-3 pt-2 md:pr-3 ">
                <div className="text-white text-4xl text-bold font-Teko text-left mb-10">
                  Our Programmes
                </div>
                <div className="h-[30%] md:h-[22%] mt-[35px] -translate-y-7 flex md:flex-col justify-center items-center gap-4 mb-5">
                  <DownloadButton
                    text="UG BROCHURE"
                    href={`${backend_url}${dept_brochure.pdf?.url}`}
                    isExternal={true}
                  />
                  <DownloadButton
                    text="PG BROCHURE"
                    href= {`${backend_url}${phd_brochure.pdf?.url}`}
                    isExternal={true}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col relative bottom-14 md:bottom-0 md:top-2 mt-10 font-teko mb-3 h-[100%] items-center justify-center text-center">
              <div className="border-l-2 md:mb-12 mb-10">
                <div className="text-white pl-5 text-left text-3xl lg:text-4xl text-bold font-Teko pb-2 ">
                  Links
                </div>
                <div className="flex flex-col">
                  {data.map((item) => (
                    <a
                      key={item.id}
                      href={`/announcements/${item.documentId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-left text-2xl lg:text-3xl pl-5 pr-3 py-1 text-wrap break-words lg:w-[600px] w-[365px] flex items-center underline hover:underline-offset-4 hover:text-blue-300"
                    >
                      {item.Title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 ml-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 10.5L21 3m0 0h-6.75M21 3v6.75M21 12v6.75A2.25 2.25 0 0118.75 21h-13.5A2.25 2.25 0 013 18.75v-13.5A2.25 2.25 0 015.25 3H12"
                        />
                      </svg>
                    </a>
                  ))}
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

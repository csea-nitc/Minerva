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
        const [announcementsRes, deptBrochureRes, phdBrochureRes] =
          await Promise.all([
            fetch(
              `${backend_url}/api/announcements?sort[0]=createdAt:desc&pagination[pageSize]=3`,
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            ),
            fetch(`${backend_url}/api/deparment-brochure?populate=pdf`, {
              headers: { Authorization: `Bearer ${token}` },
            }),
            fetch(`${backend_url}/api/ph-d-brochure?populate=pdf`, {
              headers: { Authorization: `Bearer ${token}` },
            }),
          ]);

        const [announcementsData, deptBrochureData, phdBrochureData] =
          await Promise.all([
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
          className={`w-full h-[20vh] relative z-10 bottom-[6.5vh] md:translate-y-3 ${styles.topSquiggly}`}
        />

        <div className="w-full bg-accent flex flex-col items-center justify-center">
          <div className="w-[100%] bg-accent md:gap-20 justify-center flex flex-col gap-2 md:flex-row relative z-10 bottom-[12vh] mb-[-18vh] mt-3 md:mt-10 h-[100vh] md:h-[50vh]">

    
            <div className="flex flex-col font-jakarta lg:mt-10 items-center gap-10 sm:pt-0 pt-10 lg:justify-between md:px-10 h-[70%] md:h-[80%] md:mb-10 px-5">
            <div className="w-[100%] text-3xl text-white font-jakarta font-bold md:ml-10 md:text-left">BROCHURES</div>
              <DownloadButton
                text="UG BROCHURE"
                href={`${backend_url}${dept_brochure.pdf?.url}`}
                isExternal={true}
              />
              <DownloadButton
                text="PG BROCHURE"
                href={`${backend_url}${phd_brochure.pdf?.url}`}
                isExternal={true}
              />
            </div>


            <div className="flex flex-col font-jakarta md:border-l-2 lg:mt-10 items-center justify-between md:px-10 h-[70%] md:h-[80%] md:mb-10 m-5 mb-10">
            <div className="w-[100%] text-3xl text-white font-jakarta font-bold md:ml-10 md:text-left">LATEST</div>
              {data.map((item) => (
                <a
                  key={item.id}
                  href={`/announcements/${item.documentId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-left text-lg lg:text-2xl pl-5 pr-3 py-1 text-wrap break-words lg:w-[600px] w-[365px] flex items-center underline hover:underline-offset-4 hover:text-blue-300 h-full"
                >
                  {item.Title}
                </a>
              ))}
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

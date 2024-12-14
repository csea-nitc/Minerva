"use client";
import tabData from "./data";
import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import InfoSection from "../components/programmesutil/infosection";

export default function Programmes() {
  const [selectedTab, setSelectedTab] = useState(tabData["B. Tech"]);

  // Client-side only initialization of GSAP and ScrollTrigger
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Register the GSAP plugin only on the client-side
      gsap.registerPlugin(ScrollTrigger);

      // GSAP animation for Programmes text (moving from center to above tabs)
      useEffect(() => {
        if (typeof window !== "undefined") {
          // Register the GSAP plugin
          gsap.registerPlugin(ScrollTrigger);
      
          // GSAP animation for Programmes text
          gsap.fromTo(
            ".programmes-text",
            { y: "0", x: "0", color: "#ffffff", opacity: 1 }, // Initial state: White text
            {
              y: "45vh", // Move down
              x: "16vw", // Adjust position
              color: "#800080", // Change color to the current theme color
              opacity: 1, // Keep visible
              duration: 3, // Smooth animation
              scrollTrigger: {
                trigger: ".programmes-text", // Trigger animation when Programmes text enters viewport
                start: "top 0", // Start animation
                end: "bottom 30%", // End animation
                scrub: 1, // Synchronize animation with scroll
                toggleActions: "play reverse play reverse", // Replay animation when scrolling up
              },
            }
          );
        }
      }, []);
      
    }
  }, []);

  return (
    <div className="min-h-screen font-saira text-[18px] max-800:text-[13px] max-1060:text-[15px]">
      <div className="relative top-0 w-full h-[70vh]">
        <img
          src="landing.png"
          className="rounded-b-3xl absolute w-full h-full object-cover -z-20"
          alt="Background"
        />
        <div className="absolute rounded-b-3xl inset-0 bg-[#800080] opacity-45 -z-20"></div>
        <div className="absolute rounded-b-3xl inset-0 bg-black opacity-35 -z-20"></div>
        <div
          className="font-saira programmes-text text-[4.5em] pt-[25vh] font-bold uppercase text-center sm:text-[7em]"
          style={{ color: "#800080" }}
        >
          Programmes
        </div>
      </div>

      <div
        className="content-div  max-w-[1240px] mx-auto pl-5 pt-[27vh]"
        style={{ borderColor: "#800080", borderLeftWidth: "14px" }}
      >
        {/* Tab Navigation */}
        <div className="flex flex-row justify-start items-center">
          {Object.keys(tabData).map((tab, index) => (
            <div key={tab} className="flex items-center">
              <button
                onClick={() => setSelectedTab(tabData[tab])}
                className={`px-4 py-2 font-bold text-[1.8em] rounded-lg transition-colors duration-200 ${
                  selectedTab === tabData[tab]
                    ? "bg-[#800080] text-white"
                    : "hover:bg-[#800080] hover:text-white"
                }`}
              >
                {tab}
              </button>
              {index < Object.keys(tabData).length - 1 && (
                <div className="-ml-1 mr-3 w-[4px] h-[3em] bg-[#800080] opacity-40 rounded-full"></div>
              )}
            </div>
          ))}
        </div>

        {/* Info Section */}
        <InfoSection
          title={Object.keys(tabData).find(
            (key) => tabData[key] === selectedTab
          )}
          para1={selectedTab.para1}
          para2={selectedTab.para2}
          downloadables={selectedTab.dropdownContent}
          img1={selectedTab.img1link}
          img2={selectedTab.img2link}
        />
      </div>
    </div>
  );
}

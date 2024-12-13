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

      // GSAP animation for Programmes text (moving left to right from the center)
      gsap.fromTo(
        ".programmes-text", // Target the Programmes text
        { x: "0", opacity: 1 }, // Initial state: Start from the center of the screen and hidden
        {
          x: "13vw", // Move to the right by 50px
          opacity: 1, // Fade in
          duration: 4, // Slow down the animation duration (3 seconds for full transition)
          scrollTrigger: {
            trigger: ".programmes-text", // Trigger animation on the Programmes text
            start: "35% 30%", // When the top of the element reaches the center of the viewport
            end: "bottom 10%", // When the bottom of the element reaches the center of the viewport
            scrub: 0.1, // Synchronize the animation with scroll (scrub 1 to make it slower)
            toggleActions: "play reverse play reverse" // Control animation on scroll
 ,
          },
        }
      );
    }
  }, []);

  return (
    <div className="max-w-[1140px] mx-auto min-h-screen font-saira text-[18px] max-800:text-[13px] max-1060:text-[15px]">


      {/* Programmes Text */}
      <div
  className="programmes-text text-[4.5em] pt-[30vh] font-bold uppercase text-center sm:text-[7em] "
  style={{ color: "#800080" }}
>
  Programmes
</div>


      {/* Tab Navigation */}
      <div className="flex justify-center mt-6 space-x-4">
        {Object.keys(tabData).map((tab) => (
          <button
            onClick={() => setSelectedTab(tabData[tab])}
            key={tab}
            className={`px-4 py-2 font-bold rounded transition-colors duration-200 ${
              selectedTab === tabData[tab]
                ? "bg-[#800080] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-[#800080] hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Info Section */}
      <InfoSection
        title={Object.keys(tabData).find((key) => tabData[key] === selectedTab)}
        para1={selectedTab.para1}
        para2={selectedTab.para2}
        downloadables={selectedTab.dropdownContent}
        img1={selectedTab.img1link}
        img2={selectedTab.img2link}
      />
    </div>
  );
}

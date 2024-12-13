"use client";
import tabData from "./data";
import { useState } from "react";
import InfoSection from "../components/programmesutil/infosection";
export default function Programmes() {
  const [selectedTab, setSelectedTab] = useState(tabData["B. Tech"]);

  return (
    <div className="  min-h-screen  p-6 pt-[140px] font-saira  text-[18px] max-800:text-[13px]  max-1060:text-[15px] ">

      <div
        className="text-[4.5em] font-bold uppercase text-center sm:text-right sm:text-[7em]"
        style={{ color: "#800080" }}
      >
        Programmes
      </div>

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

"use client";
import tabData from "./data";
import { useState } from "react";
import InfoSection from "../components/programmesutil/infosection";
export default function Programmes() {

  
  
  const [selectedTab, setSelectedTab] = useState(tabData["B. Tech"]);

  return (
    <div className="bg-gray-100 min-h-screen p-6 pt-[100px] font-poppins">
      {/* Header */}
      <div className="">
        <h1 className="text-8xl font-bold uppercase" style={{ color: "#800080" }}>
          Programmes
        </h1>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        {Object.keys(tabData).map((tab) => (
          <button
            onClick={() => setSelectedTab(tabData[tab])} // Pass the entire object for the tab
            key={tab}
            className={`px-4 py-2 font-bold rounded transition-colors duration-200 ${
              selectedTab === tabData[tab]
                ? "bg-teal-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-teal-600 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <InfoSection
        title={Object.keys(tabData).find((key) => tabData[key] === selectedTab)} // Pass the tab name as the title
        para1={selectedTab?.para1}
        para2={selectedTab?.para2}
        downloadables={selectedTab?.dropdownContent}
        img1={selectedTab?.img1link}
        img2={selectedTab?.img2link}
      />
    </div>
  );
}

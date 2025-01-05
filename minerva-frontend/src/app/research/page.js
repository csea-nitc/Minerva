"use client";
import tabData from "./data";
import { useState } from "react";
import ImageHero from "../components/imagehero/Imagehero";

export default function Programmes() {
    const [selectedTab, setSelectedTab] = useState(tabData["Areas Of Research"]);
    const title = Object.keys(tabData).find((key) => tabData[key] === selectedTab);

    return (
        <>
            <ImageHero
                title={"Research"}
                font={"60px"}
                mobileFont={"50px"}
                contentdiv={".content-div"}
            />
            <div className="min-h-screen font-saira text-[18px] max-800:text-[13px] max-1060:text-[15px] py-10 w-[100vw] mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
                <div className="content-div max-w-[1240px] mx-auto relative pl-5 mt-[6vh]">
                    {/* Tab Navigation */}
                    <div className="flex flex-row w-full pr-4 sm:w-[80vw] relative bottom-5">
                        {Object.keys(tabData).map((tab, index) => (
                            <div key={tab} className="flex items-center">
                                <button
                                    onClick={() => setSelectedTab(tabData[tab])}
                                    className={`px-4 max-800:px-2 py-2 font-bold text-[1.5em] max-920:text-[1.3em] rounded-lg transition-colors duration-200 ${
                                        selectedTab === tabData[tab]
                                            ? "bg-[#800080] text-white"
                                            : "hover:bg-[#800080] hover:text-white"
                                    }`}
                                >
                                    {tab}
                                </button>
                                {index < Object.keys(tabData).length - 1 && (
                                    <div className="mx-3 w-[4px] h-[3em] bg-[#800080] opacity-40 rounded-full"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col max-1240:pr-[2vw] mb-[10vh]">
                        <div
                            className="text-[3em] sm:text-[5em] font-extrabold text sm:"
                            style={{ color: "#800080" }}
                        >
                            {title}
                        </div>
                        <div
                            className="h-[7px] w-full mt-1"
                            style={{ backgroundColor: "#800080" }}
                        ></div>

                        {/* Content Rendering */}
                        <div className="font-jakarta mt-12">
                            {title === "Areas Of Research" ? (
                                // Content for Areas Of Research
                                <div>
                                    {selectedTab.titlesAndAreas.map((item, index) => (
                                        <div key={index} className="mb-6">
                                            <h3 className="text-[1.5em] font-bold text-[#800080]">
                                                {item.title}
                                            </h3>
                                            <p className="text-[1.2em] text-gray-700">
                                                {item.area}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : title === "Research Groups" ? (
                                // Content for Research Groups
                                <div>
                                    <p className="text-[1.2em] leading-[35px] text-justify">
                                        Following are the upcoming research groups in the
                                        Department:
                                    </p>
                                    <ul className="mt-4 list-disc pl-8 text-[1.2em] text-gray-700">
                                        {selectedTab.groups.map((group, index) => (
                                            <li key={index} className="mb-2">
                                                {group}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                // Default content for other tabs
                                <div>
                                    <p className="text-[1.2em] leading-[35px] text-justify">
                                        {selectedTab.para1}
                                    </p>
                                    <p className="text-[1.2em] leading-[35px] text-justify mt-4">
                                        {selectedTab.para2}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

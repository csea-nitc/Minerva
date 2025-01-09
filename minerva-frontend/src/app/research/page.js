"use client";
import tabData from "./data";
import { use, useState, useEffect } from "react";
import ImageHero from "../components/imagehero/Imagehero";

export default function Programmes() {
    const [selectedTab, setSelectedTab] = useState(
        tabData["Areas Of Research"]
    );
    const title = Object.keys(tabData).find(
        (key) => tabData[key] === selectedTab
    );
    const [issmall, setIsSmall] = useState(false);
    useEffect(() => {
        const checkSmall = () => {
            setIsSmall(window.innerWidth < 896);
        };
        checkSmall();
        window.addEventListener("resize", checkSmall);
        return () => window.removeEventListener("resize", checkSmall);
    });
    return (
        <>
            <ImageHero
                title={"Research"}
                font={"60px"}
                mobileFont={"50px"}
                contentdiv={".content-div"}
            />
            <div className="w-full mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
                <div className="bg-[#800080] h-[100%] w-[10px] absolute"></div>
                <div className="sm:w-[65%] w-[85%] mx-auto py-10">
                    {/* Tab Navigation */}
                    <div className="flex flex-col md-lg:flex-row items-center w-full md-lg:pr-4  relative bottom-5">
                        {Object.keys(tabData).map((tab, index) => (
                            <div key={tab} className="flex items-center">
                                <button
                                    onClick={() => setSelectedTab(tabData[tab])}
                                    className={`px-4 max-800:px-2 py-2  font-bold text-[1.5em] max-920:text-[1.3em] rounded-lg transition-colors duration-200 ${
                                        selectedTab === tabData[tab]
                                            ? "bg-[#800080] text-white"
                                            : "hover:bg-[#800080] hover:text-white"
                                    }`}
                                >
                                    {tab}
                                </button>
                                {index < Object.keys(tabData).length - 1 &&
                                    !issmall && (
                                        <div className="mx-3 w-[4px] h-[3em] bg-[#800080] opacity-40 rounded-full"></div>
                                    )}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col max-1240:pr-[2vw] mb-[10vh]">
                        <div
                            className="md:text-5xl text-3xl font-extrabold text sm:"
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
                                    {selectedTab.titlesAndAreas.map(
                                        (item, index) => (
                                            <div key={index} className="mb-6">
                                                <h3 className="text-2xl font-bold text-[#800080]">
                                                    {item.title}
                                                </h3>
                                                <p className="text-[1.2em] text-gray-700">
                                                    {item.area}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            ) : title === "Research Groups" ? (
                                // Content for Research Groups
                                <div>
                                    <p className="text-[1.2em] leading-[35px] text-justify">
                                        Following are the upcoming research
                                        groups in the Department:
                                    </p>
                                    <ul className="mt-4 list-disc pl-8 text-[1.2em] text-gray-700">
                                        {selectedTab.groups.map(
                                            (group, index) => (
                                                <li
                                                    key={index}
                                                    className="mb-2"
                                                >
                                                    {group}
                                                </li>
                                            )
                                        )}
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

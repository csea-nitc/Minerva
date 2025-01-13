"use client";
import tabData from "./data";
import { use, useState, useEffect } from "react";
import ImageHero from "../components/imagehero/Imagehero";
import TabNav from "../components/tabnav/TabNav";

const TabData = [ "Areas Of Research" , "Research Groups" , "Completed PhDs" ] ; 

export default function Programmes() {
    const [selectedTab, setSelectedTab] = useState( 0 ) ;

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
                    <TabNav  tabData={TabData} onTabChange={setSelectedTab}/>

                    <div className="flex flex-col max-1240:pr-[2vw] mb-[10vh]">

                        {/* Content Rendering */}
                        <div className="font-jakarta mt-12">
                            {TabData[selectedTab] === "Areas Of Research" ? (
                                // Content for Areas Of Research
                                <div>
                                    {tabData[selectedTab].titlesAndAreas.map(
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
                            ) : TabData[selectedTab] === "Research Groups" ? (
                                // Content for Research Groups
                                <div>
                                    <p className="text-[1.2em] leading-[35px] text-justify">
                                        Following are the upcoming research
                                        groups in the Department:
                                    </p>
                                    <ul className="mt-4 list-disc pl-8 text-[1.2em] text-gray-700">
                                        {tabData[selectedTab].groups.map(
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
                                        {tabData[selectedTab].para1}
                                    </p>
                                    <p className="text-[1.2em] leading-[35px] text-justify mt-4">
                                        {tabData[selectedTab].para2}
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

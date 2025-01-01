"use client";
import tabData from "./data";
import { useState, useEffect } from "react";
import ImageHero from "../components/imagehero/Imagehero";

import InfoSection from "../components/programmesutil/infosection";

const token = process.env.NEXT_PUBLIC_TOKEN;
const backendUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Programmes() {
    const [selectedTab, setSelectedTab] = useState(tabData["B. Tech"]);

    useEffect(() => {
        const fetchData = async () => {
            const btechcurriculum = await fetch(
                `${backendUrl}/api/btech-curricula?populate=*`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const btechsyllabus = await fetch(
                `${backendUrl}/api/btech-syllabi?populate=*`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const btechrules = await fetch(
                `${backendUrl}/api/btech-rules?populate=*`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const mtechrules = await fetch(
                `${backendUrl}/api/mtech-rules?populate=*`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const mtechcsesyllabus = await fetch(
                `${backendUrl}/api/mtech-syllabi?populate=*`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const mtechaidasyllabus = await fetch(
                `${backendUrl}/api/mtechaida-syllabi?populate=*`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const mtechissyllabus = await fetch(
                `${backendUrl}/api/mtechis-syllabi?populate=*`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const btechcurriculumData = await btechcurriculum.json();
            const btechsyllabusData = await btechsyllabus.json();
            const btechrulesData = await btechrules.json();
            const mtechrulesData = await mtechrules.json();
            const mtechcsesyllabusData = await mtechcsesyllabus.json();
            const mtechaidasyllabusData = await mtechaidasyllabus.json();
            const mtechissyllabusData = await mtechissyllabus.json();
        };

        fetchData();
    });

    return (
        <>
            <ImageHero
                title={"Programmes"}
                font={"60px"}
                mobileFont={"50px"}
                contentdiv={".content-div"}
            />
            <div className="min-h-screen font-saira text-[18px] max-800:text-[13px] max-1060:text-[15px] py-10 w-[100vw] mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
                <div
                    className="content-div  max-w-[1240px] mx-auto relative  pl-5 mt-[6vh]"
                    // style={{ borderColor: "#800080", borderLeftWidth: "14px" }}
                >
                    {/* Tab Navigation */}
                    <div className="flex flex-row w-full pr-4 sm:w-[80vw]  ">
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
        </>
    );
}

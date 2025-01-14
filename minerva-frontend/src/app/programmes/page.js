"use client";
import tabData from "./data";
import { useState, useEffect } from "react";
import ImageHero from "../components/imagehero/Imagehero";
import InfoSection from "../components/programmesutil/infosection";
import TabNav from "../components/tabnav/TabNav";

const token = process.env.NEXT_PUBLIC_TOKEN;
const backendUrl = process.env.NEXT_PUBLIC_API_URL;

const TabData = [ "B. Tech" , "M. Tech-CSE" , "M. Tech-CSE (IS)" , "M. Tech-CSE (AIDA)" , "PhD" ]  ; 

export default function Programmes() {
    const [selectedTab, setSelectedTab] = useState( 0 );

    const tabKey = Object.entries(tabData).find(
        ([key, value]) => key === TabData[selectedTab]
      )?.[0];

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
            <div className="w-full mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
                <div className="bg-[#800080] h-[100%] w-[10px] absolute"></div>
                <div className="max-w-6xl px-8 pr-3 mx-auto py-10">
                    {/* Tab Navigation */}
                    <TabNav onTabChange={setSelectedTab} tabData= {TabData} />

                    <InfoSection
                        title={ tabKey }
                        para1={tabData[tabKey].para1}
                        para2={tabData[tabKey].para2}
                        downloadables={tabData[tabKey].dropdownContent}
                        img1={tabData[tabKey].img1link}
                        img2={tabData[tabKey].img2link}
                    />
                </div>
            </div>
        </>
    );
}

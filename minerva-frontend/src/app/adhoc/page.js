"use client";
import { useState, useEffect } from "react";
import ImageHero from "../components/imagehero/Imagehero";
import ListComp from "../components/newscomp/ListComp";
import Loading from "../components/loading/loading";

const token = process.env.NEXT_PUBLIC_TOKEN;
const backend_url = process.env.NEXT_PUBLIC_API_URL;

const tabData = ["Adhoc Faculty", "Adhoc Technical staff"];

export default function Adhoc() {
  const [adhoc, setAdhoc] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adhocD = await fetch(`${backend_url}/api/adhocs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const adhocData = await adhocD.json();
        setAdhoc(adhocData.data ? adhocData.data : []);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ImageHero
        title={"Adhoc"}
        font={"60px"}
        mobileFont={"50px"}
        contentdiv={".content-div"}
      />
      <div className="w-full mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
        <div className="bg-[#800080] h-[100%] w-[10px] absolute"></div>
        <div className="sm:w-[65%] w-[85%] mx-auto py-10">
          {/* Tab Navigation */}
          <div className="flex flex-row w-full pr-4 sm:w-[80vw]  ">
            {tabData.map((tab, index) => (
              <div key={tab} className="flex items-center">
                <button
                  onClick={() => setSelectedTab(index)}
                  className={`px-4 max-800:px-2 py-2 font-bold text-[1.5em] max-920:text-[1.3em] rounded-lg transition-colors duration-200 ${
                    selectedTab === index
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
          <div
            className="text-[3em] sm:text-[5em] font-extrabold text sm:"
            style={{ color: "#800080" }}
          >
            {tabData[selectedTab]}
          </div>
          <div
            className="h-[7px]  w-full mt-1"
            style={{ backgroundColor: "#800080" }}
          ></div>
          <div className="w-[100%] md:w-[85%] lg:w-[65%] mt-12 mx-auto">
            {adhoc && adhoc.length > 0 ? (
              <ListComp
                key={selectedTab}
                item={{ ...adhoc[selectedTab], Title: "" }}
              />
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

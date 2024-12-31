'use client'; 
import ImageHero from "../components/imagehero/Imagehero";
import PDF from "../components/pdf/PDF";
import Graph from "../components/graph/Graph"; 
import ListComp from "../components/newscomp/ListComp";
import { ResponsiveBar } from '@nivo/bar';
import React, { useEffect, useState } from "react";

//placeholder data for graph 
const data = [
  {
      "year": "2020",
      "placed": 120,
      "applied": 150
  },
  {
      "year": "2021",
      "placed": 100,
      "applied": 130
  },
  {
      "year": "2022",
      "placed": 140,
      "applied": 180
  }
];

const token = process.env.NEXT_PUBLIC_TOKEN;
const backend_url = process.env.NEXT_PUBLIC_API_URL;

export default function Placements() {
  const [placements , setPlacements] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const placementD = await fetch(
                  `${backend_url}/api/placements?populate=*`,
                  {
                      headers: {
                          Authorization: `Bearer ${token}`,
                      },
                  }
              );

              const placementData = await placementD.json();
              console.log( placementData ) ; 
              setPlacements(placementData.data || []);
          } catch (err) {
              console.error("Fetch error:", err);
          }
      };

      fetchData();
  }, []);

  return (
    <>
      <div>
        <ImageHero
          title="PLACEMENTS"
          font={"60px"}
          mobileFont={"50px"}
          contentdiv={".content-div"}
        />
        <div className="py-10 w-[100vw] mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
          <p className="text-center font-teko text-[3vw]">
              Btech - Computer Science and Engineering
          </p>
          <div className = "flex items-center justify-center gap-4 p-4 rounded-lg" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Graph data = {data} />
              </div>
              <div className="p-2 rounded-xl bg-[#C891C8] flex flex-col items-center">
                <p className="font-teko">Year</p>
                <div className="flex-growf aspect-square">vcwsed</div>
                <div className="flex gap-4">
                  <p className="font-teko text-xl">
                    Average
                    <br />
                    Salary (lpa)
                  </p>
                  <div className="flex items-center border border-[#800080] rounded-l-xl rounded-r-2xl">
                    <div className="rounded-l-xl rounded-r-3xl bg-[#800080]">
                      <img src="/Group.png" className="px-4 py-2" />
                    </div>
                    <p className="px-6 font-teko font-bold text-[2vw] text-[#800080]">
                      19.37
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[65%] w-[85%] mx-auto">
                    { placements && placements.length > 0 ? (
                        placements.map((item) => (
                            <ListComp key={item.id} item={item} />
                        ))
                    ) : (
                        <p className="text-lg font-mont text-gray-500">
                            No statistics available.
                        </p>
                    )}
          </div>
        </div>
      </div>
    </>
  );
}

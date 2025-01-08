"use client";
import ImageHero from "../components/imagehero/Imagehero";
import PDF from "../components/pdf/PDF";
import Graph from "../components/graph/Graph";
import ListComp from "../components/newscomp/ListComp";
import { ResponsiveBar } from "@nivo/bar";
import React, { useEffect, useState } from "react";
import Loading from "../components/loading/loading";

const token = process.env.NEXT_PUBLIC_TOKEN;
const backend_url = process.env.NEXT_PUBLIC_API_URL;

export default function Placements() {
  const [placements, setPlacements] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching both endpoints
        const [placementD, statsD] = await Promise.all([
          fetch(`${backend_url}/api/placements?populate=*`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          fetch(`${backend_url}/api/placement-stats`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);

        const placementData = await placementD.json();
        const statsData = await statsD.json();

        const graphData = statsData.data.map((item) => ({
          year: item.year,
          placed: item.percentage,
        }));

        setStats(graphData);
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

          <div className="flex items-center justify-center gap-10 p-4 rounded-lg">
            <div className="flex justify-center">
              <div>
                <Graph data={stats} />
              </div>
              <div>
                <Graph data = {stats} />
              </div>
            </div>
          </div>
          <div className="sm:w-[65%] w-[85%] mx-auto">
            {placements && placements.length > 0 ? (
              placements.map((item) => <ListComp key={item.id} item={item} />)
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

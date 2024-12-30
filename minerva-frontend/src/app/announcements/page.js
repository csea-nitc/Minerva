"use client";
import React, { useEffect, useState } from "react";
import ListComp from "../components/newscomp/ListComp";
import ImageHero from "../components/imagehero/Imagehero";

const token = process.env.NEXT_PUBLIC_TOKEN;
const backend_url = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const announcementsD = await fetch(
          `${backend_url}/api/announcements?populate=*`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const announcementsData = await announcementsD.json();
        console.log("ANNOUNCEMENTS:", announcementsData);
        setAnnouncements(announcementsData.data || []);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ImageHero
          title="ANNOUNCEMENTS"
          font={"80px"}
          mobileFont={"20px"}
          contentdiv={".content-div"}
      />
      <div className="py-10 w-[100vw] mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
          <div className="sm:w-[65%] w-[85%] mx-auto">
              {announcements && announcements.length > 0 ? (
                  announcements.map((item) => (
                      <ListComp key={item.id} item={item} />
                  ))
              ) : (
                  <p className="text-lg font-saira text-gray-500">
                      No announcements available.
                  </p>
              )}
          </div>
      </div>
  </>
  );
}

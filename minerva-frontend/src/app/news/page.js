"use client";
import React, { useEffect, useState } from "react";
import ListComp from "../components/newscomp/ListComp";
import ImageHero from "../components/imagehero/Imagehero";

const token = process.env.NEXT_PUBLIC_TOKEN;
const backend_url = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [news, setNews] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsD = await fetch(`${backend_url}/api/news?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const announcementsD = await fetch(
          `${backend_url}/api/announcements?populate=*`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const newsData = await newsD.json();
        const announcementsData = await announcementsD.json();

        console.log("NEWS:", newsData);
        setNews(newsData.data || []);
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
      <div>
        <ImageHero
          title="News and Announcements"
          font={"60px"}
          mobileFont={"50px"}
          contentdiv={".content-div"}
        />
        <div className="container mx-auto px-4 py-8 mt-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-saira font-bold text-foreground mb-6">
              News
            </h1>

            {news && news.length > 0 ? (
              news.map((item) => <ListComp key={item.id} item={item} />)
            ) : (
              <p className="text-lg font-saira text-gray-500">
                No news available.
              </p>
            )}
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <h1 className="text-3xl font-saira font-semibold text-foreground mb-6">
              Announcements
            </h1>

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
      </div>
    </>
  );
}

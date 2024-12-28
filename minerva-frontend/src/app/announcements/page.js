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
  
          const announcementsD = await fetch(`${backend_url}/api/announcements?populate=*`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

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
        <div>
            <ImageHero title="announcements"/>  
            <div className="container mx-auto px-4 py-8">
        
                <div className="max-w-4xl mx-auto ">
                    <h1 className="text-3xl font-saira font-semibold text-foreground mb-6">
                        Announcements
                    </h1>
            
                    {announcements && announcements.length > 0 ? (
                        announcements.map((item) => <ListComp key={item.id} item={item} />)
                    ) : (
                        <p className="text-lg font-saira text-gray-500">
                        No announcements available.
                        </p>
                    )}
                </div>
            </div>
      </div>
    );
}
  
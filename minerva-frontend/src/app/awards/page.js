"use client";
import React, { useEffect, useState } from "react";
import ListComp from "../components/newscomp/ListComp";

const token = process.env.NEXT_PUBLIC_TOKEN;
const backend_url = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const awardsD = await fetch(`${backend_url}/api/awards?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const awardsData = await awardsD.json();
        setAwards(awardsData.data || []); 
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-saira font-bold text-foreground mb-6">
          Awards
        </h1>

        {awards && awards.length > 0 ? (
          awards.map((item) => <ListComp key={item.id} item={item} />)
        ) : (
          <p className="text-lg font-saira text-gray-500">No awards available.</p>
        )}
      </div>
    </div>
  );
}

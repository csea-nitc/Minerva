"use client";
import React, { useEffect, useState } from "react";
import ListComp from "../components/newscomp/ListComp";
import ImageHero from "../components/imagehero/Imagehero";

const token = process.env.NEXT_PUBLIC_TOKEN;
const backend_url = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
    const [awards, setAwards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const awardsD = await fetch(
                    `${backend_url}/api/awards?populate=*`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const awardsData = await awardsD.json();
                console.log( awardsData ) ; 
                setAwards(awardsData.data || []);
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <ImageHero
                title={"Awards"}
                font={"60px"}
                mobileFont={"50px"}
                contentdiv={".content-div"}
            />
            <div className="py-10 w-[100vw] mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
                <div className="sm:w-[65%] w-[85%] mx-auto">
                    {awards && awards.length > 0 ? (
                        awards.map((item) => (
                            <ListComp key={item.id} item={item} />
                        ))
                    ) : (
                        <p className="text-lg font-mont text-gray-500">
                            No awards available.
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}

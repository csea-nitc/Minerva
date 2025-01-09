"use client";
import React, { useEffect, useState } from "react";
import ListComp from "../components/newscomp/ListComp";
import ImageHero from "../components/imagehero/Imagehero";
import Loading from "../components/loading/loading";

const token = process.env.NEXT_PUBLIC_TOKEN;
const backend_url = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
    const [news, setNews] = useState([]);
    const [displayCount, setDisplayCount] = useState(5);
    const itemsPerPage = 5;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newsD = await fetch(
                    `${backend_url}/api/news?populate=*`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const newsData = await newsD.json();
                setNews(newsData.data ? [...newsData.data].reverse() : []);
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };

        fetchData();
    }, []);

    const handleShowMore = () => {
        setDisplayCount((prevCount) => prevCount + itemsPerPage);
    };

    return (
        <>
            <ImageHero
                title="NEWS"
                font={"80px"}
                mobileFont={"20px"}
                contentdiv={".content-div"}
            />
            <div className="w-full mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
                <div className="bg-[#800080] h-[100%] w-[10px] absolute"></div>
                <div className="sm:w-[65%] w-[85%] mx-auto py-10">
                    {news && news.length > 0 ? (
                        <>
                            {news.slice(0, displayCount).map((item) => (
                                <ListComp key={item.id} item={item} />
                            ))}
                            {news.length > displayCount && (
                                <div className="text-center mt-8">
                                    <button
                                        onClick={handleShowMore}
                                        className="bg-accent hover:bg-foreground text-white font-saira py-2 px-6 rounded-lg transition-colors duration-200"
                                    >
                                        Show More
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <Loading />
                    )}
                </div>
            </div>
        </>
    );
}

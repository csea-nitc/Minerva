"use client";
import React, { useEffect, useState } from "react";
import ListComp from "../components/newscomp/ListComp";
import ImageHero from "../components/imagehero/Imagehero";
import Loading from "../components/loading/loading";
import SearchBar from "../components/searchbar/SearchBar";
import Fuse from "fuse.js";

const token = process.env.NEXT_PUBLIC_TOKEN;
const backend_url = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [awards, setAwards] = useState([]);
  const [filteredAwards, setFilteredAwards] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const awardsD = await fetch(`${backend_url}/api/awards?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const awardsData = await awardsD.json();
        // console.log(awardsData);
        //setAwards(awardsData.data ? [...awardsData.data].reverse() : []);
        setAwards(awardsData.data || []);
        setFilteredAwards(awardsData.data || []);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredAwards(awards);
      setDisplayCount(itemsPerPage);
      return;
    }

    const fuse = new Fuse(awards, {
      keys: ["Title"],
      threshold: 0.2,
    });

    const results = fuse.search(searchTerm);
    setFilteredAwards(results.map((result) => result.item));
    setDisplayCount(itemsPerPage);
  };

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + itemsPerPage);
  };

  return (
    <>
      <ImageHero
        title={"Awards"}
        font={"80px"}
        mobileFont={"20px"}
        contentdiv={".content-div"}
      />
      <div className="w-full mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
        <div className="bg-[#800080] h-[100%] w-[10px] absolute"></div>
        <div className="sm:w-[65%] w-[85%] mx-auto py-10">
          <SearchBar
            onSearch={handleSearch}
            blankOne="awards"
            blankTwo="title"
          />
          {awards && awards.length > 0 ? (
            <>
              {filteredAwards.slice(0, displayCount).map((item) => (
                <ListComp key={item.id} item={item} />
              ))}
              {filteredAwards.length > displayCount && (
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
          ) : filteredAwards.length === 0 ? (
            <div className="text-center text-gray-500 mt-8 mb-[10vh]">
              No results found.
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
}

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
  const [announcements, setAnnouncements] = useState([]);
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${backend_url}/api/announcements?populate=*`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        const announcementsData = data.data ? [...data.data].reverse() : [];
        setAnnouncements(announcementsData);
        setFilteredAnnouncements(announcementsData);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredAnnouncements(announcements);
      setDisplayCount(itemsPerPage);
      return;
    }

    const fuse = new Fuse(announcements, {
      keys: ["Title"],
      threshold: 0.4,
    });

    const results = fuse.search(searchTerm);
    setFilteredAnnouncements(results.map((result) => result.item));
    setDisplayCount(itemsPerPage);
  };

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + itemsPerPage);
  };

  return (
    <>
      <ImageHero
        title="ANNOUNCEMENTS"
        font={"80px"}
        mobileFont={"20px"}
        contentdiv={".content-div"}
      />
      <div className="w-full mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
        <div className="bg-[#800080] h-[100%] w-[10px] absolute"></div>
        <div className="sm:w-[65%] w-[85%] mx-auto py-10">
          <SearchBar
            onSearch={handleSearch}
            blankOne="announcements"
            blankTwo="title"
          />{" "}
          {announcements && announcements.length > 0 ? (
            <>
              {filteredAnnouncements.length > 0 ? (
                <>
                  {filteredAnnouncements.slice(0, displayCount).map((item) => (
                    <ListComp key={item.id || item.documentId} item={item} />
                  ))}
                  {filteredAnnouncements.length > displayCount && (
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
                <div className="text-center text-gray-500 mt-8">
                  No results found.
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

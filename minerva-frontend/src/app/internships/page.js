"use client";
import React, { useEffect, useState } from "react";
import ListComp from "../components/newscomp/ListComp";
import ImageHero from "../components/imagehero/Imagehero";
import Loading from "../components/loading/loading";

const token = process.env.NEXT_PUBLIC_TOKEN;
const backend_url = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [internships, setInternships] = useState([]);
  const [displayCount, setDisplayCount] = useState(1);
  const itemsPerPage = 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const internshipsD = await fetch(`${backend_url}/api/internships`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const InternshipsData = await internshipsD.json();
        setInternships(
          InternshipsData.data ? [...InternshipsData.data].reverse() : []
        );
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
        title="INTERNSHIPS"
        font={"80px"}
        mobileFont={"20px"}
        contentdiv={".content-div"}
      />
      <div className="py-10 w-[100vw] mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
        <div className="sm:w-[65%] w-[85%] mx-auto">
          {internships && internships.length > 0 ? (
            <>
              {internships.slice(0, displayCount).map((item) => (
                <ListComp key={item.id} item={item} />
              ))}
              {internships.length > displayCount && (
                <div className="text-center mt-8">
                  <button
                    onClick={handleShowMore}
                    className="bg-accent text-white font-saira py-2 px-6 rounded-lg transition-colors duration-200"
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

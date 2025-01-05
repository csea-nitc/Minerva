"use client";
import React, { useEffect, useState } from "react";
import ImageHero from "../components/imagehero/Imagehero";
import PDF from "../components/pdf/PDF";
import Loading from "../components/loading/loading";

const token = process.env.NEXT_PUBLIC_TOKEN;
const backend_url = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [dcc, setDcc] = useState([]);
  const [displayCount, setDisplayCount] = useState(6);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backend_url}/api/dccs?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        setDcc(data.data || []);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, []);

  const allPdfs = dcc.reduce((acc, item) => {
    return acc.concat(item.pdf || []);
  }, []);

  const handleShowMore = () => {
    setDisplayCount(prevCount => prevCount + itemsPerPage);
  };

  return (
    <>
      <ImageHero
        title={"DCC"}
        font={"80px"}
        mobileFont={"20px"}
        contentdiv={".content-div"}
      />
      <div className="py-10 w-full mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
        <div className="w-[90%] sm:w-[80%] lg:w-[65%] mx-auto">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {allPdfs.slice(0, displayCount).map((pdf) => (
              <div key={pdf.id} className="w-full">
                <PDF
                  title={pdf.name}
                  url={`${backend_url}${pdf.url}`}
                />
              </div>
            ))}
          </div>
          
          {allPdfs.length > displayCount && (
            <div className="text-center mt-8">
              <button
                onClick={handleShowMore}
                className="bg-accent hover:bg-foreground text-white font-saira 
                  py-2 px-6 rounded-lg transition-all duration-200 
                  hover:scale-105 active:scale-95"
              >
                Show More
              </button>
            </div>
          )}
          
          {allPdfs.length === 0 && (
            <div className="flex justify-center">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
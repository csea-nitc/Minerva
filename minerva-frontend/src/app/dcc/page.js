"use client";
import React, { useEffect, useState } from "react";
import ImageHero from "../components/imagehero/Imagehero";
import PDF from "../components/pdf/PDF";
import Loading from "../components/loading/loading";

const token = process.env.NEXT_PUBLIC_TOKEN;
const backend_url = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [dcc, setDcc] = useState([]);
  const [displayCount, setDisplayCount] = useState(6); // Show 6 initially (2 rows of 3)
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
        console.log(data);
        setDcc(data.data || []);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, []);

  // flatten the pdfs
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
      <div className="py-10 w-[100vw] mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
        <div className="sm:w-[65%] w-[85%] mx-auto">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {allPdfs.slice(0, displayCount).map((pdf) => (
              <PDF
                key={pdf.id}
                title={pdf.name}
                url={`${backend_url}${pdf.url}`}
              />
            ))}
          </div>
          
          {allPdfs.length > displayCount && (
            <div className="text-center mt-8">
              <button
                onClick={handleShowMore}
                className="bg-accent hover:bg-foreground text-white font-saira py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Show More
              </button>
            </div>
          )}
          
          {allPdfs.length === 0 && (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
}
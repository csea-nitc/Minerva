"use client";
import React, { useEffect, useState } from "react";
import ImageHero from "../components/imagehero/Imagehero";
import YearCard from "../components/cards/YearCard";
import Modal from "../components/modal/Modal";
import ListComp from "../components/newscomp/ListComp";
import Loading from "../components/loading/loading";
import TabNav from "../components/tabnav/TabNav";

const token = process.env.NEXT_PUBLIC_TOKEN;
const backend_url = process.env.NEXT_PUBLIC_API_URL;

const tabData = ["B.Tech", "M.Tech-CSE", "M.Tech-CSE (IS)", "MCA"];

export default function Internships() {
  const [internships, setInternships] = useState([]);
  const [displayCount, setDisplayCount] = useState(1);
  const [selectedTab, setSelectedTab] = useState(0);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);

  const itemsPerPage = 1;

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setModalOpen(true);
  };

  // close functionality  of modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedYear(null);
  };

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
      <div>
        <ImageHero
          title="Internships"
          font={"60px"}
          mobileFont={"50px"}
          contentdiv={".content-div"}
        />

        <div className="w-full mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
          <div className="bg-[#800080] h-[100%] w-[10px] absolute"></div>
          <div className="sm:w-[65%] w-[85%] mx-auto py-10">
            <TabNav onTabChange={setSelectedTab} tabData={tabData} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-10 mx-auto ">
              {internships &&
                internships.map((stat) => (
                  <div key={stat.id}>
                    <YearCard
                      year={stat.Title}
                      onClick={() => handleYearClick(stat.Title)}
                    />

                    {/* Render Modal */}
                    <Modal
                      open={isModalOpen && selectedYear === stat.Title}
                      onClose={handleCloseModal}
                    >
                      <ListComp key={selectedYear} item={stat} />
                    </Modal>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

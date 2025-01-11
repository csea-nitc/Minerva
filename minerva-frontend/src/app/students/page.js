"use client";
import { useState, useEffect, useRef, use } from "react";
import ImageHero from "../components/imagehero/Imagehero";
import YearCard from "../components/cards/YearCard";
import Modal from "../components/modal/Modal";
import ListComp from "../components/newscomp/ListComp";
import FacultyDetails from "../components/facultydetails/FacultyDetails";
import TabNav from "../components/tabnav/TabNav";
import FacultyCard from "../components/cards/FacultyCard";

const backend_url = process.env.NEXT_PUBLIC_API_URL ; 
const token  = process.env.NEXT_PUBLIC_TOKEN ; 

const tabData = [ "B.Tech" , "M.Tech-CSE" , "M.Tech-CSE(IS)" , "M.Tech-CSE(AIDA)" , "PhD" ] ;

export default function Students() {
    const [studentData, setStudentData] = useState(null);
    const [currentTab, setCurrentTab] = useState(0);
    
    // for faculty component 
    const [activeIndex, setActiveIndex] = useState(null);

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState(null);


    const handleYearClick = (year) => {
        setSelectedYear(year);
        setModalOpen(true);
    };

    // close functionality  of modal
    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedYear(null);
    };

    useEffect( ( ) => {
        const fetchData = async () => {
            try {
                const endpoints = [
                    "students-b-teches",
                    "students-m-teches",
                    "students-m-tes",
                    "students-m-tech-aidas",
                    "students-ph-ds"
                ];

                const requests = endpoints.map((endpoint) =>
                    fetch(`${backend_url}/api/${endpoint}?populate=*`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }).then((res) => res.json())
                );

                const results = await Promise.all(requests);

                const data = results.map((result) =>
                    result && result.data ? result.data : []
                );
                
                // Each index has the result of the corresponding fetch
                console.log(data); 
                setStudentData(data);
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };

        fetchData();
    }, []); 

    return (
        <>
          <div>
            <ImageHero
              title="Students"
              font={"60px"}
              mobileFont={"50px"}
              contentdiv={".content-div"}
            />
      
            <div className="w-full mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">

              <div className="bg-[#800080] h-[100%] w-[10px] absolute"></div>

              <div className="sm:w-[65%] w-[85%] mx-auto py-10">
                {/* Tab Navigation */}
                <TabNav onTabChange={setCurrentTab} tabData= {tabData} />
      
                <div
                    className="text-[3em] sm:text-[5em] font-extrabold text sm:"
                    style={{ color: "#800080" }}
                >
                    {tabData[currentTab]}
                </div>
                <div
                    className="h-[7px]  w-full mt-1"
                    style={{ backgroundColor: "#800080" }}
                ></div>
      
                {/* render faculty component for phD*/}
                {currentTab === 4 ? (
                  studentData && studentData[currentTab] && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 mt-10">
                        {  studentData[currentTab].map( ( student ) => (
                          <FacultyCard  key = {student.id} faculty={student} />
                        ))}
                    </div>
                  )
                ) : (
                  <div   className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mx-auto p-4 sm:p-8 md:p-12 lg:px-0 lg:py-10" >
                    {studentData &&
                      studentData[currentTab] &&
                      studentData[currentTab].map((student) => (

                        <div key={student.id}>
                          <YearCard year={student.Title} onClick={() => handleYearClick(student.Title)} />
      
                          {/* Render Modal */}
                          <Modal open={isModalOpen && selectedYear === student.Title} onClose={handleCloseModal}>
                            <ListComp key={selectedYear} item={student} />
                          </Modal>
                        </div>

                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
    );
}
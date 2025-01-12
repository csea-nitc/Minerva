"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function FacultyDetails({
    data,
    className,
    activeIndex,
    setActiveIndex,
}) {
    const backend_url = process.env.NEXT_PUBLIC_API_URL;
    // const [activeIndex, setActiveIndex] = useState(null);
    let [cols, setCols] = useState(1);
    const containerRef = useRef(null);

    const { facultyData } = data;

    useEffect(() => {
        const updateCols = () => {
            const width = window.innerWidth;
            if (width >= 1152) setCols(5); // lg-xl:grid-cols-5
            else if (width >= 768) setCols(3); // md:grid-cols-3
            else setCols(1); // grid-cols-1
        };

        updateCols();
        window.addEventListener("resize", updateCols);

        return () => window.removeEventListener("resize", updateCols);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                setActiveIndex(null);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div
            className={`font-mont mx-auto p-4 flex justify-center items-center mb-[4rem] w-[90%] ${className}`}
            ref={containerRef}
        >
            <div
                className={`grid grid-cols-1 md:grid-cols-3 lg-xl:grid-cols-5 lg-xl:gap-4 gap-2 w-full`}
            >
                {facultyData.map((faculty, index) => (
                    <React.Fragment key={index}>
                        {/* Image */}
                        <div
                            className={`mx-auto relative overflow-hidden w-fit rounded-xl group hover:cursor-pointer ${
                                activeIndex !== null && activeIndex !== index
                                    ? "blur-[2px]"
                                    : "blur-none"
                            } `}
                            onClick={() => handleToggle(index)}
                        >
                            <div>
                                <img
                                    src={`${backend_url}/${faculty?.photograph?.url}`}
                                    alt=""
                                    className="lg:w-[300px] lg:h-[360px] w-[250px] h-[300px] object-cover group-hover:scale-[1.04] duration-300"
                                />
                            </div>
                            <div className="absolute bottom-0 w-full">
                                <div className="px-4 py-2 m-2 bg-white/90 rounded-md flex flex-col items-center">
                                    <p className="font-semibold font-jakarta text-lg">
                                        {faculty.name}
                                    </p>
                                    {faculty.designation && (
                                        <p className="font-jakarta text-lg text-gray-500">
                                            {faculty.designation}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Render details row below the current set of cards */}
                        {activeIndex !== null &&
                            Math.floor(activeIndex / cols) ===
                                Math.floor(index / cols) &&
                            (index % cols === cols - 1 ||
                                index === facultyData.length - 1) && (
                                <div
                                    className={`col-span-full col-start-${
                                        (index % cols) + 1
                                    } overflow-hidden rounded-lg transition-all duration-500 ease-in-out`}
                                >
                                    <div className="flex flex-wrap bg-gray-100 mt-4 rounded-lg">
                                        <div className="fac-det-name bg-[#800080] flex flex-col rounded-tr-lg md-lg:rounded-tr-none rounded-tl-lg justify-evenly items-center text-center md-lg:w-[28.5%] w-full">
                                            <h1 className="text-white lg-xl:text-[2.5rem] md:text-[1.5rem] text-[1.2rem] font-bold px-1">
                                                {facultyData[activeIndex].name}
                                            </h1>
                                            <h2 className="text-white lg-xl:text-[1.5rem] md:text-[1.2rem] text-[1rem]">
                                                {
                                                    facultyData[activeIndex]
                                                        .designation
                                                }
                                            </h2>
                                        </div>
                                        <div className="fac-det-details bg-[#d9d9d9] text-black md-lg:w-[71.5%] w-full font-bold rounded-lg md-lg:rounded-tl-none md-lg:rounded-bl-none rounded-tl-none rounded-tr-none md-lg:rounded-tr-lg">
                                            <ul className="text-[0.7rem] md:text-[0.85rem] lg:text-[0.95rem] p-0">
                                                {facultyData[activeIndex]
                                                    .contact_email && (
                                                    <li className="m-4">
                                                        Email:{" "}
                                                        {
                                                            facultyData[
                                                                activeIndex
                                                            ].contact_email
                                                        }
                                                    </li>
                                                )}
                                                {facultyData[activeIndex]
                                                    .office_location && (
                                                    <li className="m-4">
                                                        Office Location:{" "}
                                                        {
                                                            facultyData[
                                                                activeIndex
                                                            ].office_location
                                                        }
                                                    </li>
                                                )}
                                                {facultyData[activeIndex]
                                                    .contact_no && (
                                                    <li className="m-4">
                                                        Office Contact:{" "}
                                                        {
                                                            facultyData[
                                                                activeIndex
                                                            ].contact_no
                                                        }
                                                    </li>
                                                )}
                                                {facultyData[activeIndex]
                                                    .education && (
                                                    <li className="m-4">
                                                        Education:{" "}
                                                        {
                                                            facultyData[
                                                                activeIndex
                                                            ].education
                                                        }
                                                    </li>
                                                )}
                                                {facultyData[activeIndex]
                                                    .specialisation && (
                                                    <li className="m-4">
                                                        Specialisation:{" "}
                                                        {
                                                            facultyData[
                                                                activeIndex
                                                            ].specialisation
                                                        }
                                                    </li>
                                                )}
                                                {facultyData[activeIndex]
                                                    .associated_frgs && (
                                                    <li className="m-4">
                                                        Associated FRGs:{" "}
                                                        {
                                                            facultyData[
                                                                activeIndex
                                                            ].associated_frgs
                                                        }
                                                    </li>
                                                )}
                                                {facultyData[activeIndex]
                                                    .external_links && (
                                                    <li className="m-4">
                                                        External Links:{" "}
                                                        {
                                                            facultyData[
                                                                activeIndex
                                                            ].external_links
                                                        }
                                                    </li>
                                                )}

                                                {facultyData[activeIndex]
                                                    .additional_info && (
                                                    <li className="m-4">
                                                        Additional Info:{" "}
                                                        {
                                                            facultyData[
                                                                activeIndex
                                                            ].additional_info
                                                        }
                                                    </li>
                                                )}

                                                {/* Adding additional feilds for PhD scholors */}

                                                {facultyData[activeIndex]
                                                    .year_of_admission && (
                                                    <li className="m-4">
                                                        Year of Admission:{" "}
                                                        {
                                                            facultyData[
                                                                activeIndex
                                                            ].year_of_admission
                                                        }
                                                    </li>
                                                )}

                                                {facultyData[activeIndex]
                                                    .areas_of_interest && (
                                                    <li className="m-4">
                                                        Areas of Interest:{" "}
                                                        {
                                                            facultyData[
                                                                activeIndex
                                                            ].areas_of_interest
                                                        }
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

"use client";
import React, { useState, useEffect, useRef } from "react";

export default function FacultyDetails({
    data,
    className,
    activeIndex,
    setActiveIndex,
}) {
    // const [activeIndex, setActiveIndex] = useState(null);
    const [cols, setCols] = useState(1);
    const containerRef = useRef(null);

    const { facultyData } = data;


    const backend_url = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const updateCols = () => {
            const width = window.innerWidth;
            if (width >= 1024) setCols(3); // lg:grid-cols-3
            else if (width >= 768) setCols(2); // md:grid-cols-2
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
            className={`font-verdana mx-auto p-4 flex justify-center items-center mb-[4rem] w-[90%] ${className}`}
            ref={containerRef}
        >
            <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full`}
            >
                {facultyData.map((faculty, index) => (
                    <React.Fragment key={faculty.id}>
                        {/* Image */}
                        <div
                            className={`cursor-pointer flex justify-center mt-[2rem] items-center rounded-lg overflow-hidden   transform hover:scale-105 transition-all duration-300 col-start-${
                                (index % cols) + 1
                            } ${
                                activeIndex !== null && activeIndex !== index
                                    ? "blur-[2px]"
                                    : "blur-none"
                            }`}
                            onClick={() => handleToggle(index)}
                        >
                            <div className="relative">
                                <img
                                    src={`${backend_url}/${faculty.photograph.url}`}
                                    alt={faculty.name}
                                    className={`h-[25rem] w-[20rem] object-cover shadow-lg hover:shadow-xl transition-all 300 ease-in-out border-[10px] ${
                                        activeIndex == null
                                            ? "border-[#800080]"
                                            : activeIndex == index
                                            ? "border-[#800080]"
                                            : "border-[#888484]"
                                    }  object-top rounded-[10px] hover:shadow-xl`}
                                />
                                <div
                                    className={`absolute  text-white ${
                                        activeIndex == null
                                            ? "bg-[#800080]"
                                            : activeIndex == index
                                            ? "bg-[#800080]"
                                            : "bg-[#888484]"
                                    } left-2 bottom-2 font-bold transition-all 300 ease-in-out rounded-[3px] rounded-tr-md pr-1`}
                                >
                                    <h1 className="text-[1.5rem] text-center">
                                        {faculty.name}
                                    </h1>
                                    <p className="text-[1.2rem] text-center">
                                        {faculty.designation}
                                    </p>
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
                                    className={`col-span-${cols} md:col-span-2 lg:col-span-3 col-start-${
                                        (index % cols) + 1
                                    } overflow-hidden transition-all duration-500 ease-in-out`}
                                >
                                    <div className="flex flex-wrap bg-gray-100 mt-4">
                                        <div className="fac-det-name bg-[#800080] flex flex-col justify-evenly items-center text-center md-lg:w-1/3 w-full">
                                            <h1 className="text-white lg-xl:text-[3.5rem] md:text-[2.5rem] text-[2rem] font-bold">
                                                {facultyData[activeIndex].name}
                                            </h1>
                                            <h2 className="text-white lg-xl:text-[2rem] md:text-[1.5rem] text-[1.3rem]">
                                                {
                                                    facultyData[activeIndex]
                                                        .designation
                                                }
                                            </h2>
                                        </div>
                                        <div className="fac-det-details bg-[#d9d9d9] text-black md-lg:w-2/3 w-full font-bold">
                                            <ul className="text-sm md:text-base p-4">
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
                                                    .office_location_contact && (
                                                    <li className="m-4">
                                                        Office Location:{" "}
                                                        {
                                                            facultyData[
                                                                activeIndex
                                                            ].office_location_contact
                                                        }
                                                    </li>
                                                )}
                                                {facultyData[activeIndex]
                                                    .office_no && (
                                                    <li className="m-4">
                                                        Office Contact:{" "}
                                                        {
                                                            facultyData[
                                                                activeIndex
                                                            ].office_no
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
                                                        Specialization:{" "}
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
                                                        {facultyData[
                                                            activeIndex
                                                        ].external_links}
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

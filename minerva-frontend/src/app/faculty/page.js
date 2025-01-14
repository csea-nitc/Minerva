"use client";
import { useState, useEffect, useRef, use } from "react";
import gsap from "gsap";
import FacultyDetails from "../components/facultydetails/FacultyDetails";
import axios from "axios";
import https from "https";
import Link from "next/link";
import ImageHero from "../components/imagehero/Imagehero";

export default function Home() {
    const [isHodInfoVisible, setIsHodInfoVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const hodDetailsRefs = useRef([]);
    const [strokeSize, setStrokeSize] = useState("4px");
    const [facultyData, setFacultyData] = useState([]);

    const [hod, setHod] = useState([]);

    const backend_url = process.env.NEXT_PUBLIC_API_URL;
    const token = process.env.NEXT_PUBLIC_TOKEN;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${backend_url}/api/faculty-pages?populate=photograph&pagination[pageSize]=100`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                console.log("Faculty data");
                console.log(result);

                if (result && result.data && Array.isArray(result.data)) {
                    setFacultyData(result.data);
                } else {
                    console.error("Data structure is unexpected:", result);
                }
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchHodData = async () => {
            try {
                const response = await fetch(
                    `${backend_url}/api/hod?populate=photograph`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const result = await response.json();
                console.log("something has happened");
                console.log(result.data);
                setHod(result.data);
            } catch (error) {
                console.error("Error fetching hod data:", error);
            }
        };

        fetchHodData();
    }, []);

    useEffect(() => {
        const updateStrokeSize = () => {
            if (window.innerWidth >= 1024) {
                setStrokeSize("4px");
            } else if (window.innerWidth >= 768) {
                setStrokeSize("3px");
            } else {
                setStrokeSize("2px");
            }
        };

        updateStrokeSize();

        window.addEventListener("resize", updateStrokeSize);

        return () => {
            window.removeEventListener("resize", updateStrokeSize);
        };
    }, []);

    const handleImageClick = () => {
        setIsHodInfoVisible(!isHodInfoVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                hodDetailsRefs.current.every(
                    (ref) => ref && !ref.contains(event.target)
                )
            ) {
                setIsHodInfoVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
            <ImageHero
                title={"Faculty"}
                font={"80px"}
                mobileFont={"20px"}
                contentdiv={".content-div"}
            />
            <div className="py-10 w-[100vw] mt-[40vh] sm:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
                <div className={`p-8 `}>
                    <div
                        className={`flex flex-col-reverse md-lg:flex-row justify-around ${
                            activeIndex !== null ? "blur-[2px]" : ""
                        } `}
                        ref={(el) => (hodDetailsRefs.current[0] = el)}
                    >
                        <div className="hod-info flex justify-center items-center">
                            <div
                                className="mx-auto relative overflow-hidden w-fit rounded-xl group hover:cursor-pointer"
                                onClick={handleImageClick}
                            >
                                <div>
                                    <img
                                        src={hod.image}
                                        alt=""
                                        className="lg:w-[280px] lg:h-[360px] w-[250px] h-[300px] object-cover group-hover:scale-[1.04] duration-300"
                                    />
                                </div>
                                <div className="absolute bottom-0 w-full">
                                    <div
                                        className={`px-4 py-2 m-2 ${
                                            activeIndex === null
                                                ? "bg-[#800080]/80 text-white"
                                                : "bg-white/90 text-black"
                                        } transition-all duration-200 rounded-md flex flex-col items-center`}
                                    >
                                        <p className="font-semibold font-jakarta text-lg">
                                            {hod.name}
                                        </p>
                                        {hod.designation && (
                                            <p className="font-jakarta text-lg text-gray-500">
                                                {hod.designation}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2
                            className={`${
                                isHodInfoVisible ? "blur-[2px]" : ""
                            } ${
                                activeIndex !== null ? "blur-[2px]" : ""
                            } font-saira font-extrabold `}
                        >
                            <span
                                style={{
                                    WebkitTextStroke: `${strokeSize} #800080`,
                                    color: "white",
                                    fontSize: `clamp(20px, 10vw, 80px)`,
                                }}
                            >
                                HEAD OF
                                <br /> DEPARTMENT
                            </span>
                        </h2>
                    </div>
                    {isHodInfoVisible && (
                        <div
                            className={`flex flex-wrap bg-gray-100 mt-4 w-[90%] rounded-lg m-auto font-jakarta ${
                                activeIndex !== null ? "blur-[2px]" : ""
                            } `}
                            ref={(el) => (hodDetailsRefs.current[1] = el)}
                        >
                            <div className="fac-det-name bg-[#800080] flex flex-col rounded-lg md-lg:rounded-tr-none md-lg:rounded-br-none rounded-bl-none rounded-br-none md-lg:rounded-bl-lg justify-evenly items-center text-center md-lg:min-w-[30.5%] md-lg:max-w-[43.5%] w-full">
                                <h1 className="text-white lg-xl:text-[2.5rem] md:text-[1.5rem] text-[1.2rem] font-bold text-wrap break-words px-1">
                                    {hod.name}
                                </h1>
                                <h2 className="text-white lg-xl:text-[1.5rem] text-wrap break-words md:text-[1.2rem] text-[1rem]">
                                    {hod.designation}
                                </h2>
                            </div>
                            <div className="fac-det-details bg-[#d9d9d9] text-black flex-grow rounded-lg rounded-tr-none rounded-tl-none md-lg:rounded-tr-lg md-lg:rounded-bl-none min-h-10 font-bold">
                                <ul className="text-[0.5rem] md:text-[0.7rem] lg:text-[0.9rem] p-0">
                                    {hod.contact_email && (
                                        <li className="m-4">
                                            Email: {hod.contact_email}
                                        </li>
                                    )}
                                    {hod.office_location && (
                                        <li className="m-4">
                                            Office Location:{" "}
                                            {hod.office_location}
                                        </li>
                                    )}

                                    {hod.office_no && (
                                        <li className="m-4">
                                            Office Contact: {hod.office_no}
                                        </li>
                                    )}

                                    {hod.education && (
                                        <li className="m-4">
                                            Education: {hod.education}
                                        </li>
                                    )}

                                    {hod.specialisation && (
                                        <li className="m-4">
                                            Specialisation: {hod.specialisation}
                                        </li>
                                    )}

                                    {hod.associated_frgs && (
                                        <li className="m-4">
                                            Associated FRGs:{" "}
                                            {hod.associated_frgs}
                                        </li>
                                    )}

                                    {hod.external_links && (
                                        <li className="m-4">
                                            External Links: {hod.external_links}
                                        </li>
                                    )}

                                    {hod.additional_info && (
                                        <li className="m-4">
                                            Additional Info:{" "}
                                            {hod.additional_info}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}

                    <h2
                        className={`${isHodInfoVisible ? "blur-[2px]" : ""} ${
                            activeIndex !== null ? "blur-[2px]" : ""
                        } my-8 font-saira font-extrabold `}
                    >
                        <span
                            style={{
                                WebkitTextStroke: `${strokeSize} #800080`,
                                color: "white",
                                fontSize: `clamp(15px, 10vw, 70px)`,
                            }}
                        >
                            FACULTY
                        </span>
                    </h2>
                </div>
                <FacultyDetails
                    data={{ facultyData }}
                    className={`${isHodInfoVisible ? "blur-[2px]" : ""}`}
                    activeIndex={activeIndex}
                    isHodInfoVisible={isHodInfoVisible}
                    setActiveIndex={setActiveIndex}
                />
                <div
                    className={`${isHodInfoVisible ? "blur-[2px]" : ""} ${
                        activeIndex !== null ? "blur-[2px]" : ""
                    } absolute top-0 h-[100%] w-[10px] bg-[#800080]`}
                ></div>
            </div>
        </>
    );
}

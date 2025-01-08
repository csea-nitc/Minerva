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
    // const hod = {
    //     name: "Dr. John Smith",
    //     designation: "Assistant Professor",
    //     contact_email: "john@example.com",
    //     office_location: "Block C, Room 303",
    //     office_no: "1122334455",
    //     education: "Ph.D. in Software Engineering",
    //     specialisation: "DevOps",
    //     associated_frgs: "Software Engineering Group",
    //     external_links: ["Google Scholar"],
    //     additional_info: "Curabitur vel tincidunt nunc.",
    //     image: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2024/4/24/lctpqlt7uup7fjvsegfg/clove-valorant",
    // };
    // const facultyData = [
    //     {
    //         name: "Dr. Sumesh Divakaran",
    //         designation: "Associate Professor",
    //         contact_email: "sumesh@example.com",
    //         office_location: "Block A, Room 101",
    //         office_no: "1234567890",
    //         education: "Ph.D. in Computer Science",
    //         specialisation: "Artificial Intelligence",
    //         associated_frgs: "AI Research Group",
    //         external_links: ["Google Scholar", "Personal Website"],
    //         additional_info: "Lorem ipsum dolor sit amet.",
    //         image: "https://i.pinimg.com/originals/75/02/e1/7502e1505ab906dc739cefebed94de1f.jpg",
    //     },
    //     {
    //         name: "Dr. Jane Doe",
    //         designation: "Professor",
    //         contact_email: "jane@example.com",
    //         office_location: "Block B, Room 202",
    //         office_no: "0987654321",
    //         education: "Ph.D. in Data Science",
    //         specialisation: "Big Data Analytics",
    //         associated_frgs: "Data Science Research Group",
    //         external_links: ["Google Scholar", "Institute Webpage"],
    //         additional_info: "Consectetur adipiscing elit.",
    //         image: "https://images4.alphacoders.com/131/1319447.jpeg",
    //     },
    //     {
    //         name: "Dr. John Smith",
    //         designation: "Assistant Professor",
    //         contact_email: "john@example.com",
    //         office_location: "Block C, Room 303",
    //         office_no: "1122334455",
    //         education: "Ph.D. in Software Engineering",
    //         specialisation: "DevOps",
    //         associated_frgs: "Software Engineering Group",
    //         external_links: ["Google Scholar"],
    //         additional_info: "Curabitur vel tincidunt nunc.",
    //         image: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2024/4/24/lctpqlt7uup7fjvsegfg/clove-valorant",
    //     },
    //     {
    //         name: "Dr. John Smith",
    //         designation: "Assistant Professor",
    //         contact_email: "john@example.com",
    //         office_location: "Block C, Room 303",
    //         office_no: "1122334455",
    //         education: "Ph.D. in Software Engineering",
    //         specialisation: "DevOps",
    //         associated_frgs: "Software Engineering Group",
    //         external_links: ["Google Scholar"],
    //         additional_info: "Curabitur vel tincidunt nunc.",
    //         image: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2024/4/24/lctpqlt7uup7fjvsegfg/clove-valorant",
    //     },
    //     {
    //         name: "Dr. John Smith",
    //         designation: "Assistant Professor",
    //         contact_email: "john@example.com",
    //         office_location: "Block C, Room 303",
    //         office_no: "1122334455",
    //         education: "Ph.D. in Software Engineering",
    //         specialisation: "DevOps",
    //         associated_frgs: "Software Engineering Group",
    //         external_links: ["Google Scholar"],
    //         additional_info: "Curabitur vel tincidunt nunc.",
    //         image: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2024/4/24/lctpqlt7uup7fjvsegfg/clove-valorant",
    //     },
    //     {
    //         name: "Dr. John Smith",
    //         designation: "Assistant Professor",
    //         contact_email: "john@example.com",
    //         office_location: "Block C, Room 303",
    //         office_no: "1122334455",
    //         education: "Ph.D. in Software Engineering",
    //         specialisation: "DevOps",
    //         associated_frgs: "Software Engineering Group",
    //         external_links: ["Google Scholar"],
    //         additional_info: "Curabitur vel tincidunt nunc.",
    //         image: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2024/4/24/lctpqlt7uup7fjvsegfg/clove-valorant",
    //     },
    // ];

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
                        className={`flex flex-col-reverse md:flex-row justify-around ${
                            activeIndex !== null ? "blur-[2px]" : ""
                        } `}
                        ref={(el) => (hodDetailsRefs.current[0] = el)}
                    >
                        <div className="hod-info flex justify-center items-center">
                            <div
                                className={`cursor-pointer flex justify-center items-center rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-mont`}
                                onClick={handleImageClick}
                            >
                                <img
                                    src={`${backend_url}/${hod?.photograph?.[0]?.url}`}
                                    alt={hod.name}
                                    className="lg-xl:h-[18rem]  lg-xl:w-[14.4rem] md-lg:h-[16rem] md-lg:w-[12.8rem] md:h-[13rem] md:w-[10.6rem] h-[250px] w-[200px] object-cover border-[10px] border-[#800080] object-top rounded-[10px] lg-xl:text-[0.9rem] text-[0.75rem] text-center"
                                />
                                <div className="absolute  text-white bg-[#800080] left-2 bottom-2 font-bold rounded-[3px] p-1">
                                    <h1 className="lg-xl:text-[0.9rem] text-[0.75rem] text-center">
                                        {hod.name}
                                    </h1>
                                    <p className="lg-xl:text-[0.8rem] text-[0.65rem] text-center">
                                        {hod.designation}
                                    </p>
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
                            className={`flex flex-wrap bg-gray-100 mt-4 w-[90%] rounded-lg m-auto font-mont ${
                                activeIndex !== null ? "blur-[2px]" : ""
                            } `}
                            ref={(el) => (hodDetailsRefs.current[1] = el)}
                        >
                            <div className="fac-det-name bg-[#800080] flex flex-col rounded-lg md-lg:rounded-tr-none md-lg:rounded-br-none rounded-bl-none rounded-br-none md-lg:rounded-bl-lg justify-evenly items-center text-center md-lg:w-[28.5%] w-full">
                                <h1 className="text-white lg-xl:text-[2.5rem] md:text-[1.5rem] text-[1.2rem] font-bold px-1">
                                    {hod.name}
                                </h1>
                                <h2 className="text-white lg-xl:text-[1.5rem] md:text-[1.2rem] text-[1rem]">
                                    {hod.designation}
                                </h2>
                            </div>
                            <div className="fac-det-details bg-[#d9d9d9] text-black md-lg:w-[71.5%] rounded-lg rounded-tr-none rounded-tl-none md-lg:rounded-tr-lg md-lg:rounded-bl-none min-h-10 w-full font-bold">
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

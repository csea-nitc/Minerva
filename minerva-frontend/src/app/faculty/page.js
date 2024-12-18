"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import FacultyDetails from "../components/facultydetails/FacultyDetails";

const hod = {
    name: "Dr. Sumesh Divakaran",
    position: "Associate Professor",
    email: "sumesh@example.com",
    officeLocation: "Block A, Room 101",
    officeContact: "1234567890",
    education: "Ph.D. in Computer Science",
    specialization: "Artificial Intelligence",
    frgs: "AI Research Group",
    externalLinks: ["Google Scholar", "Personal Website"],
    additionalInfo: "Lorem ipsum dolor sit amet.",
    image: "https://i.pinimg.com/originals/75/02/e1/7502e1505ab906dc739cefebed94de1f.jpg",
};
const facultyData = [
    {
        name: "Dr. Sumesh Divakaran",
        position: "Associate Professor",
        email: "sumesh@example.com",
        officeLocation: "Block A, Room 101",
        officeContact: "1234567890",
        education: "Ph.D. in Computer Science",
        specialization: "Artificial Intelligence",
        frgs: "AI Research Group",
        externalLinks: ["Google Scholar", "Personal Website"],
        additionalInfo: "Lorem ipsum dolor sit amet.",
        image: "https://i.pinimg.com/originals/75/02/e1/7502e1505ab906dc739cefebed94de1f.jpg",
    },
    {
        name: "Dr. Jane Doe",
        position: "Professor",
        email: "jane@example.com",
        officeLocation: "Block B, Room 202",
        officeContact: "0987654321",
        education: "Ph.D. in Data Science",
        specialization: "Big Data Analytics",
        frgs: "Data Science Research Group",
        externalLinks: ["Google Scholar", "Institute Webpage"],
        additionalInfo: "Consectetur adipiscing elit.",
        image: "https://images4.alphacoders.com/131/1319447.jpeg",
    },
    {
        name: "Dr. John Smith",
        position: "Assistant Professor",
        email: "john@example.com",
        officeLocation: "Block C, Room 303",
        officeContact: "1122334455",
        education: "Ph.D. in Software Engineering",
        specialization: "DevOps",
        frgs: "Software Engineering Group",
        externalLinks: ["Google Scholar"],
        additionalInfo: "Curabitur vel tincidunt nunc.",
        image: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2024/4/24/lctpqlt7uup7fjvsegfg/clove-valorant",
    },
    {
        name: "Dr. Sarah Johnson",
        position: "Associate Professor",
        email: "sarah.johnson@example.com",
        officeLocation: "Block A, Room 205",
        officeContact: "2233445566",
        education: "M.S. in Data Science",
        specialization: "Machine Learning",
        frgs: "Data Science and Analytics Group",
        externalLinks: ["ResearchGate", "LinkedIn"],
        additionalInfo:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://i.pinimg.com/736x/6f/d8/18/6fd818ea26d5d3296b902aa917d58547.jpg",
    },

    {
        name: "Dr. Chamber",
        position: "Professor",
        email: "michael.davis@example.com",
        officeLocation: "Block B, Room 104",
        officeContact: "3344556677",
        education: "Ph.D. in Artificial Intelligence",
        specialization: "Computer Vision",
        frgs: "Artificial Intelligence Research Group",
        externalLinks: ["Google Scholar", "Academia"],
        additionalInfo:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada.",
        image: "https://avatarfiles.alphacoders.com/322/thumb-1920-322435.jpg",
    },

    {
        name: "Dr. Emily Clark",
        position: "Lecturer",
        email: "emily.clark@example.com",
        officeLocation: "Block D, Room 502",
        officeContact: "4455667788",
        education: "M.A. in Computer Science",
        specialization: "Cybersecurity",
        frgs: "Cybersecurity and Network Systems Group",
        externalLinks: ["GitHub", "Twitter"],
        additionalInfo:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
        image: "https://i.pinimg.com/originals/06/3a/c0/063ac094ea7d4d379bf2acb82df601e1.jpg",
    },
];

export default function Home() {
    const [isHodInfoVisible, setIsHodInfoVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const hodDetailsRefs = useRef([]);
    const [strokeSize, setStrokeSize] = useState("4px");
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
    // useEffect(() => {
    //     if (isHodInfoVisible) {
    //         gsap.fromTo(
    //             hodDetailsRefs.current[1],
    //             { height: 0, opacity: 0 },
    //             {
    //                 duration: 0.3,
    //                 height: "auto",
    //                 opacity: 1,
    //                 ease: "power2.out",
    //             }
    //         );
    //     } else {
    //         gsap.to(hodDetailsRefs.current[1], {
    //             duration: 0.3,
    //             height: 0,
    //             opacity: 0,
    //             ease: "power2.out",
    //         });
    //     }
    // }, [isHodInfoVisible]);
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
        <div className="relative overflow-hidden bg-white">
            <div className={`p-8 `}>
                <h1
                    className={` ${
                        isHodInfoVisible ? "blur-[2px]" : ""
                    } font-saira ${
                        activeIndex !== null ? "blur-[2px]" : ""
                    } font-extrabold text-[12vw] md:text-[10vw] lg:text-[8vw] text-[#800080] transition-all duration-300 ease-in-out`}
                >
                    FACULTY
                </h1>
                <div
                    className={`flex flex-col-reverse md:flex-row justify-around ${
                        activeIndex !== null ? "blur-[2px]" : ""
                    } `}
                    ref={(el) => (hodDetailsRefs.current[0] = el)}
                >
                    <div className="hod-info flex justify-center items-center">
                        <div
                            className={`cursor-pointer flex justify-center items-center rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                            onClick={handleImageClick}
                        >
                            <img
                                src={hod.image}
                                alt={hod.name}
                                className="h-[25rem] w-[20rem] object-cover border-[10px] border-[#800080] object-top rounded-[10px]"
                            />
                            <div className="absolute  text-white bg-[#800080] left-2 bottom-2 font-bold rounded-[3px] pr-1">
                                <h1 className="text-[1.5rem] text-center">
                                    {hod.name}
                                </h1>
                                <p className="text-[1.2rem] text-center">
                                    {hod.position}
                                </p>
                            </div>
                        </div>
                    </div>
                    <h2
                        className={`${isHodInfoVisible ? "blur-[2px]" : ""} ${
                            activeIndex !== null ? "blur-[2px]" : ""
                        } font-saira font-extrabold text-[11vw] md:text-[8vw] lg:text-[7vw]`}
                    >
                        <span
                            style={{
                                WebkitTextStroke: `${strokeSize} #800080`,
                                color: "white",
                            }}
                        >
                            HEAD OF
                            <br /> DEPARTMENT
                        </span>
                    </h2>
                </div>
                {isHodInfoVisible && (
                    <div
                        className={`flex flex-wrap bg-gray-100 mt-4 w-[90%] m-auto ${
                            activeIndex !== null ? "blur-[2px]" : ""
                        } `}
                        ref={(el) => (hodDetailsRefs.current[1] = el)}
                    >
                        <div className="fac-det-name bg-[#800080] flex flex-col justify-evenly items-center text-center md-lg:w-1/3 w-full">
                            <h1 className="text-white lg-xl:text-[3.5rem] md:text-[2.5rem] text-[2rem] font-bold">
                                {hod.name}
                            </h1>
                            <h2 className="text-white lg-xl:text-[2rem] md:text-[1.5rem] text-[1.3rem]">
                                {hod.position}
                            </h2>
                        </div>
                        <div className="fac-det-details bg-[#d9d9d9] text-black md-lg:w-2/3 w-full font-bold">
                            <ul className="text-sm md:text-base p-4">
                                <li className="m-4">Email: {hod.email}</li>
                                <li className="m-4">
                                    Office Location: {hod.officeLocation}
                                </li>
                                <li className="m-4">
                                    Office Contact: {hod.officeContact}
                                </li>
                                <li className="m-4">
                                    Education: {hod.education}
                                </li>
                                <li className="m-4">
                                    Specialization: {hod.specialization}
                                </li>
                                <li className="m-4">
                                    Associated FRGs: {hod.frgs}
                                </li>
                                <li className="m-4">
                                    External Links:{" "}
                                    {hod.externalLinks.join(", ")}
                                </li>
                                <li className="m-4">
                                    Additional Info: {hod.additionalInfo}
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                <h2
                    className={`${isHodInfoVisible ? "blur-[2px]" : ""} ${
                        activeIndex !== null ? "blur-[2px]" : ""
                    } my-8 font-saira font-extrabold text-[10vw] md:text-[8vw] lg:text-[6vw]`}
                >
                    <span
                        style={{
                            WebkitTextStroke: `${strokeSize} #800080`,
                            color: "white",
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
    );
}

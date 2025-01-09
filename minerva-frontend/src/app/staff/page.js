"use client";
import { useState, useEffect, useRef, use } from "react";
import FacultyDetails from "../components/facultydetails/FacultyDetails";
import ImageHero from "../components/imagehero/Imagehero";

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [strokeSize, setStrokeSize] = useState("4px");
    const [staffData, setStaffData] = useState([]);
   
    const backend_url = process.env.NEXT_PUBLIC_API_URL;
    const token = process.env.NEXT_PUBLIC_TOKEN;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${backend_url}/api/staffs?populate=photograph`,
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
                    setStaffData(result.data);
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

    return (
        <>
            <ImageHero
                title={"Staff"}
                font={"80px"}
                mobileFont={"20px"}
                contentdiv={".content-div"}
            />
            <div className="py-10 w-[100vw] mt-[40vh] sm:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
                <FacultyDetails
                    data={{ facultyData: staffData }}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                />
            </div>
        </>
    );
}

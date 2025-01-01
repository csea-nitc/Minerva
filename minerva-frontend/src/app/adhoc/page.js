"use client";
import { useState, useEffect, useRef, use } from "react";
import { Divide } from "lucide-react";
import FacultyDetails from "../components/facultydetails/FacultyDetails";
import ImageHero from "../components/imagehero/Imagehero";
//Dummy Data
const adhocData = [
    {
        name: "Dr. Sumesh Divakaran",
        designation: "Associate Professor",
        contact_email: "sumesh@example.com",
        office_location: "Block A, Room 101",
        office_no: "1234567890",
        education: "Ph.D. in Computer Science",
        specialisation: "Artificial Intelligence",
        associated_frgs: "AI Research Group",
        external_links: ["Google Scholar", "Personal Website"],
        additional_info: "Lorem ipsum dolor sit amet.",
        image: "https://i.pinimg.com/originals/75/02/e1/7502e1505ab906dc739cefebed94de1f.jpg",
    },
    {
        name: "Dr. Jane Doe",
        designation: "Professor",
        contact_email: "jane@example.com",
        office_location: "Block B, Room 202",
        office_no: "0987654321",
        education: "Ph.D. in Data Science",
        specialisation: "Big Data Analytics",
        associated_frgs: "Data Science Research Group",
        external_links: ["Google Scholar", "Institute Webpage"],
        additional_info: "Consectetur adipiscing elit.",
        image: "https://images4.alphacoders.com/131/1319447.jpeg",
    },
    {
        name: "Dr. John Smith",
        designation: "Assistant Professor",
        contact_email: "john@example.com",
        office_location: "Block C, Room 303",
        office_no: "1122334455",
        education: "Ph.D. in Software Engineering",
        specialisation: "DevOps",
        associated_frgs: "Software Engineering Group",
        external_links: ["Google Scholar"],
        additional_info: "Curabitur vel tincidunt nunc.",
        image: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2024/4/24/lctpqlt7uup7fjvsegfg/clove-valorant",
    },
    {
        name: "Dr. John Smith",
        designation: "Assistant Professor",
        contact_email: "john@example.com",
        office_location: "Block C, Room 303",
        office_no: "1122334455",
        education: "Ph.D. in Software Engineering",
        specialisation: "DevOps",
        associated_frgs: "Software Engineering Group",
        external_links: ["Google Scholar"],
        additional_info: "Curabitur vel tincidunt nunc.",
        image: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2024/4/24/lctpqlt7uup7fjvsegfg/clove-valorant",
    },
    {
        name: "Dr. John Smith",
        designation: "Assistant Professor",
        contact_email: "john@example.com",
        office_location: "Block C, Room 303",
        office_no: "1122334455",
        education: "Ph.D. in Software Engineering",
        specialisation: "DevOps",
        associated_frgs: "Software Engineering Group",
        external_links: ["Google Scholar"],
        additional_info: "Curabitur vel tincidunt nunc.",
        image: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2024/4/24/lctpqlt7uup7fjvsegfg/clove-valorant",
    },
    {
        name: "Dr. John Smith",
        designation: "Assistant Professor",
        contact_email: "john@example.com",
        office_location: "Block C, Room 303",
        office_no: "1122334455",
        education: "Ph.D. in Software Engineering",
        specialisation: "DevOps",
        associated_frgs: "Software Engineering Group",
        external_links: ["Google Scholar"],
        additional_info: "Curabitur vel tincidunt nunc.",
        image: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2024/4/24/lctpqlt7uup7fjvsegfg/clove-valorant",
    },
];
export default function Adhoc() {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <>
            <ImageHero
                title={"ADHOC"}
                font={"80px"}
                mobileFont={"20px"}
                contentdiv={".content-div"}
            />
            <div className="py-10 w-[100vw] mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
                <FacultyDetails
                    data={{ facultyData: adhocData }}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                />
            </div>
        </>
    );
}

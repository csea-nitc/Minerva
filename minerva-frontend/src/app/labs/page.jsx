"use client"
import React from "react";
import Carousel from "../components/image-carousel/swiper.jsx";
import Card from "../components/lab_card/card.jsx";
import ImgCard from "../components/imagehero/Imagehero.jsx";
import { useState } from "react";
const images = [
    {
        img: "https://swiperjs.com/demos/images/nature-1.jpg",
        tag: "Software Systems Labortary",
    },
    {
        img: "https://swiperjs.com/demos/images/nature-2.jpg",
        tag: "Operating Systems Laboratory",
    },
    {
        img: "https://swiperjs.com/demos/images/nature-3.jpg",
        tag: "ML Laboratory",
    },
];
const lab = [
    {
        title: "SSL",
        faculty: "Dr. Hiran V Nath",
        staff: "placeholder",
        location: "placeholder",
    },
    {
        title: "OSL",
        faculty: "Dr. Hiran V Nath",
        staff: "placeholder",
        location: "placeholder",
    },
    {
        title: "ML",
        faculty: "Dr. Hiran V Nath",
        staff: "placeholder",
        location: "placeholder",
    },
];
const page = () => {
    const [labIndex, setLabIndex] = useState(2);

     const changeLabIndex = (data) => {
        setLabIndex(data); // Handle the data from child
    };
    return (
        <>
            <ImgCard
                title={"Laboratories"}
                font={"80px"}
                mobileFont={"20px"}
                contentdiv={".content-div"}
            />
            <div className="w-full mt-[40vh] sm:mt-[50vh] md:mt-[60vh] lg:mt-[70vh] relative z-10 bg-white">
                <div className="bg-[#800080] h-[100%] w-[10px] absolute"></div>
                <div className="sm:w-[65%] w-[85%] mx-auto py-10">
                    <div className="w-[100%] flex justify-center items-cente sm:h-[460px] md:h-[460px]">
                        <Carousel
                            flag={1}
                            images={images}
                            width={"w-[300px] sm:w-[700px] md:w-[800px]"}
                            change = {changeLabIndex}
                        />
                    </div>
                    <Card
                            title={lab[labIndex].title}
                            faculty={lab[labIndex].faculty}
                            staff={lab[labIndex].staff}
                            location={lab[labIndex].location}
                    />
                </div>
            </div>
        </>
    );
};

export default page;

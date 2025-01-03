import React from "react";
import Link from "next/link";

const Hero = ({ props }) => {
    return (
        <div className="w-[100%] h-[100vh] m-0 p-0 box-border fixed top-0">
            <div
                className="relative container-fluid w-[100%] h-[100%] flex flex-col text-center justify-center items-center bg-cover bg-center pt-5"
                style={{ backgroundImage: "url('./Hero/hero-bg.png')" }}
            >
                <p className="text-white font-saira text-4xl sm:text-5xl lg:text-6xl font-extrabold w-[65%] p-auto ">
                    DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
                </p>
            </div>
        </div>
    );
};

export default Hero;

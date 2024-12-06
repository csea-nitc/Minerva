"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <div>
            <button
                onClick={toggleSidebar}
                className={`fixed top-20 right-0 bg-white text-white transition-transform transform p-4 z-50 rounded-tl-xl border-r-0 rounded-bl-xl border-[#800080] border-2 duration-300 ${
                    !isOpen
                        ? "translate-x-0 block"
                        : "translate-x-[-23.5rem] opacity-0 invisible sm:block"
                }`}
            >
                <div className="transition-transform duration-300 ease-in-out ">
                    <Image
                        src={
                            isOpen
                                ? "/images/sidebar-icon-closed.svg"
                                : "/images/sidebar-icon.svg"
                        }
                        alt="Sidebar Logo"
                        width={40}
                        height={40}
                    />
                </div>
            </button>

            <div
                className={`fixed top-0 right-0 w-[100vw] sm:w-[23.5rem] h-full bg-white overflow-y-auto overflow-x-hidden text-white transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "translate-x-0 opacity-100 visible"
                        : "translate-x-full opacity-0 invisible"
                } z-40 flex flex-col items-center justify-start`}
            >
                <button
                    onClick={toggleSidebar}
                    className={`sm:hidden self-end bg-white text-white transition-all duration-300 ease-in-out ${
                        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                >
                    <div className="transition-transform duration-300 ease-in-out ">
                        <Image
                            src={
                                isOpen
                                    ? "/images/sidebar-icon-closed-filled.svg"
                                    : "/images/sidebar-icon.svg"
                            }
                            alt="Sidebar Logo"
                            width={40}
                            height={40}
                        />
                    </div>
                </button>
                <div className="flex items-center relative justify-center">
                    <div className="h-[0.25rem] w-[18%] bg-[#800080] absolute left-[-2.55rem]"></div>
                    <h2 className="sm:text-[2.5rem] text-[2rem] text-black font-verdana font-bold p-4 w-[100%] text-center">
                        QUICK LINKS
                    </h2>
                    <div className="h-[0.25rem] w-[18%] bg-[#800080] absolute right-[-2.55rem]"></div>
                </div>
                <ul className="mt-6 font-verdana flex flex-col justify-center items-center flex-grow sm:text-[2rem] text-[1.5rem] w-[90%]">
                    <li className="mb-4 text-black border-white border-2 text-center rounded-s">
                        <a href="">Home</a>
                    </li>
                    <li className="h-[0.1rem] w-[80%] bg-[#800080]"></li>
                    <li className="mb-4 text-black border-white border-2 text-center rounded-s">
                        <a href="">PHD Admissions</a>
                    </li>
                    <li className="h-[0.1rem] w-[80%] bg-[#800080]"></li>
                    <li className="mb-4 text-black border-white border-2 text-center rounded-s">
                        <a href="">Ad HOC Faculty Recruitment</a>
                    </li>
                    <li className="h-[0.1rem] w-[80%] bg-[#800080]"></li>
                    <li className="mb-4 text-black border-white border-2 text-center rounded-s">
                        <a href="">Timetable- Monsoon Semester 2024</a>
                    </li>
                    <li className="h-[0.1rem] w-[80%] bg-[#800080]"></li>
                    <li className="mb-4 text-black border-white border-2 text-center rounded-s">
                        <a href="">DCC Minutes</a>
                    </li>
                </ul>
                <button className="sm:text-[2.5rem] text-[2rem] text-black font-verdana font-bold bg-[#e3c7e3] w-[100%] text-center p-4">
                    Login
                </button>
            </div>
            {isOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black opacity-50 z-30"
                ></div>
            )}
        </div>
    );
};

export default Sidebar;

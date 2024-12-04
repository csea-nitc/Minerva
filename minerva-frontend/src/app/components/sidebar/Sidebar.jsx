"use client";
import React, { useState } from "react";
import Image from "next/image";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                onClick={toggleSidebar}
                className={`fixed top-20 right-0 bg-white text-white transition-transform transform p-4 z-50 rounded-tl-xl rounded-bl-xl border-[#800080] border-2 ${
                    !isOpen ? "translate-x-0" : "translate-x-[-16rem]"
                }`}
            >
                <Image
                    src="/images/sidebar-icon.svg"
                    alt="Sidebar Logo"
                    width={40}
                    height={40}
                />
            </button>

            <div
                className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white p-6 transition-transform transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } z-40`}
            >
                <h2 className="text-2xl font-semibold">Sidebar</h2>
                <ul className="mt-6 font-verdana">
                    <li className="mb-4 bg-[#800080] border-white border-2 text-center rounded-s">
                        <a href="">Home</a>
                    </li>
                    <li className="mb-4 bg-[#800080] border-white border-2 text-center rounded-s">
                        <a href="">About</a>
                    </li>
                </ul>
            </div>

            {/* Overlay when sidebar is open */}
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

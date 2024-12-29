"use client";

import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown"; // Import the new Dropdown component
import DropdownMob from "./DropdownMob";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track the active dropdown

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index); // Toggle the clicked dropdown
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the mobile menu
  };

  const dropdownActivites = [
    { href: "/activities/csea", label: "CSEA" },
    { href: "/activities/essf", label: "ESSF" },
  ];

  const dropdownAcademics = [
    { href: "/programmes", label: "Programmes" },
    { href: "/research", label: "Research" },
    { href: "/laboratory", label: "Laboratory" },
    { href: "/academic_integrity", label: "Academic Integrity" },
  ];

  const dropdownPlacements = [
    { href: "/programmes", label: "Placement Statistics" },
    { href: "/research", label: "Summer Internships" },
  ];

  const dropdownPeople = [
    { href: "/faculty", label: "Faculty" },
    { href: "/staff", label: "Staff" },
    { href: "/adhoc_faculty", label: "Adhoc Faculty" },
    { href: "/adhoc_staff", label: "Adhoc Staff" },
    { href: "/students", label: "Students" },
    { href: "/alumini", label: "Alumini" },
  ];

  return (
    <div className="absolute w-[100vw] top-0 z-20">
      <div style={{ backgroundColor: "#800080" }} className="h-1"></div>
      <div className="navbar flex bg-gradient-to-b from-black/90 to-transparent font-teko pr-12 pl-6 items-start justify-between h-[180px] pt-5 transition-all duration-10 ease-linear max-920:h-[140px] max-800:items-center">
        <div className="relative z-20 flex gap-6 logo">
          <img
            className="h-[90px] pl-3 max-1060:h-[80px] max-800:h-[70px]"
            src="/logo.svg"
            alt="Logo"
          />

          <div className="text-white text-2xl space-[20px] pt-1 hidden max-w-[200px] max-800:block">
            National Institute of Technology Calicut
          </div>
        </div>

        <div
          className="hamburger z-20 absolute right-8 top-14 hidden max-800:flex gap-[6px] flex-col"
          onClick={toggleMenu}
        >
          <div className="h-1 w-8 rounded-md bg-white"></div>
          <div className="h-1 w-8 rounded-md bg-white"></div>
          <div className="h-1 w-8 rounded-md bg-white"></div>
        </div>

        <div className="flex-col gap-4 max-1060:gap-2 uppercase flex max-800:hidden links">
          <div className="flex justify-end gap-6 h-10 section1 text-white mt-2">
            <Link
              href="/"
              className="text-[26px] text-aliceblue px-3 transition-all duration-100 ease-in-out  max-1060:text-[22px] max-920:text-[18px]"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/news"
              className="text-[26px] text-aliceblue px-3 transition-all duration-100 ease-in-out  max-1060:text-[22px] max-920:text-[18px]"
              onClick={closeMenu}
            >
              News and Announcements
            </Link>
            <Link
              href="/contact"
              className="text-[26px] text-aliceblue px-3 transition-all duration-100 ease-in-out  max-1060:text-[22px] max-920:text-[18px]"
              onClick={closeMenu}
            >
              Contact Us
            </Link>

            <div className="login bg-white text-[26px] h-fit pt-1 flex items-center max-920:px-3 px-4 justify-center rounded-md  max-1060:text-[22px] max-920:text-[18px]">
              <Link
                href="https://minerva.arunnats.com/admin"
                style={{ color: "#800080" }}
                className=""
                onClick={closeMenu}
              >
                Login
              </Link>
            </div>
          </div>
          <div className="flex gap-1 uppercase section2 text-white">
            <Link
              href="/faculty"
              className="text-[26px] px-5 transition-all duration-100 ease-in-out max-1060:text-[22px] max-920:text-[18px]"
              onClick={closeMenu}
            >
              Faculty
            </Link>
            <div className="h-[30px] max-1060:h-[24px] px-[1px] bg-white mt-1"></div>

            <div className="relative" onClick={() => toggleDropdown(0)}>
              <Link
                href="#"
                className="text-[26px] px-5 transition-all duration-100 ease-in-out max-1060:text-[22px] max-920:text-[18px]"
              >
                Academics
              </Link>
              {/* Pass `isOpen` prop to the Dropdown component */}
              {activeDropdown === 0 && (
                <Dropdown tabs={dropdownAcademics} isOpen={true} />
              )}
              {activeDropdown !== 0 && (
                <Dropdown tabs={dropdownAcademics} isOpen={false} />
              )}
            </div>

            <div className="h-[30px] max-1060:h-[24px] px-[1px] bg-white mt-1"></div>

            <div className="relative" onClick={() => toggleDropdown(1)}>
              <Link
                href="#"
                className="text-[26px] px-5 transition-all duration-100 ease-in-out max-1060:text-[22px] max-920:text-[18px]"
              >
                Placement and Internships
              </Link>
              {/* Pass `isOpen` prop to the Dropdown component */}
              {activeDropdown === 1 && (
                <Dropdown tabs={dropdownPlacements} isOpen={true} />
              )}
              {activeDropdown !== 1 && (
                <Dropdown tabs={dropdownPlacements} isOpen={false} />
              )}
            </div>

            <div className="h-[30px] max-1060:h-[24px] px-[1px] bg-white mt-1"></div>

            <div className="relative" onClick={() => toggleDropdown(2)}>
              <Link
                href="#"
                className="text-[26px] px-5 transition-all duration-100 ease-in-out max-1060:text-[22px] max-920:text-[18px]"
              >
                Activities
              </Link>
              {/* Pass `isOpen` prop to the Dropdown component */}
              {activeDropdown === 2 && (
                <Dropdown tabs={dropdownActivites} isOpen={true} />
              )}
              {activeDropdown !== 2 && (
                <Dropdown tabs={dropdownActivites} isOpen={false} />
              )}
            </div>

            <div className="h-[30px] max-1060:h-[24px] px-[1px] bg-white mt-1"></div>

            <div className="relative" onClick={() => toggleDropdown(3)}>
              <Link
                href="#"
                className="text-[26px] px-5 transition-all duration-100 ease-in-out max-1060:text-[22px] max-920:text-[18px]"
              >
                People
              </Link>
              {/* Pass `isOpen` prop to the Dropdown component */}
              {activeDropdown === 3 && (
                <Dropdown tabs={dropdownPeople} isOpen={true} />
              )}
              {activeDropdown !== 3 && (
                <Dropdown tabs={dropdownPeople} isOpen={false} />
              )}
            </div>

            <div className="h-[30px] max-1060:h-[24px] px-[1px] bg-white mt-1"></div>
            <Link
              href="/awards"
              className="text-[26px] pl-5 transition-all duration-100 ease-in-out max-1060:text-[22px] max-920:text-[18px]"
              onClick={closeMenu}
            >
              Awards
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div
          className={`transition-all duration-300 ease-in-out z-10 ${
            menuOpen ? "opacity-100" : "max-h-0 py-0 opacity-0 hidden"
          }`}
        >
          <div className="relative z-10 dropdown backdrop-blur-[5px] -mt-[140px] pt-[120px] bg-gradient-to-b from-black/50 to-black/50">
            <div className="flex font-teko flex-col pt-6 p-9 uppercase text-[30px] text-white">
              <Link href="/" className="" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/news" onClick={closeMenu}>
                News and Announcements
              </Link>
              <Link href="/contact" onClick={closeMenu}>
                Contact Us
              </Link>
              <DropdownMob
                label="People"
                items={dropdownPeople}
                closeMenu={closeMenu}
              />
              <DropdownMob
                label="Activities"
                items={dropdownActivites}
                closeMenu={closeMenu}
              />
              <DropdownMob
                label="Placements and Internships"
                items={dropdownPlacements}
                closeMenu={closeMenu}
              />
              <DropdownMob
                label="Academics"
                items={dropdownAcademics}
                closeMenu={closeMenu}
              />
              <Link href="/awards" onClick={closeMenu}>
                Awards
              </Link>
              <div
                className="bg-white w-[87px] px-4 rounded-lg"
                style={{ color: "#800080" }}
              >
                <Link href="/login" className="login" onClick={closeMenu}>
                  Login
                </Link>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#800080" }}
              className="h-1 w-[100vw] mt-3"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

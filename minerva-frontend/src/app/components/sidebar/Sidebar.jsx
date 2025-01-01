"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loading from "../loading/loading";

const token = process.env.NEXT_PUBLIC_TOKEN;
const backend_url = process.env.NEXT_PUBLIC_API_URL;

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [link, setLinks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const linksD = await fetch(
                    `${backend_url}/api/quick-links?populate=*`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const linksData = await linksD.json();
                console.log( linksData ) ; 
                setLinks(linksData.data ? [...linksData.data].reverse() : []);
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };

        fetchData();
    }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile && isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "17px";
    } else if (!isMobile) {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    }
  }, [isOpen, isMobile]);

  useEffect(() => {
    if (isMobile) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }, [isOpen, isMobile]);

  return (
    <div>
      <button
        onClick={toggleSidebar}
        className={`fixed top-20 right-0 bg-white text-white transition-transform transform p-4 z-50 rounded-tl-xl border-r-0 rounded-bl-xl border-[#800080] border-2 duration-300 ${
          !isOpen
            ? "translate-x-0 block sm:block"
            : "translate-x-[-20rem] lg:translate-x-[-23.5rem] hidden sm:block"
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
                className={`fixed top-0 right-0 w-[100vw] sm:w-[20rem] lg:w-[23.5rem] h-full bg-white overflow-y-auto overflow-x-hidden text-white transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "translate-x-0 opacity-100 visible"
                        : "translate-x-full opacity-0 invisible"
                } z-40 flex flex-col items-center justify-start`}
            >
                <div className="w-full flex justify-end">
                    <button
                        onClick={toggleSidebar}
                        className={`sm:hidden bg-white text-white transition-all transform pr-1 pt-1 z-50 duration-300 ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        <div className="transition-transform duration-300 ease-in-out ">
                            <Image
                                src="/images/sidebar-icon-closed-filled.svg"
                                alt="Sidebar Logo"
                                width={50}
                                height={50}
                            />
                        </div>
                    </button>
                </div>
                <div className="flex items-center relative justify-center">
                    <div className="h-[0.25rem] w-[18%] bg-[#800080] absolute left-[-2.55rem]"></div>
                    <h2 className="sm:text-[2rem] text-[2rem] text-black font-verdana font-bold p-3 w-[100%] text-center">
                        QUICK LINKS
                    </h2>
                    <div className="h-[0.25rem] w-[18%] bg-[#800080] absolute right-[-2.55rem]"></div>
                </div>
                <ul className="font-verdana flex flex-col justify-center items-center flex-grow lg:text-[1.5rem] sm:text-[1.3rem] text-[1.2rem] w-[90%]">
                    <li className="m-4 text-black border-white border-2 text-center rounded-s">
                        <a href="">Home</a>
                    </li>
                    <li className="h-[0.1rem] w-[80%] bg-[#800080]"></li>
                    <ul>
                        {link && link.length > 0 ? (
                            link.map((item) => (
                                <li
                                    key={item.id}
                                    className="m-4 text-black border-white border-2 text-center rounded-s"
                                >
                                    <a href={`/node/${item.Title}`}>{item.Title}</a>
                                </li>
                            ))
                        ) : (
                            <Loading />
                        )}
                    </ul>
                    <li className="h-[0.1rem] w-[80%] bg-[#800080]"></li>
                    <li className="m-4 text-black border-white border-2 text-center rounded-s">
                        <a href="/dcc">DCC Minutes</a>
                    </li>
                </ul>
                <button className="sm:text-[2rem] text-[2rem] text-black font-verdana font-bold bg-[#e3c7e3] w-[100%] text-center p-3">
                    Login
                </button>
            </div>
          </button>
        </div>
        <div className="flex items-center relative justify-center">
          <div className="h-[0.25rem] w-[18%] bg-[#800080] absolute left-[-2.55rem]"></div>
          <h2 className="sm:text-[2rem] text-[2rem] text-black font-verdana font-bold p-3 w-[100%] text-center">
            QUICK LINKS
          </h2>
          <div className="h-[0.25rem] w-[18%] bg-[#800080] absolute right-[-2.55rem]"></div>
        </div>
        <ul className="font-verdana flex flex-col justify-center items-center flex-grow lg:text-[1.5rem] sm:text-[1.3rem] text-[1.2rem] w-[90%]">
          <li className="m-4 text-black border-white border-2 text-center rounded-s">
            <a href="">Home</a>
          </li>
          <li className="h-[0.1rem] w-[80%] bg-[#800080]"></li>
          <li className="m-4 text-black border-white border-2 text-center rounded-s">
            <a href="">PHD Admissions</a>
          </li>
          <li className="h-[0.1rem] w-[80%] bg-[#800080]"></li>
          <li className="m-4 text-black border-white border-2 text-center rounded-s">
            <a href="">Ad HOC Faculty Recruitment</a>
          </li>
          <li className="h-[0.1rem] w-[80%] bg-[#800080]"></li>
          <li className="m-4 text-black border-white border-2 text-center rounded-s">
            <a href="">Timetable- Monsoon Semester 2024</a>
          </li>
          <li className="h-[0.1rem] w-[80%] bg-[#800080]"></li>
          <li className="m-4 text-black border-white border-2 text-center rounded-s">
            <a href="">DCC Minutes</a>
          </li>
        </ul>
        <button className="sm:text-[2rem] text-[2rem] text-black font-verdana font-bold bg-[#e3c7e3] w-[100%] text-center p-3">
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

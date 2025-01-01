import React from "react";
import Link from "next/link";

const Hero = ({ props }) => {
  return (
    <div className="w-[100%] h-[100vh] m-0 p-0 box-border">
      <div
        className="relative container-fluid w-[100%] h-[100%] flex flex-col text-center justify-center items-center bg-cover bg-center pt-5"
        style={{ backgroundImage: "url('./Hero/hero-bg.png')" }}
      >
        <p className="text-white font-saira text-4xl sm:text-5xl lg:text-6xl font-extrabold w-[65%] p-auto relative top-[18%] xs:top-[25%] sm:top-[30%] md:top-[32%] lg:top-[42%] xl:top-[42%] 2xl:top-[45%] translate-y-14">
          DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
        </p>
        <div className="bg-[#FFFBF2] min-[400px]:w-[40%] w-[45%] md:w-[60%] rounded-lg relative mb-0 mt-auto z-20 translate-y-4">
          <div className="flex flex-col md:flex-row justify-around p-5 w-[100%] text-[#812981] font-teko md:text-left">
            {/* NEWS Section */}
            <div className="flex flex-col md:w-[33%] border-b md:border-b-0 md:border-r-4 border-[#DEBDDD] md:mr-3 mt-3 pb-3 md:pb-0 md:pr-3">
              <a className="text-xl md:text-3xl font-bold">NEWS</a>
              {props.news.map((item, index) => (
                <Link key={index} href={item.href} passHref>
                  <p className="text-[#696969] text-left text-md md:text-lg md:w-[85%] hover:underline">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>

            {/* UPDATES Section */}
            <div className="flex flex-col md:w-[33%] border-b md:border-b-0 md:border-r-4 border-[#DEBDDD] md:mr-3 mt-3 pb-3 md:pb-0 md:pr-3">
              <a className="text-xl md:text-3xl font-bold">UPDATES</a>
              {props.updates.map((item, index) => (
                <Link key={index} href={item.href} passHref>
                  <p className="text-[#696969] text-left text-md md:text-lg md:w-[85%] hover:underline">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>

            {/* EVENTS Section */}
            <div className="flex flex-col md:w-[33%] md:mr-3 mt-3 pb-3 md:pb-0 md:pr-3">
              <a className="text-xl md:text-3xl font-bold">EVENTS</a>
              {props.events.map((item, index) => (
                <Link key={index} href={item.href} passHref>
                  <p className="text-[#696969] text-left text-md md:text-lg md:w-[85%] hover:underline">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

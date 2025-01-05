import React from "react";
import Link from "next/link";

const Hero = ({ props }) => {
  return (
    <div className="w-[100%] h-[100vh] m-0 p-0 box-border">
      <div
        className="relative container-fluid w-[100%] h-[100%] flex flex-col text-center justify-center items-center bg-cover bg-center pt-5"
        style={{ backgroundImage: "url('./Hero/hero-bg.png')" }}
      >
        <div className="absolute w-[70%] flex flex-col justify-center items-center -translate-y-5">
          {/* DEPARTMENT OF aligned to the left */}
          <p className="text-white font-saira text-[1.6vw] font-extrabold absolute left-10 -top-2">
            DEPARTMENT OF
          </p>
          {/* COMPUTER SCIENCE AND ENGINEERING centered */}
          <p className="text-white font-saira text-[4vw] font-extrabold text-center">
            COMPUTER SCIENCE AND ENGINEERING
          </p>
          {/* NATIONAL INSTITUTE OF TECHNOLOGY, CALICUT aligned to the right */}
          <p className="text-white font-saira text-[1.6vw] font-extrabold absolute right-8 -bottom-2">
            NATIONAL INSTITUTE OF TECHNOLOGY, CALICUT
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Link from "next/link";
import DownloadButton from "../downloadbutton/DownloadButton";

const Herosupport = () => {
  return (
    <div className="w-[100%] ">
      {/* <div className="w-full bg-accent h-[1vh] bg-opacity-35 relative z-10 bottom-[12vh]" />
      <div className="w-full bg-accent h-[1vh] bg-opacity-45 relative z-10 bottom-[12vh]" />
      <div className="w-full bg-accent h-[1vh] bg-opacity-55 relative z-10 bottom-[12vh]" />
      <div className="w-full bg-accent h-[1vh] bg-opacity-65 relative z-10 bottom-[12vh]" />
      <div className="w-full bg-accent h-[1vh] bg-opacity-75 relative z-10 bottom-[12vh]" />
      <div className="w-full bg-accent h-[1vh] bg-opacity-85 relative z-10 bottom-[12vh]" />
      <div className="w-full bg-accent h-[1vh] bg-opacity-90 relative z-10 bottom-[12vh]" /> */}
      {/* Gradient background */}
      <div
        className="w-full h-[12vh] relative z-10 bottom-[12vh]"
        style={{
          background:
            "linear-gradient(to top, #800080 0%, rgba(172, 15, 202, 0) 100%)",
        }}
      />

      <div className="w-full bg-accent h-[50vh] md:h-[28vh] flex flex-col md:flex-row relative z-10 bottom-[12vh] mb-[-12vh]  ">
        <div className="flex flex-col w-[100%] md:w-[66%] items-center justify-center lg:mt-10 relative bottom-4 lg:bottom-8 h-[100%] ">
          <div className="text-white text-6xl text-bold font-Teko mb-1">
            Our Programmes
          </div>
          <div className="h-[30%] md:h-[22%] p-10 mt-[10px] flex flex-col lg:flex-row justify-center items-center gap-4">
            <DownloadButton
              text="UG BROCHURE"
              href="https://example.com"
              isExternal={false}
            />
            <DownloadButton
              text="PG BROCHURE"
              href="https://example.com"
              isExternal={false}
            />
          </div>
        </div>
        <div className="flex flex-col relative bottom-14 md:bottom-0 md:top-2 2xl:mx-10 lg:left-24 font-teko h-[100%] items-center justify-center text-center ">
          <div className="border-l-2">
            {" "}
            <div className="text-white text-3xl text-bold font-Teko m-2 mb-4">
              LINKS
            </div>
            <div className="flex flex-row md:flex-col">
              <div className="text-white text-3xl px-5 py-2">Placeholder1</div>
              <div className="text-white text-3xl px-5 py-2">Placeholder1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosupport;

/*
<div className='flex flex-col mt-10 relative bottom-8 left-10 font-teko h-[100%] items-center justify-center'>
                <div className='text-white text-3xl m-2'>Placeholder1</div>
                <div className='text-white text-3xl m-2'>Placeholder1</div>
                <div className='text-white text-3xl m-2'>Placeholder3</div>
</div>
*/

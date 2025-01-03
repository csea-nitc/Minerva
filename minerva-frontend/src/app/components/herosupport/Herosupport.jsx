import React from "react";
import Link from "next/link";
import DownloadButton from "../downloadbutton/DownloadButton";

const Herosupport = () => {
  return (
    <div className="w-full bg-accent">
      <div className="w-full max-w-7xl mx-auto py-4 flex flex-col md:flex-row items-center relative z-10">
        {/* Left Section: Programmes */}
        <div className="w-full md:min-w-[550px] md:w-1/2 px-6 py-4 flex flex-col justify-center flex-shrink-0">
          <h1 className="text-white border-b-2 md:border-none -mr-6  border-white text-4xl md:text-5xl font-Teko mb-8 md:mb-2 text-left tracking-wider uppercase">
            Our Programmes
          </h1>
          <div className="flex gap-4 flex-wrap w-fit justify-center mx-auto md:mx-0">
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

        {/* Right Section: Links */}
        <div className="w-full flex flex-col md:items-start px-6 py-4 ">
          <div className="md:border-l-2 border-white md:pl-8 font-teko">
            <h2 className="text-white text-4xl md:text-5xl mb-4 border-b-2 md:border-none -mr-6 tracking-wider">LINKS</h2>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-white text-2xl">
              Skibbidi
              </Link>
              <Link href="#" className="text-white text-2xl">
                Placeholder2
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosupport;

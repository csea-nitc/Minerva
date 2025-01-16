"use client";
import React from "react";

const DownloadButton = ({ text, href, isExternal }) => {
  return (
    <button
      className="md:w-[350px] w-[170px] flex flex-row items-center justify-between border-2 text-white font-Teko font-bold tracking-[0.08em] text-2xl p-3 sm:text-3xl rounded-xl border-white"
      onClick={() => {
        if (isExternal) {
          window.open(href, "_blank");
        } else {
          window.location.href = href;
        }
      }}
    >
      {/* Text */}
      <span className="flex items-center justify-center w-full text-left text-[1.1rem] md:text-[2.1rem] translate-y-1">
        {text}
      </span>

      {/* Icon */}
      <span className="flex items-center ml-3 ">
        <img
          className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]"
          src="/images/download-icon.svg"
          alt="Download Icon"
        />
      </span>
    </button>
  );
};

export default DownloadButton;

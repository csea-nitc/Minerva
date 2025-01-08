"use client";
import React from "react";

const DownloadButton = ({ text, href, isExternal }) => {
  return (
    <button
      className="w-[400px] flex flex-row items-center justify-between border-2 text-white font-Teko font-bold tracking-[0.08em] text-3xl p-3 sm:text-3xl rounded-xl  border-white"
      onClick={() => {
        if (isExternal) {
          window.open(href, "_blank");
        } else {
          window.location.href = href;
        }
      }}
    >
      {/* Text */}
      <span className="flex items-center justify-center w-full text-left translate-y-1">
        {text}
      </span>

      {/* Icon */}
      <span className="flex items-center ml-3 ">
        <img src="/images/download-icon.svg" alt="Download Icon" />
      </span>
    </button>
  );
};

export default DownloadButton;

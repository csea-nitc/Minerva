"use client";
import React from "react";

const DownloadButton = ({ text, href, isExternal }) => {
  return (
    <button
      className="flex flex-row items-center justify-between border-4 text-white font-Teko font-bold tracking-wide text-2xl p-3 sm:text-4xl rounded-2xl border-white"
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

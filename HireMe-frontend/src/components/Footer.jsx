import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f0f0f2] py-12 px-6 flex flex-col items-center gap-12 ">
      {/* Title and Navigation */}
      <div className="text-center">
        <h2 className="text-[#857ab2] text-4xl font-normal font-[Joan] mb-6 [text-shadow:0px_4px_4px_#00000040]">
          HireME
        </h2>
        <p className="text-[#857ab2] text-xl font-normal font-[Joan] tracking-wide">
          Job Listings &nbsp;&nbsp;&nbsp; Dashboard &nbsp;&nbsp;&nbsp; Employer
          Services &nbsp;&nbsp;&nbsp; About us
        </p>
      </div>

      {/* Divider */}
      <div className="w-[80%] h-px bg-[#857ab2]" />

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <img
            className="w-5 h-5"
            alt="Vector"
            src="https://c.animaapp.com/fSfMfXGA/img/vector---0-2.svg"
          />
          <img
            className="w-6 h-6"
            alt="Frame"
            src="https://c.animaapp.com/fSfMfXGA/img/frame-2.svg"
          />
          <span className="text-[#857ab2] text-base font-normal font-[Joan]">
            2025, HireME
          </span>
        </div>

        <p className="text-[#857ab2] text-xl font-normal font-[Joan] tracking-wide text-center">
          Privacy Policy &nbsp;&nbsp;&nbsp; Terms and Conditions
          &nbsp;&nbsp;&nbsp; Help Center
        </p>
      </div>
    </footer>
  );
};

export default Footer;

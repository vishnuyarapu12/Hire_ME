import React from "react";
import { Link } from "react-router-dom";

const Navabar = () => {
  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1208px] h-[82px] bg-[#d3d0daa3] rounded-[10px] flex items-center justify-between px-10 z-100">
      <Link to="/">
        <div className="text-black text-2xl font-normal font-[Joan]">
          HireME
        </div>
      </Link>

      <div className="flex items-center gap-10">
        <Link to="/">
          <div className="text-black text-xl font-normal font-[Joan] cursor-pointer hover:text-[#857ab2] transition-colors">
            Home
          </div>
        </Link>

        <Link to="/alljobs">
          <div className="text-black text-xl font-normal font-[Joan] cursor-pointer hover:text-[#857ab2] transition-colors">
            All Jobs
          </div>
        </Link>
        {/* <div className="text-black text-xl font-normal font-[Joan] cursor-pointer hover:text-[#857ab2] transition-colors">
          Dashboard
        </div>

        <Link to="/signup">
          <button className="px-6 py-3.5 bg-[#353147] rounded-lg shadow-button-shadow hover:bg-[#857ab2] transition-colors">
            <div className="text-white text-xl font-normal font-[Joan]">
              Sign up
            </div>
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default Navabar;

import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full h-screen">
      <section className="w-full min-h-screen  flex flex-col justify-center px-6 md:px-20 py-20 ml-20 mt-20">
        <h1 className="text-[#857ab2] text-4xl md:text-5xl font-normal font-[Joan] tracking-tight max-w-xl mb-10">
          Empowering Your Job Search with HireME
        </h1>

        <p className="text-black text-xl md:text-2xl font-normal font-[Joan] tracking-wide leading-relaxed max-w-2xl mb-12">
          Discover the perfect job opportunities tailored for you. Our
          innovative ATS tracker streamlines your application process, making
          job hunting easier than ever.
        </p>
<Link to="/alljobs">


        <button className="bg-[#d3d0da] text-black text-2xl font-normal font-[Joan] px-10 py-5 rounded-[10px] w-fit hover:bg-[#c3c0ca] transition-colors">
          Explore
        </button>
</Link>
      </section>
      <img
        src="/Images/heroimg.png"
        alt="Hero"
        className="w-full h-auto z-10"
      />
    </div>
  );
};

export default HeroSection;

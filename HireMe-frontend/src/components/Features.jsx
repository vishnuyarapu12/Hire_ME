import React from "react";

const Features = () => {
  return (
    <div className="relative w-full h-[662px] bg-[#deddf7] overflow-hidden ">
      <p className="absolute w-[577px] h-[120px] top-[130px] left-[142px] [-webkit-text-stroke:1px_#000000] [font-family:'Joan-Regular',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[60px]">
        Unlock Your Hiring Potential with HireME
      </p>

      <div className="top-[303px] left-[110px] absolute w-[517px] h-[391px] rounded-[20px] overflow-hidden">
        <p className="absolute w-[405px] top-[82px] left-[39px] font-heading-desktop-h5 font-[number:var(--heading-desktop-h5-font-weight)] text-[#857ab2] text-[length:var(--heading-desktop-h5-font-size)] tracking-[var(--heading-desktop-h5-letter-spacing)] leading-[var(--heading-desktop-h5-line-height)] [font-style:var(--heading-desktop-h5-font-style)]">
          Streamline Your Recruitment Process with Innovative Features and
          Tools.
        </p>

        <p className="absolute w-[405px] top-[171px] left-[39px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#857ab2] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
          Our platform integrates seamlessly to enhance your hiring efficiency
          and candidate experience.
        </p>

        <img
          className="absolute w-[39px] h-[47px] top-2 left-[39px]"
          alt="Vector"
          src="/Images/ee.png"
        />
      </div>

      <div className="top-[297px] left-[689px] absolute w-[517px] h-[391px] rounded-[20px] overflow-hidden">
        <p className="absolute w-[453px] top-[82px] left-[39px] font-heading-desktop-h5 font-[number:var(--heading-desktop-h5-font-weight)] text-[#857ab2] text-[length:var(--heading-desktop-h5-font-size)] tracking-[var(--heading-desktop-h5-letter-spacing)] leading-[var(--heading-desktop-h5-line-height)] [font-style:var(--heading-desktop-h5-font-style)]">
          Advanced Analytics to Track Your Hiring Success and Optimize
          Strategies.
        </p>

        <img
          className="absolute w-[39px] h-[47px] top-2 left-[39px]"
          alt="Vector"
          src="/Images/ee.png"
        />

        <p className="absolute w-[405px] top-[177px] left-[39px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#857ab2] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
          Gain insights into your recruitment metrics to make informed
          decisions.
        </p>
      </div>
    </div>
  );
};

export default Features;

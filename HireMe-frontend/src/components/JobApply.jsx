import React from "react";

const Apply = () => {
  return (
    <div className="bg-[#f0f0f2] min-h-screen">
      <div className="max-w-[1440px] mx-auto py-40 px-4">
        {/* Main Job Details Section */}
        <section className="bg-[#d3d0daa3] rounded-[30px] p-8 mb-12">
          <div className="flex items-start gap-4 mb-8">
            <img
              className="w-[54px] h-[47px]"
              alt="Vector"
              src="https://c.animaapp.com/t1uFr0NL/img/vector.svg"
            />
            <div>
              <h1 className="[font-family:'Joan',Helvetica] font-normal text-[#6a628e] text-2xl mb-2">
                Fullstack Developer
              </h1>
              <p className="[font-family:'Joan',Helvetica] font-normal text-[#6a628e] text-base">
                Posted - 21/07/2024
              </p>
            </div>
          </div>

          {/* Job Details Grid */}
          <div className="grid grid-cols-3 gap-5 mb-12 ml-30">
            <div className="bg-[#C2BDD9] p-10 rounded-[30px] w-[300px] h-[120px]">
              <p className="[font-family:'Joan',Helvetica] font-normal text-[#6a628e] text-[15px] mb-2 text-center">
                Job type
              </p>
              <p className="[font-family:'Joan',Helvetica] font-normal text-[#6a628e] text-xl text-center">
                Internship
              </p>
            </div>
            <div className="bg-[#6A628E] p-10 rounded-[30px] w-[300px] h-[120px]">
              <p className="[font-family:'Joan',Helvetica] font-normal text-[#6a628e] text-[15px] mb-2 text-center text-white">
                Salary
              </p>
              <p className="[font-family:'Joan',Helvetica] font-normal text-[#6a628e] text-xl text-center text-white">
                2 LPA
              </p>
            </div>
            <div className="bg-[#C2BDD9] p-10 rounded-[30px] w-[300px] h-[120px]">
              <p className="[font-family:'Joan',Helvetica] font-normal text-[#6a628e] text-[15px] mb-2 text-center">
                Location
              </p>
              <p className="[font-family:'Joan',Helvetica] font-normal text-[#6a628e] text-xl text-center">
                Chennai
              </p>
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-8">
            <h2 className="[font-family:'Joan',Helvetica] font-normal text-[#6a628e] text-2xl mb-4">
              Description
            </h2>
            <p className="[font-family:'Joan',Helvetica] font-normal text-[#6a628e] text-base leading-6 max-w-[842px]">
              Google is, and always will be, an engineering-first company. As a
              Full Stack Developer, you will work at the intersection of
              world-class infrastructure and cutting-edge technologies. You'll
              be part of a team that tackles large-scale challenges, building
              end-to-end solutions that span across the entire tech stack—from
              crafting responsive and accessible user interfaces to developing
              robust backend systems that scale effortlessly.
            </p>
          </div>

          {/* Application Form */}
          <form className="space-y-6">
            <div>
              <label className="block [font-family:'Joan',Helvetica] text-[#6a628e] text-sm mb-2 ">
                Resume
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  name="resume"
                  className="hidden"
                  id="resume-upload"
                  accept=".pdf,.doc,.docx"
                  required
                />
                <label
                  htmlFor="resume-upload"
                  className="bg-[#f0f0f2] rounded-[30px] px-4 py-2 cursor-pointer"
                >
                  <input type=""></input>
                  <button className="[font-family:'Joan',Helvetica] font-normal text-[#6a628ec9] text-[15px] bg-[#6A628E] text-white rounded-[30px] p-2 ml-4">
                    Choose File
                  </button>
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#c7c0d9] rounded-[10px] px-8 py-3"
              >
                <span className="[font-family:'Joan',Helvetica] font-normal text-[#6a628e] text-[15px]">
                  Submit Application
                </span>
              </button>
            </div>
          </form>
        </section>

        {/* Score Section */}
        <section className="bg-[#d3d0daa3] rounded-[30px] p-8 relative overflow-hidden">
          <div className="flex justify-between">
            {/* Score Display */}
            <div className="flex-1">
              <div className="flex justify-center items-center flex-col">
                <img
                  className="w-[385px] h-[198px] mb-4"
                  alt="Group"
                  src="https://c.animaapp.com/t1uFr0NL/img/group@2x.png"
                />
                <div className="text-center">
                  <p className="[font-family:'Inter',Helvetica] text-sm mb-2">
                    SCORE
                  </p>
                  <p className="[font-family:'Inter',Helvetica] font-bold text-xl">
                    70%
                  </p>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#ff0000] rounded-[10px]" />
                <span className="[font-family:'Joan',Helvetica] font-normal text-[#6a628e] text-xl">
                  Not Matched
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#e19e2b] rounded-[10px]" />
                <span className="[font-family:'Joan',Helvetica] font-normal text-[#6a628e] text-xl">
                  Partially Matched
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#25e45b] rounded-[10px]" />
                <span className="[font-family:'Joan',Helvetica] font-normal text-[#6a628e] text-xl">
                  Matched
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Apply;
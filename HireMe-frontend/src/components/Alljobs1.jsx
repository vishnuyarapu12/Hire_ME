import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Alljobs1 = () => {
  const [jobCards, setJobCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobCards(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, []);

  const filteredJobs = jobCards.filter(
    (job) =>
      (job.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-[#f0f0f2] w-full h-full pt-[164px] pb-[200px]">
      {/* Sidebar */}
      <div className="fixed top-[164px] left-0 w-[360px] min-h-[200px] px-8 pt-4 bg-[#f0f0f2]">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by title, company, or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-6 p-3  rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6a628e]"
        />

        <h2 className="text-xl text-black font-['Joan'] mb-2">ALL JOBS OPPORTUNITIES</h2>
        {/* {["05 - 10 lpa", "10 - 20 lpa", "20 - 30 lpa"].map((range, i) => (
          <div key={i} className="flex items-center mb-2">
            <div className="w-[15px] h-[15px] bg-[#d9d9d9] rounded-full mr-6" />
            <span className="text-xl text-black font-['Joan']">{range}</span>
          </div>
        ))} */}
      </div>

      {/* Divider */}
      <div className="fixed top-[150px] left-[360px] w-px h-100 bg-[#d9d9d9]" />

      {/* Job Cards Section */}
      <div className="ml-[360px] p-10">
        {loading ? (
          <div className="flex justify-center items-center w-full h-[300px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#6a628e]"></div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-10 justify-start">
            {filteredJobs.map((job, index) => {
              const bgColor = index % 2 === 0 ? "#e0dfe5" : "#6a628e";
              const textColor = index % 2 === 0 ? "#6a628e" : "#e0dfe5";
              const buttonColor = textColor;

              return (
                <div
                  key={job.jobId}
                  className="relative w-[470px] h-[354px] rounded-xl shadow-lg p-5"
                  style={{ backgroundColor: bgColor }}
                >
                  <img
                    className="absolute w-[50px] h-[50px] top-5 left-5"
                    src={job.logoPath || job.logoPathV3 || "https://via.placeholder.com/50"}
                    alt="Company Logo"
                  />
                  <div className="absolute top-[18px] left-[77px] w-[300px] h-[51px]">
                    <div className="text-xl leading-[30px] font-['Joan']" style={{ color: textColor }}>
                      {job.companyName}
                    </div>
                    <div className="text-base leading-6 font-['Joan']" style={{ color: textColor }}>
                      {job.title}
                    </div>
                  </div>
                  <div className="absolute w-[85%] h-px left-[7.5%]" style={{ top: "116px", backgroundColor: textColor }} />
                  <img className="absolute w-[15px] h-[15px] top-[92px] left-[59px]" src="https://c.animaapp.com/edgGIYJR/img/frame-13.svg" alt="Location Icon" />
                  <div className="absolute top-[89px] left-[77px] text-base leading-6 font-['Joan']" style={{ color: textColor }}>
                    {job.location}
                  </div>
                  <div className="absolute top-[89px] right-[40px] text-base leading-6 font-['Joan']" style={{ color: textColor }}>
                    {job.salary}
                  </div>
                  <p className="absolute w-[90%] top-[155px] left-[5%] text-[18px] leading-[19.5px] font-['opan sans']" style={{ color: textColor }}>
                    {job.jobDescription?.slice(0, 160)}...
                  </p>
                  <div className="absolute w-[115px] h-[38px] bottom-[20px] right-[20px] rounded-[10px] shadow-md flex items-center justify-center" style={{ backgroundColor: buttonColor }}>
                    <div
                      onClick={() => navigate(`/apply/${job.jobId}`, {
                        state: {
                          title: job.title,
                          companyName: job.companyName,
                          location: job.location,
                          salary: job.salary,
                          experience: job.experienceText,
                          description: job.jobDescription,
                          postedOn: job.createdDate,
                          logo: job.logoPath || job.logoPathV3,
                        }
                      })}
                      className=" w-[115px] h-[38px] bottom-[20px] right-[20px] rounded-[10px] shadow-md flex items-center justify-center cursor-pointer"
                      style={{ backgroundColor: buttonColor }}
                    >
                      <span className="text-[13px] font-['Joan']" style={{ color: bgColor }}>
                        Apply Now
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Alljobs1;

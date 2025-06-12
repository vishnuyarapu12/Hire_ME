import React, { useState ,useRef,useEffect} from "react";
import { useLocation } from "react-router-dom";

const Apply = () => {
  const { state } = useLocation();
  const [resumeFile, setResumeFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [score, setScore] = useState(null);
  const [formatSuggestions, setFormatSuggestions] = useState(null); // Placeholder for format suggestions
  const [missingKeywords, setMissingKeywords] = useState(null); // Placeholder for missing keywords
  const [error, setError] = useState(null);

  if (!state) {
    return (
      <div className="text-center text-gray-600 p-10">
        ❌ Job data missing. Please go back and click Apply again.
      </div>
    );
  }

  const {
    title,
    companyName,
    location,
    salary,
    experience,
    description,
    postedOn,
    logo,
  } = state;

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    if (!resumeFile) {
      setError("Please upload your resume.");
      setSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("job_description", description);

    try {
      // Placeholder API call
      const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data); // Debugging line to check the response
      setScore(data.atsScore || 0); // fallback to 70%
      setFormatSuggestions(data.formatSuggestions || 0); // Placeholder for format suggestions
      setMissingKeywords(data.missingKeywords || 0); // Placeholder for missing keywords
    } catch (err) {
      setError("Failed to analyze resume.");
    } finally {
      setSubmitting(false);
    }
  };

  const [displayScore, setDisplayScore] = useState(0);
  const [currentColor, setCurrentColor] = useState("#ff0000");
  const progressRef = useRef(null);

  useEffect(() => {
    let start = null;
    let animationFrame;
    const duration = 1500; // ms

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const currentScore = Math.floor(progress * score);

      setDisplayScore(currentScore);

      // Update color dynamically
      const color =
        currentScore <= 30
          ? "#ff0000"
          : currentScore < 55
          ? "#e19e2b"
          : "#25e45b";
      setCurrentColor(color);

      if (progressRef.current) {
        const offset = 283 - (currentScore / 100) * 283;
        progressRef.current.setAttribute("stroke-dashoffset", offset);
        progressRef.current.setAttribute("stroke", color);
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [score]);

  return (
    <div className="bg-[#f0f0f2] min-h-screen pt-20">
      <div className="max-w-[1440px] mx-auto py-20 px-4">
        <section className="bg-[#d3d0daa3] rounded-[30px] p-8 mb-12">
          <div className="flex items-start gap-4 mb-8">
            <img className="w-[54px] h-[47px]" src={logo || "https://via.placeholder.com/54"} alt="Logo" />
            <div className="mb-4 ">
              <h1 className="text-[#6a628e] text-2xl mb-2">{companyName}</h1>

              <p className="text-[#6a628e] text-base">Posted - {postedOn?.split(" ")[0]}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 mb-12 ml-30">
            <div className="bg-[#C2BDD9] p-10 rounded-[30px] text-center">
              <p className="text-[#6a628e] text-[15px] mb-2">Experience</p>
              <p className="text-[#6a628e] text-xl">{experience}</p>
            </div>
            <div className="bg-[#6A628E] p-10 rounded-[30px] text-center text-white">
              <p className="text-[15px] mb-2">Salary</p>
              <p className="text-xl">{salary}</p>
            </div>
            <div className="bg-[#C2BDD9] p-10 rounded-[30px] text-center">
              <p className="text-[#6a628e] text-[15px] mb-2">Location</p>
              <p className="text-[#6a628e] text-xl">{location}</p>
            </div>
          </div>
        
          <div className="mb-8">
            <h2 className="text-[#6a628e] text-2xl mb-4">Role: </h2>
            <p className="text-[#6a628e] text-base leading-6 max-w-[842px] whitespace-pre-line">
              {title?.replace(/<br\s*\/?>/gi, "\n")}
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-[#6a628e] text-2xl mb-4">Description</h2>
            <p className="text-[#6a628e] text-base leading-6 max-w-[842px] whitespace-pre-line">
              {description?.replace(/<br\s*\/?>/gi, "\n")}
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[#6a628e] text-sm mb-2 font-semibold">Upload Resume</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="block w-100 text-sm text-gray-600 bg-[#f0f0f2] rounded-[10px] px-4 py-2"
              />
            </div>
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#c7c0d9] rounded-[10px] px-8 py-3"
                disabled={submitting}
              >
                <span className="text-[#6a628e] text-[15px]">
                  {submitting ? "Submitting..." : "Submit Application"}
                </span>
              </button>
            </div>
          </form>
        </section>

        {score !== null && (
          <div>
            <section className="bg-[#d3d0daa3] rounded-[30px] p-8">
              <div className="flex justify-between items-center">
                <div className="flex-1 text-center">
                <div className="relative w-[300px] h-[150px] mx-auto mb-4  rounded-b-[150px] overflow-hidden  ">
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <path
          d="M10,100 A90,90 0 0,1 190,100"
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="20"
        />
        <path
          ref={progressRef}
          d="M10,100 A90,90 0 0,1 190,100"
          fill="none"
          stroke={currentColor}
          strokeWidth="20"
          strokeDasharray="283"
          strokeDashoffset="283"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-[30%] text-center">
      </div>
    </div>

                  <p className="text-sm">Your Resume Match Score</p>
                  <p className="text-4xl font-bold text-[#6a628e]">{displayScore}%</p>

                </div>
                <div className="flex flex-col gap-4">
                  <LegendItem color="#ff0000" label="Not Matched" />
                  <LegendItem color="#e19e2b" label="Partially Matched" />
                  <LegendItem color="#25e45b" label="Matched" />
                </div>
              </div>
            </section>
            <section>

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[#6a628e] text-3xl mt-3 ml-4">Analysis Results</h2>
              </div>
              <div className="flex flex-col gap-4 bg-[#d3d0daa3] rounded-[30px] p-8">
                <p className="text-[#6a628e] text-base">Format Suggestions: {formatSuggestions}</p>
                <p className="text-[#6a628e] text-base">Missing Keywords: {missingKeywords}</p>
              </div>
            </section>
          </div>

        )}
      </div>
    </div>
  );
};

const LegendItem = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <div className="w-5 h-5" style={{ backgroundColor: color, borderRadius: '10px' }} />
    <span className="text-[#6a628e] text-xl">{label}</span>
  </div>
);

export default Apply;

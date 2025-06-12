import React from "react";

const HowItWorks = () => {
  return (
    <div className="w-full px-6 py-10 bg-white">
      <h2 className="text-5xl text-[#906552] font-normal mb-12 [text-shadow:0px_4px_4px_#00000040]">
        How It Works
      </h2>

      <div className="flex flex-wrap justify-between gap-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center max-w-sm">
          <img
            className="w-10 h-10 mb-4"
            alt="Sign Up Icon"
            src="/Images/sign.png"
          />
          <h3 className="text-[32px] text-[#916652] mb-2 [font-family:'Joan-Regular',Helvetica]">
            Sign up
          </h3>
          <p className="text-xl text-[#916652] leading-[30px]">
            Create your account to get started.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center max-w-sm">
          <img
            className="w-10 h-10 mb-4"
            alt="Create Job Post Icon"
            src="/Images/create.png"
          />
          <h3 className="text-[32px] text-[#916652] mb-2 [font-family:'Joan-Regular',Helvetica]">
            Create your job post
          </h3>
          <p className="text-xl text-[#916652] leading-[30px]">
            Answer the custom questions for your job post.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center max-w-sm">
          <img
            className="w-10 h-10 mb-4"
            alt="Add Resume Icon"
            src="/Images/addR.png"
          />
          <h3 className="text-[32px] text-[#916652] mb-2 [font-family:'Joan-Regular',Helvetica]">
            Add Resume
          </h3>
          <p className="text-xl text-[#916652] leading-[30px]">
            Upload your resume for employers.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center text-center max-w-sm">
          <img
            className="w-10 h-10 mb-4"
            alt="Track Jobs Icon"
            src="/Images/track.png"
          />
          <h3 className="text-[32px] text-[#916652] mb-2 [font-family:'Joan-Regular',Helvetica]">
            Track Jobs
          </h3>
          <p className="text-xl text-[#916652] leading-[30px]">
            Monitor the status of your applications easily.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

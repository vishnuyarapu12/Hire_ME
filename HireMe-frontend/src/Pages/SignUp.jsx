import React from "react";

export const Signup = () => {
  return (
    <div className="flex w-full h-screen bg-white">
      {/* Left Side - GIF Animation */}
      <div className="w-1/2 h-full flex flex-col items-center justify-center relative">
        <img
          src="/Images/typing-gif-14.gif"
          alt="Typing Animation"
          className="w-[1194.67px] h-[896px] object-cover rounded-r-full"
        />
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="relative w-[685px] h-[948px] rounded-[100px] overflow-hidden bg-white">
          <div className="absolute h-[54px] top-[120px] left-[218px] [font-family:'Joan-Regular',Helvetica] font-normal text-[#857ab2] text-4xl tracking-[0] leading-[54px] whitespace-nowrap">
            Create Account
          </div>

          <div className="absolute w-[186px] h-[89px] top-[200px] left-60">
            <button className="absolute w-[186px] h-[89px] top-0 left-0 hover:opacity-80 transition-opacity">
              <img
                className="absolute w-[60px] h-[60px] top-[9px] left-[21px]"
                alt="Google"
                src="/Images/google.jpg"
              />
            </button>

            <button className="absolute w-[74px] h-[71px] top-[9px] left-[103px] hover:opacity-80 transition-opacity">
              <img
                className="absolute w-[60px] h-[60px] top-0 left-0"
                alt="LinkedIn"
                src="/Images/linkedln.jpg"
              />
            </button>
          </div>

          {/* Name Input */}
          <div className="absolute w-[566px] h-[84px] top-[320px] left-[60px] bg-[#efeff0] rounded-[20px] border border-solid border-[#857ab2] hover:border-[#6b5f9d] transition-colors">
            <input
              placeholder="Name"
              className="absolute top-[42px] left-[26px] w-[90%] bg-transparent border-none outline-none text-[#333] text-lg [font-family:'Joan-Regular',Helvetica] placeholder:text-[#857ab28f]"
            />
          </div>

          {/* Email Input */}
          <div className="absolute w-[566px] h-[84px] top-[420px] left-[60px] bg-[#efeff0] rounded-[20px] border border-solid border-[#857ab2] hover:border-[#6b5f9d] transition-colors">
            <input
              placeholder="Email"
              className="absolute top-[42px] left-[26px] w-[90%] bg-transparent border-none outline-none text-[#333] text-lg [font-family:'Joan-Regular',Helvetica] placeholder:text-[#857ab28f]"
            />
          </div>

          {/* Password Input */}
          <div className="absolute w-[566px] h-[84px] top-[520px] left-[60px] bg-[#efeff0] rounded-[20px] border border-solid border-[#857ab2] hover:border-[#6b5f9d] transition-colors">
            <input
              placeholder="Password"
              className="absolute top-[42px] left-[26px] w-[90%] bg-transparent border-none outline-none text-[#333] text-lg [font-family:'Joan-Regular',Helvetica] placeholder:text-[#857ab28f]"
            />
          </div>

          {/* Sign Up Button */}
          <button className="absolute w-[225px] h-[75px] top-[640px] left-[239px] bg-[#D3D0DA] rounded-[30px] border border-solid border-[#857ab2] hover:bg-[#857ab2] hover:text-white transition-all duration-300">
            <div className="top-3 left-[57px] absolute h-12 [font-family:'Joan-Regular',Helvetica] font-normal text-[32px] tracking-[0] leading-[48px] whitespace-nowrap text-white">
              Sign Up
            </div>
          </button>

          {/* Already Have an Account Text */}
          <p className="absolute h-9 top-[740px] left-[164px] [font-family:'Joan-Regular',Helvetica] font-normal text-[#857ab28f] text-2xl tracking-[0] leading-9 whitespace-nowrap">
            Already have an account?
          </p>

          {/* Sign In Text */}
          <button className="absolute top-[731px] left-[450px] text-[#857ab2ab] h-12 [font-family:'Joan-Regular',Helvetica] font-normal text-[32px] tracking-[0] leading-[48px] whitespace-nowrap hover:text-[#857ab2] transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

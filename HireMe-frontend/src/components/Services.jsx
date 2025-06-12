import React from "react";

const Services = () => {
  return (
    <section className="bg-[#d9a577cf] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
        <h2 className="text-5xl font-normal font-serif text-black leading-tight">
          Explore Our Comprehensive Service Offerings
        </h2>
        <p className="text-lg text-black font-serif">
          We provide a range of services designed to streamline your hiring
          process. From job postings to applicant tracking, we&apos;ve got you
          covered.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {/* Service Card 1 */}
        <div className="flex flex-col items-center space-y-6">
          <img
            className="w-full h-60 object-cover rounded-xl"
            alt="Job Posting"
            src="https://c.animaapp.com/2aKqCknp/img/placeholder-image@2x.png"
          />
          <h3 className="text-2xl font-serif text-center text-black">
            Job Posting and Management Solutions
          </h3>
          <p className="text-center text-black font-serif">
            Easily create and manage job listings.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="flex flex-col items-center space-y-6">
          <img
            className="w-full h-60 object-cover rounded-xl"
            alt="Applicant Tracking"
            src="https://c.animaapp.com/2aKqCknp/img/placeholder-image-1@2x.png"
          />
          <h3 className="text-2xl font-serif text-center text-black">
            Advanced Applicant Tracking System
          </h3>
          <p className="text-center text-black font-serif">
            Track candidates effortlessly through our ATS.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="flex flex-col items-center space-y-6">
          <img
            className="w-full h-60 object-cover rounded-xl"
            alt="Data Insights"
            src="https://c.animaapp.com/2aKqCknp/img/placeholder-image-2@2x.png"
          />
          <h3 className="text-2xl font-serif text-center text-black">
            Data-Driven Insights and Reporting
          </h3>
          <p className="text-center text-black font-serif">
            Gain valuable insights to enhance your recruitment strategy.
          </p>
        </div>
      </div>

      <div className="flex justify-center space-x-10">
        <button className="text-2xl font-serif text-black hover:underline">
          Learn More
        </button>
        <button className="text-2xl font-serif text-black hover:underline">
          Sign Up
        </button>
        <img
          className="w-4 h-4 mt-2"
          alt="Arrow Icon"
          src="https://c.animaapp.com/2aKqCknp/img/icon.svg"
        />
      </div>
    </section>
  );
};

export default Services;

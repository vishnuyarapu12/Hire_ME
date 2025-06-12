import React from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Services from "../components/Services";
// import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <>
      <HeroSection />

      <Features />
      <Services />
      {/* <Testimonials /> */}
      <HowItWorks />
    </>
  );
};

export default Home;

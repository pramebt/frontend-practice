import React from "react";
import Button from "../components/layout/Button";
import Looplogo from "../components/common/Looplogo";
import ServicesBox from "../components/common/ServicesBox";

const Homepage = () => {
  return (
    <div className="mt-25 px-5 md:px-20 gap-10 ">
      {/* Left: text content */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full">
          <h1 className="text-[60px] font-semibold">
            Navigating the digital landscape for success
          </h1>
          {/* Right: illustration */}
          <div className="md:hidden flex items-center justify-center">
            <img
              src="/assets/images/Illustration.svg"
              alt="Illustration"
              className=""
            />
          </div>

          <p className="text-[20px] leading-relaxed mt-5">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <div className="mt-5 flex justify-center md:justify-start">
            <Button className="rounded-md py-4 px-8">
              Book a consultation
            </Button>
          </div>
        </div>

        {/* Right: illustration */}
        <div className="md:w-1/2  hidden md:flex items-center justify-center">
          <img
            src="/assets/images/Illustration.svg"
            alt="Illustration"
            className=""
          />
        </div>
      </div>

      {/* logo loop */}
      <div className="mt-10">
        <Looplogo />
      </div>

      <div className="mt-20 flex flex-col items-center justify-center 
        md:flex-row md:items-start md:justify-start gap-10">
        <h2 className="font-semibold text-[28px] text-center bg-[#B9FF66] w-35 md:px-2 rounded-md">
          Services
        </h2>
        <p className="md:text-start text-center md:w-1/2 w-auto">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="px-10 z-0">
        <ServicesBox/>
      </div>
      
    </div>
  );
};

export default Homepage;

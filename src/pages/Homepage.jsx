import React from "react";
import Button from "../components/layout/Button";
import Looplogo from "../components/common/Looplogo";

const Homepage = () => {
  return (
    <div className="mt-20 px-5 md:px-10 gap-5 ">
      {/* Left: text content */}
      <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 w-full">
        <h1 className="text-[48px] font-semibold">
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

        <p className="text-base leading-relaxed mt-5">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>

        <div className="mt-5 flex justify-center md:justify-start">
          <Button>Book a consultation</Button>
        </div>
      </div>

      {/* Right: illustration */}
      <div className="md:w-1/2 w-full hidden md:flex items-center justify-center">
        <img
          src="/assets/images/Illustration.svg"
          alt="Illustration"
          className=""
        />
      </div>
      </div>
      <div className="mt-10">
        <Looplogo />
      </div>
      

    </div>
  );
};

export default Homepage;

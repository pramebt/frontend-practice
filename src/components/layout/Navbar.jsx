import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handles the opening and closing of the nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white flex justify-between fixed pt-5 px-5 md:px-20  w-full h-20 z-10">
      <a href="/" className="flex-shrink-0">
        <img src="/assets/logo/logo-black.svg" alt="" className="w-50" />
      </a>

      <ul className="hidden md:flex flex-row gap-10 items-center">
        <li>
          <a href="/about-us" >About us</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/use-cases">Use Cases</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      <Button variant="secondary">Request a quote</Button>
          
        
        </ul>

        {/* Responsive Menu for Mobile */}
      <div
        className={`absolute top-16 right-0 bg-black text-white shadow-lg rounded-lg p-5 md:hidden transition-transform duration-300 ease-in-out 
                ${isOpen ? "translate-x-0" : "translate-x-full"} z-40`}
      >
        <ul className="space-y-4">
        <li>
          <a href="/about-us">About us</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/use-cases">Use Cases</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        </ul>
      </div>
        
      
      {/* Hamburger Button */}
      <button
          onClick={handleClick}
          className="md:hidden flex flex-col justify-center items-center mb-5"
        >
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                        h-0.5 w-5 rounded-sm ${
                          isOpen
                            ? "rotate-45 translate-y-1"
                            : "-translate-y-0.5"
                        }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                        h-0.5 w-5 rounded-sm my-0.5 ${
                          isOpen ? "opacity-0" : "opacity-100"
                        }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                        h-0.5 w-5 rounded-sm ${
                          isOpen
                            ? "-rotate-45 -translate-y-1"
                            : "translate-y-0.5"
                        }`}
          ></span>
        </button>
    </nav>
  );
};

export default Navbar;

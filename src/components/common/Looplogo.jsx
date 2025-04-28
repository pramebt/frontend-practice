import React from "react";

const logoList = [
  { src: "/assets/logo/amazon-logo.svg", alt: "Amazon" },
  { src: "/assets/logo/dribbble-logo.svg", alt: "Dribbble" },
  { src: "/assets/logo/hubspot-logo.svg", alt: "HubSpot" },
  { src: "/assets/logo/notion-logo.svg", alt: "Notion" },
  { src: "/assets/logo/netflix-logo.svg", alt: "Netflix" },
  { src: "/assets/logo/zoom-logo.svg", alt: "Zoom" },
];

const LoopLogo = () => {
  
  return (
    <div className="overflow-hidden py-8">
      <div
        className="flex items-center  gap-6 sm:gap-10 md:gap-20  
        animate-marquee py-8 
        "
      >
        {[...logoList, ...logoList].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="
              flex-shrink-0 h-6 sm:h-8        
              md:h-10 w-auto opacity-80 hover:opacity-100 transition
            "
          />
        ))}
        
      </div>
    </div>
  );
};

export default LoopLogo;

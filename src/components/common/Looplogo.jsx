import React from 'react';

const logoList = [
  { src: '/assets/logo/amazon-logo.svg',   alt: 'Amazon'   },
  { src: '/assets/logo/dribbble-logo.svg', alt: 'Dribbble' },
  { src: '/assets/logo/hubspot-logo.svg',  alt: 'HubSpot'  },
  { src: '/assets/logo/notion-logo.svg',   alt: 'Notion'   },
  { src: '/assets/logo/netflix-logo.svg',  alt: 'Netflix'  },
  { src: '/assets/logo/zoom-logo.svg',     alt: 'Zoom'     },
];

const LoopLogo = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-15 py-8 ">
      {logoList.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}className="h-8 w-auto opacity-80 hover:opacity-100 transition"
          
        />
      ))}
    </div>
  );
};

export default LoopLogo;

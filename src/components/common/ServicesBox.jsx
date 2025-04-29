
import React from "react";
import LinkButton from "../layout/LinkButton";

const ServicesBox = () => {
  const servicesBoxArrays = [
    {
      title: "Search engine ",
      subtitle: "optimization",
      image: "/assets/images/search-engine.svg",
      variant:"primary",
    },
    {
      title: "Pay-per-click",
      subtitle: "advertising",
      image: "/assets/images/click-advertising.svg",
      variant:"secondary",
    },
    {
      title: "Social Media",
      subtitle: "Marketing",
      image: "/assets/images/socialmedia.svg",
    },
    {
      title: "Email",
      subtitle: "Marketing",
      image: "/assets/images/email-sending.svg",
    },
    {
      title: "Contnet",
      subtitle: "Creation",
      image: "/assets/images/content-creation.svg",
    },
    {
      title: "Analytics and",
      subtitle: "Tracking",
      image: "/assets/images/analytics.svg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10  gap-y-10 my-15">
      {servicesBoxArrays.map((service, index) => (
        <div key={index} className="flex justify-center">
          <div className="bg-gray-400 w-full h-[330px] border rounded-2xl flex flex-row">
            <div className="w-1/2 flex flex-col">
              <h2 className="bg-[#B9FF66] mt-10 mx-10 w-fit p-1 rounded-md text-start font-semibold">
                {service.title}
              </h2>
              <h2 className="bg-[#B9FF66]  mx-10 w-fit p-1 rounded-md text-start font-semibold">
                {service.subtitle}
              </h2>
              <div className="w-40 h-40 border">
               <LinkButton variant={service.variant} />
               </div>
            </div>
            <div className="border flex w-1/2 p-10">
              
              <img
                src={service.image}
                alt={`${service.title} ${service.subtitle}`}
                className="aspect-square bg-cover bg-center bg-no-repea w-full h-auto"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesBox;

import { div } from 'framer-motion/client';
import React from 'react'

const ServicesBox = () => {
  const servicesBoxArrays = [
    {
      title: "Age Calculator ",
      subtitle: " Age test",
      image: "/assets/bg/Age-cal.png",
    },
    {
      title: "Todolist",
      subtitle: "Todotest",
      image: "/assets/bg/mini-todolist.png",
    },
    {
      title: "Ticket Ganerate ",
      subtitle: "Todotest",
      image: "/assets/bg/Editing.png",
    },
    {
      title: "Ticket Ganerate ",
      subtitle: "Todotest",
      image: "/assets/bg/Editing.png",
    },
    {
      title: "Ticket Ganerate ",
      subtitle: "Todotest",
      image: "/assets/bg/Editing.png",
    },
    {
      title: "Ticket Ganerate ",
      subtitle: "Todotest",
      image: "/assets/bg/Editing.png",
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-x-5 gap-y-5 my-15">
      {servicesBoxArrays.map((service, index) => (
        <div key={index} className='flex justify-center'>
        <div className="w-[600px] h-[310px] border rounded-2xl">
          <h2 className="bg-[#B9FF66] mt-10 mx-10 w-fit p-1 rounded-md text-start font-semibold">
            {service.title}
          </h2>
          <h2 className="bg-[#B9FF66]  mx-10 w-fit p-1 rounded-md text-start font-semibold">
            {service.subtitle}
          </h2>
          <div className="mt-2">
            
          </div>
        </div>
        </div>
      ))}
    </div>
  )
}

export default ServicesBox
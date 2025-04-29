// LinkButton.jsx

import React from 'react';
import whitelink from "/assets/icons/white-link.svg"
import whitetextblack from "/assets/icons/white-text-black.svg"
const variantConfig = {
  primary: {
    styles:   "text-white w-full",
    icon:     whitelink,
    iconSize: "w-8 h-8",  
  },
  secondary: {
    styles:   "text-black w-full",
    icon:     whitetextblack,
    iconSize: "w-8 h-8",  
  },
  tertiary: {
    styles:   "bg-[#B9FF66] text-black",
    icon:     "greenLink",
    iconSize: "w-8 h-8",  
  },
};

const LinkButton = ({
  variant = 'primary',   // กำหนดค่าเริ่มต้นของ variant
  className = '',        // กำหนดค่าเริ่มต้นของ className (ว่าง)
  children,              // สาระสำคัญภายในปุ่ม (ข้อความหรือไอคอน)
  ...props               // รับ prop อื่นๆ เช่น onClick, disabled ฯลฯ
}) => {
 
  

  const { styles, icon, iconSize } = variantConfig[variant] || variantConfig.primary;
  const combinedClasses = [ styles, className]
    .filter(Boolean)
    .join(" ");

  // คืนค่า JSX ปุ่มพร้อม props อื่นๆ
  return (
    <button
      className={combinedClasses}
      {...props}  // spread prop เพิ่มเติม เช่น onClick, type
    >
      <img src={icon} alt="" className={`${iconSize} mr-2`} />
      {children}
    </button>
  );
};

export default LinkButton;
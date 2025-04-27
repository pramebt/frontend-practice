// Button.jsx

import React from 'react';

const Button = ({
  variant = 'primary',   // กำหนดค่าเริ่มต้นของ variant
  className = '',        // กำหนดค่าเริ่มต้นของ className (ว่าง)
  children,              // สาระสำคัญภายในปุ่ม (ข้อความหรือไอคอน)
  ...props               // รับ prop อื่นๆ เช่น onClick, disabled ฯลฯ
}) => {
 
  const baseStyles = 'px-4 py-2 rounded ';

  // variantStyles: สไตล์เพิ่มเติมตาม variant ที่เลือก
  let variantStyles = '';
  switch (variant) {
    case 'secondary':
      variantStyles = 'border  text-black ';
      break;
    case 'tertiary':
      variantStyles = 'bg-[#B9FF66] hover:bg-red-600 text-black ';
      break;
    default:
      // ค่าเริ่มต้น (primary)
      variantStyles = 'bg-[#191A23] hover:bg-[#B9FF66] text-white hover:text-black';
  }

  // รวมคลาสทั้งหมด: baseStyles + variantStyles + className
  // .trim() เพื่อลบช่องว่างเกินปลายข้อความ
  const combinedClasses = `${baseStyles}${variantStyles}${className}`.trim();

  // คืนค่า JSX ปุ่มพร้อม props อื่นๆ
  return (
    <button
      className={combinedClasses}
      {...props}  // spread prop เพิ่มเติม เช่น onClick, type
    >
      {children}
    </button>
  );
};

export default Button;

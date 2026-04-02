import React from "react";
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ActionCard = ({
  icon,
  bgIcon,
  title,
  description,
  buttonText,
  path,
  dark = false,
}) => {
       const navigate = useNavigate()

  return (
  <div className="relative group cursor-pointer overflow-hidden rounded-3xl min-h-50 md:min-h-50 bg-slate-50 border border-slate-200 hover:border-primary/50 transition-all duration-500">
  
  {/* Background Icon */}
  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
    {bgIcon}
  </div>

  {/* Content */}
  <div className="relative h-full flex flex-col justify-end p-6 md:p-8 z-10" onClick={()=>navigate(path)}>
    
    {/* Top Icon */}
    <div
      className={`mb-4 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ${
        dark
          ? "bg-slate-900 shadow-slate-900/10"
          : "bg-primary shadow-primary/30"
      }`}
    >
      {icon}
    </div>

    {/* Title */}
    <h3 className="text-xl md:text-2xl font-[PlusJakartaSans] mb-2 text-slate-900">
      {title}
    </h3>

    {/* Description */}
    <p className="text-sm text-slate-500 mb-5 h-[48px] font-[PlusJakartaSans-Medium]">
      {description}
    </p>

    {/* Button */}
    <div
      className={`font-[PlusJakartaSans] flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-widest text-xs ${
        dark ? "text-slate-900" : "text-primary"
      }`}
    >
      {buttonText}
      <MdArrowForward />
    </div>

  </div>
</div>
  );
};

export default ActionCard;
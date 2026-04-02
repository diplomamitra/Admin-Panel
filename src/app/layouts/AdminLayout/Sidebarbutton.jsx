import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const SidebarButton = ({ onClick, collapsed }) => {
  return (
    <div
      onClick={onClick}
      className="w-10 h-10 rounded-xl bg-white border border-[#D9D9D9] flex items-center justify-center cursor-pointer active:scale-95 transition"
    >
      <IoIosArrowBack
        className={`text-xl text-gray-700 transition-transform duration-300 ${
          collapsed ? "rotate-180" : ""
        }`}
      />
    </div>
  );
};

export default SidebarButton;
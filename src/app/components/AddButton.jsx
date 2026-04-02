import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AddButton = ({ BtnTitle, Path }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(Path)}
      className=" cursor-pointer flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-[PlusJakartaSans-Medium] shadow-sm hover:shadow-md active:scale-95 transition-all"
    >
      <FiPlusCircle size={18} />
      {BtnTitle}
    </button>
  );
};

export default AddButton;

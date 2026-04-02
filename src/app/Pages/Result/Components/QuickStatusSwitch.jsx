import React, { useState } from "react";
import { MdCheckCircle } from "react-icons/md";

const QuickStatusSwitch = () => {
  const [isReleased, setIsReleased] = useState(true);

  const handleChange = (value) => {
    setIsReleased(value);

    // 👉 Yaha API call karega (update result status)
    console.log("Status:", value ? "Released" : "Not Released");
  };

  return (
    <section className="bg-white p-6 rounded-2xl border border-slate-200">
      {/* Title */}
      <h3 className="text-slate-900 font-[PlusJakartaSans] text-lg mb-4">
        Quick Status Switch
      </h3>

      {/* Toggle */}
      <div className="flex p-1.5 bg-slate-100 gap-2 rounded-2xl">
        {/* NOT RELEASED */}
        <button
          onClick={() => handleChange(false)}
          className={`flex-1 py-3 px-4 text-sm font-[PlusJakartaSans-Medium] transition-all duration-200 rounded-2xl cursor-pointer ${
            !isReleased
              ? "bg-white text-slate-800 rounded-2xl border border-slate-200"
              : "text-slate-500 hover:text-slate-700 rounded-2xl"
          }`}
        >
          Result Not Released
        </button>

        {/* RELEASED */}
        <button
          onClick={() => handleChange(true)}
          className={`flex-1 py-3 px-4 rounded-2xl text-sm font-[PlusJakartaSans-Medium] flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
            isReleased
              ? "bg-white text-primary border border-slate-200 rounded-2xl" 
              : "text-slate-500 hover:text-slate-700 rounded-2xl"
          }`}
        >
          <MdCheckCircle
            className={`w-4 h-4 ${isReleased ? "scale-110" : ""}`}
          />
          Result Released
        </button>
      </div>

      {/* Info */}
      <p className="text-[11px] text-slate-400 mt-3 text-center font-[PlusJakartaSans-Medium]">
        Switching status will notify all students.
      </p>
    </section>
  );
};

export default QuickStatusSwitch;

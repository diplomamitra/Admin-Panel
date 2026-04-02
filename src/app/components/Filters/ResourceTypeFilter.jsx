import React, { useState, useEffect } from "react";
import { FiFilter, FiChevronDown } from "react-icons/fi";

const RESOURCE_TYPES = [
  { label: "All Types", value: "all" },
  { label: "Papers", value: "paper" },
  { label: "Notes", value: "notes" },
  { label: "Important Questions", value: "important_questions" },
];

const ResourceTypeFilter = ({ onChange, defaultValue = "all" }) => {
  const [selected, setSelected] = useState(RESOURCE_TYPES[0]);
  const [open, setOpen] = useState(false);

  // ✅ Set default value
  useEffect(() => {
    const found = RESOURCE_TYPES.find(
      (item) => item.value === defaultValue
    );
    if (found) {
      setSelected(found);
      onChange && onChange(found.value);
    }
  }, [defaultValue]);

  const handleSelect = (item) => {
    setSelected(item);
    setOpen(false);
    onChange && onChange(item.value);
  };

  return (
    <div className="relative w-65">
      
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition"
      >
        <div className="flex items-center gap-2 text-slate-600">
          <FiFilter className="text-lg" />
          <span className="text-sm font-[PlusJakartaSans-Medium]">
            {selected.label}
          </span>
        </div>

        <FiChevronDown
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="cursor-pointer absolute mt-2 w-full bg-white border border-slate-200 rounded-2xl shadow-lg z-50 overflow-hidden">
          {RESOURCE_TYPES.map((item) => (
            <button
              key={item.value}
              onClick={() => handleSelect(item)}
              className="cursor-pointer  w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition flex items-center justify-between font-[PlusJakartaSans-Medium] border-b border-slate-50"
            >
              <span>{item.label}</span>

              {selected.value === item.value && (
                <span className="text-indigo-600 text-xs cursor-pointer ">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResourceTypeFilter;
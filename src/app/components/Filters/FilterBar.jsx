import React, { useState } from "react";
import { FiChevronDown, FiCheck, FiRefreshCw } from "react-icons/fi";
import {
  HiOutlineBuildingOffice2,
  HiOutlineCalendarDays,
  HiOutlineCheckBadge,
} from "react-icons/hi2";

// Reusable Custom Select
const CustomSelect = ({ label, icon: Icon, options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-col gap-1">
      <span className="text-[11px] text-gray-400 uppercase tracking-wider font-[PlusJakartaSans]">
        {label}
      </span>

      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-2.5 rounded-xl min-w-[180px] transition"
      >
        <Icon className="w-4 h-4 text-gray-500" />
        <span className="text-sm text-gray-700 flex-1 text-left font-[PlusJakartaSans-Medium]">
          {value.label}
        </span>
        <FiChevronDown
          className={`w-4 h-4 text-gray-400 transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden font-[PlusJakartaSans-Medium]">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="flex items-center justify-between px-4 py-2.5 text-sm hover:bg-gray-100 cursor-pointer"
            >
              <span>{opt.label}</span>
              {value.value === opt.value && (
                <FiCheck className="text-blue-600" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function FilterBar() {
  // 🔥 DATA (future me API se aayega)
  const departmentOptions = [
    { label: "All Departments", value: "all" },
    { label: "Computer Engineering", value: "ce" },
    { label: "Mechanical", value: "me" },
  ];

  const semesterOptions = [
    { label: "Fall 2024", value: "fall-2024" },
    { label: "Spring 2025", value: "spring-2025" },
  ];

  const statusOptions = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

  // 🔥 STATE
  const [filters, setFilters] = useState({
    department: departmentOptions[0],
    semester: semesterOptions[0],
    status: statusOptions[0],
  });

  const handleChange = (key, option) => {
    setFilters((prev) => ({
      ...prev,
      [key]: option,
    }));
  };

  const handleReset = () => {
    setFilters({
      department: departmentOptions[0],
      semester: semesterOptions[0],
      status: statusOptions[0],
    });
  };

  const handleApply = () => {
    console.log("Filters Applied:", filters);

    // 👉 yaha tu API call karega
    // example: /api/resources?dept=ce&sem=fall-2024&status=active
  };

  return (
    <div className="w-full max-w-full">
      <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 flex flex-wrap items-center gap-6">
        {/* Dropdowns */}
        <div className="flex flex-wrap items-center gap-6 flex-1">
          <CustomSelect
            label="Department"
            icon={HiOutlineBuildingOffice2}
            options={departmentOptions}
            value={filters.department}
            onChange={(val) => handleChange("department", val)}
          />

          <CustomSelect
            label="Semester"
            icon={HiOutlineCalendarDays}
            options={semesterOptions}
            value={filters.semester}
            onChange={(val) => handleChange("semester", val)}
          />

          <CustomSelect
            label="Status"
            icon={HiOutlineCheckBadge}
            options={statusOptions}
            value={filters.status}
            onChange={(val) => handleChange("status", val)}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 ml-auto font-[PlusJakartaSans-Medium]">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm"
          >
            <FiRefreshCw className="w-4 h-4" />
            Reset
          </button>

          <button
            onClick={handleApply}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm shadow-sm transition active:scale-95"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}

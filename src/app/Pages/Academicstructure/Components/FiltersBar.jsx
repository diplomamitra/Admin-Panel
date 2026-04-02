import React from "react";
import { MdFilterList, MdDownload, MdPrint } from "react-icons/md";

const FiltersBar = ({
  department = "All Departments",
  status = "All Statuses",
  onDepartmentChange,
  onStatusChange,
  onClear,
  onDownload,
  onPrint,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
      {/* LEFT SIDE */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Department */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-[PlusJakartaSans] text-slate-400 uppercase tracking-widest pl-1 ">
            Department
          </label>
          <select
            value={department}
            onChange={(e) => onDepartmentChange?.(e.target.value)}
            className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-[PlusJakartaSans-Medium] text-slate-700 min-w-[200px] focus:ring-2 focus:ring-primary/10 outline-none"
          >
            <option>All Departments</option>
            <option>Computer Engineering</option>
            <option>Information Systems</option>
            <option>Data Science</option>
            <option>Human-Computer Interaction</option>
          </select>
        </div>

        {/* Status */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => onStatusChange?.(e.target.value)}
            className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-[PlusJakartaSans-Medium] text-slate-700 min-w-[160px] focus:ring-2 focus:ring-primary/10 outline-none"
          >
            <option>All Statuses</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Clear Button */}
        <button
          onClick={onClear}
          className="mt-auto mb-0.5 px-4 py-2.5 text-primary hover:bg-primary/5 rounded-lg transition-colors text-sm font-[PlusJakartaSans-Medium] flex items-center gap-2"
        >
          <MdFilterList className="text-lg" />
          Clear Filters
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-2 mt-auto">
        <button
          onClick={onDownload}
          className="p-2.5 text-lg bg-white text-slate-600 rounded-lg hover:bg-surface-container hover:text-slate-900 transition-all"
        >
          <MdDownload />
        </button>

        <button
          onClick={onPrint}
          className="p-2.5 bg-white text-slate-600 rounded-lg hover:bg-surface-container hover:text-slate-900 transition-all"
        >
          <MdPrint />
        </button>
      </div>
    </div>
  );
};

export default FiltersBar;

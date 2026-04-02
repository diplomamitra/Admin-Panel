import React from "react";
import {
  FiFilter,
  FiMoreHorizontal,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export default function UpdateHistoryTable() {
  const history = [
    {
      version: "1.3.0",
      date: "16 Mar 2026",
      type: "Major",
      priority: "Recommended",
      status: "Active",
      statusColor: "bg-green-50 text-green-600",
    },
    {
      version: "1.2.0",
      date: "02 Mar 2026",
      type: "Minor",
      priority: "Optional",
      status: "Live",
      statusColor: "bg-blue-50 text-blue-600",
    },
    {
      version: "1.1.0",
      date: "10 Feb 2026",
      type: "Feature",
      priority: "Optional",
      status: "Archived",
      statusColor: "bg-slate-100 text-slate-500",
    },
  ];

  return (
    <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      
      {/* Header (Subject style) */}
      <div className="p-6 flex items-center justify-between border-b border-gray-50">
        <h3 className="font-[PlusJakartaSans] text-slate-800">
          Update History
        </h3>

        <button className="text-sm font-[PlusJakartaSans-Medium] text-indigo-600 flex items-center gap-1 hover:underline">
          <FiFilter />
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          
          <thead>
            <tr className="bg-slate-50/50 text-slate-400 text-[11px] font-[PlusJakartaSans] uppercase tracking-wider">
              <th className="px-6 py-4">Version</th>
              <th className="px-6 py-4">Release Date</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Priority</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50 text-sm">
            
            {history.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-6 py-16 text-center">
                  <p className="text-slate-500 font-[PlusJakartaSans-Medium]">
                    No history found
                  </p>
                </td>
              </tr>
            ) : (
              history.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50 transition-colors"
                >
                  
                  {/* Version */}
                  <td className="px-6 py-4 font-[PlusJakartaSans] text-slate-700">
                    {item.version}
                  </td>

                  {/* Date */}
                  <td className="px-6 py-4 text-slate-500 font-[PlusJakartaSans-Medium]">
                    {item.date}
                  </td>

                  {/* Type */}
                  <td className="px-6 py-4 text-slate-600 font-[PlusJakartaSans-Medium]">
                    {item.type}
                  </td>

                  {/* Priority */}
                  <td
                    className={`px-6 py-4 font-[PlusJakartaSans-Medium] ${
                      item.priority === "Recommended"
                        ? "text-indigo-600"
                        : "text-slate-500"
                    }`}
                  >
                    {item.priority}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-[PlusJakartaSans-Medium] ${item.statusColor}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-indigo-600 transition">
                      <FiMoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}

          </tbody>
        </table>
      </div>

      {/* Footer (cleaned like system UI) */}
      <div className="px-6 py-4 flex items-center justify-between text-xs text-slate-400 font-[PlusJakartaSans-Medium] border-t border-gray-50">
        
        <span>Showing 3 of 12 updates</span>

        <div className="flex gap-2">
          <button className="p-2 rounded-lg hover:bg-slate-100 transition">
            <FiChevronLeft />
          </button>

          <button className="p-2 rounded-lg hover:bg-slate-100 transition">
            <FiChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
}
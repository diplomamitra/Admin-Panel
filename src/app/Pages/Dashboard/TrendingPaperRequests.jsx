import React from "react";
import { FiPlus } from "react-icons/fi";

export default function TrendingPaperRequests({ requests = [] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white ">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 p-5">

        <h3 className="text-lg font-[PlusJakartaSans] text-slate-800">
          Trending Paper Requests
        </h3>

        <button className="text-sm font-[PlusJakartaSans-Medium] text-indigo-600 hover:underline">
          View All
        </button>

      </div>

      {/* Tags */}
      <div className="p-6">

        <div className="flex flex-wrap gap-3">

          {requests.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 rounded-full px-4 py-2 border transition ${
                item.highlight
                  ? "border-indigo-200 bg-indigo-50"
                  : "border-slate-200 bg-slate-50"
              }`}
            >

              {/* Subject */}
              <span
                className={`text-sm font-[PlusJakartaSans-Medium] ${
                  item.highlight
                    ? "text-indigo-600"
                    : "text-slate-600"
                }`}
              >
                {item.name}
              </span>

              {/* Count */}
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-[PlusJakartaSans] ${
                  item.highlight
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {item.count}
              </span>

            </div>
          ))}

          {/* Add Tag Button */}
          <button className="flex items-center gap-1 rounded-full border border-dashed border-slate-300 px-4 py-2 text-sm font-[PlusJakartaSans-Medium] text-slate-500 hover:border-indigo-500 hover:text-indigo-500 transition">

            <FiPlus size={14} />

            Add Tag

          </button>

        </div>

      </div>

    </div>
  );
}
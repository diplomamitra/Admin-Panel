import React from "react";
import { FaFilter, FaFilePdf, FaDownload } from "react-icons/fa";

const results = [
  {
    title: "Engineering Mathematics III - Midsem 2023",
  },
  {
    title: "Engineering Mathematics III - Midsem 2023",
  },
];

export function ResultsSection() {
  return (
    <section className="mt-6">
      <div className="flex items-center justify-between mb-6 px-2 ">
        <span className="text-sm font-[PlusJakartaSans] uppercase tracking-wider text-[#414753]">
          {results.length} files found
        </span>

        <button className="text-xs font-[PlusJakartaSans] flex items-center gap-1 hover:underline cursor-pointer">
          <FaFilter className="w-4 h-4" />
          Sort by Date
        </button>
      </div>

      <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
        <div className="max-h-153.5 overflow-y-auto divide-y divide-gray-200">
          {results.map((result,ind) => (
            <div
              key={ind}
              className="group flex items-center gap-4 p-4 hover:bg-gray-50 transition cursor-pointer"
            >
              {/* PDF Icon */}
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-red-100 text-red-600">
                <FaFilePdf className="w-6 h-6" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h4 className="font-[PlusJakartaSans] truncate">
                  {result.title}
                </h4>
                {/* <p className="text-xs text-gray-500 font-[PlusJakartaSans-Medium] truncate">
                  {result.subtitle}
                </p> */}
              </div>

              {/* Size + Download */}
              <div className="hidden sm:flex items-center gap-2 font-[PlusJakartaSans]">
                <span className="text-xs px-3 py-2 bg-gray-100 rounded">
                  Open
                </span>

                <button className="p-2 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-red-50 text-red-600">
                  <FaDownload className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

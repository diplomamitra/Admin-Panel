import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div className="sticky top-0 z-10 bg-white">

      <div className="ps-6 h-16 flex items-center justify-between border-b border-slate-200 bg-[#f8fafc]">

        <div>
          <h1 className="text-gray-800 text-lg font-[PlusJakartaSans]">
            {title}
          </h1>

          <div className="flex items-center gap-2">

            {/* Green Pulse Dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>

            {/* Live Text */}
            <p className="text-sm text-green-600 font-[PlusJakartaSans-Medium]">
              Live
            </p>

          </div>
        </div>

      </div>

    </div>
  );
};

export default PageHeader;
import React from "react";

export default function ActivityPulse({ data = [] }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <h3 className="text-lg text-slate-800 font-[PlusJakartaSans]">
          Activity Pulse (24h)
        </h3>

        <div className="flex gap-3">

          <span className="flex items-center gap-1 text-xs font-[PlusJakartaSans-Medium] text-slate-500">
            <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
            Traffic
          </span>

          <span className="flex items-center gap-1 text-xs font-[PlusJakartaSans-Medium] text-slate-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Success Rate
          </span>

        </div>

      </div>

      {/* Graph */}
      <div className="h-64 w-full bg-slate-50 rounded-lg flex items-end gap-1 px-4 pb-4">

        {data.map((height, index) => (
          <div
            key={index}
            className="w-full bg-indigo-500/40 rounded-t transition-all"
            style={{ height }}
          ></div>
        ))}

      </div>

    </div>
  );
}
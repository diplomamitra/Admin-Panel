import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";

import { FiRefreshCw, FiEye, FiEdit, FiCopy } from "react-icons/fi";
import { MdCheckCircle } from "react-icons/md";
import QuickStatusSwitch from "./Components/QuickStatusSwitch";
import HistoryTable from "./Components/HistoryTable";

const Result = () => {
  const [resultLink, setResultLink] = useState(
    "http://103.234.185.158/show_my_result",
  );

  const copyLink = () => {
    navigator.clipboard.writeText(resultLink);
  };

  return (
    <div>
      <PageHeader title="Result Management" />

      <div className="p-6 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-8">
            {/* RESULT STATUS */}
            <section className="bg-white p-8 rounded-2xl border border-slate-200 relative">
              <div className="absolute top-0 right-0 p-6">
                <span className="group flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-[PlusJakartaSans-Medium] border border-emerald-100 ">
                  <MdCheckCircle className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />

                  <span className="tracking-wide">Released</span>
                </span>
              </div>

              <h3 className="text-slate-900 font-[PlusJakartaSans] text-lg mb-6">
                Active Result Status
              </h3>

              <div className="space-y-4 max-w-xl">
                <div>
                  <label className="text-sm font-[PlusJakartaSans-Medium] text-slate-700">
                    Public Result URL
                  </label>

                  <div className="relative mt-2">
                    <input
                      value={resultLink}
                      onChange={(e) => setResultLink(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 outline-none font-[PlusJakartaSans-Medium]"
                    />

                    <button
                      onClick={copyLink}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-primary "
                    >
                      <FiCopy />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  {/* 🔥 Primary CTA - Preview */}
                  <a
                    href={resultLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex-1 bg-primary text-white px-4 py-3 rounded-xl text-sm font-[PlusJakartaSans] font-semibold flex items-center justify-center gap-2 hover:shadow-md hover:bg-primary/90 transition-all duration-200"
                  >
                    <FiEye className="w-4 h-4 transition-transform group-hover:scale-110" />
                    Preview
                  </a>

                  {/* Secondary - Edit */}
                  <button className="group flex-1 border border-slate-200 text-slate-600 px-4 py-3 rounded-xl text-sm font-[PlusJakartaSans-Medium] flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200">
                    <FiEdit className="w-4 h-4 transition-transform group-hover:scale-110" />
                    Edit
                  </button>
                </div>
              </div>
            </section>

            {/* QUICK STATUS SWITCH */}
            <QuickStatusSwitch />

            {/* HISTORY TABLE */}
            <HistoryTable />
          </div>

          <div className="space-y-8">
            <section className="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col items-center">
              {/* Header */}
              <div className="flex items-center justify-between w-full mb-5">
                <h3 className="text-slate-400 text-xs font-[PlusJakartaSans] uppercase tracking-wider">
                  Live Mobile Preview
                </h3>

                <span className="text-[10px] px-2 py-1 rounded-full bg-slate-100 text-slate-500 font-[PlusJakartaSans-Medium]">
                  Auto Sync
                </span>
              </div>

              {/* Phone Frame */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-2xl opacity-60"></div>

                {/* Device */}
                <div className="relative w-70 h-130 bg-slate-900 rounded-2xl overflow-hidden">
                  

                  {/* Screen */}
                  {resultLink ? (
                    <iframe
                      src={resultLink}
                      title="Result Preview"
                      className="w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 text-sm font-[PlusJakartaSans-Medium]">
                      <span>No preview available</span>
                      <span className="text-xs text-slate-400 mt-1">
                        Enter a result link
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer Info */}
              <div className="mt-5 text-center">
                <p className="text-slate-500 text-xs font-[PlusJakartaSans-Medium]">
                  This preview reflects the live result page.
                </p>

                <p className="text-[11px] text-slate-400 mt-1">
                  Some sites may block iframe preview.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;

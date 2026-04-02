import React, { useState } from "react";
import { FiPlusCircle, FiChevronDown } from "react-icons/fi";
import FileUpload from "../Pyqs/UiHelper/FileUpload";
import NotificationBody from "./NotificationBody";

const CreateNotificationForm = () => {
  const [mode, setMode] = useState("manual"); // default

  return (
    <div className="mb-8">
      <details
        className="group bg-white rounded-2xl border border-slate-200 overflow-hidden"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-3">
            <FiPlusCircle className="text-primary text-2xl" />
            <span className="text-lg font-[PlusJakartaSans] text-slate-800">
              Create New Notification
            </span>
          </div>

          <FiChevronDown className="transition-transform group-open:rotate-180 text-slate-400 text-2xl" />
        </summary>

        <div className="p-6 border-t border-slate-100">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-[PlusJakartaSans] text-slate-700 mb-2">
                Notification Title
              </label>

              <input
                type="text"
                placeholder="e.g. End Semester Exam Schedule 2024"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-[PlusJakartaSans-Medium]"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-[PlusJakartaSans] text-slate-700 mb-2">
                Category
              </label>

              <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none  font-[PlusJakartaSans-Medium]">
                <option>Board Notices</option>
                <option>Study Resources</option>
                <option>Events & Workshops</option>
                <option>Result Updates</option>
              </select>
            </div>

            {/* Reference Link */}
            <div>
              <label className="block text-sm font-[PlusJakartaSans] text-slate-700 mb-2">
                Reference Link (Optional)
              </label>

              <input
                type="url"
                placeholder="https://diplomamitra.in/resources/..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 focus:border-primary focus:ring-2 focus:ring-primary/20  font-[PlusJakartaSans-Medium] outline-none "
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-sm font-[PlusJakartaSans] text-slate-700 mb-2">
                Start Date
              </label>

              <input
                type="date"
                className="w-full rounded-xl font-[PlusJakartaSans-Medium] border border-slate-200 bg-white px-4 py-2 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>

            {/* Expiry Date */}
            <div>
              <label className="block text-sm font-[PlusJakartaSans] text-slate-700 mb-2">
                Expiry Date
              </label>

              <input
                type="date"
                className="w-full rounded-xl font-[PlusJakartaSans-Medium] border border-slate-200 bg-white px-4 py-2 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>

            {/* 🔹 File Section Heading */}
            <h3 className="text-slate-900 font-[PlusJakartaSans] text-lg">
              Notification Format{" "}
            </h3>
            <div className="col-span-1 md:col-span-2">
              {/* Mode Selector */}
              <div className="flex gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setMode("manual")}
                  className={`px-4 py-2 rounded-xl text-sm font-[PlusJakartaSans-Medium] transition ${
                    mode === "manual"
                      ? "bg-indigo-600 text-white"
                      : "border border-slate-200 text-slate-600"
                  }`}
                >
                  Notification Message
                </button>

                <button
                  type="button"
                  onClick={() => setMode("mediaup")}
                  className={`px-4 py-2 rounded-xl text-sm font-[PlusJakartaSans-Medium] transition ${
                    mode === "mediaup"
                      ? "bg-indigo-600 text-white"
                      : "border border-slate-200 text-slate-600"
                  }`}
                >
                  Media Upload
                </button>
              </div>

              {/* Content Based on Mode */}
              <div className="w-full">
                {mode === "manual" ? <NotificationBody /> : <FileUpload />}
              </div>
            </div>

            {/* Buttons */}
            <div className="col-span-1 md:col-span-2 flex justify-end gap-3 pt-2">
              <button
                type="button"
                className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors  font-[PlusJakartaSans-Medium]"
              >
                Save Draft
              </button>

              <button
                type="submit"
                className="px-8 py-2.5 rounded-xl bg-primary text-white  font-[PlusJakartaSans]"
              >
                Publish Notification
              </button>
            </div>
          </form>
        </div>
      </details>
    </div>
  );
};

export default CreateNotificationForm;

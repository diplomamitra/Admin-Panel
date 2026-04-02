import React from "react";
import PageHeader from "../../components/PageHeader";
import FilePreview from "./UiHelper/FilePreview";
import FileUpload from "./UiHelper/FileUpload";
import SubjectPicker from "./UiHelper/SubjectPicker";

const PyqAddPage = () => {
  return (
    <div>
      <PageHeader title="Add Previous Papers" />

      <div className="p-6 space-y-6">
        <div className="border border-slate-200 rounded-2xl bg-white">
          <form className="space-y-6 p-6">
          
            {/* 🔹 3 Fields Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-[PlusJakartaSans] text-slate-700 mb-2">
                  Department
                </label>
                <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 focus:ring-2 focus:ring-primary/20 outline-none">
                  <option>Select Department</option>
                  <option>Computer Engineering</option>
                  <option>Information Technology</option>
                  <option>Mechanical</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-[PlusJakartaSans] text-slate-700 mb-2">
                  Semester
                </label>
                <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 focus:ring-2 focus:ring-primary/20 outline-none">
                  <option>Select Semester</option>
                  <option>Semester 1</option>
                  <option>Semester 2</option>
                  <option>Semester 3</option>
                  <option>Semester 4</option>
                  <option>Semester 5</option>
                  <option>Semester 6</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-[PlusJakartaSans] text-slate-700 mb-2">
                  Subject
                </label>
                <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 focus:ring-2 focus:ring-primary/20 outline-none">
                  <option>Select Subject</option>
                  <option>Programming in C (22226)</option>
                  <option>Data Structures (22317)</option>
                  <option>DBMS (22319)</option>
                </select>
              </div>
            </div>

            {/* Subject Picker */}
            <div className="w-full">
              <SubjectPicker />
            </div>

            {/* 🔹 Metadata Heading */}
            <h3 className="text-slate-900 font-[PlusJakartaSans] text-lg">
              Details & Metadata
            </h3>

            {/* 🔹 Metadata Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-[PlusJakartaSans] text-slate-700 mb-2">
                  Paper Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Summer 2024 Question Paper - 22226"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 focus:ring-2 focus:ring-primary/20 outline-none font-[PlusJakartaSans-Medium]"
                />
              </div>

              <div>
                <label className="block text-sm font-[PlusJakartaSans] text-slate-700 mb-2">
                  Exam Year
                </label>
                <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 focus:ring-2 focus:ring-primary/20 outline-none font-[PlusJakartaSans-Medium]">
                  <option>Select Year</option>
                  <option>2026</option>
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-[PlusJakartaSans] text-slate-700 mb-2">
                  Exam Session
                </label>
                <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 focus:ring-2 focus:ring-primary/20 outline-none font-[PlusJakartaSans-Medium]">
                  <option>Select Session</option>
                  <option value="summer">Summer</option>
                  <option value="winter">Winter</option>
                </select>
              </div>
            </div>

            {/* 🔹 File Section Heading */}
            <h3 className="text-slate-900 font-[PlusJakartaSans] text-lg">
              File Management
            </h3>

            {/* File Upload */}
            <div className="w-full">
              <FileUpload />
            </div>

            {/* 🔹 Metadata Heading */}
            <h3 className="text-slate-900 font-[PlusJakartaSans] text-lg">
              Uplodes Files
            </h3>

            <FilePreview/>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">

  {/* Left Info (optional UX boost) */}
  <p className="text-xs text-slate-400 font-[PlusJakartaSans-Medium]">
    Make sure all details are correct before publishing.
  </p>

  {/* Actions */}
  <div className="flex items-center gap-3">

    {/* Cancel */}
    <button
      type="button"
      className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-[PlusJakartaSans-Medium] hover:bg-slate-50 hover:text-slate-800 transition-all"
    >
      Cancel
    </button>

    {/* Publish */}
    <button
      type="submit"
      className="px-8 py-2.5 rounded-xl bg-primary text-white font-[PlusJakartaSans] flex items-center gap-2 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all"
    >
      Publish Paper
    </button>

  </div>
</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PyqAddPage;

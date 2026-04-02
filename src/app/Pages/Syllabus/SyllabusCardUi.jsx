import React from "react";
import { FiEdit2, FiTrash2, FiExternalLink, FiFileText } from "react-icons/fi";

const SyllabusCardUi = ({ syllabus, handleToggle }) => {
  return (
    <div className="group rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all p-4 flex gap-4">
      {/* Left Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
        <FiFileText className="text-2xl" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between">
        {/* TOP */}
        <div>
          {/* Badges */}
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="px-2 py-0.5 text-[10px] bg-slate-100 text-slate-600 rounded font-[PlusJakartaSans-Medium]">
              #{syllabus.display_order}
            </span>

            <span className="px-2.5 py-0.5 text-[10px] bg-indigo-50 text-indigo-600 rounded-full font-[PlusJakartaSans-Medium]">
              Sem {syllabus.semester_id}
            </span>

            <span className="px-2.5 py-0.5 text-[10px] bg-purple-50 text-purple-600 rounded-full font-[PlusJakartaSans-Medium]">
              {syllabus.scheme}
            </span>

            {/* NEW FIELD */}
            <span className="px-2.5 py-0.5 text-[10px] bg-amber-50 text-amber-600 rounded-full font-[PlusJakartaSans-Medium]">
              Page {syllabus.start_page || 1}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-sm font-[PlusJakartaSans] text-slate-800 leading-snug line-clamp-2">
            {syllabus.title}
          </h3>

          {/* File Info */}
          <p className="text-xs text-slate-500 mt-1 font-[PlusJakartaSans-Medium]">
            {syllabus.file_name} •{" "}
            {(syllabus.file_size_bytes / 1024 / 1024).toFixed(1)} MB
          </p>

          {/* Updated */}
          <p className="text-[11px] text-slate-400 mt-1 font-[PlusJakartaSans-Medium]">
            Updated: {new Date(syllabus.updated_at).toLocaleDateString()}
          </p>
        </div>

        {/* BOTTOM */}
        <div className="flex items-center justify-between mt-4">
          {/* Status */}
          <label className="inline-flex items-center cursor-pointer relative">
            <input
              type="checkbox"
              checked={syllabus.is_active}
              onChange={() => handleToggle(syllabus.id)}
              className="sr-only peer"
            />

            <div className="w-11 h-6 bg-slate-200 rounded-full peer-checked:bg-primary transition"></div>

            <div className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full shadow transition peer-checked:translate-x-5"></div>

            <span
              className={`ml-3 text-[12px] font-[PlusJakartaSans-Medium] ${
                syllabus.is_active ? "text-green-600" : "text-slate-400"
              }`}
            >
              {syllabus.is_active ? "Active" : "Inactive"}
            </span>
          </label>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* View */}
            <a
              href={syllabus.file_path}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-white text-[12px] font-[PlusJakartaSans-Medium] hover:opacity-90 transition"
            >
              <FiExternalLink className="text-xs" />
              View
            </a>

            {/* Edit */}
            <button className="p-2 rounded-lg text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition">
              <FiEdit2 />
            </button>

            {/* Delete */}
            <button className="p-2 rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-500 transition">
              <FiTrash2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusCardUi;

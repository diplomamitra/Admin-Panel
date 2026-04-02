import React, { useState } from "react";
import { MdSearch, MdAdd } from "react-icons/md";

export default function SubjectPicker() {
  const [query, setQuery] = useState("");

  const subjects = [
    { name: "Data Structures", code: "22317" },
    { name: "Database Management", code: "22319" },
    { name: "Programming in C", code: "22226" },
  ];

  const filtered = subjects.filter(
    (sub) =>
      sub.name.toLowerCase().includes(query.toLowerCase()) ||
      sub.code.includes(query),
  );

  return (
    <div>
      {/* Search Input */}
      <div className="relative mb-3">
        <MdSearch
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />

        <div className="w-full font-[PlusJakartaSans-Medium] bg-surface-container-low rounded-xl pl-10 pr-3 py-3 text-sm text-slate-500 cursor-not-allowed">
          Fetch Automatically
        </div>
      </div>

      {/* Dropdown List */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden font-[PlusJakartaSans-Medium]">
        {filtered.length > 0 ? (
          filtered.map((sub, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition cursor-pointer"
            >
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  {sub.name}
                </p>
                <p className="text-xs text-slate-400">Code: {sub.code}</p>
              </div>

              <button className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition">
                <MdAdd size={16} />
              </button>
            </div>
          ))
        ) : (
          <div className="p-4 text-xs text-slate-400 text-center">
            No subjects found
          </div>
        )}

        {/* Footer */}
        <div className="bg-slate-50 text-xs text-slate-400 text-center py-2">
          Start typing subject code or name to filter...
        </div>
      </div>
    </div>
  );
}

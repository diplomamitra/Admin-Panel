import React, { useState } from "react";
import { FiBook, FiEdit2, FiTrash2 } from "react-icons/fi";

const initialSubjects = [
  {
    id: 1,
    name: "Data Structures",
    code: "CS-301",
    semester: 3,
    display_order: 1,
    is_active: true,
    created_at: "Mar 20, 2026",
  },
  {
    id: 2,
    name: "Operating Systems",
    code: "CS-302",
    semester: 3,
    display_order: 2,
    is_active: true,
    created_at: "Mar 18, 2026",
  },
  {
    id: 3,
    name: "DBMS",
    code: "CS-303",
    semester: 3,
    display_order: 3,
    is_active: false,
    created_at: "Mar 15, 2026",
  },
];

const SubjectTables = () => {
  const [subjects, setSubjects] = useState(initialSubjects);

  const handleToggle = (id) => {
    setSubjects((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, is_active: !item.is_active } : item,
      ),
    );
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    setSubjects((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    console.log("Edit subject:", id);
  };

  return (
    <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="p-6 flex items-center justify-between border-b border-gray-50">
        <h3 className="font-[PlusJakartaSans] text-slate-800">Subjects</h3>

        <a
          href="#"
          className="text-sm font-[PlusJakartaSans-Medium] text-indigo-600 hover:underline"
        >
          See all
        </a>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50 text-slate-400 text-[11px] font-[PlusJakartaSans] uppercase tracking-wider">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Code</th>
              <th className="px-6 py-4">Semester</th>
              <th className="px-6 py-4">Order</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Created</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50 text-sm">
            {subjects.length === 0 ? (
              <tr>
                <td colSpan="7" className="px-5 py-5 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <p className="text-slate-500 font-[PlusJakartaSans-Medium]">
                      No subjects found
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              subjects.map((subject) => (
                <SubjectRow
                  key={subject.id}
                  subject={subject}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

function SubjectRow({ subject, onToggle, onDelete, onEdit }) {
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      {/* Name */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="font-[PlusJakartaSans] text-slate-700">
            {subject.name}
          </span>
        </div>
      </td>

      {/* Code */}
      <td className="px-6 py-4 text-slate-500 font-[PlusJakartaSans-Medium]">
        {subject.code}
      </td>

      {/* Semester */}
      <td className="px-6 py-4 text-slate-500 font-[PlusJakartaSans-Medium]">
        {subject.semester}
      </td>

      {/* Order */}
      <td className="px-6 py-4 font-[PlusJakartaSans-Medium]">
        {subject.display_order}
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        <label className="inline-flex items-center cursor-pointer relative">
          <input
            type="checkbox"
            checked={subject.is_active}
            onChange={() => onToggle(subject.id)}
            className="sr-only peer"
          />

          <div className="w-11 h-6 bg-slate-200 rounded-full peer-checked:bg-primary transition-colors duration-300"></div>

          <div className="absolute left-0.5 top-0.5 h-5 w-5 bg-white rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-5"></div>

          <span
            className={`ml-3 text-xs font-[PlusJakartaSans-Medium] ${
              subject.is_active ? "text-green-600" : "text-slate-400"
            }`}
          >
            {subject.is_active ? "Active" : "Inactive"}
          </span>
        </label>
      </td>

      {/* Created */}
      <td className="px-6 py-4 text-slate-500 font-[PlusJakartaSans-Medium]">
        {subject.created_at}
      </td>

      {/* Actions */}
      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-2">
          <button
            onClick={() => onEdit(subject.id)}
            className="p-2 rounded-lg hover:bg-indigo-50 text-indigo-600 transition"
          >
            <FiEdit2 className="w-4 h-4" />
          </button>

          <button
            onClick={() => onDelete(subject.id)}
            className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition"
          >
            <FiTrash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default SubjectTables;

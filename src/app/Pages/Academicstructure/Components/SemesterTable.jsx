import React, { useState } from "react";
import { FiLayers, FiEdit2, FiTrash2 } from "react-icons/fi";

const initialSemesters = [
  {
    id: 1,
    department: "Computer Engineering",
    semester_number: 1,
    is_active: true,
    created_at: "Mar 20, 2026",
  },
  {
    id: 2,
    department: "Mechanical Engineering",
    semester_number: 2,
    is_active: false,
    created_at: "Mar 18, 2026",
  },
];

const SemesterTable = () => {
  const [semesters, setSemesters] = useState(initialSemesters);

  const handleToggle = (id) => {
    setSemesters((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, is_active: !item.is_active }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Delete semester?");
    if (!confirmDelete) return;

    setSemesters((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    console.log("Edit semester:", id);
  };

  return (
    <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      
      {/* Header */}
      <div className="p-6 border-b border-gray-50">
        <h3 className="font-[PlusJakartaSans] text-slate-800">
          Semesters
        </h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          
          <thead>
            <tr className="bg-slate-50/50 text-slate-400 text-[11px] uppercase tracking-wider font-[PlusJakartaSans]">
              <th className="px-6 py-4">Semester</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Created</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50 text-sm">
            
            {semesters.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-6 text-center">
                  <p className="text-slate-500 font-[PlusJakartaSans-Medium]">
                    No semesters found
                  </p>
                </td>
              </tr>
            ) : (
              semesters.map((sem) => (
                <tr
                  key={sem.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  
                  {/* Semester */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                        <FiLayers className="w-4 h-4" />
                      </div>

                      <span className="font-[PlusJakartaSans] text-slate-700">
                        Semester {sem.semester_number}
                      </span>
                    </div>
                  </td>

                  {/* Department */}
                  <td className="px-6 py-4 text-slate-500 font-[PlusJakartaSans-Medium]">
                    {sem.department}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <label className="inline-flex items-center cursor-pointer relative">
                      <input
                        type="checkbox"
                        checked={sem.is_active}
                        onChange={() => handleToggle(sem.id)}
                        className="sr-only peer"
                      />

                      <div className="w-11 h-6 bg-slate-200 rounded-full peer-checked:bg-primary transition-colors duration-300"></div>

                      <div className="absolute left-0.5 top-0.5 h-5 w-5 bg-white rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-5"></div>

                      <span
                        className={`ml-3 text-xs font-[PlusJakartaSans-Medium] ${
                          sem.is_active
                            ? "text-green-600"
                            : "text-slate-400"
                        }`}
                      >
                        {sem.is_active ? "Active" : "Inactive"}
                      </span>
                    </label>
                  </td>

                  {/* Created */}
                  <td className="px-6 py-4 text-slate-500 font-[PlusJakartaSans-Medium]">
                    {sem.created_at}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      
                      <button
                        onClick={() => handleEdit(sem.id)}
                        className="p-2 rounded-lg hover:bg-indigo-50 text-indigo-600 transition"
                      >
                        <FiEdit2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleDelete(sem.id)}
                        className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>

                    </div>
                  </td>
                </tr>
              ))
            )}

          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SemesterTable;
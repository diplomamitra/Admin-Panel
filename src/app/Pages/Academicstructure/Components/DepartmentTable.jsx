import React, { useState } from "react";
import { FiBook, FiEdit2, FiTrash2 } from "react-icons/fi";

const initialDepartments = [
  {
    id: 1,
    name: "Computer Science",
    slug: "cs-engineering",
    display_order: 1,
    is_active: true,
    updated_at: "Oct 24, 2023",
  },
  {
    id: 2,
    name: "Mechanical Engineering",
    slug: "mech-eng",
    display_order: 2,
    is_active: true,
    updated_at: "Nov 02, 2023",
  },
  {
    id: 3,
    name: "Architecture",
    slug: "arch-studies",
    display_order: 3,
    is_active: false,
    updated_at: "Sep 15, 2023",
  },
];

const DepartmentTable = () => {
  const [departments, setDepartments] = useState(initialDepartments);

  const handleToggle = (id) => {
    setDepartments((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, is_active: !item.is_active } : item,
      ),
    );
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Delete department?");
    if (!confirmDelete) return;

    setDepartments((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    console.log("Edit department:", id);
  };

  return (
    <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="p-6 flex items-center justify-between border-b border-gray-50">
        <h3 className="font-[PlusJakartaSans] text-slate-800">Departments</h3>

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
            <tr className="bg-slate-50/50 text-slate-400 text-[11px] uppercase tracking-wider font-[PlusJakartaSans]">
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Slug</th>
              <th className="px-6 py-4">Order</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Updated</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50 text-sm">
            {departments.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-6 py-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <p className="text-slate-500 font-[PlusJakartaSans-Medium]">
                      No departments found
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              departments.map((dept) => (
                <tr
                  key={dept.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  {/* Name */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-slate-700 font-[PlusJakartaSans]">
                        {dept.name}
                      </span>
                    </div>
                  </td>

                  {/* Slug */}
                  <td className="px-6 py-4 text-slate-500 font-[PlusJakartaSans-Medium]">
                    {dept.slug}
                  </td>

                  {/* Order */}
                  <td className="px-6 py-4 font-[PlusJakartaSans-Medium]">
                    {dept.display_order}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <label className="inline-flex items-center cursor-pointer relative">
                      <input
                        type="checkbox"
                        checked={dept.is_active}
                        onChange={() => handleToggle(dept.id)}
                        className="sr-only peer"
                      />

                      <div className="w-11 h-6 bg-slate-200 rounded-full peer-checked:bg-primary transition-colors duration-300"></div>

                      <div className="absolute left-0.5 top-0.5 h-5 w-5 bg-white rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-5"></div>

                      <span
                        className={`ml-3 text-xs font-[PlusJakartaSans-Medium] ${
                          dept.is_active
                            ? "text-green-600"
                            : "text-slate-400 font-[PlusJakartaSans-Medium]"
                        }`}
                      >
                        {dept.is_active ? "Active" : "Inactive"}
                      </span>
                    </label>
                  </td>

                  {/* Updated */}
                  <td className="px-6 py-4 text-slate-500 font-[PlusJakartaSans-Medium]">
                    {dept.updated_at}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleEdit(dept.id)}
                        className="p-2 rounded-lg hover:bg-indigo-50 text-indigo-600 transition"
                      >
                        <FiEdit2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleDelete(dept.id)}
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

export default DepartmentTable;

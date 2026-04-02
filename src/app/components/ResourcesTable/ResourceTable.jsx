import React from "react";
import { FiFileText, FiMoreHorizontal, FiDownload } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdQuiz } from "react-icons/md";
import { FiEdit2, FiTrash2, FiCopy } from "react-icons/fi";
import ResourceTypeFilter from "../Filters/ResourceTypeFilter";

const resources = [
  {
    id: 1,
    title: "Summer 2024 Paper",
    subject: "Data Structures",
    department: "Computer Eng.",
    semester: "Sem 3",
    type: "paper",
    exam_year: 2024,
    exam_session: "Summer",
    size: "2.4 MB",
    downloads: 120,
    time: "2 min ago",
  },
  {
    id: 2,
    title: "Unit 1 important_questions",
    subject: "Operating Systems",
    department: "Computer Eng.",
    semester: "Sem 3",
    type: "important_questions",
    size: "1.2 MB",
    downloads: 80,
    time: "10 min ago",
  },
];

const getTypeStyle = (type) => {
  switch (type) {
    case "paper":
      return {
        icon: <FiFileText />,
        bg: "bg-indigo-50",
        color: "text-indigo-600",
        label: "Paper",
      };
    case "notes":
      return {
        icon: <HiOutlineDocumentText />,
        bg: "bg-blue-50",
        color: "text-blue-600",
        label: "Notes",
      };
    case "important_questions":
      return {
        icon: <MdQuiz />,
        bg: "bg-purple-50",
        color: "text-purple-600",
        label: "Important",
      };
    default:
      return {
        icon: <FiFileText />,
        bg: "bg-slate-100",
        color: "text-slate-500",
        label: "File",
      };
  }
};

const ResourceTable = ({ ResourceFilter,ResourcesName }) => {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-50 flex justify-between items-center">
        <h3 className="font-[PlusJakartaSans] text-slate-800">{ResourcesName}</h3>
        <ResourceTypeFilter
          defaultValue={ResourceFilter}
          onChange={(value) => {
            console.log("Selected:", value);
          }}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50 text-slate-400 text-[11px] uppercase tracking-wider font-[PlusJakartaSans]">
              <th className="px-6 py-4">Resource</th>
              <th className="px-6 py-4">Academic</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Size</th>
              <th className="px-6 py-4">Downloads</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50 text-sm">
            {resources.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-16 text-center text-slate-500"
                >
                  No resources found
                </td>
              </tr>
            ) : (
              resources.map((item) => {
                const style = getTypeStyle(item.type);

                return (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    {/* Resource */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${style.bg} ${style.color}`}
                        >
                          {style.icon}
                        </div>

                        <div className="max-w-50">
                          <p className="text-slate-700 font-[PlusJakartaSans] truncate">
                            {item.title}
                          </p>

                          {item.type === "paper" && (
                            <p className="text-xs text-slate-400 font-[PlusJakartaSans-Medium]">
                              {item.exam_session} {item.exam_year}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Academic */}
                    <td className="px-6 py-4">
                      <p className="text-slate-600 font-[PlusJakartaSans-Medium]">
                        {item.subject}
                      </p>
                      <p className="text-xs text-slate-400 font-[PlusJakartaSans-Medium]">
                        {item.department} • {item.semester}
                      </p>
                    </td>

                    {/* Type */}
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-[10px] uppercase rounded-md font-[PlusJakartaSans] ${style.bg} ${style.color}`}
                      >
                        {style.label}
                      </span>
                    </td>

                    {/* Size */}
                    <td className="px-6 py-4 text-slate-500 font-[PlusJakartaSans-Medium]">
                      {item.size}
                    </td>

                    {/* Downloads */}
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1 text-slate-600 font-[PlusJakartaSans-Medium]">
                        <FiDownload className="w-4 h-4 text-slate-400" />
                        {item.downloads}
                      </span>
                    </td>

                    {/* Time */}
                    {/* Status */}
                    <td className="px-6 py-4">
                      <label className="inline-flex items-center cursor-pointer relative">
                        <input
                          type="checkbox"
                          checked={true}
                          onChange={() => handleToggle(true)}
                          className="sr-only peer"
                        />

                        <div className="w-11 h-6 bg-slate-200 rounded-full peer-checked:bg-primary transition"></div>

                        <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transition peer-checked:translate-x-5"></div>

                        <span
                          className={`ml-3 text-xs font-[PlusJakartaSans-Medium] ${
                            true ? "text-green-600" : "text-slate-400"
                          }`}
                        >
                          {true ? "Active" : "Inactive"}
                        </span>
                      </label>
                    </td>

                    {/* Action */}
                    {/* Action */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 rounded-lg hover:bg-indigo-50 text-indigo-600">
                          <FiEdit2 className="w-4 h-4" />
                        </button>

                        <button className="p-2 rounded-lg hover:bg-red-50 text-red-600">
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ResourceTable;

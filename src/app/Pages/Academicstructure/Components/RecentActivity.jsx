import React from "react";
import { FiPlus, FiEdit, FiTrash2, FiMoreHorizontal } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

const activities = [
  {
    id: 1,
    action: "Added",
    entity: "Department",
    title: "Computer Engineering",
    time: "2 min ago",
    icon: <FiPlus />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    id: 2,
    action: "Added",
    entity: "Semester",
    title: "Semester 3 (Mechanical)",
    time: "10 min ago",
    icon: <FiPlus />,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    id: 3,
    action: "Updated",
    entity: "Subject",
    title: "Data Structures",
    time: "30 min ago",
    icon: <FiEdit />,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: 4,
    action: "Deleted",
    entity: "department",
    title: "Basic Electrical",
    time: "1 hour ago",
    icon: <FiTrash2 />,
    color: "text-red-600",
    bg: "bg-red-50",
  },
];

// ✅ Correct logic: Type = Entity (no fake mapping)
const getTypeStyle = (entity) => {
  switch (entity.toLowerCase()) {
    case "department":
      return {
        bg: "bg-purple-50",
        color: "text-purple-600",
        label: "Department",
      };
    case "semester":
      return {
        bg: "bg-indigo-50",
        color: "text-indigo-600",
        label: "Semester",
      };
    case "subject":
      return {
        bg: "bg-blue-50",
        color: "text-blue-600",
        label: "Subject",
      };
    default:
      return {
        bg: "bg-slate-100",
        color: "text-slate-500",
        label: "Unknown",
      };
  }
};

const RecentActivity = () => {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-50 flex justify-between items-center">
        <h3 className="font-[PlusJakartaSans] text-slate-800">
          Recent Activity
        </h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50 text-slate-400 text-[11px] uppercase tracking-wider font-[PlusJakartaSans]">
              <th className="px-6 py-4">Activity</th>
              <th className="px-6 py-4">Entity</th>
              <th className="px-6 py-4">Time</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50 text-sm">
            {activities.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-16 text-center text-slate-500 font-[PlusJakartaSans-Medium]"
                >
                  No activity yet
                </td>
              </tr>
            ) : (
              activities.map((item) => {
                const style = getTypeStyle(item.entity);

                return (
                  <tr key={item.id} className="hover:bg-slate-50 transition">
                    {/* Activity */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${item.bg} ${item.color}`}
                        >
                          {item.icon}
                        </div>

                        <div>
                          <p className="text-slate-700 font-[PlusJakartaSans]">
                            {item.action}
                          </p>
                          <p className="text-xs text-slate-400 font-[PlusJakartaSans-Medium]">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* ✅ Type (fixed logic) */}
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-[10px] uppercase rounded-md font-[PlusJakartaSans] ${style.bg} ${style.color}`}
                      >
                        {style.label}
                      </span>
                    </td>

                    {/* Time */}
                    <td className="px-6 py-4 text-slate-500 font-[PlusJakartaSans-Medium]">
                      {item.time}
                    </td>

                    {/* Action */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        {/* View */}
                        <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-indigo-600 transition">
                          <FiEye />
                        </button>

                        {/* Edit Entity */}
                        <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-blue-600 transition">
                          <FiEdit />
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

export default RecentActivity;

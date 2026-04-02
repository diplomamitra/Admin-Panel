import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const notifications = [
  {
    id: "DM-9902",
    title: "Summer 2024 Exam Registration",
    category: "Board Notice",
    categoryColor: "bg-blue-50 text-blue-600 border-blue-100",
    dates: "Jun 15 - Jul 10",
    status: "Active",
    statusColor: "bg-green-50 text-green-700 border-green-100",
    statusDot: "bg-green-500",
  },
  {
    id: "DM-9871",
    title: "Mathematics IV - Solved Question Bank",
    category: "Study Resources",
    categoryColor: "bg-slate-100 text-slate-600 border-slate-200",
    dates: "Aug 01 - Sep 30",
    status: "Upcoming",
    statusColor: "bg-amber-50 text-amber-700 border-amber-100",
    statusDot: "bg-amber-500",
  },
  {
    id: "DM-9865",
    title: "Workshop: Emerging Trends in AI",
    category: "Events",
    categoryColor: "bg-indigo-50 text-indigo-600 border-indigo-100",
    dates: "Jun 01 - Jun 05",
    status: "Active",
    statusColor: "bg-green-50 text-green-700 border-green-100",
    statusDot: "bg-green-500",
  },
];

const RecentNotificationsTable = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-slate-100 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-[PlusJakartaSans] text-slate-800">
            Recent Notifications
          </h3>

          <span className="text-sm font-[PlusJakartaSans] text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
            {notifications.length} Total
          </span>
        </div>

        <button className="text-sm font-[PlusJakartaSans] px-4 py-2 rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100 transition-colors">
          Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="p-4 text-xs font-[PlusJakartaSans] uppercase tracking-widest text-slate-400">
                Title
              </th>
              <th className="p-4 text-xs font-[PlusJakartaSans] uppercase tracking-widest text-slate-400">
                Category
              </th>
              <th className="p-4 text-xs font-[PlusJakartaSans] uppercase tracking-widest text-slate-400">
                Dates
              </th>
              <th className="p-4 text-xs font-[PlusJakartaSans] uppercase tracking-widest text-slate-400">
                Status
              </th>
              <th className="p-4 text-xs font-[PlusJakartaSans] uppercase tracking-widest text-slate-400 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {notifications.map((notification) => (
              <tr
                key={notification.id}
                className="hover:bg-slate-50/50 transition-colors"
              >
                {/* Title */}
                <td className="p-4">
                  <div className="font-[PlusJakartaSans] text-slate-800">
                    {notification.title}
                  </div>

                  <div className="text-xs text-slate-400 font-[PlusJakartaSans-Medium] mt-1">
                    Ref ID: {notification.id}
                  </div>
                </td>

                {/* Category */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-[PlusJakartaSans] border uppercase ${notification.categoryColor}`}
                  >
                    {notification.category}
                  </span>
                </td>

                {/* Dates */}
                <td className="p-4">
                  <div className="text-sm font-[PlusJakartaSans] text-slate-600">
                    {notification.dates}
                  </div>
                </td>

                {/* Status */}
                <td className="p-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-[PlusJakartaSans] border uppercase ${notification.statusColor}`}
                  >
                    <span
                      className={`size-1.5 rounded-full mr-2 ${notification.statusDot}`}
                    ></span>
                    {notification.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-1">
                    <button className="text-slate-400 hover:text-primary p-2 hover:bg-blue-50 rounded-lg transition-colors">
                      <FiEdit size={18} />
                    </button>

                    <button className="text-slate-400 hover:text-red-500 p-2 hover:bg-red-50 rounded-lg transition-colors">
                      <MdDeleteOutline size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-5 bg-white border-t border-slate-100 flex justify-between items-center text-sm">
        <span className="text-slate-500 font-[PlusJakartaSans-Medium]">
          Showing 3 of 12 notifications
        </span>

        <div className="flex gap-2">
          <button
            disabled
            className="px-4 py-1.5 border border-slate-200 rounded-xl bg-white text-slate-600 font-[PlusJakartaSans] disabled:opacity-50 disabled:bg-slate-50"
          >
            Previous
          </button>

          <button className="px-4 py-1.5 border border-slate-200 rounded-xl bg-white text-slate-600 font-[PlusJakartaSans] hover:bg-slate-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentNotificationsTable;

import React from "react";
import { FiEdit, FiChevronDown } from "react-icons/fi";
import { MdDeleteOutline, MdOutlineDrafts } from "react-icons/md";
import { IoSendOutline } from "react-icons/io5";
import { IoMdMailOpen } from "react-icons/io";

const draftNotifications = [
  {
    id: "DM-9910",
    title: "Revised Academic Calendar 2024-25",
    category: "Board Notice",
    categoryColor: "bg-blue-50 text-blue-600 border-blue-100",
    lastEdited: "Oct 12, 2024",
    status: "Draft",
    statusColor: "bg-slate-100 text-slate-600 border-slate-200",
    statusDot: "bg-slate-400",
  },
  {
    id: "DM-9912",
    title: "Guidelines for Final Year Project",
    category: "Study Resources",
    categoryColor: "bg-slate-100 text-slate-600 border-slate-200",
    lastEdited: "Oct 15, 2024",
    status: "Draft",
    statusColor: "bg-slate-100 text-slate-600 border-slate-200",
    statusDot: "bg-slate-400",
  },
  {
    id: "DM-9912",
    title: "Guidelines for Final Year Project",
    category: "Study Resources",
    categoryColor: "bg-slate-100 text-slate-600 border-slate-200",
    lastEdited: "Oct 15, 2024",
    status: "Draft",
    statusColor: "bg-slate-100 text-slate-600 border-slate-200",
    statusDot: "bg-slate-400",
  },
  {
    id: "DM-9912",
    title: "Guidelines for Final Year Project",
    category: "Study Resources",
    categoryColor: "bg-slate-100 text-slate-600 border-slate-200",
    lastEdited: "Oct 15, 2024",
    status: "Draft",
    statusColor: "bg-slate-100 text-slate-600 border-slate-200",
    statusDot: "bg-slate-400",
  },
  
];

const DraftNotificationsTable = () => {
  return (
    <div className="mb-8">
      <details
        className="group bg-white rounded-2xl border border-slate-200 overflow-hidden "
        open
      >
        {/* Header */}
        <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 transition-colors border-b border-slate-100">
          <div className="flex items-center gap-3">
            <IoMdMailOpen className="text-[#94a3b8] text-2xl" />
            <span className="text-lg font-[PlusJakartaSans] text-slate-800">
              Create New Notification
            </span>

            <span className="text-sm font-[PlusJakartaSans] text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
              {draftNotifications.length} Total
            </span>
          </div>

          <FiChevronDown className="transition-transform group-open:rotate-180 text-slate-400 text-xl" />
        </summary>

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
                  Last Edited
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
              {draftNotifications.map((draft) => (
                <tr
                  key={draft.id}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  {/* Title */}
                  <td className="p-4">
                    <div className="font-[PlusJakartaSans] text-slate-800">
                      {draft.title}
                    </div>

                    <div className="text-xs text-slate-400 font-[PlusJakartaSans-Medium] mt-1">
                      Ref ID: {draft.id}
                    </div>
                  </td>

                  {/* Category */}
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-[PlusJakartaSans] border uppercase ${draft.categoryColor}`}
                    >
                      {draft.category}
                    </span>
                  </td>

                  {/* Last Edited */}
                  <td className="p-4">
                    <div className="text-sm font-[PlusJakartaSans-Medium] text-slate-600">
                      {draft.lastEdited}
                    </div>
                  </td>

                  {/* Status with Draft Icon */}
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-[PlusJakartaSans] border uppercase ${draft.statusColor}`}
                    >
                      <MdOutlineDrafts className="text-sm" />
                      {draft.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-1">
                      <button
                        className="text-slate-400 hover:text-green-600 p-2 hover:bg-green-50 rounded-lg transition-colors"
                        title="Publish"
                      >
                        <IoSendOutline size={18} />
                      </button>

                      <button
                        className="text-slate-400 hover:text-primary p-2 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <FiEdit size={18} />
                      </button>

                      <button
                        className="text-slate-400 hover:text-red-500 p-2 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <MdDeleteOutline size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
};

export default DraftNotificationsTable;

import React from "react";
import { FiEye, FiEdit } from "react-icons/fi";
import { MdCheckCircle } from "react-icons/md";

const historyData = [
  {
    id: 1,
    date: "Oct 24, 2023",
    status: "Released",
    link: "hsbte.org.in/result",
    updatedBy: "Admin",
  },
];

const HistoryTable = () => {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      
      {/* Header */}
      <div className="p-6 flex items-center justify-between border-b border-gray-50">
        <h3 className="font-[PlusJakartaSans] text-slate-800">
          Update History
        </h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          
          <thead>
            <tr className="bg-slate-50/50 text-slate-400 text-[11px] font-[PlusJakartaSans] uppercase tracking-wider">
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Link</th>
              <th className="px-6 py-4">Updated By</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50 text-sm">
            
            {historyData.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-16 text-center">
                  <p className="text-slate-500 font-[PlusJakartaSans-Medium]">
                    No history found
                  </p>
                </td>
              </tr>
            ) : (
              historyData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  
                  {/* Date */}
                  <td className="px-6 py-4 text-slate-500 font-[PlusJakartaSans-Medium]">
                    {item.date}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-2 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-[PlusJakartaSans-Medium] w-fit">
                      <MdCheckCircle className="w-4 h-4" />
                      {item.status}
                    </span>
                  </td>

                  {/* Link */}
                  <td className="px-6 py-4 text-slate-500 font-[PlusJakartaSans-Medium] truncate max-w-[200px]">
                    {item.link}
                  </td>

                  {/* Updated By */}
                  <td className="px-6 py-4 text-slate-700 font-[PlusJakartaSans-Medium]">
                    {item.updatedBy}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      
                      <button className="p-2 rounded-lg hover:bg-indigo-50 text-indigo-600 transition">
                        <FiEye className="w-4 h-4" />
                      </button>

                      <button className="p-2 rounded-lg hover:bg-indigo-50 text-indigo-600 transition">
                        <FiEdit className="w-4 h-4" />
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

export default HistoryTable;
import React from 'react'

import { FiFileText, FiPlayCircle, FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineFileExcel } from "react-icons/ai";

const RecentUploads = () => {
  return (

    <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div className="p-6 flex items-center justify-between border-b border-gray-50">
        <h3 className="font-[PlusJakartaSans] text-slate-800">Recent Uploads</h3>

        <a
          href="#"
          className="text-sm font-[PlusJakartaSans-Medium] text-indigo-600 hover:underline"
        >
          See all
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50 text-slate-400 text-[11px] font-[PlusJakartaSans] uppercase tracking-wider">
              <th className="px-6 py-4">Resource Title</th>
              <th className="px-6 py-4">Subject</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Upload Date</th>
              <th className="px-6 py-4">DLs</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50 text-sm">
            <UploadRow
              title="Exam Notes 2023.pdf"
              icon={<FiFileText className="w-4 h-4" />}
              iconBg="bg-red-50"
              iconColor="text-red-600"
              subject="Operating Systems"
              type="Note"
              typeBg="bg-blue-50"
              typeColor="text-blue-600"
              date="Oct 24, 2023"
              downloads="1,204"
            />

            <UploadRow
              title="Sorting Algorithms.mp4"
              icon={<FiPlayCircle className="w-4 h-4" />}
              iconBg="bg-indigo-50"
              iconColor="text-indigo-600"
              subject="Data Structures"
              type="Video"
              typeBg="bg-purple-50"
              typeColor="text-purple-600"
              date="Oct 23, 2023"
              downloads="856"
            />

            <UploadRow
              title="Lab Manual v2.doc"
              icon={<AiOutlineFileExcel className="w-4 h-4" />}
              iconBg="bg-emerald-50"
              iconColor="text-emerald-600"
              subject="Electrical Circuits"
              type="Manual"
              typeBg="bg-green-50"
              typeColor="text-green-600"
              date="Oct 22, 2023"
              downloads="432"
            />
          </tbody>
        </table>
      </div>
    </section>
  );
}

function UploadRow({
  title,
  icon,
  iconBg,
  iconColor,
  subject,
  type,
  typeBg,
  typeColor,
  date,
  downloads,
}) {
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 ${iconBg} ${iconColor} rounded-lg`}>
            {icon}
          </div>

          <span className="font-[PlusJakartaSans] text-slate-700 ">
            {title}
          </span>
        </div>
      </td>

      <td className="px-6 py-4 text-slate-500 font-[PlusJakartaSans-Medium]">{subject}</td>

      <td className="px-6 py-4">
        <span
          className={`px-2 py-1 ${typeBg} ${typeColor} rounded text-[10px] font-[PlusJakartaSans] uppercase`}
        >
          {type}
        </span>
      </td>

      <td className="px-6 py-4 text-slate-500 font-[PlusJakartaSans-Medium]">{date}</td>

      <td className="px-6 py-4 font-[PlusJakartaSans-Medium]">
        {downloads}
      </td>

      <td className="px-6 py-4 text-right">
        <button className="p-1 hover:bg-gray-200 rounded text-slate-400">
          <FiMoreHorizontal className="w-5 h-5" />
        </button>
      </td>
    </tr>
  );
}

export default RecentUploads
import React from "react";
import { FiEye } from "react-icons/fi";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";

const StatusBadge = ({ status }) => {
  const styles = {
    Pending: "bg-amber-50 text-amber-600",
    Approved: "bg-emerald-50 text-emerald-600",
    Rejected: "bg-rose-50 text-rose-600",
  };

  return (
    <span
      className={`px-2.5 py-1 rounded-full text-xs font-[PlusJakartaSans-Medium] ${styles[status]}`}
    >
      {status}
    </span>
  );
};

const ApplicationsTable = () => {
  const STUDENTS = [
    {
      id: "#DM-2024-001",
      name: "Arjun Sharma",
      email: "arjun.s@email.com",
      date: "Oct 12, 2024",
      branch: "Computer Sci.",
      status: "Pending",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "#DM-2024-002",
      name: "Priya Patel",
      email: "priya.p@email.com",
      date: "Oct 10, 2024",
      branch: "Mechanical",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },

    {
      id: "#DM-2024-003",
      name: "Rohit Verma",
      email: "rohit.v@email.com",
      date: "Oct 11, 2024",
      branch: "Civil",
      status: "Pending",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: "#DM-2024-004",
      name: "Sneha Gupta",
      email: "sneha.g@email.com",
      date: "Oct 09, 2024",
      branch: "Electrical",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: "#DM-2024-005",
      name: "Amit Yadav",
      email: "amit.y@email.com",
      date: "Oct 08, 2024",
      branch: "Computer Sci.",
      status: "Pending",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: "#DM-2024-006",
      name: "Kavya Singh",
      email: "kavya.s@email.com",
      date: "Oct 07, 2024",
      branch: "Mechanical",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: "#DM-2024-007",
      name: "Deepak Kumar",
      email: "deepak.k@email.com",
      date: "Oct 06, 2024",
      branch: "Civil",
      status: "Pending",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      id: "#DM-2024-008",
      name: "Neha Rathi",
      email: "neha.r@email.com",
      date: "Oct 05, 2024",
      branch: "Electrical",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      id: "#DM-2024-009",
      name: "Vikas Mehta",
      email: "vikas.m@email.com",
      date: "Oct 04, 2024",
      branch: "Computer Sci.",
      status: "Pending",
      avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      id: "#DM-2024-010",
      name: "Pooja Nair",
      email: "pooja.n@email.com",
      date: "Oct 03, 2024",
      branch: "Mechanical",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/18.jpg",
    },
    {
      id: "#DM-2024-011",
      name: "Sandeep Chauhan",
      email: "sandeep.c@email.com",
      date: "Oct 02, 2024",
      branch: "Civil",
      status: "Pending",
      avatar: "https://randomuser.me/api/portraits/men/60.jpg",
    },
    {
      id: "#DM-2024-012",
      name: "Anjali Mehra",
      email: "anjali.m@email.com",
      date: "Oct 01, 2024",
      branch: "Electrical",
      status: "Approved",
      avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    },
  ];

  return (
    <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden  ">
      {/* Header */}
      <div className="p-6 border-b border-gray-50">
        <h3 className="font-[PlusJakartaSans] text-slate-800">Applications</h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left ">
          <thead>
            <tr className="bg-slate-50/50 text-slate-400 text-[11px] uppercase tracking-wider font-[PlusJakartaSans]">
              <th className="px-6 py-4">Student</th>
              <th className="px-6 py-4">App ID</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Branch</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50 text-sm">
            {STUDENTS.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-6 py-16 text-center">
                  <p className="text-slate-500 font-[PlusJakartaSans-Medium]">
                    No applications found
                  </p>
                </td>
              </tr>
            ) : (
              STUDENTS.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  {/* Student */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="size-9 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-[PlusJakartaSans] text-slate-700">
                          {student.name}
                        </p>
                        <p className="text-xs text-slate-500 font-[PlusJakartaSans-Medium]">
                          {student.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* ID */}
                  <td className="px-6 py-4 text-slate-500 font-[PlusJakartaSans-Medium]">
                    {student.id}
                  </td>

                  {/* Date */}
                  <td className="px-6 py-4 text-slate-500 font-[PlusJakartaSans-Medium]">
                    {student.date}
                  </td>

                  {/* Branch */}
                  <td className="px-6 py-4 text-slate-600 font-[PlusJakartaSans-Medium]">
                    {student.branch}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <StatusBadge status={student.status} />
                  </td>

                  {/* Action */}
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 rounded-lg hover:bg-indigo-50 text-indigo-600 transition">
                      <FiEye className="w-4 h-4" />
                    </button>
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

export default ApplicationsTable;

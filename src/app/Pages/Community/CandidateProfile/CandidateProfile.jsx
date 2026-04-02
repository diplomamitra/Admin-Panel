import React from "react";
import {
  FiEdit2,
  FiMoreVertical,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { LuIdCard } from "react-icons/lu";
import { BiSolidSchool } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { HiCalendarDateRange } from "react-icons/hi2";

import { Stat } from "./Components/Stat";
import { Section } from "./Components/Section";
import { Skill } from "./Components/Skill";
import { Info } from "./Components/Info";
import { TimelineItem } from "./Components/TimelineItem";

const CandidateProfile = () => {
  return (
    <aside className="w-100 border-l rounded-2xl bg-white overflow-y-auto no-scrollbar hidden lg:flex flex-col font-[PlusJakartaSans] border border-slate-200">
      {" "}
      {/* Header */}
      <div className=" bg-white border-b border-gray-50 p-5 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900">Candidate Profile</h3>

        <div className="flex gap-2">
          <button className="h-8 w-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50">
            <FiEdit2 size={16} />
          </button>
          <button className="h-8 w-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50">
            <FiMoreVertical size={16} />
          </button>
        </div>
      </div>
      <div className="p-6 space-y-8">
        {/* Profile */}
        <div className="text-center">
          <div className="relative mx-auto h-24 w-24 rounded-full p-1 ring-4 ring-primary/10">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profile"
              className="h-full w-full rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-green-500 border-4 border-white"></span>
          </div>

          <h2 className="mt-4 text-xl font-bold text-slate-900">Harjeet</h2>

          <p className="text-sm font-medium text-primary">
            ( Computer Engg ) Govt Polytechnic Mandkola
          </p>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              STU-8821
            </span>

            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              pending
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
          <Stat label="Total Skills" value="5" />
          <Stat label="Postion" value="12" border />
          <Stat label="College Rank" value="#5" />
        </div>

        {/* Contact */}
        <Section title="Contact Details">
          <Info icon={<FiMail />} text="Harjeetemail123@gmail.com" />
          <Info icon={<FiPhone />} text="+91 9306225156" />
        </Section>
        <Section title="College Details">
          <Info icon={<LuIdCard />} text="221410800020" />
          <Info icon={<BiSolidSchool />} text="Govt Polytechnic Mandkola" />
          <Info icon={<SiGoogleclassroom />} text="Computer Engg." />
          <Info icon={<HiCalendarDateRange />} text="3rd Year" />
        </Section>

        {/* Skills */}
        <Section title="Technical Skills">
          <div className="flex flex-wrap gap-2">
            <Skill text="React.js" />
            <Skill text="Node.js" />
            <Skill text="PostgreSQL" />
            <Skill text="Docker" />
          </div>
        </Section>

        {/* Timeline */}
        <Section title="Timeline">
          <div className="relative space-y-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-slate-200">
            <TimelineItem
              title="Application Submitted"
              time="25 Mar 2026 (5:00 PM)"
              color="bg-green-500"
            />

            <TimelineItem
              title="Application Confirm"
              time="26 Mar 2026  (12:00 PM)"
              color="bg-blue-500"
            />
          </div>
        </Section>
      </div>
      {/* Footer */}
      <div className="sticky bottom-0 mt-auto border-t border-slate-100 bg-white p-6">
        <div className="flex gap-3">
          {/* Approve */}
          <button className="flex-1 rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition">
            Approve
          </button>

          {/* Reject */}
          <button className="flex-1 rounded-xl bg-red-500 py-3 text-sm font-semibold text-white hover:bg-red-600 transition">
            Reject
          </button>

          {/* Mail */}
          <button className="rounded-xl border border-slate-200 px-4 py-3 text-slate-600 hover:bg-slate-50 flex items-center justify-center">
            <FiMail size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CandidateProfile;

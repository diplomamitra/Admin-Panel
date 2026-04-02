import React from "react";
import PageHeader from "../../components/PageHeader";
import DepartmentTable from "./Components/DepartmentTable";
import Statecardmac from "../../components/NewStateCard/Statecardmac";
import { FiPlusCircle } from "react-icons/fi";
import { AddDepartmentModal } from "./Model/AddDepartmentModal";
import ActionCard from "./Components/ActionCard";
import { MdMenuBook } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";

import {
  MdBusiness,
  MdDomainAdd,
  MdEventNote,
  MdCalendarMonth,
} from "react-icons/md";
import RecentActivity from "./Components/RecentActivity";
import RecentUploads from "../Dashboard/RecentUploads";

const AcademicStructure = () => {
  const StateValues = [
    {
      title: "Total Departments",
      value: "30",
      trend: "+9%",
      trendType: "positive",
    },
    {
      title: "Total Semesters",
      value: "400",
      trend: "+150%",
      trendType: "positive",
    },
    {
      title: "Total Subject",
      value: "900",
      trend: "+150%",
      trendType: "positive",
    },
  ];
  return (
    <div>
      <PageHeader title="Academic Structure" />

      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div>
            <h2 className="text-2xl font-[PlusJakartaSans] text-slate-800">
              Academic Overview
            </h2>
            <p className="text-sm text-slate-500 font-[PlusJakartaSans-Medium]">
              Organize and manage departments, semesters, and academic hierarchy
            </p>
          </div>
        </div>

        <Statecardmac StateValues={StateValues} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <ActionCard
            icon={<MdBusiness className="text-3xl text-white" />}
            path="departments"
            bgIcon={
              <MdDomainAdd className="text-[200px] text-slate-900 rotate-12" />
            }
            title="Add Branch / Department"
            description="Create and manage academic departments or branches for your institution."
            buttonText="Add Department"
          />

          {/* Card 2 */}
          <ActionCard
            icon={<MdEventNote className="text-3xl text-white" />}
            bgIcon={
              <MdCalendarMonth className="text-[200px] text-slate-900 -rotate-12" />
            }
            title="Add Semesters"
            path="semesters"
            description="Create and manage semesters for each department to organize your academic structure."
            buttonText="Add Semester"
            dark
          />
          {/* Card 3 */}

          <ActionCard
            icon={<MdMenuBook className="text-3xl text-white" />}
            bgIcon={
              <MdLibraryBooks className="text-[200px] text-slate-900 -rotate-12" />
            }
            title="Add Subjects"
            path="subjects"
            description="Add and manage subjects for each semester with proper codes and structure."
            buttonText="Add Subject"
            dark
          />
        </div>
        <RecentActivity />
      </div>
    </div>
  );
};

export default AcademicStructure;

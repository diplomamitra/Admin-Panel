import React, { useState } from "react";
import PageHeader from "../../../../components/PageHeader";

import { FiPlusCircle } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import FiltersBar from "../../Components/FiltersBar";
import Statecardmac from "../../../../components/NewStateCard/Statecardmac";
import { useNavigate } from "react-router-dom";
import RecentUploads from "../../../Dashboard/RecentUploads";
import SubjectTables from "../../Components/SubjectTables";
import AddButton from "../../../../components/AddButton";
import { AddSubjectModel } from "../../Model/AddSubjectModel";
const AddSubject = () => {
  // ✅ REQUIRED STATE
  const [department, setDepartment] = useState("All Departments");
  const [status, setStatus] = useState("All Statuses");
  const StateValues = [
    {
      title: "Total Subject",
      value: "2100",
      trend: "+90%",
      trendType: "positive",
    },
    {
      title: "Active Subject",
      value: "1800",
      trend: "+60%",
      trendType: "positive",
    },
    {
      title: "Inactive Subject",
      value: "300",
      trend: "+6%",
      trendType: "negative",
    },
  ];
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader title="Subject Management" />
      <div className="p-4 space-y-6">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-1 text-sm font-[PlusJakartaSans-Medium]">
            <span
              className="text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer"
              onClick={() => navigate("/academic")}
            >
              Academic Structure
            </span>

            <MdKeyboardArrowRight className="text-slate-400 text-base" />

            <span className="text-indigo-600 font-semibold">
              Subject Management
            </span>
          </nav>

          <AddButton
            BtnTitle="Create Subject"
            // Path="/academic/departments/add"
          />
        </div>

        {/* STATS */}
        <Statecardmac StateValues={StateValues} />
        

        <FiltersBar />
        <SubjectTables/>  
        <AddSubjectModel/>
      </div>
    </div>
  );
};

export default AddSubject;

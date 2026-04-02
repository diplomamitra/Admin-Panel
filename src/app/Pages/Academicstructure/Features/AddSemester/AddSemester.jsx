import React, { useState } from "react";
import PageHeader from "../../../../components/PageHeader";
import Statecardmac from "../../../../components/NewStateCard/Statecardmac";
import { FiPlusCircle } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import FiltersBar from "../../Components/FiltersBar";
import DepartmentTable from "../../Components/DepartmentTable";
import { useNavigate } from "react-router-dom";
import AddButton from "../../../../components/AddButton";
import SemesterTable from "../../Components/SemesterTable";
import { AddSemesterModal } from "../../Model/AddSemesterModel";

const AddSemester = () => {
  // ✅ REQUIRED STATE
  const [department, setDepartment] = useState("All Departments");
  const [status, setStatus] = useState("All Statuses");

  const StateValues = [
    {
      title: "Total Semesters",
      value: "30",
      trend: "+9%",
      trendType: "positive",
    },
    {
      title: "Active Semesters",
      value: "25",
      trend: "+6%",
      trendType: "positive",
    },
    {
      title: "Inactive Semesters",
      value: "5",
      trend: "+6%",
      trendType: "negative",
    },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <PageHeader title="Semesters Management" />

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
              Semesters Management
            </span>
          </nav>

          

          <AddButton
            BtnTitle="Create Semesters"
            // Path="/academic/departments/add"
          />
        </div>

        {/* STATS */}
        <Statecardmac StateValues={StateValues} />

        {/* FILTERS */}
        <FiltersBar
          department={department}
          status={status}
          onDepartmentChange={setDepartment}
          onStatusChange={setStatus}
          onClear={() => {
            setDepartment("All Departments");
            setStatus("All Statuses");
          }}
          onDownload={() => console.log("Download")}
          onPrint={() => console.log("Print")}
        />

        <SemesterTable   />
        <AddSemesterModal/>
      </div>
    </div>
  );
};

export default AddSemester;

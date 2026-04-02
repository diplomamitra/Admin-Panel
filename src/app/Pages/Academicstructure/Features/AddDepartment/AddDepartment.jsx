import React from "react";
import PageHeader from "../../../../components/PageHeader";
import DepartmentTable from "../../Components/DepartmentTable";
import Statecardmac from "../../../../components/NewStateCard/Statecardmac";
import { FiPlusCircle } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AddDepartmentModal } from "../../Model/AddDepartmentModal";
import { useNavigate } from "react-router-dom";
import AddButton from "../../../../components/AddButton";

const AddDepartment = () => {
  const StateValues = [
    {
      title: "Total Departments",
      value: "30",
      trend: "+93%",
      trendType: "positive",
    },
    {
      title: "Active Departments",
      value: "25",
      trend: "+86%",
      trendType: "positive",
    },
    {
      title: "Inactive Departments",
      value: "5",
      trend: "+6%",
      trendType: "negative",
    },
  ];
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader title="Departments Management" />

      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div>
            <nav className="flex items-center gap-1 text-sm font-[PlusJakartaSans-Medium]">
              <span
                className="text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer"
                onClick={() => navigate("/academic")}
              >
                Academic Structure
              </span>

              <MdKeyboardArrowRight className="text-slate-400 text-base" />

              <span className="text-indigo-600 font-semibold">
                Departments Management
              </span>
            </nav>
          </div>

          {/* Right side */}
          

          <AddButton
            BtnTitle="Create Departments"
            // Path="/academic/departments/add"
            // onClick={()=><AddDepartmentModal/>}
          />
        </div>

        <Statecardmac StateValues={StateValues} />
        <DepartmentTable />
        <AddDepartmentModal/>
 
      </div>
    </div>
  );
};

export default AddDepartment;

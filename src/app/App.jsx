import React from "react";
import Sidebar from "./layouts/AdminLayout/Sidebar";
import PageHeader from "./components/PageHeader";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Community from "./Pages/Community/Community";
import Notification from "./Pages/Notifications/Notification";
import Result from "./Pages/Result/Result";
import ApplicationResources from "./Pages/Applicationresources/ApplicationResources";
import ApplicationUpdate from "./Pages/Applicationupdate/ApplicationUpdate";
import DatabaseDashboard from "./Pages/DatabaseFlow/DatabaseDashboard";
import UpdateHistoryTable from "./Pages/Applicationupdate/UpdateHistoryTable";
import AcademicStructure from "./Pages/Academicstructure/AcademicStructure";
import DepartmentTable from "./Pages/Academicstructure/Components/DepartmentTable";
import AddDepartment from "./Pages/Academicstructure/Features/AddDepartment/AddDepartment";
import AddSemester from "./Pages/Academicstructure/Features/AddSemester/AddSemester";
import Pyqs from "./Pages/Pyqs/Pyqs";
import { Outlet } from "react-router-dom";

const App = () => {
  
  return (
    <div className="flex h-screen bg-[#f6f6f8] overflow-hidden">
      {/* Sidebar */}
      <div className="h-screen">
        <Sidebar/>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-auto no-scrollbar  ">
        <Outlet/>
      </div>
    </div>
  );
};

export default App;

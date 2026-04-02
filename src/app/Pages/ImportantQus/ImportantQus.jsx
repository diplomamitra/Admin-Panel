import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import Statecardmac from "../../components/NewStateCard/Statecardmac";
import AddButton from "../../components/AddButton";
import ResourceTable from "../../components/ResourcesTable/ResourceTable";
import FilterBar from "../../components/Filters/FilterBar";

const ImportantQus = () => {
  const [department, setDepartment] = useState("All Departments");
  const [status, setStatus] = useState("All Statuses");
  
  const StateValues = [
  {
    title: "Total Important Qus",
    value: "1,250",
    subtitle: "In database",
    trend: "+80 added this week",
    trendType: "positive",
  },
  {
    title: "Total Subjects Covered",
    value: "95",
    subtitle: "With important questions",
    trend: "Out of 120",
    trendType: "neutral",
  },
  {
    title: "Total Papers Analyzed",
    value: "2,800",
    subtitle: "Used for extraction",
    trend: "+150 this month",
    trendType: "positive",
  },
  {
    title: "Repeated Questions",
    value: "540",
    subtitle: "Frequency ≥ 2",
    trend: "Core patterns",
    trendType: "neutral",
  },
  {
    title: "Unprocessed Papers",
    value: "320",
    subtitle: "Not analyzed yet",
    trend: "Needs attention",
    trendType: "negative",
  },
  {
    title: "System Coverage",
    value: "78%",
    subtitle: "Overall completeness",
    trend: "+4% improved",
    trendType: "positive",
  },
];
  return (
    <div>
      <PageHeader title="Important Question" />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div>
            <nav className="flex items-center gap-1 text-sm font-[PlusJakartaSans-Medium]">
              <p className="text-sm text-slate-500">
                Analyze past papers, identify high-frequency questions, and
                manage importance tagging for accurate exam insights
              </p>
            </nav>
          </div>

          <AddButton BtnTitle="Add Important Question" Path="add" />
        </div>
        <Statecardmac StateValues={StateValues} />
                <FilterBar/>
        
        <ResourceTable ResourceFilter={"important_questions"} ResourcesName={"Important Questions List"} />
      </div>
    </div>
  );
};

export default ImportantQus;

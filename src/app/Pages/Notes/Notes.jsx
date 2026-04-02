import React from "react";
import Statecardmac from "../../components/NewStateCard/Statecardmac";
import AddButton from "../../components/AddButton";
import PageHeader from "../../components/PageHeader";
import ResourceTable from "../../components/ResourcesTable/ResourceTable";
import FilterBar from "../../components/Filters/FilterBar";

const Notes = () => {
  const StateValues = [
    {
      title: "Total Notes",
      value: "10,500",
      subtitle: "Available to users",
      trend: "+120 this week",
      trendType: "positive",
    },
    {
      title: "Coverage",
      value: "68%",
      subtitle: "Database completeness",
      trend: "- needs improvement",
      trendType: "neutral",
    },
    {
      title: "Missing Papers",
      value: "5,000",
      subtitle: "Not yet uploaded",
      trend: "High priority",
      trendType: "negative",
    },
    {
      title: "Recent Uploads",
      value: "500",
      subtitle: "Last 7 days",
      trend: "+60 vs last week",
      trendType: "positive",
    },
    {
      title: "Total Downloads",
      value: "50K",
      subtitle: "User engagement",
      trend: "+12% growth",
      trendType: "positive",
    },
    {
      title: "Active Subjects",
      value: "120",
      subtitle: "With at least 1 paper",
      trend: "Out of 180",
      trendType: "neutral",
    },
  ];
  return (
    <div>
      <PageHeader title="Notes" />

      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div>
            <nav className="flex items-center gap-1 text-sm font-[PlusJakartaSans-Medium]">
              <p className="text-sm text-slate-500">
                Manage notes, track coverage, and ensure every subject has
                complete study material for students
              </p>
            </nav>
          </div>

          <AddButton BtnTitle="Add Notes" Path="add" />
        </div>
        <Statecardmac StateValues={StateValues} />
        <FilterBar />

        <ResourceTable ResourceFilter={"notes"} ResourcesName={"Notes List"} />
      </div>
    </div>
  );
};

export default Notes;

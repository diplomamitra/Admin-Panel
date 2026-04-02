import React from "react";
import PageHeader from "../../components/PageHeader";
import UpdateHistoryTable from "./UpdateHistoryTable";
import CreateUpdateForm from "./CreateUpdateForm";
import Statecardmac from "../../components/NewStateCard/Statecardmac";

const ApplicationUpdate = () => {
  const StateValues = [
    {
      title: "Current Version",
      value: "v 0.1",
      trend: "+4.5%",
      trendType: "positive",
    },
    {
      title: "Total Downloads",
      value: "12",
      trend: "Running",
      trendType: "neutral",
    },
    {
      title: "Platform Health",
      value: "Stable",
      trend: "99.9%",
      trendType: "warning",
    },
  ];
  return (
    <div>
      <PageHeader title="Application Update" />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <Statecardmac StateValues={StateValues} />

        <CreateUpdateForm />
        <UpdateHistoryTable />
      </div>
    </div>
  );
};

export default ApplicationUpdate;

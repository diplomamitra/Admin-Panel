import React from "react";
import PageHeader from "../../components/PageHeader";
import Statecardmac from "../../components/NewStateCard/Statecardmac";

const ApplicationResources = () => {
  const StateValues = [
  {
    title: "Total API Requests",
    value: "2.4M",
    trend: "+9%",
    trendType: "positive",
  },
  {
    title: "Active Users (Today)",
    value: "3,842",
    trend: "+6%",
    trendType: "positive",
  },
  {
    title: "Server Uptime",
    value: "99.92%",
    trend: "Stable",
    trendType: "neutral",
  },
  {
    title: "Database Size",
    value: "12.6 GB",
    trend: "+4%",
    trendType: "positive",
  },
  {
    title: "Storage Used (PDFs)",
    value: "48.3 GB",
    trend: "+11%",
    trendType: "positive",
  },
  {
    title: "Failed Requests",
    value: "1,204",
    trend: "-3%",
    trendType: "positive",
  },
  {
    title: "Avg Response Time",
    value: "320 ms",
    trend: "-8%",
    trendType: "positive",
  },
  {
    title: "Crash Reports",
    value: "27",
    trend: "+2%",
    trendType: "negative",
  },
  {
    title: "New Uploads (Today)",
    value: "86",
    trend: "+14%",
    trendType: "positive",
  },
  {
    title: "Total Downloads",
    value: "78.5k",
    trend: "+21%",
    trendType: "positive",
  },
];
  return (
    <div>
      <PageHeader title="Application Resources" />

      <div className="p-4 space-y-6">{<Statecardmac StateValues={StateValues} />}</div>
    </div>
  );
};

export default ApplicationResources;

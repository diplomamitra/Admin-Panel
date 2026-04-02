import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import RecentUploads from "./RecentUploads";
import TrendingPaperRequests from "./TrendingPaperRequests";
import ActivityPulse from "./ActivityPulse";
import ActivityList from "./ActivityList";
import Statecardmac from "../../components/NewStateCard/Statecardmac";

const Dashboard = () => {
  const requests = [
    { name: "Mechanical Engineering", count: 24, highlight: true },
    { name: "Computer Science", count: 12 },
    { name: "Civil Diploma", count: 8 },
    { name: "Electric Circuits", count: 42 },
    { name: "Mathematics III", count: 19 },
    { name: "Workshop Practice", count: 5 },
  ];

  const StateValues = [
    {
      title: "Current Active Users",
      value: "128",
      trend: "+12%",
      trendType: "positive",
    },
    {
      title: "Active Users (Today)",
      value: "3,842",
      trend: "+6%",
      trendType: "positive",
    },
    {
      title: "Total Downloads",
      value: "78.5k",
      trend: "+18%",
      trendType: "positive",
    },
    {
      title: "Avg. Session Time",
      value: "6m 24s",
      trend: "+9%",
      trendType: "positive",
    },
    {
      title: "Total Branches",
      value: "12",
      trend: "+2",
      trendType: "positive",
    },
    {
      title: "Total Semesters",
      value: "96",
      trend: "Stable",
      trendType: "neutral",
    },
    {
      title: "Subjects Added",
      value: "1,284",
      trend: "+18%",
      trendType: "positive",
    },
    {
      title: "PYQs Uploaded",
      value: "3,742",
      trend: "+12%",
      trendType: "positive",
    },
    {
      title: "Notes Available",
      value: "1,126",
      trend: "+7%",
      trendType: "positive",
    },
    {
      title: "Pending Approvals",
      value: "34",
      trend: "-5%",
      trendType: "positive",
    },
    {
      title: "Rejected Resources",
      value: "82",
      trend: "+3%",
      trendType: "negative",
    },
    {
      title: "Active Contributors",
      value: "56",
      trend: "+10%",
      trendType: "positive",
    },
  ];

  const activityData = [
    "40%",
    "55%",
    "30%",
    "70%",
    "45%",
    "60%",
    "90%",
    "50%",
    "35%",
    "65%",
    "80%",
    "40%",
  ];

  useState(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div>
      <PageHeader title="Dashboard" />

      <div className="p-6 space-y-6">
        {/* Top Cards */}
        <Statecardmac StateValues={StateValues} />

        {/* Middle Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            <TrendingPaperRequests requests={requests} />

            <ActivityPulse data={activityData} />
          </div>

          {/* Right column */}
          <div className="lg:col-span-1 h-147">
            <ActivityList />
          </div>
        </div>

        {/* Bottom */}
        <RecentUploads />
      </div>
    </div>
  );
};

export default Dashboard;

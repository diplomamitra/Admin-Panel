import React from "react";
import PageHeader from "../../components/PageHeader";

import {
  MdOutlinePendingActions,
  MdVerifiedUser,
  MdOutlineInventory,
} from "react-icons/md";

import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";
import { IoSyncOutline } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";

import ApplicationsTable from "./ApplicationsTable";
import Statecardmac from "../../components/NewStateCard/Statecardmac";
import CandidateProfile from "./CandidateProfile/CandidateProfile";

const Community = () => {
  const stats = [
    {
      label: "Total Applications",
      value: "1,284",
      icon: <MdOutlineInventory className="text-[#1337ec]" />,
      trend: <HiArrowTrendingUp />,
      trendText: "12.5% this month",
      trendColor: "text-emerald-500",
      trendBg: "bg-[#e7ebfd]",
    },
    {
      label: "Pending Applications",
      value: "156",
      icon: <MdOutlinePendingActions className="text-[#f6a824]" />,
      trend: <HiArrowTrendingDown />,
      trendText: "-4.2% backlog",
      trendColor: "text-amber-500",
      trendBg: "bg-[#fffbeb]",
    },
    {
      label: "Approved Applications",
      value: "892",
      icon: <MdVerifiedUser className="text-[#059669]" />,
      trend: <IoSyncOutline />,
      trendText: "Updated 2m ago",
      trendColor: "text-slate-400",
      trendBg: "bg-[#d1fae5]",
    },
    {
      label: "Rejected Applications",
      value: "236",
      icon: <FcCancel />,
      trend: <IoSyncOutline />,
      trendText: "Updated 2m ago",
      trendColor: "text-slate-400",
      trendBg: "bg-[#ffe4e6]",
    },
  ];

  const StateValues = [
    {
      title: "Total Applications",
      value: "1,284",
      trend: "+12.5%",
      trendType: "positive",
    },
    {
      title: "Pending Applications",
      value: "156",
      trend: "-4.2%",
      trendType: "warning",
    },
    {
      title: "Approved Applications",
      value: "892",
      trend: "Updated",
      trendType: "neutral",
    },
    {
      title: "Rejected Applications",
      value: "236",
      trend: "Updated",
      trendType: "neutral",
    },
  ];

  return (
    <div>
      <PageHeader title="Community Management" />

      <div className="p-6 space-y-6 ">
        {/* Stats */}
        <Statecardmac StateValues={StateValues} />

        <div className="flex gap-4 h-screen overflow-hidden ">
          {/* Left: Table */}
          <div className="flex-1 overflow-y-auto">
            <ApplicationsTable />
          </div>

          {/* Right: Profile Panel */}
          <CandidateProfile />
        </div>
      </div>
    </div>
  );
};

export default Community;

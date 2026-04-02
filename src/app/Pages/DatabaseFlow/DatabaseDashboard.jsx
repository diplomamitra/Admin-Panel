import React from "react";
import PageHeader from "../../components/PageHeader";
import Statecardmac from "../../components/NewStateCard/Statecardmac";
import StatsGrid from "../../components/AnalysisCard/StatsGrid";

import { HiArrowTrendingUp, HiArrowTrendingDown } from "react-icons/hi2";
import { FaFolderOpen } from "react-icons/fa6";

import { IoSyncOutline, IoDocuments, IoTimer } from "react-icons/io5";
import { MdStorage } from "react-icons/md";
import { ResultsSection } from "./ResultsSection";

const DatabaseDashboard = () => {
  const stats = [
    {
      label: "Total Folder",
      value: "16",
      icon: <FaFolderOpen className="text-blue-600" />,
      trend: <HiArrowTrendingUp />,
      trendText: "4.5% this month",
      trendColor: "text-blue-600",
      trendBg: "bg-blue-50",
    },
    {
      label: "Total Files",
      value: "15,010",
      icon: <IoDocuments className="text-indigo-600" />,
      trend: <HiArrowTrendingUp />,
      trendText: "4.5% this month",
      trendColor: "text-indigo-600",
      trendBg: "bg-indigo-50",
    },

    {
      label: "File Size",
      value: "3 MB",
      icon: <MdStorage className="text-emerald-600" />,
      trend: <IoSyncOutline />,
      trendText: "Syncing...",
      trendColor: "text-emerald-600",
      trendBg: "bg-emerald-50",
    },

    {
      label: "Searching Time",
      value: "0.9 Sec",
      icon: <IoTimer className="text-amber-600" />,
      trend: <HiArrowTrendingDown />,
      trendText: "99.9% users",
      trendColor: "text-amber-600",
      trendBg: "bg-amber-50",
    },
  ];
  return (
    <div>
      <PageHeader title="Database Dashboard" />

      <div className="p-4 space-y-6">
        <StatsGrid stats={stats} />
      </div>
      <div className="p-4">
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-3">
          {/* Input */}
          <input
            type="text"
            placeholder="Search files..."
            className="flex-1 outline-none text-sm font-[PlusJakartaSans] text-gray-800 placeholder:text-gray-400"
          />

          {/* Button */}
          <button className="px-6 py-2 text-sm font-[PlusJakartaSans] bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Search
          </button>
        </div>
        <ResultsSection />
      </div>
    </div>
  );
};

export default DatabaseDashboard;

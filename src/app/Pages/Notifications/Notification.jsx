import React from "react";
import PageHeader from "../../components/PageHeader";
import StatsGrid from "../../components/AnalysisCard/StatsGrid";

import { IoNotifications } from "react-icons/io5";
import { MdOutlineSchedule } from "react-icons/md";
import { HiArrowTrendingUp, HiArrowTrendingDown } from "react-icons/hi2";
import { IoSyncOutline } from "react-icons/io5";
import { AiFillSound } from "react-icons/ai";
import CreateNotificationForm from "./CreateNotificationForm";
import RecentNotificationsTable from "./RecentNotificationsTable";
import DraftNotificationsTable from "./DraftNotificationsTable";
import { useLocation } from "react-router-dom";
import Statecardmac from "../../components/NewStateCard/Statecardmac";



const Notification = () => {
  
  // const { pathname } = useLocation();
  // console.log(pathname)
  const StateValues = [
  {
    title: "Total Notifications",
    value: "25",
    trend: "+4.5%",
    trendType: "positive",
  },
  {
    title: "Active Notifications",
    value: "12",
    trend: "Running",
    trendType: "neutral",
  },
  {
    title: "Upcoming Notifications",
    value: "8",
    trend: "Scheduled",
    trendType: "warning",
  },
];
  return (
    <div>
      <PageHeader title="Notifications" />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <Statecardmac StateValues={StateValues} />
        <CreateNotificationForm/>
        <DraftNotificationsTable/>
        <RecentNotificationsTable/>
      </div>
    </div>
  );
};

export default Notification;

import React, { useState } from "react";
import AppLogo from "../../assets/images/AppLogo.png";
import SidebarFeatures from "./SidebarFeatures";
import SidebarUser from "./SidebarUser";
import Sidebarbutton from "./Sidebarbutton";
import { PiTreeStructureDuotone } from "react-icons/pi";

import {
  TbSmartHome,
  TbFileText,
  TbHelpSquare,
  TbNotebook,
  TbLibrary,
  TbListDetails,
  TbReportAnalytics,
  TbBell,
  TbUsers,
  TbRefresh,
} from "react-icons/tb";
import { HiMiniServerStack } from "react-icons/hi2";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`relative ${collapsed ? "w-20" : "w-64"} h-screen border-r border-slate-200 flex flex-col bg-[#f8fafc] transition-all duration-300`}
    >
      {/* Header */}
      <div className="ps-4 h-16 flex items-center gap-3 border-b border-slate-200">
        <img src={AppLogo} alt="logo" className="w-10 h-10" />

        {!collapsed && (
          <div className="relative flex-1">
            <h1 className="font-semibold text-[#0f172a] text-lg font-[PlusJakartaSans]">
              Diploma Mitra
            </h1>

            <p className="text-sm text-gray-500 font-[PlusJakartaSans-Medium]">
              Admin Panel
            </p>
          </div>
        )}

        {/* ✅ Single Button (no duplicate) */}
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
          <Sidebarbutton
            onClick={() => setCollapsed(!collapsed)}
            collapsed={collapsed}
          />
        </div>
      </div>

      {/* Features */}
      <div className="flex-1 p-4 space-y-2 overflow-y-auto">
        <p
          className={`text-xs text-[#544be6] font-[PlusJakartaSans] uppercase ${collapsed && "hidden"}`}
        >
          Features
        </p>

        <SidebarFeatures
          icon={TbSmartHome}
          title="Dashboard"
          path="/"
          collapsed={collapsed}
        />
        <SidebarFeatures
          icon={PiTreeStructureDuotone}
          title="Academic Structure"
          path="/academic"
          collapsed={collapsed}
        />
        <SidebarFeatures
          icon={TbFileText}
          title="Previous Papers"
          path="/pyq"
          collapsed={collapsed}
        />
        <SidebarFeatures
          icon={TbHelpSquare}
          title="Important Qus"
          path="/imp"
          collapsed={collapsed}
        />
        <SidebarFeatures
          icon={TbNotebook}
          title="Notes"
          path="/notes"
          collapsed={collapsed}
        />
        <SidebarFeatures
          icon={TbLibrary}
          title="Book Library"
          path="/book-library"
          collapsed={collapsed}
        />
        <SidebarFeatures
          icon={TbListDetails}
          title="Syllabus"
          path="/syllabus"
          collapsed={collapsed}
        />
        <SidebarFeatures
          icon={TbReportAnalytics}
          title="Result"
          path="/result"
          collapsed={collapsed}
        />
        <SidebarFeatures
          icon={TbBell}
          title="Notifications"
          path="/notifications"
          collapsed={collapsed}
        />
        <SidebarFeatures
          icon={TbUsers}
          title="Community"
          collapsed={collapsed}
          path="/community"
        />
        <SidebarFeatures
          icon={TbRefresh}
          title="Application Update"
          collapsed={collapsed}
          path="/updates"
        />
        {/* <SidebarFeatures
          icon={HiMiniServerStack}
          title="Application Resources"
          collapsed={collapsed}
          path="/resources"
        /> */}
      </div>

      <SidebarUser collapsed={collapsed} />
    </div>
  );
};

export default Sidebar;

import React from "react";
import {
  FiUpload,
  FiCheckCircle,
  FiAlertTriangle,
  FiShield,
  FiUsers,
  FiDownload,
  FiCpu,
  FiActivity
} from "react-icons/fi";

const activities = [
  {
    id: 1,
    icon: FiActivity,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50",
    title: "App Information",
    subtitle: "Version 1.2.4 deployed successfully",
    meta: "System • just now",
  },
  {
    id: 2,
    icon: FiUsers,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    title: "High Traffic Detected",
    subtitle: "Active users crossed 1200 (target 1000)",
    meta: "2 minutes ago",
  },
  {
    id: 3,
    icon: FiCpu,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
    title: "Server Load Increased",
    subtitle: "CPU usage reached 78%",
    meta: "5 minutes ago",
  },
  {
    id: 4,
    icon: FiShield,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
    title: "Security Scan Completed",
    subtitle: "No vulnerabilities detected",
    meta: "10 minutes ago",
  },
  {
    id: 5,
    icon: FiAlertTriangle,
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50",
    title: "Application Crash Detected",
    subtitle: "Error in API response handler",
    meta: "20 minutes ago",
  },
  {
    id: 6,
    icon: FiDownload,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50",
    title: "Target Downloads Progress",
    subtitle: "Daily downloads reached 8.4k / target 10k",
    meta: "30 minutes ago",
  },
  {
    id: 7,
    icon: FiCheckCircle,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    title: "Application Testing",
    subtitle: "All systems running normally",
    meta: "1 hour ago",
  },
];

export default function ActivityList() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 h-full flex flex-col">

      {/* Header */}
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-lg text-slate-800 font-[PlusJakartaSans]">
          System Activity & Alerts
        </h2>
      </div>

      {/* Activity List */}
      <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-4 pt-4 max-h-[520px]">

        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="flex gap-4 items-start pb-4 border-b border-slate-100 last:border-0"
            >
              {/* Icon */}
              <div
                className={`p-2 rounded-lg ${activity.iconBg} ${activity.iconColor}`}
              >
                <Icon size={16} />
              </div>

              {/* Content */}
              <div className="flex-1">

                <p className="text-sm text-slate-800 font-[PlusJakartaSans-Medium]">
                  {activity.title}
                </p>

                <p className="text-xs text-slate-500 font-[PlusJakartaSans-Medium]">
                  {activity.subtitle}
                </p>

                <span className="text-[10px] text-slate-400 mt-1 block font-[PlusJakartaSans-Medium]">
                  {activity.meta}
                </span>

              </div>
            </div>
          );
        })}

      </div>

      {/* Footer */}
      <button className="w-full py-4 text-indigo-600 text-sm font-[PlusJakartaSans-Medium] hover:bg-slate-50 border-t border-slate-100 rounded-b-xl transition-colors">
        View Full System Log
      </button>

    </div>
  );
}
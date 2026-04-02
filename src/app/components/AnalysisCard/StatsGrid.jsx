import React from "react";
import StatsCard from "./StatsCard";

export default function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((item, index) => (
        <StatsCard
          key={index}
          icon={item.icon}
          label={item.label}
          value={item.value}
          trend={item.trend}
          trendText={item.trendText}
          trendColor={item.trendColor}
          trendBg={item.trendBg}
        />
      ))}
    </div>
  );
}
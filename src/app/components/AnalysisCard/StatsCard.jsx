import React from "react";

const StatsCard = ({ icon, label, value, trend, trendText, trendColor,trendBg }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-6">
      <div className={`size-16 rounded-2xl ${trendBg} flex items-center justify-center text-3xl`}>
        {icon}
      </div>

      <div>
        <p className="text-sm font-[PlusJakartaSans-Medium] text-slate-500">{label}</p>

        <p className="text-3xl  font-[PlusJakartaSans] text-slate-900">{value}</p>

        {trend && (
          <div className={`flex items-center gap-1 text-xs font-bold mt-1  font-[PlusJakartaSans-Medium] ${trendColor}`}>
            {trend}
            {trendText}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
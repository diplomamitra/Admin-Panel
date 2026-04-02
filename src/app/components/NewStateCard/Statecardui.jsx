import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

export default function Statecardui({
  title,
  value,
  trend,
  trendType = "neutral",
}) {
  const trendStyles = {
    positive: "text-emerald-500",
    negative: "text-rose-500",
    neutral: "text-slate-400",
  };

  const TrendIcon =
    trendType === "positive"
      ? FiTrendingUp
      : trendType === "negative"
      ? FiTrendingDown
      : null;

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200">
      <p className="text-slate-400 text-xs uppercase tracking-wider font-[PlusJakartaSans]">
        {title}
      </p>

      <div className="flex items-end justify-between mt-2">
        <h3 className="text-2xl text-slate-900 font-[PlusJakartaSans]">
          {value}
        </h3>

        <div
          className={`flex items-center gap-1 text-xs font-[lexend] ${trendStyles[trendType]}`}
        >
          {TrendIcon && <TrendIcon size={14} />}
          {trend}
        </div>
      </div>
    </div>
  );
}
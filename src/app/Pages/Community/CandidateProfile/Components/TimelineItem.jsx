export const TimelineItem = ({ title, time, color }) => (
  <div className="relative pl-8">
    <div className={`absolute left-0 top-1.5 h-4 w-4 rounded-full ring-4 ring-white ${color}`} />
    <p className="text-sm font-bold text-slate-900">{title}</p>
    <p className="text-xs text-slate-500">{time}</p>
  </div>
);
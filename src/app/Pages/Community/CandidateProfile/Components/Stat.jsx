export const Stat = ({ label, value, border }) => (
  <div className={`text-center ${border ? "border-x border-slate-200" : ""}`}>
    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
      {label}
    </p>
    <p className="text-lg font-bold text-slate-900">{value}</p>
  </div>
);
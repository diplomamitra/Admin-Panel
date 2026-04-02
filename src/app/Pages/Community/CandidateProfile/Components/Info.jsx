export const Info = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-sm text-slate-600">
    <span className="text-slate-400">{icon}</span>
    {text}
  </div>
);
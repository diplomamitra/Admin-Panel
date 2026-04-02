export const Section = ({ title, children }) => (
  <div className="space-y-4">
    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">
      {title}
    </h4>
    {children}
  </div>
);
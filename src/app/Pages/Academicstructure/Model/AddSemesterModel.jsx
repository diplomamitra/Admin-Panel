export function AddSemesterModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/20 backdrop-blur-sm p-4">
      
      <div className="w-full max-w-lg bg-surface-container-lowest rounded-2xl shadow-[0_24px_48px_-12px_rgba(25,28,30,0.08)] border border-slate-200 flex flex-col overflow-hidden">

        {/* Header */}
        <header className="flex justify-between items-center px-8 py-5 border-b border-slate-100">
          <div className="space-y-1">
            <h2 className="text-2xl font-[PlusJakartaSans] text-on-surface tracking-tight">
              Add Semester
            </h2>
            <p className="text-sm text-on-surface-variant font-[PlusJakartaSans-Medium]">
              Create a semester under a department
            </p>
          </div>

          <button className="p-2 hover:bg-surface-container-low rounded-full transition">
            ✕
          </button>
        </header>

        {/* Form */}
        <div className="px-8 py-6 space-y-6">

          {/* Department */}
          <div>
            <label className="block text-sm text-slate-700 mb-2 font-[PlusJakartaSans]">
              Department
            </label>

            <select className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white outline-none font-[PlusJakartaSans-Medium] focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none">
              <option>Select Department</option>
              <option>Computer Engineering</option>
              <option>Mechanical Engineering</option>
            </select>
          </div>

          {/* Semester Number */}
          <div>
            <label className="block text-sm text-slate-700 mb-2 font-[PlusJakartaSans]">
              Semester Number
            </label>

            <select className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white outline-none font-[PlusJakartaSans-Medium] focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none">
              {[1,2,3,4,5,6,7,8].map((num) => (
                <option key={num}>{num}</option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm text-slate-700 mb-2 font-[PlusJakartaSans]">
              Status
            </label>

            <div className="flex items-center justify-between h-12 px-4 border border-slate-200 rounded-xl bg-white">
              <span className="text-sm text-on-surface-variant font-[PlusJakartaSans-Medium]">
                Active
              </span>

              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />

                <div className="w-11 h-6 bg-gray-300 rounded-full transition-colors peer-checked:bg-indigo-600"></div>

                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform peer-checked:translate-x-5"></div>
              </label>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="px-8 py-5 flex justify-end gap-3 bg-surface-container-low border-t border-slate-100">
          <button className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
            Cancel
          </button>

          <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-sm">
            Create Semester
          </button>
        </footer>

      </div>
    </div>
  );
}
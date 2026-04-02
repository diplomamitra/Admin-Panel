import { FiPlusCircle, FiPlus, FiCheckCircle, FiTrash2 } from "react-icons/fi";

export default function CreateUpdateForm() {
  const features = [
    "Improved performance",
    "Bug fixes",
    "UI improvements",
    "Offline mode",
  ];

  return (
    <section className="bg-white rounded-2xl p-8 border border-slate-200">
      <h3 className=" text-slate-900 mb-6 flex items-center gap-2 font-[PlusJakartaSans] text-lg">
        <FiPlusCircle className="text-primary text-xl" />
        Create New Update
      </h3>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Version */}
          <div>
            <label className="block text-sm font-[PlusJakartaSans-Medium] text-slate-700 mb-2">
              Version Number
            </label>
            <input
              type="text"
              placeholder="e.g. 1.4.0"
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-[PlusJakartaSans-Medium] text-slate-800 placeholder:text-slate-400 
      focus:border-primary focus:ring-2 focus:ring-primary/20 
      hover:border-slate-400 transition outline-none"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-[PlusJakartaSans-Medium] text-slate-700 mb-2">
              Update Title
            </label>
            <input
              type="text"
              placeholder="Enter title"
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-[PlusJakartaSans-Medium] text-slate-800 placeholder:text-slate-400 
      focus:border-primary focus:ring-2 focus:ring-primary/20 
      hover:border-slate-400 transition outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-[PlusJakartaSans-Medium] text-slate-700 mb-2">
              Release Date
            </label>
            <input
              type="date"
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-[PlusJakartaSans-Medium] text-slate-800 
      focus:border-primary focus:ring-2 focus:ring-primary/20 
      hover:border-slate-400 transition outline-none"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm font-[PlusJakartaSans-Medium] text-slate-700 mb-2">
              Update Type
            </label>
            <select
              defaultValue="Minor"
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-[PlusJakartaSans-Medium] text-slate-800 
      focus:border-primary focus:ring-2 focus:ring-primary/20 
      hover:border-slate-400 transition outline-none"
            >
              <option>Major</option>
              <option>Minor</option>
              <option>Patch</option>
            </select>
          </div>

          {/* Link */}
          <div>
            <label className="block text-sm font-[PlusJakartaSans-Medium] text-slate-700 mb-2">
              Download Link
            </label>
            <input
              type="url"
              placeholder="https://app.diploma.com/..."
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-[PlusJakartaSans-Medium] text-slate-800 placeholder:text-slate-400 
      focus:border-primary focus:ring-2 focus:ring-primary/20 
      hover:border-slate-400 transition outline-none"
            />
          </div>

          {/* Size */}
          <div>
            <label className="block text-sm font-[PlusJakartaSans-Medium] text-slate-700 mb-2">
              Update Size
            </label>
            <input
              type="text"
              placeholder="e.g. 24.5 MB"
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-[PlusJakartaSans-Medium] text-slate-800 placeholder:text-slate-400 
      focus:border-primary focus:ring-2 focus:ring-primary/20 
      hover:border-slate-400 transition outline-none"
            />
          </div>
        </div>

        {/* What's New Section */}

        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="text-sm font-[PlusJakartaSans-Medium] text-slate-700">
              What's New
            </label>

            <button
              className="text-primary text-sm font-[PlusJakartaSans-Medium] hover:underline flex items-center gap-1"
              type="button"
            >
              <FiPlus className="text-sm" />
              Add Feature
            </button>
          </div>

          <div className="space-y-3">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <FiCheckCircle className="text-primary text-lg" />

                <input
                  className="flex-1 bg-transparent border-b border-slate-100 py-1 focus:border-primary focus:ring-0 text-sm outline-none"
                  type="text"
                  defaultValue={feature}
                />

                <FiTrash2 className="text-slate-300 cursor-pointer hover:text-red-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Update Priority */}

        <div className="bg-blue-50 p-5 rounded-xl border border-primary/10">
          <label className="block text-sm font-[PlusJakartaSans-Medium] text-slate-700 mb-4">
            Update Priority
          </label>

          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                className="text-primary focus:ring-primary"
                name="priority"
                type="radio"
              />
              <span className="text-sm font-[PlusJakartaSans-Medium]">
                Optional
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                defaultChecked
                className="text-primary focus:ring-primary"
                name="priority"
                type="radio"
              />
              <span className="text-sm font-[PlusJakartaSans-Medium]">
                Recommended
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                className="text-primary focus:ring-primary"
                name="priority"
                type="radio"
              />
              <span className="text-sm font-[PlusJakartaSans-Medium]">
                Force Update
              </span>
            </label>
          </div>

          <p className="text-xs text-slate-500 mt-4 leading-relaxed italic">
            Force update means users must update the app before continuing. This
            should only be used for critical security or breaking changes.
          </p>
        </div>

        {/* Controls */}

        <div className="pt-4 flex justify-end gap-4 border-t border-slate-50">
          <button
            className="px-6 py-2.5 rounded-xl font-[PlusJakartaSans-Medium] text-slate-500 hover:bg-slate-50 transition-all text-sm"
            type="button"
          >
            Save Draft
          </button>

          <button
            className="bg-primary text-white px-8 py-2.5 rounded-xl font-[PlusJakartaSans-Medium] text-sm shadow-md hover:shadow-lg transition-all"
            type="button"
          >
            Publish Update
          </button>
        </div>
      </form>
    </section>
  );
}

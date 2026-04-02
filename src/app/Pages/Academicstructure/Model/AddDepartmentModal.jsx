import React from "react";
import { IoClose } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";

export function AddDepartmentModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/20 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-surface-container-lowest rounded-2xl shadow-[0_24px_48px_-12px_rgba(25,28,30,0.08)] overflow-hidden flex flex-col border border-slate-200">
        {/* Header */}
        <header className="flex justify-between items-center px-8 pt-5 glass-header">
          <div className="space-y-1">
            <h2 className="text-2xl font-[PlusJakartaSans] text-on-surface tracking-tight">
              Add New Department
            </h2>
            <p className="text-sm font-[PlusJakartaSans-Medium] text-on-surface-variant">
              Create a new academic division in the system.
            </p>
          </div>

          <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors group">
            <IoClose className="text-xl text-outline group-hover:text-on-surface" />
          </button>
        </header>

        {/* Form */}
        <div className="px-8 py-6 space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-[PlusJakartaSans] text-slate-700 mb-2">
              Department Name
            </label>

            <input
              type="text"
              placeholder="e.g., Mechanical Engineering"
              className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-[PlusJakartaSans-Medium]"
            />
          </div>

          {/* Slug */}
          <div className="space-y-2">
            <label className="block text-sm font-[PlusJakartaSans] text-slate-700">
              Slug
            </label>
            <div
              className="
      w-full h-12 px-4
      flex items-center
      rounded-xl
      border border-slate-200
      bg-gray-100
      font-[PlusJakartaSans-Medium]
      cursor-not-allowed
      text-slate-700
    "
            >
              mechanical-engineering
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2 px-1">
            <FiInfo className="text-sm text-primary" />
            <span className="text-xs text-on-surface font-[PlusJakartaSans-Medium]">
              Used for clean URLs. Lowercase, numbers, and hyphens only.
            </span>
          </div>
          <div />

          {/* Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Order */}
            <div>
              <label className="block text-sm font-[PlusJakartaSans] text-slate-700 mb-2">
                Default Display Order
              </label>

              <input
                type="number"
                defaultValue="0"
                className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-[PlusJakartaSans-Medium]"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-[PlusJakartaSans] text-slate-700 mb-2">
                Status
              </label>

              <div className="flex items-center justify-between h-12 px-4 border border-slate-200 rounded-xl bg-white">
                <span className="text-sm text-on-surface-variant font-[PlusJakartaSans-Medium]">
                  Active
                </span>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />

                  <div className="w-11 h-6 bg-gray-300 rounded-full transition-colors peer-checked:bg-indigo-600"></div>

                  <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform peer-checked:translate-x-5"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-8 py-6 bg-surface-container-low flex justify-end gap-4">
          {/* Cancel - Secondary */}
          <button className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition-all font-[PlusJakartaSans-Medium]">
            Cancel
          </button>

          {/* Create - Primary */}
          <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all font-[PlusJakartaSans-Medium]">
            Create Department
          </button>
        </footer>
      </div>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const roles = [
  { label: "Admin", value: "admin" },
  { label: "Community", value: "community" },
  { label: "Super Admin", value: "superadmin" },
];

export default function RoleDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const ref = useRef();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref}>
      <label className="text-sm text-slate-600">Select Role</label>

      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        className="mt-1 w-full px-4 py-2 border border-slate-200 rounded-lg flex items-center justify-between cursor-pointer hover:border-slate-300"
      >
        <span className="text-sm font-[PlusJakartaSans-Medium] text-slate-700">
          {selected ? (
            selected.label
          ) : (
            <span className="flex items-center gap-2 text-slate-400">
              <MdOutlineAdminPanelSettings size={20} />
              Choose role
            </span>
          )}{" "}
        </span>

        <FiChevronDown
          className={`transition ${open ? "rotate-180" : ""} text-slate-400`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="mt-2 w-full bg-white border border-slate-200 rounded-lg overflow-hidden">
          {roles.map((role) => (
            <div
              key={role.value}
              onClick={() => {
                setSelected(role);
                setOpen(false);
              }}
              className="px-4 py-2 text-sm font-[PlusJakartaSans-Medium] text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              {role.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

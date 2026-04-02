import React from "react";
import { TbLogout } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const SidebarUser = ({ collapsed }) => {
  const navigate = useNavigate();

  return (
    <div className="border-t border-gray-200 p-4">
      {/* Logout */}
      <button
        onClick={() => navigate("/login")}
        className={`flex items-center w-full px-2 py-2 rounded-lg hover:bg-gray-100 transition text-[#D55F5A] cursor-pointer
        ${collapsed ? "justify-center" : "gap-3"}`}
      >
        <TbLogout className="text-xl" />

        {!collapsed && (
          <span className="text-sm font-[PlusJakartaSans-Medium]">Logout</span>
        )}
      </button>

      {/* User Info */}
      <div
        className={`mt-4 flex ${
          collapsed ? "flex-col items-center" : "items-center gap-3"
        }`}
      >
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-[#D55F5A] p-0.5"
        />

        {!collapsed ? (
          <div>
            <p className="text-sm font-[PlusJakartaSans-Medium] text-gray-700">
              Harjeet
            </p>
            <p className="text-xs text-gray-500 font-[PlusJakartaSans-Medium]">
              Harjeetemail123@gmail.com
            </p>
          </div>
        ) : (
          <p className="text-xs mt-2 text-gray-700 font-[PlusJakartaSans-Medium] text-center">
            Harjeet
          </p>
        )}
      </div>
    </div>
  );
};

export default SidebarUser;

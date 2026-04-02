import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SidebarFeatures = ({ icon: Icon, title, collapsed, path }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(pathname)

  const isActive =
    path === "/"
      ? pathname === "/"
      : pathname.startsWith(path);

  return (
    <button
      onClick={() => navigate(path)}
      className={`group flex items-center w-full px-3 py-2 rounded-lg transition cursor-pointer
      ${collapsed ? "justify-center" : "gap-3"}
      ${isActive ? "bg-[#e0e6fa]" : "hover:bg-[#e0e6fa]"}
      `}
    >
      <Icon
        className={`text-xl ${
          isActive
            ? "text-[#1337ec]"
            : "text-gray-600 group-hover:text-[#1337ec]"
        }`}
      />

      {!collapsed && (
        <span
          className={`text-sm font-[PlusJakartaSans-Medium]
          ${
            isActive
              ? "text-[#1337ec]"
              : "text-gray-700 group-hover:text-[#1337ec]"
          }`}
        >
          {title}
        </span>
      )}
    </button>
  );
};

export default SidebarFeatures;
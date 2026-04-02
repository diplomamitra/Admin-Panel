import React from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { MdAdminPanelSettings } from "react-icons/md";
import RoleDropdown from "./Components/RoleDropdown";
import { useNavigate } from "react-router-dom";

const LoginUi = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 font-[PlusJakartaSans] ">
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl p-8 border border-slate-200">
        {/* Logo + App Name */}
        <div className="flex flex-col items-center mb-6 ">
          <div className="w-14 h-14 text-white flex items-center justify-center">
            <img src="/AppLogo.png" alt="App Logo" className="w-14 h-14" />{" "}
          </div>

          <h1 className="mt-3 text-2xl font-[PlusJakartaSans] text-slate-900">
            Diploma Mitra
          </h1>

          <p className="text-sm text-slate-500 text-center  font-[PlusJakartaSans-Medium]">
            Admin Panel Access Only
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm text-slate-600">Admin Email</label>

            <div className="relative mt-1">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                placeholder="admin@diplomamitra.in"
                className="w-full pl-10 pr-4 py-2  font-[PlusJakartaSans-Medium] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 "
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-slate-600">Password</label>

            <div className="relative mt-1">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-10  font-[PlusJakartaSans-Medium] pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
          </div>

            <RoleDropdown/>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
              <input type="checkbox" className="accent-slate-900" />
              Remember me
            </label>

            <button
              type="button"
              onClick={()=>navigate('/forget-password')}
              className="text-slate-500 hover:text-slate-900  font-[PlusJakartaSans-Medium]"
            >
              Forgot Password?
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-slate-900 text-white font-[PlusJakartaSans-Medium] hover:bg-slate-800 transition cursor-pointer"
          >
            Login as Admin
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-slate-400 mt-6  font-[PlusJakartaSans-Medium]">
          Restricted access • Authorized admins only
        </p>
      </div>
    </div>
  );
};

export default LoginUi;

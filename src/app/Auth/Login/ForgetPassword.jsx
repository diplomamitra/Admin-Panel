import React from "react";
import { FiMail, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 font-[PlusJakartaSans]">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl p-8 border border-slate-200">
        
        {/* Logo + App Name */}
        <div className="flex flex-col items-center mb-6">
          
          <img
            src="/AppLogo.png"
            alt="App Logo"
            className="w-14 h-14"
          />

          <h1 className="mt-3 text-2xl font-[PlusJakartaSans] text-slate-900">
            Diploma Mitra
          </h1>

          <p className="text-sm text-slate-500 text-center font-[PlusJakartaSans-Medium]">
            Reset your admin password
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
                className="w-full pl-10 pr-4 py-2 font-[PlusJakartaSans-Medium] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-slate-900 text-white font-[PlusJakartaSans-Medium] hover:bg-slate-800 transition cursor-pointer"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <button onClick={()=>navigate('/login')} className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 font-[PlusJakartaSans-Medium]">
            <FiArrowLeft size={16} />
            Back to Login
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-400 mt-6 font-[PlusJakartaSans-Medium]">
          You will receive a password reset link via email
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
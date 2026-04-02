import React from "react";
// Importing specific icons from react-icons
import { HiOutlineSparkles } from "react-icons/hi";
import { HiOutlineLightBulb } from "react-icons/hi";

import {
  HiPrinter,
  HiOutlineExclamationTriangle,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import AppLogo from "../../../assets/images/AppLogo.png";
import Signature from "../../../assets/images/Signature.png";
import { FaGooglePlay } from "react-icons/fa";

const DiplomaMitraPremium = () => {
  const handlePrint = () => {
    window.print();
  };

  const data = {
    subject: "OPERATING SYSTEMS",
    semester: "4th Semester",
    preparedBy: "Diploma Mitra System",
    refCode: "DM-OS-2026-4S",
    questions: [
      "What is an Operating System? Explain its main functions and objectives.",
      "Differentiate between Monolithic Kernel and Microkernel architectures.",
      "Explain the Process Life Cycle with a neat state transition diagram.",
      "Compare FCFS, SJF, and Round Robin CPU scheduling algorithms.",
      "Define Deadlock. Explain the four necessary conditions for a deadlock.",
      "What is Paging? How does it differ from Segmentation in memory management?",
      "Explain the concept of Virtual Memory and Demand Paging.",
      "Describe the Producer-Consumer problem and its solution using Semaphores.",
      "Explain Disk Scheduling algorithms: FCFS, SSTF, SCAN, and C-SCAN.",
      "What is a System Call? List and explain different types of system calls.",
    ],
  };

  return (
    <div className="print-area min-h-screen  py-10 px-4 antialiased">
      {/* 
          PRINT BUTTON 
          'print:hidden' class ensures this button doesn't show up in the PDF 
      */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-end print:hidden">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-[#004aad] hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg font-[PlusJakartaSans] shadow-xl transition-all active:scale-95"
        >
          <HiPrinter className="text-xl" />
          Print Premium File
        </button>
      </div>

      {/* 
          DOCUMENT CONTAINER
          W: 210mm, H: 297mm (Standard A4)
      */}
      <div className="w-[210mm] min-h-[297mm] mx-auto bg-white print:shadow-none print:m-0 overflow-hidden relative flex flex-col">
        {/* Top Professional Gradient */}
        <div className="h-2.5 w-full bg-linear-to-r from-[#004aad] via-blue-500 to-cyan-400"></div>

        <div className="p-5 grow">
          {/* Header */}
          <div className="flex justify-between items-start mb-12">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 flex items-center justify-center ">
                <img src={AppLogo} alt="logo" className="w-20 h-20" />
              </div>
              <div>
                <h2 className="text-2xl font-[PlusJakartaSans] text-[#004aad] tracking-tight leading-none">
                  DIPLOMA MITRA
                </h2>
                <p className="text-sm text-gray-400 mt-1 font-[PlusJakartaSans-Medium]">
                  हर डिप्लोमा छात्र का साथी
                </p>
              </div>
            </div>
            <div className="text-right font-[PlusJakartaSans-Medium]">
              <div className="flex justify-end items-center gap-2 mb-2">
                <div className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-100">
                  <HiOutlineSparkles className="text-sm" />
                  AI Generated Questions
                </div>

                {/* Play Store Button */}
                <button className="flex items-center gap-1.5 bg-black text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-slate-800 transition">
                  <FaGooglePlay className="text-sm" />
                  Download App
                </button>
              </div>

              <h1 className="text-3xl font-black text-slate-900">
                IMPORTANT QUESTIONS
              </h1>
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-3 border border-slate-100 bg-slate-50/50 rounded-2xl p-6 mb-8 gap-2">
            <div className="px-4 border-r border-slate-200">
              <span className="block text-sm text-slate-400 uppercase tracking-tighter mb-1 font-[PlusJakartaSans]">
                Subject
              </span>
              <span className="block text-sm font-[PlusJakartaSans] text-slate-800">
                {data.subject}
              </span>
            </div>
            <div className="px-4 border-r border-slate-200">
              <span className="block text-sm font-bold text-slate-400 uppercase tracking-tighter mb-1 font-[PlusJakartaSans]">
                Semester
              </span>
              <span className="block text-sm font-[PlusJakartaSans] text-slate-800">
                {data.semester}
              </span>
            </div>
            <div className="px-4">
              <span className="block text-sm text-slate-400 uppercase tracking-tighter mb-1 font-[PlusJakartaSans]">
                Issue By
              </span>
              <span className="block text-sm font-[PlusJakartaSans] text-slate-800 tracking-tight">
                {data.preparedBy}
              </span>
            </div>
          </div>

          {/* Notice Section */}
          {/* Smart Guidance Section */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-2xl mb-10">
            <div className="flex items-center gap-2 mb-3">
              <HiOutlineLightBulb className="text-blue-600 text-lg" />
              <h4 className="text-xs font-[PlusJakartaSans] text-blue-800 uppercase tracking-widest">
                SMART PREPARATION GUIDE
              </h4>
            </div>

            <ul className="space-y-2 font-[PlusJakartaSans-Medium]">
              <li className="flex items-start gap-2 text-[11px] text-blue-900 font-medium leading-tight">
                <span className="mt-1 text-blue-400">•</span>
                Covers important and frequently asked questions based on past
                trends.
              </li>

              <li className="flex items-start gap-2 text-[11px] text-blue-900 font-medium leading-tight">
                <span className="mt-1 text-blue-400">•</span>
                Helps you identify high-priority topics for efficient revision.
              </li>

              <li className="flex items-start gap-2 text-[11px] text-blue-900 font-medium leading-tight">
                <span className="mt-1 text-blue-400">•</span>
                Best used along with full syllabus for complete exam
                preparation.
              </li>
            </ul>
          </div>

          {/* Questions Header */}
          <div className="flex items-center gap-4 mb-4">
            <IoDocumentTextOutline className="text-2xl text-[#004aad]" />
            <h3 className="text-lg font-[PlusJakartaSans] text-slate-800 uppercase tracking-tight">
              Question Bank
            </h3>
            <div className="h-0.5 grow bg-slate-100 rounded-full"></div>
          </div>

          {/* Question List */}
          <div className="space-y-0">
            {data.questions.map((q, i) => (
              <div
                key={i}
                className="flex gap-5 p-4 border-b border-slate-50 items-start hover:bg-blue-50/30 transition-colors group "
              >
                <div className="shrink-0 w-7 h-7 bg-[#004aad] text-white rounded-lg flex items-center justify-center text-xs font-black mt-0.5 font-[PlusJakartaSans-Medium]">
                  {(i + 1).toString().padStart(2, "0")}
                </div>
                <p className="text-[14px] font-[PlusJakartaSans] text-slate-700 leading-relaxed pt-1 group-hover:text-black">
                  {q}
                </p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-10  flex justify-between items-end pb-4">
            <div>
              <p className="text-[9px] text-slate-400 font-[PlusJakartaSans-Medium] tracking-wide">
                Digital ID: 45
              </p>
              <p className="text-[9px] text-slate-400 font-[PlusJakartaSans-Medium]">
                Computer generated resource. No physical validation required.
              </p>
            </div>
            <div className="text-right flex flex-col items-end gap-1">
              {/* Signature Image */}
              <img
                src={Signature} // apni image path yaha daal
                alt="Digital Signature"
                className="h-8 object-contain opacity-90"
              />
              {/* Copyright */}
              <p className="text-[#004aad] font-[PlusJakartaSans] text-sm">
                © DIPLOMA MITRA
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global CSS for Print Layout */}
      <style>{`
  @media print {
    body * {
      visibility: hidden;
    }

    .print-area, .print-area * {
      visibility: visible;
    }

    .print-area {
      position: absolute;
      left: 0;
      top: 0;
      width: 210mm;
      min-height: 297mm;
    }

    .print\\:hidden {
      display: none !important;
    }

    @page {
      size: A4;
      margin: 0;
    }
  }
`}</style>
    </div>
  );
};

export default DiplomaMitraPremium;

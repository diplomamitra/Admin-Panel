import { MdPictureAsPdf, MdClose } from "react-icons/md";

export default function FilePreview() {
  return (
    <div className="flex items-center justify-between bg-slate-100 rounded-2xl px-5 py-4 border border-slate-200">

      {/* Left Section */}
      <div className="flex items-center gap-4">

        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
          <MdPictureAsPdf className="text-red-600 text-xl" />
        </div>

        {/* File Info */}
        <div className="leading-tight">
          <p className="text-sm font-[PlusJakartaSans] font-semibold text-slate-800">
            Diploma_S24_CompEng_22226.pdf
          </p>

          <p className="text-xs text-slate-500 mt-1 font-[PlusJakartaSans-Medium]">
            Path: /uploads/resources/22226.pdf
          </p>

          <p className="text-xs text-slate-500 font-[PlusJakartaSans-Medium]">
            Size: 2.4 MB
          </p>
        </div>
      </div>

      {/* Right Section */}
      <button className="text-slate-400 hover:text-red-500 transition-colors">
        <MdClose className="text-xl" />
      </button>

    </div>
  );
}
import React, { useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

export default function FileUpload() {
  const fileRef = useRef();
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
    } else {
      alert("Only PDF allowed");
    }
  };

  return (
    <div>

      {/* Hidden Input */}
      <input
        type="file"
        ref={fileRef}
        onChange={handleFile}
        accept="application/pdf"
        className="hidden"
      />

      {/* Upload Box */}
      <div
        onClick={() => fileRef.current.click()}
        className="border-2 border-dashed border-slate-200 rounded-2xl p-10 text-center hover:bg-slate-50 transition cursor-pointer group"
      >
        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
          <FiUploadCloud size={28} />
        </div>

        <h4 className="text-base font-[PlusJakartaSans] text-slate-800">
          {file ? file.name : "Drag & drop academic PDF"}
        </h4>

        <p className="text-slate-400 text-sm mt-1 font-[PlusJakartaSans-Medium]">
          Maximum file size: 25MB (PDF only)
        </p>

        <button
          type="button"
          className="mt-6 px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-[PlusJakartaSans-Medium] hover:bg-black transition"
        >
          Browse Files
        </button>
      </div>

    </div>
  );
}
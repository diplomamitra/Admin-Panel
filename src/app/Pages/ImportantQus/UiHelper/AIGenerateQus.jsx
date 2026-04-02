import { FiEye } from "react-icons/fi";
import { RiAiGenerate } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const AIGenerateQus = () => {
  const navigate = useNavigate();

  return (
    <div className="border border-slate-200 rounded-2xl p-6 space-y-4 bg-slate-50/50">
      <div>
        <label className="block text-sm text-slate-700 mb-2 font-[PlusJakartaSans-Medium]">
          Topic (Optional)
        </label>
        <input
          type="text"
          placeholder="e.g. DBMS Normalization"
          className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none focus:ring-2 focus:ring-primary/20 font-[PlusJakartaSans-Medium]"
        />
      </div>

      <div className="flex items-center gap-3">
        {/* Generate */}
        <button
          type="button"
          className="flex items-center gap-2 px-6 py-2 rounded-xl bg-primary text-white text-sm font-[PlusJakartaSans-Medium] hover:shadow-md transition"
        >
          <RiAiGenerate className="text-base" />
          Generate Questions
        </button>

        {/* Preview */}
        <button
          onClick={() => navigate("/imp/pdf-viewer")}
          type="button"
          className="px-5 py-2 rounded-xl border border-slate-200 text-slate-600 text-sm font-[PlusJakartaSans-Medium] flex items-center gap-2 hover:bg-slate-50 transition"
        >
          <FiEye className="text-base" />
          Preview
        </button>
      </div>

      <p className="text-xs text-slate-400 font-[PlusJakartaSans-Medium]">
        Questions will be generated based on past paper trends and frequency
      </p>
    </div>
  );
};
export default AIGenerateQus;

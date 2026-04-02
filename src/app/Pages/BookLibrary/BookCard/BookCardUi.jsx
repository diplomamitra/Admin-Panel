import React from "react";
import { FiEdit2, FiTrash2, FiExternalLink } from "react-icons/fi";

const BookCardUi = ({ book }) => {
  return (
    <div className=" rounded-2xl p-3 flex items-center gap-5 bg-white border border-slate-200">
      {/* Cover */}
      <div className="w-30 h-40 bg-white rounded-2xl p-2 shadow-inner shrink-0">
        <img
          src={book.image_path} // ✅ fixed
          alt="Book"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Category */}
        <div className="flex items-center gap-2 mb-2">
          {/* Order Badge */}
          <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-[PlusJakartaSans-Medium] bg-slate-100 text-slate-600 rounded-md">
            #{book.display_order}
          </span>

          {/* Semester Badge */}
          <span className="inline-flex items-center px-3 py-1 text-[11px] font-[PlusJakartaSans-Medium] bg-indigo-50 text-indigo-600 rounded-full">
            Sem {book.semester_id}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-[PlusJakartaSans] text-lg font-semibold text-slate-800 leading-snug">
          {book.book_title} {/* ✅ fixed */}
        </h3>

        {/* Author */}
        <p className="text-sm text-slate-500 font-[PlusJakartaSans-Medium] mt-1">
          {book.author}
        </p>

        {/* Divider */}
        <div className="border-t border-slate-200 mt-4"></div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-3">
          {/* Active Toggle (NEW but theme safe) */}
          <div className="flex items-center">
            <label className="inline-flex items-center cursor-pointer relative">
              <input
                type="checkbox"
                checked={book.is_active}
                onChange={() => handleToggle(book.id)}
                className="sr-only peer"
              />

              {/* Track */}
              <div className="w-11 h-6 bg-slate-200 rounded-full peer-checked:bg-primary transition-colors duration-300"></div>

              {/* Thumb */}
              <div className="absolute left-0.5 top-0.5 h-5 w-5 bg-white rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-5"></div>

              {/* Label */}
              <span
                className={`ml-3 text-xs font-[PlusJakartaSans-Medium] ${
                  book.is_active ? "text-green-600" : "text-slate-400"
                }`}
              >
                {book.is_active ? "Active" : "Inactive"}
              </span>
            </label>
          </div>

          {/* Actions (same as yours) */}
          <div className="flex items-center gap-2">
            <a
              href={book.book_link} // ✅ fixed
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/5 text-primary text-xs font-[PlusJakartaSans-Medium] hover:bg-primary/10 transition"
            >
              <FiExternalLink className="text-sm" />
              Open
            </a>

            <button className="text-slate-400 hover:text-indigo-600 transition">
              <FiEdit2 className="text-lg" />
            </button>

            <button className="text-slate-400 hover:text-red-500 transition">
              <FiTrash2 className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCardUi;

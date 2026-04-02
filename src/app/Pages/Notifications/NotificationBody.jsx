import React from "react";

const NotificationBody = () => {
  return (
      <textarea
        rows={4}
        placeholder="Enter the detailed description..."
        className="w-full rounded-xl border font-[PlusJakartaSans-Medium] border-slate-200 bg-white px-4 py-2 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
      ></textarea>
  );
};

export default NotificationBody;

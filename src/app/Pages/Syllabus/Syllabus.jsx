import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import AddButton from "../../components/AddButton";
import Statecardmac from "../../components/NewStateCard/Statecardmac";
import SyllabusCardUi from "./SyllabusCardUi";
import FilterBar from "../../components/Filters/FilterBar";

const Syllabus = () => {
  const StateValues = [
    {
      title: "Total Subjects",
      value: "130",
      subtitle: "Across all semesters",
      trend: "+5 added recently",
      trendType: "positive",
    },
    {
      title: "Syllabus Coverage",
      value: "78%",
      subtitle: "Subjects with syllabus",
      trend: "Needs completion",
      trendType: "neutral",
    },
    {
      title: "Missing Syllabus",
      value: "28",
      subtitle: "Subjects without syllabus",
      trend: "High priority",
      trendType: "negative",
    },
    {
      title: "Updated Recently",
      value: "42",
      subtitle: "Last 7 days",
      trend: "+10 vs last week",
      trendType: "positive",
    },
    {
      title: "Outdated Syllabus",
      value: "19",
      subtitle: "Needs revision",
      trend: "Check version",
      trendType: "negative",
    },
    {
      title: "Semester Coverage",
      value: "6/6",
      subtitle: "All semesters included",
      trend: "Fully structured",
      trendType: "positive",
    },
  ];
  const syllabusData = [
    {
      id: 1,
      semester_id: 1,
      title: "Computer Engineering Semester 1",
      scheme: "NEP",
      start_page: "18",
      file_path: "/uploads/syllabus/sem1_nep.pdf",
      file_name: "sem1_nep.pdf",
      file_size_bytes: 2457600,
      display_order: 1,
      is_active: true,
      created_at: "2026-03-28T10:00:00.000Z",
      updated_at: "2026-03-28T10:00:00.000Z",
    },
    {
      id: 2,
      semester_id: 1,
      title: "Computer Engineering Semester 1",
      scheme: "Old Scheme",
      start_page: "20",
      file_path: "/uploads/syllabus/sem1_old.pdf",
      file_name: "sem1_old.pdf",
      file_size_bytes: 1980000,
      display_order: 2,
      is_active: false,
      created_at: "2026-03-25T08:00:00.000Z",
      updated_at: "2026-03-27T09:00:00.000Z",
    },
  ];
  const [data, setData] = useState(syllabusData);

  const handleToggle = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, is_active: !item.is_active } : item,
      ),
    );
  };
  return (
    <div>
      <PageHeader title=" Syllabus" />

      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div>
            <nav className="flex items-center gap-1 text-sm font-[PlusJakartaSans-Medium]">
              <p className="text-sm text-slate-500">
                Manage syllabus structure, organize subjects semester-wise, and
                ensure students always have clear and updated curriculum
                guidance
              </p>
            </nav>
          </div>

          <AddButton BtnTitle="Add Book" Path="add" />
        </div>
        <Statecardmac StateValues={StateValues} />
        <FilterBar />

        <div className="grid grid-cols-3 gap-4">
          {data.map((item) => (
            <SyllabusCardUi
              key={item.id}
              syllabus={item}
              handleToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Syllabus;

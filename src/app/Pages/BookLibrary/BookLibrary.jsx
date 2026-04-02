import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import AddButton from "../../components/AddButton";
import Statecardmac from "../../components/NewStateCard/Statecardmac";
import BookCardUi from "./BookCard/BookCardUi";
import FilterBar from "../../components/Filters/FilterBar";

const BookLibrary = () => {
  const [department, setDepartment] = useState("All Departments");
  const [status, setStatus] = useState("All Statuses");
  const book = [
    {
      id: 1,
      semester_id: 3,
      book_title: "Higher Engineering Mathematics",
      author: "B.S. Grewal",
      image_path: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa-rJwkCoHyVhG3eGssNKHS3x4BAiigcm0gyNJEZlXtJflMPBNhSExxeKnZioXWKbfHIeIOMGRmNSVT-KgQPhbCrtHvEdy9G66OzloQQEQ5AnMorfs932L-zqBk8E6PAKczn870tfjjAo0GZoimYnchs9J0ye7ZPitZN0AZd_F1Sp4kozpwN3GTuyMSeiX_b3fB9_UwOS32X_vuajjvH5V4K-fPrUnTPeL5oSNkpmYnEauowh-_3RLn22mg4cFdlTLXJ_vhX8pa1Q",
      book_link: "https://amzn.in/example",
      display_order: 1,
      is_active: false,
      created_at: "2026-03-28T19:30:00.000Z",
    },
    {
      id: 2,
      semester_id: 3,
      book_title: "Higher Engineering Mathematics",
      author: "B.S. Grewal",
      image_path: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtQu2TUO-6yJJ-DTzfgVlywflfPx3l1R9qLE4bUdq4Z7JV_RJ_gd2xGXB-zWie-YrxJ4Tr92RWaMjfN-TZqncLxG5h2hpZmfQBjlzRLkuOiGvU0FCIZuPiLKnMhvH459ROyE7Nb2HYS0DZBD2QTqaMR--8F1a8sqA5qRYLiaqPhU9E7687hMowlQcsKazlvrzWzeaHXlRdTg2OhlDNSIS4FWqVJS4cRIVN-W4U73hsY103lmZ3JobTYgbAjxTXd1KZCOyJsULd4sw",
      book_link: "https://amzn.in/example",
      display_order: 2,
      is_active: true,
      created_at: "2026-03-28T19:30:00.000Z",
    },
    {
      id: 3,
      semester_id: 3,
      book_title: "Higher Engineering Mathematics",
      author: "B.S. Grewal",
      image_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9TYyGMyujsrzj7aQ9PBJJ1_7hVogI4Ai1EQ&s",
      book_link: "https://amzn.in/example",
      display_order: 3,
      is_active: true,
      created_at: "2026-03-28T19:30:00.000Z",
    },
    {
      id: 4,
      semester_id: 3,
      book_title: "Higher Engineering Mathematics",
      author: "B.S. Grewal",
      image_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9TYyGMyujsrzj7aQ9PBJJ1_7hVogI4Ai1EQ&s",
      book_link: "https://amzn.in/example",
      display_order: 3,
      is_active: true,
      created_at: "2026-03-28T19:30:00.000Z",
    },
  ];
  const StateValues = [
    {
      title: "Total Books",
      value: "4,200",
      subtitle: "Available in library",
      trend: "+85 added this month",
      trendType: "positive",
    },
    {
      title: "Library Coverage",
      value: "72%",
      subtitle: "Subjects with books",
      trend: "Needs improvement",
      trendType: "neutral",
    },
    {
      title: "Missing Books",
      value: "1,150",
      subtitle: "Subjects without books",
      trend: "High priority",
      trendType: "negative",
    },
    {
      title: "Recent Additions",
      value: "120",
      subtitle: "Last 7 days",
      trend: "+30 vs last week",
      trendType: "positive",
    },
    {
      title: "Total Borrows",
      value: "18K",
      subtitle: "Library usage",
      trend: "+9% growth",
      trendType: "positive",
    },
    {
      title: "Active Subjects",
      value: "95",
      subtitle: "With at least 1 book",
      trend: "Out of 130",
      trendType: "neutral",
    },
  ];
  return (
    <div>
      <PageHeader title="Book Library" />

      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div>
            <nav className="flex items-center gap-1 text-sm font-[PlusJakartaSans-Medium]">
              <p className="text-sm text-slate-500">
                Manage books, monitor library coverage, and ensure every subject
                has essential study resources available
              </p>
            </nav>
          </div>

          <AddButton BtnTitle="Add Book" Path="add" />
        </div>
        <Statecardmac StateValues={StateValues} />
        {/* FILTERS */}
                <FilterBar/>
        
        <div className="grid grid-cols-3 gap-4">
          {book.map((item) => (
            <BookCardUi key={item.id} book={item} />
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default BookLibrary;

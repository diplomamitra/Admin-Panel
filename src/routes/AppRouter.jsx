import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../app/App";

// Main Pages
import Dashboard from "../app/Pages/Dashboard/Dashboard";
import Community from "../app/Pages/Community/Community";
import Notification from "../app/Pages/Notifications/Notification";
import Result from "../app/Pages/Result/Result";
import ApplicationResources from "../app/Pages/Applicationresources/ApplicationResources";
import ApplicationUpdate from "../app/Pages/Applicationupdate/ApplicationUpdate";
import DatabaseDashboard from "../app/Pages/DatabaseFlow/DatabaseDashboard";

// Academic
import AcademicStructure from "../app/Pages/Academicstructure/AcademicStructure";
import DepartmentTable from "../app/Pages/Academicstructure/Components/DepartmentTable";
import AddDepartment from "../app/Pages/Academicstructure/Features/AddDepartment/AddDepartment";
import AddSemester from "../app/Pages/Academicstructure/Features/AddSemester/AddSemester";
import Pyqs from "../app/Pages/Pyqs/Pyqs";
import AddSubject from "../app/Pages/Academicstructure/Features/AddSubject/AddSubject";
import PyqAddPage from "../app/Pages/Pyqs/PyqAddPage";
import ImportantQus from "../app/Pages/ImportantQus/ImportantQus";
import ImpAddPage from "../app/Pages/ImportantQus/ImpAddPage";
import DiplomaMitraPremium from "../app/Pages/ImportantQus/Pdf/DiplomaMitraPremium";
import Notes from "../app/Pages/Notes/Notes";
import AddNotes from "../app/Pages/Notes/AddNotes";
import BookLibrary from "../app/Pages/BookLibrary/BookLibrary";
import AddBook from "../app/Pages/BookLibrary/AddBook";
import Syllabus from "../app/Pages/Syllabus/Syllabus";
import AddSyllabus from "../app/Pages/Syllabus/AddSyllabus";
import LoginUi from "../app/Auth/Login/LoginUi/LoginUi";
import ForgetPassword from "../app/Auth/Login/ForgetPassword";

const AppRouter = () => {
  const router = createBrowserRouter([
    // ❌ Login WITHOUT sidebar
    {
      path: "/login",
      element: <LoginUi />,
      handle: { title: "Login" },
    },
    {
      path: "/forget-password?",
      element: <ForgetPassword />,
    },

    // ✅ Main App WITH sidebar
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Dashboard /> },

        { path: "pyq", element: <Pyqs /> },
        { path: "pyq/add", element: <PyqAddPage /> },

        { path: "imp", element: <ImportantQus /> },
        { path: "imp/add", element: <ImpAddPage /> },
        { path: "imp/pdf-viewer", element: <DiplomaMitraPremium /> },

        { path: "notes", element: <Notes /> },
        { path: "notes/add", element: <AddNotes /> },

        { path: "book-library", element: <BookLibrary /> },
        { path: "book-library/add", element: <AddBook /> },

        { path: "syllabus", element: <Syllabus /> },
        { path: "syllabus/add", element: <AddSyllabus /> },

        { path: "community", element: <Community /> },
        { path: "notifications", element: <Notification /> },
        { path: "result", element: <Result /> },

        { path: "resources", element: <ApplicationResources /> },
        { path: "updates", element: <ApplicationUpdate /> },

        { path: "database", element: <DatabaseDashboard /> },

        // Academic
        { path: "academic", element: <AcademicStructure /> },
        { path: "academic/departments", element: <AddDepartment /> },
        { path: "academic/semesters", element: <AddSemester /> },
        { path: "academic/subjects", element: <AddSubject /> },

        //Forgot Password

        { path: "*", element: <Dashboard /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;

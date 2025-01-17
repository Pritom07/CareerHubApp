import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Appliedjobs from "./Components/Appliedjobs/Appliedjobs";
import Jobdetails from "./Components/JobDetails/Jobdetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch("/data/categories.json"),
        element: <Home></Home>,
      },
      {
        path: "/appliedjobs",
        loader: () => fetch("/data/jobs.json"),
        element: <Appliedjobs></Appliedjobs>,
      },
      {
        path: "/appliedjobs/:jobId",
        loader: () => fetch("/data/jobs.json"),
        element: <Appliedjobs></Appliedjobs>,
      },

      {
        path: "job/:jobId",
        loader: () => fetch("/data/jobs.json"),
        element: <Jobdetails></Jobdetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Pages/main/HomePage";
import { ProjectsPage } from "./Pages/project/ProjectsPage";

export const Router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/projects", element: <ProjectsPage /> },
]);

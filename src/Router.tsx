import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@pages/main/HomePage";
import { ProjectsPage } from "@pages/project/ProjectsPage";

export const Router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/projects", element: <ProjectsPage /> },
]);

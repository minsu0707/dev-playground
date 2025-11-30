import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@pages/HomePage";

export const Router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
]);

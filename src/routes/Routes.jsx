import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Books from "../Pages/Books/Books";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/books",
        Component: Books,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

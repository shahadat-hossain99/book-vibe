import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage/HomePage";
import Books from "./Pages/Books/Books";
import { router } from "./routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);

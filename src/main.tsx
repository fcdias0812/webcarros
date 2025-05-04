import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./App";
import { RouterProvider } from "react-router";
import AuthProvider from "./contexts/AuthContext";
import "./index.css";
import "swiper/swiper-bundle.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

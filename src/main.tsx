import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./App";
import { RouterProvider } from "react-router";
import AuthProvider from "./contexts/AuthContext";
import "swiper/swiper-bundle.css";
import { Toaster } from "react-hot-toast";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

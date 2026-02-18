import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import MainProvider from "./providers/MainProvider.tsx";
import router from "./router/router.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  </StrictMode>
);

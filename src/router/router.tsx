import { About, Blog, BlogDetail, Newsletter, Projects } from "@/pages";
import { createBrowserRouter } from "react-router";
import App from "../App";
import { ROUTES } from "./paths";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { index: true, element: <Blog /> },
      { path: ROUTES.blogDetail, element: <BlogDetail /> },
      { path: ROUTES.projects, element: <Projects /> },
      { path: ROUTES.newsletter, element: <Newsletter /> },
      { path: ROUTES.about, element: <About /> },
    ],
  },
]);
export default router;

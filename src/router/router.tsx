import MainLayout from "@/layouts/MainLayout";
import {
  About,
  Blog,
  BlogDetail,
  Login,
  Newsletter,
  Posts,
  Projects,
  Register,
} from "@/pages";
import { createBrowserRouter } from "react-router";
import App from "../App";
import { ROUTES } from "./paths";
import AuthLayout from "@/layouts/AuthLayout";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <Blog /> },
          { path: ROUTES.blogDetail, element: <BlogDetail /> },
          { path: ROUTES.projects, element: <Projects /> },
          { path: ROUTES.newsletter, element: <Newsletter /> },
          { path: ROUTES.about, element: <About /> },
          { path: ROUTES.posts, element: <Posts /> },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          { path: ROUTES.login, element: <Login /> },
          { path: ROUTES.register, element: <Register /> },
        ],
      },
    ],
  },
]);
export default router;

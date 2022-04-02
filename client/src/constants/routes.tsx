import { Home, RegisterPage } from "pages/_pages";

export const ROUTES = [
  {
    path: "/",
    element: <Home />,
    key: "main",
  },
  {
    path: "/register",
    element: <RegisterPage />,
    key: "register",
  },
];

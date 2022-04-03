import { Home, Register, Login } from "pages/_pages";

export const ROUTES = [
  {
    path: "/",
    element: <Home />,
    key: "main",
  },
  {
    path: "/register",
    element: <Register />,
    key: "register",
  },
  {
    path: "/login",
    element: <Login />,
    key: "login",
  },
];

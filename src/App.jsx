import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { LoginPage, HomePage, NotFound, SignUpPage } from "./Routes.js";
import "./App.css";
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/home", element: <Navigate to="/" replace /> },
  // {
  //   path: "dashboard",
  //   children: [{ path: "*", element: <Dashboard /> }],
  // },
  { path: "/sign-up", element: <SignUpPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/*", element: <NotFound /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

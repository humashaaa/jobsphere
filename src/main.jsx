import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Root from "./Layout/Root";
import AuthProvider from "./AuthProvider/AuthProvider";
import ErrorPage from "./Pages/ErrorPage";
import { Toaster } from "react-hot-toast";
import JobDetails from "./Pages/JobDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch(`${import.meta.env.VITE_URL}/jobs`)
      },
      {
        path: "/job/:id",
        element:
           <PrivateRoute><JobDetails></JobDetails></PrivateRoute>
        ,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_URL}/job/${params.id}`),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster/>
  </React.StrictMode>
);

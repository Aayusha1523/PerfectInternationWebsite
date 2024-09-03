import React from "react";

import About from "../pages/About";
import Gallery from "../pages/Gallery";
import MainLayout from "../pages/MainLayout";
import Register from "../pages/Register";

const MainRouter = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <div>Contact</div>,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
];

export default MainRouter;

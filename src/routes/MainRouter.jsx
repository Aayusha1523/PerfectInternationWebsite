import React from "react";

import About from "../pages/About";
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
      

    ],
  },
];

export default MainRouter;

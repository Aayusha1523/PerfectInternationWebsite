import React from "react";

import About from "../pages/About";
import MainLayout from "../pages/MainLayout";

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
    ],
  },
];

export default MainRouter;

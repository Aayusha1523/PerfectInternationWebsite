import React from "react";

import MainLayout from "../pages/MainLayout";

const MainRouter = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "about",
        element: <div>ABout</div>,
      },
      {
        path: "contact",
        element: <div>Contact</div>,
      },
    ],
  },
];

export default MainRouter;

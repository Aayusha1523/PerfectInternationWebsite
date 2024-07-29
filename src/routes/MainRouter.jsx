import React from "react";

import Contact from "../pages/Contact";
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
        element: <Contact/>,
      },
    ],
  },
];

export default MainRouter;

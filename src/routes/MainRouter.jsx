import React from "react";

import About from "../pages/About";
import MainLayout from "../pages/MainLayout";
import Test from "../pages/Test";

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
        path:"test",
        element:<Test/>
      }
      
    ],
  },
];

export default MainRouter;


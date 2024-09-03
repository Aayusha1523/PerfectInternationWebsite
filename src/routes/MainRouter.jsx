import React from "react";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import MainLayout from "../pages/MainLayout";
import Register from "../pages/Register";
import Testprep from "../pages/Testprep";

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
        element: <Contact />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "testprep",
        element: <Testprep />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
];

export default MainRouter;

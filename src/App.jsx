import "./App.css";
import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainRouter from "./routes/MainRouter";
// import MainBody from "./pages/MainBody";

const router = createBrowserRouter([...MainRouter]);

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

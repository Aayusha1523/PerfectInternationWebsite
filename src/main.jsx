import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import MainRouter from "./routes/MainRouter.jsx";

const router = createBrowserRouter([...MainRouter]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

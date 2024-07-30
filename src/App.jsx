import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainRouter from "./routes/MainRouter";

// import MainBody from "./pages/MainBody";

const router = createBrowserRouter([...MainRouter]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

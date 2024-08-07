import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import NavbarBar from "../components/NavbaR/NavbarBar";
import Footer from "./Footer";
import Homepage from "./Homepage";

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <NavbarBar />
      {isHomePage ? <Homepage /> : <Outlet />}
      <Footer />
    </>
  );
};

export default MainLayout;

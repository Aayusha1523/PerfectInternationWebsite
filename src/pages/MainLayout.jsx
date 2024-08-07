import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import NavbarBar from "../components/NavbaR/NavbarBar";
import Header from "./Header";

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <NavbarBar />
      {isHomePage ? <Header /> : <Outlet />}
      
    </>
  );
};

export default MainLayout;

import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import NavbarBar from "../components/NavbaR/NavbarBar";
import Homepage from "./Homepage";

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <NavbarBar />
      {isHomePage ? <Homepage /> : <Outlet />}
      <div>FOoter</div>
    </>
  );
};

export default MainLayout;

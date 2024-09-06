import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import MobileNavbar from "../components/NavbaR/MobileNavbar";
import NavbarBar from "../components/NavbaR/NavbarBar";
import Footer from "./Footer";
import Homepage from "./Homepage";

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Get current date (only YYYY-MM-DD format)
    const today = new Date().toISOString().split("T")[0];

    // Check stored values in local storage
    const savedOpacity = localStorage.getItem("opacity");
    const savedDate = localStorage.getItem("lastUpdated");

    if (savedOpacity && savedDate) {
      setOpacity(parseFloat(savedOpacity));

      // If last update was on a previous day, reduce opacity
      if (savedDate !== today && parseFloat(savedOpacity) > 0) {
        const newOpacity = Math.max(parseFloat(savedOpacity) - 0.01, 0);

        // Set new opacity and updated date
        setOpacity(newOpacity);
        localStorage.setItem("opacity", newOpacity.toFixed(2));
        localStorage.setItem("lastUpdated", today);
      }
    } else {
      // First time visit, initialize local storage
      localStorage.setItem("opacity", opacity);
      localStorage.setItem("lastUpdated", today);
    }
  }, []);

  // Disable developer tools manipulation detection (optional security layer)
  useEffect(() => {
    // Detect F12 or right-click inspect
    window.onkeydown = function (e) {
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        alert("Dev tools manipulation is disabled.");
        return false;
      }
    };
  }, []);
  return (
    <section style={{ opacity: "1" }}>
      <div className="d-none d-md-block d-lg-block">
        <NavbarBar />
      </div>
      <div className="d-md-none d-lg-none">
        <MobileNavbar />
      </div>
      <main style={{ minHeight: "100svh" }}>
        {isHomePage ? <Homepage /> : <Outlet />}
      </main>
      <Footer />
    </section>
  );
};

export default MainLayout;

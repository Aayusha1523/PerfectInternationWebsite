import React from "react";

import ContactInfo from "../components/Footer/ContactInfo";
import FooterLogo from "../components/Footer/FooterLogo";
import Links from "../components/Footer/Links";

const Footer = () => {
  return (
    <footer
      className="d-flex justify-content-around align-items-center"
      style={{
        height: "250px",
        background: "var(--main-Color)",
        color: "var( --secondary-Color)",
      }}
    >
      <FooterLogo />

      <Links />

      <ContactInfo />
    </footer>
  );
};

export default Footer;

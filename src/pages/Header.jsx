import React from "react";
import NavbarBar from "../components/header/NavbarBar";
import ContactDetailHeader from "../components/header/ContactDetailHeader";
import Logo from "../components/header/Logo";
import style from "../style/header.module.css";
import Banner from "../components/banner/Banner";
const Header = () => {
  return (
    <section>
      {/* this is first section  */}
      <section id="first-section">
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.contactDetailHeader}>
          <ContactDetailHeader />
        </div>
        <div>
          <NavbarBar />
        </div>
      </section>
      {/* this section 2  */}
      <section className={style.bagImage}>
        <Banner />
      </section>
    </section>
  );
};

export default Header;

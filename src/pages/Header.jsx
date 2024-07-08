import React from "react";
import NavbarBar from "../components/header/NavbarBar";
import ContactDetailHeader from "../components/header/ContactDetailHeader";
import Logo from "../components/header/Logo";
import style from "../style/header.module.css";
import Banner from "../components/banner/Banner";
import Banner2 from "../components/banner/Banner2";
const Header = () => {
  return (
    <section>
      <h1>Hello</h1>
      {/* this is first section  */}
      <section>
        <div className={style.logo}>
          <Logo />
        </div>
        <div>
          <ContactDetailHeader />
        </div>
        <div>
          <NavbarBar />
        </div>
      </section>
      {/* this section 2  */}
      <section className={style.firstSection}>
        <Banner />
      </section>

      <section className="mt-5">
        <Banner2/>
      </section>
    </section>
  );
};

export default Header;

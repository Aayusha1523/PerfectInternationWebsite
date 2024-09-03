import { Button } from "react-bootstrap";

import style from "../../style/navbar.module.css";
import ContactDetailHeader from "./ContactDetailHeader";
import Logo from "./Logo";
import RegisterBtn from "./RegisterBtn";
const NavbarBar = () => {
  return (
    <section className={style.NavbarContainer}>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.contactDetailHeader}>
        <ContactDetailHeader />
      </div>
      <div
        id={style.FirstNavSection}
        className="d-flex justify-content-center align-items-center"
      >
        <ul className={style.NavbarUll}>
          <li>
            {" "}
            <a href="/"> Home </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/about"> About-us</a>
          </li>
          <li>
            {" "}
            <a href="#services">Services </a>
          </li>
          <li>
            {" "}
            <a href="/gallery"> Gallery</a>
          </li>
          <li>
            {" "}
            <a href=""> PTE/IETS</a>
          </li>
          <li>
            {" "}
            <a href="/contact"> Contact</a>
          </li>
        </ul>
        <div className={style.registerBtn}>
          {/* <a href="/" className="text-decoration-none"> */}
          <RegisterBtn />
          {/* </a> */}
        </div>
      </div>
    </section>
  );
};

export default NavbarBar;

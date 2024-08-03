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
          <li>Home</li>
          <li>About-us</li>
          <li>Services</li>
          <li>Coourse</li>
          <li>PTE/IETS</li>
        </ul>
        <div className={style.registerBtn}>
          <a href="/contact" className="text-decoration-none">
            <RegisterBtn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NavbarBar;

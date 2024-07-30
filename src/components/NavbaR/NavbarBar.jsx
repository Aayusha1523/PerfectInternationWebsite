import { RiArrowDownSLine } from "react-icons/ri";

import style from "../../style/navbar.module.css";
import ContactDetailHeader from "./ContactDetailHeader";
import Logo from "./Logo";
const NavbarBar = () => {
  return (
    <section>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.contactDetailHeader}>
        <ContactDetailHeader />
      </div>
      <div id="FirstNavSection">
        <ul
          className="d-flex justify-content-center align-items-center gap-4 py-4"
          style={{ listStyle: "none" }}
        >
          <li>Home</li>
          <li>About-us</li>
          <li>
            Services <RiArrowDownSLine />
          </li>
          <li>
            Coourse <RiArrowDownSLine />
          </li>
          <li>
            PTE/IETS <RiArrowDownSLine />
          </li>
          <li>
            Form <RiArrowDownSLine />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavbarBar;

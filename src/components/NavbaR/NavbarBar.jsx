import style from "../../style/navbar.module.css";
import ContactDetailHeader from "./ContactDetailHeader";
import Logo from "./Logo";
const NavbarBar = () => {
  return (
    <section className={style.NavbarContainer}>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.contactDetailHeader}>
        <ContactDetailHeader />
      </div>
      <div id="FirstNavSection">
        <ul
          // className="d-flex justify-content-center align-items-center gap-4 py-4"
          className={style.NavbarUll}
        >
          <li>Home</li>
          <li>About-us</li>
          <li>Services</li>
          <li>Coourse</li>
          <li>PTE/IETS</li>
          <li>Form</li>
        </ul>
      </div>
    </section>
  );
};

export default NavbarBar;

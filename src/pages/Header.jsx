import Banner from "../components/banner/Banner";
import ContactDetailHeader from "../components/NavbaR/ContactDetailHeader";
import Logo from "../components/NavbaR/Logo";
import NavbarBar from "../components/NavbaR/NavbarBar";
import style from "../style/header.module.css";
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

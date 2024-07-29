import { RiArrowDownSLine } from "react-icons/ri";
const NavbarBar = () => {
  return (
    <div>
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
  );
};

export default NavbarBar;

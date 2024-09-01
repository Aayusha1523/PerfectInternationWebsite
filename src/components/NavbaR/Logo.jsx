import PicLogo from "../../assets/Images/PICElogo.jpeg";

const Logo = () => {
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        borderRadius: "50%",
        backgroundImage: `url(${PicLogo})`,
        backgroundPosition: "center",
        backgroundSize: "150px",
      }}
    ></div>
  );
};

export default Logo;

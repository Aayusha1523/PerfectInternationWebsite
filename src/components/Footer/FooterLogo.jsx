import React from "react";

import FpiceLogo from "../../assets/Images/PICElogo.jpeg";
const FooterLogo = () => {
  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        borderRadius: "50%",
        backgroundImage: `url(${FpiceLogo})`,
        backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        backgroundSize: "200px",
      }}
    ></div>
  );
};

export default FooterLogo;

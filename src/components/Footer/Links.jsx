import React from "react";

const Links = () => {
  return (
    <div>
      <ul
        style={{ listStyle: "none", fontSize: "19px", cursor: "pointer" }}
        className="d-flex flex-column gap-2 "
      >
        <li>Home</li>
        <li>Contact-us</li>
        <li>Location</li>
        <li>About-us</li>
      </ul>
    </div>
  );
};

export default Links;

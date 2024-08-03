import React from "react";

import howWeOperateImage from "/Image/Soft Yellow Geometric Business Tips Poster/how we operated.png";

import style from "./MainCss.module.css";
const HowWeOperate = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      data-aos="zoom-in"
    >
      <img src={howWeOperateImage} height={800} />
    </div>
  );
};

export default HowWeOperate;

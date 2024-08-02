import React from "react";

import howWeOperateImage from "/Image/Soft Yellow Geometric Business Tips Poster/how we operated.png";

import style from "./MainCss.module.css";
const HowWeOperate = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <p className={style.textOperate}>How we Operate</p>

      <img src={howWeOperateImage} width={1000} />
    </div>
  );
};

export default HowWeOperate;

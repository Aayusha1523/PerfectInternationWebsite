import React from "react";
import Carousel from "react-bootstrap/Carousel";

import studyInNewZeland from "/Image/Soft Yellow Geometric Business Tips Poster/studyInNewZeland.png";

import studyInAustralia from "../../../public/Image/Soft Yellow Geometric Business Tips Poster/studyInAustralia.png";
import studyInCanada from "../../../public/Image/Soft Yellow Geometric Business Tips Poster/studyInCanada.png";
import studyInUk from "../../../public/Image/Soft Yellow Geometric Business Tips Poster/studyInUK.png";
import studyInUSA from "../../../public/Image/Soft Yellow Geometric Business Tips Poster/studyInUsa.png";
import style from "./MainCss.module.css";
const ImageCarouse = () => {
  return (
    <Carousel fade className={style.customCarousel} interval={800}>
      <Carousel.Item>
        <img src={studyInUSA} alt="" className="d-block w-100" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={studyInUk} alt="" className="d-block w-100" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={studyInAustralia} alt="" className="d-block w-100" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={studyInCanada} alt="" className="d-block w-100" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={studyInNewZeland} alt="" className="d-block w-100" />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarouse;

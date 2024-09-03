import PropTypes from "prop-types";
import React from "react";

import style from "../../style/gallery.module.css";
const GalleryCard = ({ path }) => {
  return (
    <div className={style.galleryCon}>
      <img src={path} alt="Gallery item" className={style.imgHover} />
    </div>
  );
};
GalleryCard.propTypes = {
  path: PropTypes.string.isRequired, // Ensure path is a string and is required
};
export default GalleryCard;

import React from "react";
import { Container } from "react-bootstrap";

import GalleryCard from "../components/Gallery/GalleryCard";
import ImageGallery from "../components/Gallery/ImageGallery";

const Gallery = () => {
  return (
    <section
      className="d-flex flex-wrap gap-5  "
      style={{ marginLeft: "10rem" }}
    >
      {ImageGallery.map((items) => {
        return (
          <div key={items.id} data-aos="zoom-in">
            <GalleryCard key={items.id} path={items.imgpath} />
          </div>
        );
      })}
    </section>
  );
};

export default Gallery;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import GalleryCard from "../components/Gallery/GalleryCard";
import ImageGallery from "../components/Gallery/ImageGallery";

const Gallery = () => {
  return (
    <section
      className="d-flex flex-wrap gap-5  "
      style={{ marginLeft: "10rem" }}
    >
      <Container>
        <Row>
          {ImageGallery.map((items) => {
            return (
              <Col md="4" key={items.id} data-aos="zoom-in">
                <GalleryCard key={items.id} path={items.imgpath} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;

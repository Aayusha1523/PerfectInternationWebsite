import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import visionImg from "../../assets/Images/vision.jpeg";

const Vision = () => {
  return (
    <div style={{ paddingTop: "2rem" }} className="vision">
      <Container>
        <Row>
          <Col className="Intro" lg="7" md="3" data-aos="fade-left">
            <h4 style={{ color: "darkblue", fontSize: "44px" }}>VISION</h4>
            <p
              style={{
                paddingTop: "6px",
                fontSize: "18px",
                textAlign: "justify",
              }}
            >
              {" "}
              Our vision is to be a beacon of excellence in international
              education consultancy, guiding students towards academic success
              and personal growth. By bridging the gap between ambitious
              students and world-class educational institutions, we aim to
              create a network of global citizens equipped with the knowledge,
              skills, and cultural awareness necessary to thrive in an
              increasingly interconnected world.
            </p>
          </Col>
          <Col gx="1" md="2"></Col>

          <Col lg="2" md="2">
            {/* For IMAGE */}
            <img
              className=" Vision"
              style={{ width: "300px", height: "300px", paddingTop: "50px" }}
              src={visionImg}
              data-aos="fade-right"
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Vision;

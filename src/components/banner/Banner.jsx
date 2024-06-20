import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const Banner = () => {
  return (
    <Container>
      <Row>
        <Col lg={10} style={{ border: "1px solid black" }}>
          <div className="d-flex justify-between align-center flex-column gap-5">
            <div id="logo"></div>

            <h3 style={{ color: "#DACA40" }}>
              Perfect International Education <br></br> Consultancy{" "}
            </h3>
            <h5>
              Let us help you provide a proper guidance to find a right spot for
              your career.
            </h5>
          </div>
          <Button style={{ borderRadius: "20px" }} className="mt-3">select country</Button>
        </Col>
        {/* Image of girl  */}
        <Col>
          <img src="" alt="anything" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;

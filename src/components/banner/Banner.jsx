import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { RiArrowDownSLine } from "react-icons/ri";
const Banner = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          xs={8}
          className="d-flex flex-column  justify-content-center p-5 gap-4"
        >
          <div id="logo">
            <h1>FLAG OF COUNTRY</h1>
          </div>

          <h1>
            Perfect International Education <br /> Consultancy{" "}
          </h1>
          <h4>
            Let us help you provide a proper guidance to find a right spot{" "}
            <br />
            for your career.
          </h4>
          <Button className="w-25">
            select country <RiArrowDownSLine />
          </Button>
        </Col>

        <Col>
          <img
            src="/Image/eagle.jpg"
            alt=""
            width={"500px"}
            height={"660px"}
            style={{ border: "3px solid red", marginTop: "2rem" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;

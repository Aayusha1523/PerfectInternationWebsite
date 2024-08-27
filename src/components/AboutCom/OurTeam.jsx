import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import LogoI from "../../assets/Images/Perfect logo.jpg"


const OurTeam = () => {
  return (
    <Container>
      <h1 style={{ alignItems: "center" }}>OUR TEAM</h1>
      <Row>
        <Col className="people" lg="2" md="2">
          <img
            style={{ width: "200px", padding: "15px" }}
            // src={Vision}
            src={LogoI}
          ></img>
          <h4>Director</h4>
          <h6>Subash Pandey</h6>
          <p>Reading,Uk</p>
        </Col>

        <Col className="people" lg="2" md="2">
          <img
            style={{ width: "200px", padding: "15px" }}
            // src={Vision}
            src={LogoI}
          ></img>
          <h4>Director</h4>
          <h6>Laxmi Poudel</h6>
          <p>Reading,Uk</p>
        </Col>

        <Col className="people" lg="2" md="2">
          <img
            style={{ width: "200px", padding: "15px" }}
            // src={Vision}
            src={LogoI}
          ></img>
          <h4>Director</h4>
          <h6>Subash Pandey</h6>
          <p>Reading,Uk</p>
        </Col>

        <Col className="people" lg="2" md="2">
          <img
            style={{ width: "200px", padding: "15px" }}
            // src={Vision}
            src={LogoI}
          ></img>
          <h4>Director</h4>
          <h6>Subash Pandey</h6>
          <p>Reading,Uk</p>
        </Col>
      </Row>
    </Container>
  );
};

export default OurTeam;

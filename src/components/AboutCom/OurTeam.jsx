import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import LogoI from "../../assets/Images/Perfect logo.jpg";
import teamInfo from "../about/teamInfo";

const OurTeam = () => {
  return (
    <Container>
      <h1 style={{ alignItems: "center" }}>OUR TEAM</h1>
      <Row>
        {teamInfo.map((item) => {
          return (
            <Col className="people" lg="2" md="2" key={item.id}>
              <img
                style={{ width: "200px", padding: "15px" }}
                // src={Vision}
                src={LogoI}
              ></img>
              <h4>{item.postion}</h4>
              <h6>{item.name}</h6>
              <p>Reading,Uk</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default OurTeam;

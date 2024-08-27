import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import Mission from "../../assets/Images/missi.webp";
const AboutMission = () => {
  return (
    <div className="Mission">
    <Container>
      <Row style={{ padding: "30px" }}>
        <Col>
          {/* For IMAGE */}
          <img
            style={{ width: "400px", height: "365px", paddingTop: "110px" }}
            src={Mission}
          ></img>
        </Col>

        <Col className="Intro">
          <h4 style={{ color: "darkblue", fontSize: "44px" }}>
            OUR MISSION
          </h4>

          <div className="card-about">
            <p
              style={{
                paddingTop: "6px",
                fontSize: "18px",
                textAlign: "justify",
                zIndex: "2",
              }}
            >
              Our mission is to provide comprehensive and personalized
              consultancy services that ensure each student finds the
              perfect educational opportunity fitting their aspirations and
              capabilities.We value the uniqueness of each students
              ambitions and endeavors to provide tailored solutions that
              enhance their academic and personal growth. By fostering
              relationships with students, families, and educational
              institutions, we create enduring partnerships that support
              lifelong learning and success. Ultimately, our mission is to
              inspire and empower students to achieve their educational
              aspirations abroad, thereby shaping a brighter future for
              themselves and contributing positively to global communities.
              Perfect International Education Consultancy is not just about
              sending students abroadits about guiding them towards a path
              of academic excellence and personal fulfillment.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    {/* MISSION ENDED */}
  </div>
  )
}

export default AboutMission

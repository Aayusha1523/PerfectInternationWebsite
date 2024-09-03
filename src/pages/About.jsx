import "../style/about.css";

import { Col, Container, Row } from "react-bootstrap";

import LogoP from "../assets/Images/PICElogo.jpeg";
import AboutMission from "../components/AboutCom/AboutMission";
import Goal from "../components/AboutCom/Goal";
import OurTeam from "../components/AboutCom/OurTeam";
import TypedWords from "../components/AboutCom/TypedWords";
import Vision from "../components/AboutCom/Vision";
const About = () => {
  return (
    <>
      <TypedWords />
      {/* THE INTRODUCTION ALONG WITH LOGO */}
      <Container>
        <Row>
          <Col lg="7" md="3" data-aos="fade-left">
            {" "}
            <p style={{ color: "darkblue", fontSize: "28px" }}>
              Perfect International Consultancy: Your Gateway to Global
              Education
            </p>
            <p style={{ fontSize: "20px" }}>
              {" "}
              Welcome to Perfect International Consultancy, your trusted partner
              in realizing academic dreams abroad. With a steadfast commitment
              to excellence, we specialize in facilitating placements for
              students seeking to study in the UK, America, Australia, Canada,
              and New Zealand.
            </p>
          </Col>
          <Col gx="1" md="2"></Col>
          <Col lg="2" md="2">
            <img
              className=" Logo"
              style={{
                width: "300px",
                height: "300px",
              }}
              data-aos="fade-right"
              src={LogoP}
            />
          </Col>
        </Row>
      </Container>

      {/* Intro Ended Here */}
      {/* MISSION STARTED */}
      <AboutMission />
      {/* VISION */}
      <Vision />
      {/* VISION ENDS HERE */}
      {/* GOAL STARTED */}
      <Goal />
      {/* Our team */}
      <OurTeam />
      {/* Ends Here */}
    </>
  );
};

export default About;

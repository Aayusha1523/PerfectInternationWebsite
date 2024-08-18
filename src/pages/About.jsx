import { Col, Container, Row } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import Goal from "../assets/Images/goal.webp";
import Mission from "../assets/Images/missi.webp";
import Logo from "../assets/Images/Perfect logo.jpg";
import Vision from "../assets/Images/vision.jpeg";
import "../style/about.css";
import teamInfo from "../components/about/teamInfo";

const About = () => {
  return (
    <>
      <div className="blurbox">
        <div className="Banner"></div>
        <div className="typeds">
          <ReactTyped
            strings={[
              "ABOUT US",
              "Perfect International Education Consultancy",
            ]}
            typeSpeed={40}
            loop
          />
        </div>
      </div>
      <div className="down">
        <p>
          Let us help you provide a proper guidance to find a right spot for
          your career.
        </p>
      </div>
      {/* THE INTRODUCTION ALONG WITH LOGO */}
      <Container>
        <Row>
          <Col lg="7" md="3">
            {" "}
            <p style={{ color: "darkblue", fontSize: "28px" }}>
              Perfect International Consultancy: Your Gateway to Global
              Education
            </p>
            <p style={{ fontSize: "18px" }}>
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
                width: "200px",
                height: "200px",
              }}
              src={Logo}
            />
          </Col>
        </Row>
      </Container>

      {/* Intro Ended Here */}
      {/* MISSION STARTED */}
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

              <div className="card">
                <p
                  style={{
                    paddingTop: "6px",
                    fontSize: "18px",
                    textAlign: "justify",
                    zIndex: "999",
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
                  sending students abroad; its about guiding them towards a path
                  of academic excellence and personal fulfillment.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        {/* MISSION ENDED */}
      </div>
      {/* VISION */}
      <div style={{ paddingTop: "2rem" }} className="vision">
        <Container>
          <Row>
            <Col className="Intro" lg="7" md="3">
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
                src={Vision}
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
      {/* VISION ENDS HERE */}
      {/* GOAL STARTED */}
      <div className="Mission">
        <Container>
          <Row>
            <Col md="12" lg="6">
              {/* For IMAGE */}
              <img
                style={{ width: "400px", height: "365px", paddingTop: "110px" }}
                // src={Goal}
                src={Goal}
              ></img>
            </Col>

            <Col className="Intro" md="12" lg="6">
              <h4 style={{ color: "darkblue", fontSize: "44px" }}>OUR GOAL</h4>

              <div className="card">
                <p
                  style={{
                    paddingTop: "6px",
                    fontSize: "18px",
                    textAlign: "justify",
                    zIndex: "999",
                  }}
                >
                  Perfect International Education is dedicated to realizing its
                  vision through a set of well-defined goals that drive our
                  consultancy services. These goals reflect our commitment to
                  excellence, student success, and global engagement:To provide
                  personalized and comprehensive guidance tailored to each
                  students unique academic and career aspirations,To facilitate
                  access to top-tier educational institutions in the UK, USA,
                  Australia, Canada, and New Zealand. To ensure students are
                  well-prepared for the academic rigor and cultural experiences
                  of studying abroad.To prepare students for the cultural
                  differences and social dynamics they will encounter abroad. To
                  promote cross-cultural understanding and global citizenship
                  through various programs and initiatives.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        {/* GOAL ENDED */}
      </div>
      {/* Our team */}
      <Container>
        <h1 style={{ alignItems: "center" }}>OUR TEAM</h1>
        <Row>
          {teamInfo.map((item) => {
            return (
              <Col className="people" lg="2" md="2" key={item.id}>
                <img
                  style={{ width: "200px", padding: "15px" }}
                  // src={Vision}
                  src={Logo}
                ></img>
                <h4>{item.postion}</h4>
                <h6>{item.name}</h6>
                <p>Reading,Uk</p>
              </Col>
            );
          })}
        </Row>
      </Container>
      {/* Ends Here */}
    </>
  );
};

export default About;

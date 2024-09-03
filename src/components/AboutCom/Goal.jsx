import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import GoalImg from "../../assets/Images/goal.webp";

const Goal = () => {
  return (
    <div className="Mission">
      <Container>
        <Row>
          <Col md="12" lg="6">
            {/* For IMAGE */}
            <img
              style={{ width: "400px", height: "365px", paddingTop: "110px" }}
              src={GoalImg}
              data-aos="fade-left"
            ></img>
          </Col>

          <Col className="Intro" md="12" lg="6" data-aos="fade-right">
            <h4 style={{ color: "darkblue", fontSize: "44px" }}>OUR GOAL</h4>

            <div className="card">
              <p
                style={{
                  paddingTop: "6px",
                  fontSize: "18px",
                  textAlign: "justify",
                  zIndex: "2",
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
                well-prepared for the academic rigor and cultural experiences of
                studying abroad.To prepare students for the cultural differences
                and social dynamics they will encounter abroad. To promote
                cross-cultural understanding and global citizenship through
                various programs and initiatives.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* GOAL ENDED */}
    </div>
  );
};

export default Goal;

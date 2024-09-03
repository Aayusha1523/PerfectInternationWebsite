import "../style/Testprep.css";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Duolingo from "../assets/Images/duolingo.webp";
import Gmat from "../assets/Images/Gmat.webp";
import Tofel from "../assets/Images/GRE.jpeg";
import Gre from "../assets/Images/gree.webp";
import Pte from "../assets/Images/PTE.jpeg";
import List from "../assets/Images/Untitled .jpg";

const Testprep = () => {
  return (
    <div>
      <Container>
        <div className="Ielts">
          <Row>
            <Col lg="7" md="3" data-aos="fade-right">
              <h1>IELTS</h1>
              <p style={{ marginTop: "1.5rem", fontSize: "19px" }}>
                The International English Language Testing System (IELTS) is a
                globally recognized English proficiency test designed for
                individuals who wish to study, work, or migrate to countries
                where English is the primary language. It assesses key language
                skills—listening, reading, writing, and speaking—through a
                series of structured tasks that mirror real-life situations.
                IELTS is available in two formats: Academic, for those pursuing
                higher education or professional registration, and General
                Training, for those aiming to work, train, or migrate. The test
                is scored on a band scale from 1 to 9, reflecting different
                levels of English proficiency, and is accepted by universities,
                employers, immigration authorities, and professional bodies
                worldwide.
              </p>
            </Col>
            <Col gx="1" md="2"></Col>

            <Col lg="3" md="2">
              <img
                className="list"
                style={{ width: "230px", height: "330px" }}
                src={List}
                data-aos="fade-left"
              ></img>
            </Col>
          </Row>
        </div>
        {/* IELTS COMPLETED */}

        <div className="PTE">
          <Row>
            <Col lg="3" md="2">
              <img
                className="PTE"
                style={{ width: "400px", height: "300px" }}
                src={Pte}
                data-aos="fade-right"
              />
            </Col>

            <Col gx="1" md="2"></Col>
            <Col lg="7" md="3" data-aos="fade-left">
              <h1>PTE</h1>
              <p style={{ marginTop: "1.5rem", fontSize: "19px" }}>
                {" "}
                The Pearson Test of English (PTE) is a widely recognized English
                language proficiency exam designed for non-native speakers who
                need to demonstrate their language skills for academic,
                professional, or immigration purposes. It assesses four key
                areas: speaking, writing, reading, and listening. The PTE is
                known for its unbiased and automated scoring system, which uses
                AI to evaluate test-takers responses, ensuring consistent and
                accurate results. The test is typically taken on a computer in a
                secure test center, and results are often available within a few
                days. PTE is accepted by thousands of institutions worldwide,
                making it a popular choice for individuals aiming to study,
                work, or migrate to English-speaking countries.
              </p>
            </Col>
          </Row>
        </div>
        {/* PTE completed */}

        <div className="PTE">
          <Row>
            <Col lg="7" md="3" data-aos="fade-left">
              <h1 style={{ paddingTop: "3rem" }}>TOFEL</h1>
              <p style={{ marginTop: "1.5rem", fontSize: "19px" }}>
                {" "}
                The Test of English as a Foreign Language (TOEFL) is a
                standardized exam that measures the English language proficiency
                of non-native speakers. Administered by the Educational Testing
                Service (ETS), TOEFL is widely accepted by universities,
                colleges, and institutions across the globe as a reliable
                indicator of a candidate’s ability to use and understand English
                at the university level. The exam assesses four key skills:
                reading, listening, speaking, and writing, with an emphasis on
                how these skills are used in academic settings. Available in
                both internet-based (TOEFL iBT) and paper-based formats, the
                TOEFL test is known for its rigorous structure and detailed
                feedback. Scores are typically available within 6-10 days, and a
                strong performance on the TOEFL can open doors to academic
                opportunities, professional advancement, and immigration options
                in English-speaking countries.
              </p>
            </Col>
            <Col gx="1" md="1"></Col>
            <Col lg="3" md="2">
              <img
                className="Tofel"
                style={{ width: "400px", height: "350px", paddingTop: "4rem" }}
                src={Tofel}
                data-aos="fade-right"
              />
            </Col>
          </Row>
        </div>

        {/* TOFEL ended */}

        <div className="PTE">
          <Row>
            <Col lg="3" md="2">
              <img
                className="Gre"
                style={{ width: "400px", height: "350px", paddingTop: "4rem" }}
                src={Gre}
                data-aos="fade-right"
              />
            </Col>

            <Col gx="1" md="2"></Col>

            <Col lg="7" md="3" data-aos="fade-left">
              <h1 style={{ paddingTop: "3rem" }}>GRE</h1>
              <p style={{ marginTop: "1.5rem", fontSize: "19px" }}>
                {" "}
                The Graduate Record Examination (GRE) is a widely recognized
                standardized test used primarily for admission to graduate
                programs around the world, especially in the United States. The
                GRE assesses a candidates abilities in three main areas: verbal
                reasoning, quantitative reasoning, and analytical writing. The
                test is designed to measure critical thinking and
                problem-solving skills that are essential for success in
                graduate school. The GRE is versatile and accepted across a wide
                range of disciplines, making it a popular choice for applicants
                to various graduate programs, including those in the humanities,
                sciences, and engineering.
              </p>
            </Col>
          </Row>
        </div>
        {/* gre ended */}

        <div className="PTE">
          <Row>
            <Col lg="7" md="3" data-aos="fade-left">
              <h1 style={{ paddingTop: "2rem" }}>GMAT</h1>
              <p style={{ marginTop: "1.5rem", fontSize: "19px" }}>
                {" "}
                The Graduate Management Admission Test (GMAT) is a standardized
                test specifically tailored for individuals applying to business
                schools, particularly for MBA and other business-related
                programs. The GMAT evaluates skills in four key areas:
                analytical writing, integrated reasoning, quantitative
                reasoning, and verbal reasoning. Business schools use GMAT
                scores to assess an applicants potential for success in a
                rigorous business program. The test is known for its focus on
                problem-solving and data analysis, which are critical skills in
                the business world. A strong GMAT score is often a significant
                factor in gaining admission to top business schools.
              </p>
            </Col>
            <Col gx="1" md="1"></Col>
            <Col lg="3" md="2">
              <img
                className="Gmat"
                style={{ width: "400px", height: "300px", paddingTop: "2rem" }}
                src={Gmat}
                data-aos="fade-right"
              />
            </Col>
          </Row>
        </div>
        {/* GMAT ENDED */}

        <div className="PTE">
          <Row>
            <Col lg="3" md="2">
              <img
                className="Duolingo"
                style={{
                  width: "400px",
                  height: "350px",
                  paddingTop: "4rem",
                  marginBottom: "100px",
                }}
                src={Duolingo}
                data-aos="fade-left"
              />
            </Col>

            <Col gx="1" md="2"></Col>
            <Col lg="7" md="3" data-aos="fade-left">
              <h1 style={{ paddingTop: "3rem" }}>Duolingo English Test</h1>
              <p style={{ marginTop: "1.5rem", fontSize: "19px" }}>
                {" "}
                The Duolingo English Test is an innovative online English
                proficiency exam that has become increasingly popular for its
                accessibility and convenience. Unlike traditional tests like
                TOEFL or IELTS, the Duolingo English Test can be taken from
                anywhere with an internet connection, making it a flexible
                option for test-takers. The test assesses all four language
                skills—reading, writing, speaking, and listening—using a variety
                of interactive tasks. The Duolingo English Test is recognized by
                many universities and institutions around the world as a valid
                measure of English language proficiency, particularly for
                admission to undergraduate and graduate programs. Its quick
                results and affordability make it an appealing choice for
                students and professionals alike.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Testprep;

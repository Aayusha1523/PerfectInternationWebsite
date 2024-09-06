import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Logo from "../../assets/Images/PICElogo.jpeg";
const MobileNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="mb-2" sticky="top">
      <Container>
        <Navbar.Brand>
          <img src={Logo} alt="" width={70} style={{ borderRadius: "50%" }} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ background: "white" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              style={{
                background: "white",
                textAlign: "center",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              style={{
                background: "white",
                textAlign: "center",
              }}
            >
              About-us
            </Nav.Link>

            <Nav.Link
              href="/services"
              style={{
                background: "white",
                textAlign: "center",
              }}
            >
              Services
            </Nav.Link>

            <Nav.Link
              href="/contact"
              style={{
                background: "white",
                textAlign: "center",
              }}
            >
              Contact
            </Nav.Link>

            <Nav.Link
              href="/register"
              style={{
                background: "white",
                textAlign: "center",
              }}
            >
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MobileNavbar;

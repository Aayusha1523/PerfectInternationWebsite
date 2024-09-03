import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";

import style from "../style/register.module.css";
const Contact = () => {
  const [state, handleSubmit] = useForm("mnnaobny");
  const [academicLevel, setAcademicLevel] = useState(""); // Store dropdown value here
  const [studyCountry, setStudyCountry] = useState(""); //store coutry value here
  // Handle dropdown selection
  const handleDropdownSelect = (value) => {
    setAcademicLevel(value);
  };
  const handleDropCountry = (value) => {
    setStudyCountry(value);
  };

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section className={style.container}>
      <Card
        border="primary"
        style={{ width: "30rem" }}
        className={style.mainCard}
      >
        <Card.Header>
          <h3 style={{ textAlign: "center", color: "blue" }}> Contact</h3>{" "}
        </Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit}>
            <div className={style.inputBox}>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                name="fullName"
                required
              />
              <ValidationError
                prefix="Full Name"
                field="fullName"
                errors={state.errors}
              />
            </div>

            <div className={style.inputBox}>
              <label>Address</label>
              <input
                type="text"
                className="field"
                name="address"
                placeholder="Enter your address"
                required
              />
              <ValidationError
                prefix="Address"
                field="address"
                errors={state.errors}
              />
            </div>

            <div className={style.inputBox}>
              <label>Email</label>
              <input
                type="email"
                className="field"
                name="email"
                placeholder="Enter your email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className={style.inputBox}>
              <label>Phone No.</label>
              <input
                type="text"
                className="field"
                placeholder="Enter your phone number"
                name="phoneNumber"
                required
              />
              <ValidationError
                prefix="Phone Number"
                field="phoneNumber"
                errors={state.errors}
              />
            </div>
            {/* 
            <div className={style.inputBox}>
              <label htmlFor="academic-level">Previous Academic Level</label>
              <Dropdown onSelect={handleDropdownSelect}>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{ width: "20rem" }}
                >
                  {academicLevel || "Academic Level"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="SEE">SEE</Dropdown.Item>
                  <Dropdown.Item eventKey="+2">+2</Dropdown.Item>
                  <Dropdown.Item eventKey="Bachelor">Bachelor</Dropdown.Item>
                  <Dropdown.Item eventKey="Master">Master</Dropdown.Item>
                  <Dropdown.Item eventKey="PHD">PHD</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <input
                type="hidden"
                name="academicLevel"
                value={academicLevel}
                required
              />
              <ValidationError
                prefix="Academic Level"
                field="academicLevel"
                errors={state.errors}
              />
            </div> */}

            <div className={style.inputBox}>
              <label htmlFor="Country">Country to Study</label>

              <Dropdown onSelect={handleDropCountry}>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{ width: "20rem" }}
                >
                  {studyCountry || "Choose Country to study"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="UK">UK</Dropdown.Item>
                  <Dropdown.Item eventKey="USA">USA</Dropdown.Item>
                  <Dropdown.Item eventKey="Canada">Canada</Dropdown.Item>
                  <Dropdown.Item eventKey="Austrial">Austrial</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <input
                type="hidden"
                name="Country To Study"
                value={studyCountry}
                required
              />
              <ValidationError
                prefix="Country To Study"
                field="Country To Study"
                errors={state.errors}
              />
            </div>

            <Button type="submit" variant="primary" disabled={state.submitting}>
              Submit
            </Button>
          </form>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Contact;

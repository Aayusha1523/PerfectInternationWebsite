import { useForm, ValidationError } from "@formspree/react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import style from "../style/register.module.css";
const Register = () => {
  // const [state, handleSubmit] = useForm("xeojkjwy");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }

  function handleSubmit(value) {
    return console.log(value);
  }
  return (
    <section className={style.container}>
      <Card
        border="primary"
        style={{ width: "27rem" }}
        className={style.mainCard}
      >
        <Card.Header>Registeration Card </Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit}>
            <div className={style.inputBox}>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                name="Full name"
                required
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
            </div>

            <div className={style.inputBox}>
              <label>Phone No.</label>
              <input
                type="text"
                className="field"
                placeholder="Enter your phone number"
                name="Phone Number"
                required
              />
            </div>

            <div className={style.inputBox}>
              <label htmlFor="Academic-level">Previous Academic Level</label>
              <select id="Academic" name="cars" size="3">
                <option value="SEE">SEE</option>
                <option value="+2">+2</option>
                <option value="Bachelors">Bachelor</option>
                <option value="Master">Master</option>
                <option value="Phd">Phd</option>
              </select>
            </div>

            <div className={style.inputBox}>
              <label>Feedback</label>
              <input
                type="text"
                placeholder="Tell us about how you feel"
                name="feedback"
              />
            </div>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </form>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Register;

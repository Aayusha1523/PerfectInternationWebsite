import { useForm, ValidationError } from "@formspree/react";
const Register = () => {
  const [state, handleSubmit] = useForm("xeojkjwy");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="email">Email Address</label> */}
      {/* <input id="email" type="email" name="email" placeholder="your Enail" />
      <ValidationError prefix="Email" field="email" errors={state.errors} /> */}

      {/* fullname  */}
      {/* <input
        type="text"
        id="FullName"
        name="FullName"
        placeholder="Full Name"
      /> */}
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      {/* <h1>CONTACT FORM</h1> */}
      <div className="input-box">
        {/* <label>Full Name</label> */}
        <input
          type="text"
          // className="field"
          placeholder="Enter your Full Name"
          name="Full name"
          required
        />
      </div>

      <div className="input-box">
        <label>Address</label>
        <input
          type="text"
          className="field"
          name="address"
          placeholder="Enter your address"
          required
        />
      </div>

      <div className="input-box">
        <label>Email</label>
        <input
          type="email"
          className="field"
          name="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="input-box">
        <label>Phone No.</label>
        <input
          type="text"
          className="field"
          placeholder="Enter your phone number"
          name="Phone Number"
          required
        />
      </div>
      {/* 
      <label htmlFor="Academic-level">Previous Academic Level</label>
      <select id="Academic" name="cars" size="3">
        <option value="SEE">SEE</option>
        <option value="+2">+2</option>
        <option value="Bachelors">Bachelor</option>
        <option value="Master">Master</option>
        <option value="Phd">Phd</option>
      </select> */}

      {/* <div>
        <label>Feedback</label>
        <input type="text" placeholder="Tell us about how you feel"></input>
      </div> */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;

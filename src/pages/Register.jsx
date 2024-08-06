import { useForm, ValidationError } from "@formspree/react";
const Register = () => {
  const [state, handleSubmit] = useForm("xanworan");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="email">Email Address</label> */}
      <input id="email" type="email" name="email" placeholder="your Enail" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      {/* fullname  */}
      <input
        type="text"
        id="FullName"
        name="FullName"
        placeholder="Full Name"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      {/* address  */}
      <input
        type="text"
        className="field"
        name="address"
        placeholder="Enter your address"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      {/* phone no  */}
      <input
        type="text"
        className="field"
        placeholder="Enter your phone number"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;

import "../style/contact.css"
import { useForm, ValidationError } from '@formspree/react';

import React from 'react'

const Contact = () => {
  const [state, handleSubmit] = useForm("xeojkonk");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    

    
    <div className="form">
    <div className="container">
      <form>
        <h1>CONTACT FORM
        <div className="underline"></div></h1>
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="input-box">
          <label>Address</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your address"
            required
          />
        </div>

        <div className="input-box">
          <label>Email</label>
          <input
            type="email"
            className="field"
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
            required
          />
        </div>
<div className="input-box">
        <label htmlFor="Academic-level">Previous Academic Level</label>
        <select id="Academic" name="cars" size="3">
          <option value="SEE">SEE</option>
          <option value="+2">+2</option>
          <option value="Bachelors">Bachelor</option>
          <option value="Master">Master</option>
          <option value="Phd">Phd</option>
        </select>
        </div>


     
        



        <div className="input-box">
            <label>Feedback</label>
            <input type="text" placeholder="Tell us about how you feel"></input>
        </div>

        
        <div className="uiverse">
    <span className="tooltip">Thank you</span>
    <span>
        Tooltip
    </span>
</div>

      </form>
    </div>
  </div>
 
  )
}

export default Contact


// git hub ma push garna paryo bhaney 

// git add git commit 
// git 
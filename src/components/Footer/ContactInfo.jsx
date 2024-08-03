import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const ContactInfo = () => {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <li>
          <FaLocationDot />
          Head Office,Nepal Office:-Bagbazar,Kathmandu
        </li>
        <li>
          <FaPhoneAlt />
          +977 9823582134, 01-5909940
        </li>
        <li>
          <MdEmail />
          Email:nepla@pinteducation.com
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;

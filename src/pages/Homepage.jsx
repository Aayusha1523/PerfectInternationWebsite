import React from "react";

import Banner from "../components/banner/Banner";
import HowWeOperate from "../components/MainBody/HowWeOperate";
import ImageCarouse from "../components/MainBody/ImageCarouse";
import ServiceCard from "../components/Services/ServiceCard";


const Homepage = () => {
  return (
    <>
      <Banner />

      <section>
        <div
          id="MainBText"
          className="text-center p-5 "
          style={{ height: "200px" }}
        >
          <h1 data-aos="zoom-in">
            Let us ensure a more successful and enjoyable experience in{" "}
            <br></br> your new environment
          </h1>
        </div>
        {/* study in carouse  */}
        <div className="mt-4">
          <ImageCarouse />
        </div>
        {/* How we Operate  */}
        <div className="mt-5" data-aos="zoom-in">
          <HowWeOperate />
        </div>
      </section>
      {/* SERVICES */}
      <ServiceCard/>
      
    </>
  );
};

export default Homepage;

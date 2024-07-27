import React from "react";
import ImageMAINbody from "../components/MainBody/ImageMAINbody";

const MainBody = () => {
  return (
    <section>
      <div
        id="MainBText"
        className="text-center p-5 "
        style={{ height: "200px" }}
      >
        <h2>
          Let us ensure a more successful and enjoyable experience in <br></br>{" "}
          your new environment
        </h2>
      </div>

      {/* second section of MainBody  */}
      <ImageMAINbody />
    </section>
  );
};

export default MainBody;

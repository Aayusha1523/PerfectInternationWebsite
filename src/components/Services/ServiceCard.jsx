import "../../style/Services.css";

import React from "react";

const ServiceCard = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
      <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        <div id="card" className="bg-gray-800 p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pr-52">
            <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">UI/UX <br /> creative design</h2>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
          </div>
        </div>

        <div id="card" className="bg-gray-800 p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pl-48">
            <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">visual <br /> graphic design</h2>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
          </div>
        </div>

        <div id="card" className="bg-gray-800 p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pr-44">
            <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">strategy & <br />digital marketing</h2>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
          </div>
        </div>

        <div id="card" className="bg-gray-800 p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pl-48">
            <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">effective<br /> business growth</h2>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;

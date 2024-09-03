import "../../style/services.css";

const ServiceCard = () => {
  return (
    <section className="min-vh-800 py-5">
      <h1 style={{ textAlign: "center" }}>Our Services</h1>
      <section className="min-vh-70 text-center py-5 px-3 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4">
            <div className="col">
              <div className="servicesCard card1  text-light p-4 position-relative">
                <div className="circle"></div>
                <div className="position-relative pe-5">
                  <h2 className="text-white mb-3 fs-4">
                    No <br /> Service Charge
                  </h2>
                  <p
                    className="text-muted "
                    style={{ fontWeight: "500", fontSize: "19px" }}
                  >
                    Our premium service is available with no service charge,
                    allowing you to enjoy all the benefits without any
                    additional costs.
                  </p>
                </div>
                <div className="icon"></div>
              </div>
            </div>
            <div className="col">
              <div className="servicesCard card2  text-light p-4 position-relative">
                <div className="circle"></div>
                <div className="position-relative ps-5">
                  <h2 className="text-white mb-3 fs-4">
                    Free <br /> Pickup
                  </h2>
                  <p
                    className="text-muted"
                    style={{ fontWeight: "500", fontSize: "19px" }}
                  >
                    Enjoy the convenience of free airport pickup with our
                    services, ensuring a smooth and hassle-free start to your
                    journey.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="servicesCard card3  text-light p-4 position-relative">
                <div className="circle"></div>
                <div className="position-relative pe-4">
                  <h2 className="text-white mb-3 fs-4">
                    Regular
                    <br /> Mock Tests
                  </h2>
                  <p
                    className="text-muted"
                    style={{ fontWeight: "500", fontSize: "19px" }}
                  >
                    Take advantage of our free mock tests to assess your
                    readiness and boost your confidence before the big exam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="servicesCard card4  text-light p-4 position-relative">
                <div className="circle"></div>
                <div className="position-relative ps-5">
                  <h2 className="text-white mb-3 fs-4">
                    Career <br /> Counselling
                  </h2>
                  <p
                    className="text-muted"
                    style={{ fontWeight: "500", fontSize: "19px" }}
                  >
                    Our complimentary career counseling services will help you
                    chart a clear path towards your professional goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ServiceCard;

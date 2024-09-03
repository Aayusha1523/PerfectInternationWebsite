import "../../style/services.css";

// import { Card, Col, Container, Row } from "react-bootstrap";

const ServiceCard = () => {
  return (
    <section className="min-vh-100 text-center py-5 px-3 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4">
          <div className="col">
            <div className="servicesCard card1  text-light p-4 position-relative">
              <div className="circle"></div>
              <div className="position-relative pe-5">
                <h2 className="text-white mb-3 fs-4">
                  UI/UX <br /> Creative Design
                </h2>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames.
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
                  Visual <br /> Graphic Design
                </h2>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="servicesCard card3  text-light p-4 position-relative">
              <div className="circle"></div>
              <div className="position-relative pe-4">
                <h2 className="text-white mb-3 fs-4">
                  Strategy & <br /> Digital Marketing
                </h2>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="servicesCard card4  text-light p-4 position-relative">
              <div className="circle"></div>
              <div className="position-relative ps-5">
                <h2 className="text-white mb-3 fs-4">
                  Effective <br /> Business Growth
                </h2>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;

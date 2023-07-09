import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

const BenefitsSection = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1199px)" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="pb-0" id="benefits-section">
      <div className="container ">
        <div className="border-top1 d-flex justify-content-center">
          <div className="border-line"></div>
        </div>
        <div>
          <h2 className="display-5 fw-bold text-center pb-3 pb-sm-5">
            Benefits of Joining JUKTI
          </h2>
        </div>
        <div className="row align-items-center mt-sm-5">
          <div className="col-lg-6 mt-2 mb-5">
            <h3 className="text-orange">Why you should join JUKTI</h3>
            <p className="lead mt-3">
              By becoming a member of JUKTI, you unlock a range of benefits and
              opportunities. As a member, one can participate in exclusive
              workshops and seminars, attend guest lectures by renowned speakers
              in the field, expand your professional network through industry
              connections and mentorship opportunities, and receive updates and
              notifications about upcoming events and opportunities.
            </p>
          </div>
          {isSmallScreen ? (
            <div className="col-lg-6 ps-1 ps-lg-5">
              <Slider {...settings}>
                <div className="card benefit-card fixed-height" id="bcard-1">
                  <div className="card-body">
                    <div className="text-center pb-3 ">
                      <img
                        src="/img/icon/skills.png"
                        alt=""
                        style={{ width: "3.5rem", margin: "0 auto" }}
                      />
                    </div>
                    <h6 className="fw-bold fs-5 card-title text-center">
                      Skills
                    </h6>
                    <p className="card-text text-center">
                      JUKTI organizes annual skill-based workshops to surpass
                      academic boundaries.
                    </p>
                  </div>
                </div>
                <div className="card benefit-card fixed-height" id="bcard-2">
                  <div className="card-body">
                    <div className="text-center pb-3">
                      <img
                        src="/img/icon/networking.png"
                        alt=""
                        style={{ width: "3.5rem", margin: "0 auto" }}
                      />
                    </div>
                    <h6 className="fw-bold fs-5 card-title text-center">
                      Networking
                    </h6>
                    <p className="card-text text-center">
                      JUKTI creates a strong platform for students and alumni
                      through seminars, events, and competitions.
                    </p>
                  </div>
                </div>
                <div className="card benefit-card fixed-height" id="bcard-3">
                  <div className="card-body">
                    <div className="text-center pb-3">
                      <img
                        src="/img/icon/job.png"
                        alt=""
                        style={{ width: "3.5rem", margin: "0 auto" }}
                      />
                    </div>
                    <h6 className="fw-bold fs-5 card-title text-center">
                      Placement
                    </h6>
                    <p className="card-text text-center">
                      JUKTI connects students with the industry to assist with
                      opportunities.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          ) : (
            <div className="col-lg-6 ps-1 ps-lg-5">
              <div className="row align-items-center">
                <div className="col-sm-4">
                  <div className="card benefit-card fixed-height" id="bcard-1">
                    <div className="card-body">
                      <div className="text-center pb-3">
                        <img
                          src="/img/icon/skills.png"
                          alt=""
                          style={{ width: "3.5rem" }}
                        />
                      </div>
                      <h6 className="fw-bold fs-5 card-title text-center">
                        Skills
                      </h6>
                      <p className="card-text text-center">
                        JUKTI organizes annual skill-based workshops to surpass
                        academic boundaries.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card benefit-card fixed-height" id="bcard-2">
                    <div className="card-body">
                      <div className="text-center pb-3">
                        <img
                          src="/img/icon/networking.png"
                          alt=""
                          style={{ width: "3.5rem" }}
                        />
                      </div>
                      <h6 className="fw-bold fs-5 card-title text-center">
                        Networking
                      </h6>
                      <p className="card-text text-center">
                        JUKTI creates a strong platform for students and alumni
                        through seminars, events, and competitions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card benefit-card fixed-height" id="bcard-3">
                    <div className="card-body">
                      <div className="text-center pb-3">
                        <img
                          src="/img/icon/job.png"
                          alt=""
                          style={{ width: "3.5rem" }}
                        />
                      </div>
                      <h6 className="fw-bold fs-5 card-title text-center">
                        Placement
                      </h6>
                      <p className="card-text text-center">
                        JUKTI connects students with the industry to assist with
                        opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

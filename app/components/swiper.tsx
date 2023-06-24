import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const SwiperSection = () => {
  return (
    <>
      <section
        className="section events bg-dark-navy"
        data-section="section4"
        style={{
          position: "relative",
          backgroundColor: "#081420",
          minHeight: "60vh",
        }}
      >
        <div className="custom-shape-divider-top-1686612771">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="container-fluid pt-5">
          <h2 className="display-6 fw-bold text-white text-center pt-2">
            Activities
          </h2>
          <div className="border-bot1 d-flex justify-content-center">
            <div className="border-line"></div>
          </div>
          <div className="row pt-0">
            <div className="col-md-12">
              <div className="section-heading">
                <a href="/pastevent.html" className="btn btn-outline-orange">
                  Jukti's Journey
                </a>
              </div>
            </div>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 10,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              // className="mySwiper"
            >
              <SwiperSlide>
                <img src="img\Events\e1.PNG" alt="Events #1" />
                <div className="down-content bg-white px-5">
                  <h4>Android App Dev Training</h4>
                  <p>
                    Program details: Room : Gallery - 5002 (level - 4)
                    <br />
                    • 1st Day ( May 28, 2015 - Thursday )<br />
                    • 2nd Day ( May 29, 2015 - Friday )<br />• 3rd Day ( May 30,
                    2015 - Saturday )
                  </p>
                  <div className="text-button-pay">
                    <a href="#">
                      View More <i className="fa fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="img\Events\e2.PNG" alt="Event #2" />
                <div className="down-content bg-white px-5">
                  <h4>Python Workshop</h4>
                  <p>
                    JUKTI - Offical Club of CSE brings you a series of workshop
                    on Python
                    <br />
                    Date: 6th February, 2020 (Every Thursday & Saturday)
                  </p>
                  <div className="text-button-pay">
                    <a href="#">
                      view more <i className="fa fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="img\Events\e3.PNG" alt="Event #3" />
                <div className="down-content bg-white px-5">
                  <h4>BD's Game Industry</h4>
                  <p>
                    Game development is all about creativity and technical
                    skills.
                  </p>
                  <div className="text-button-pay">
                    <a href="#">
                      view more <i className="fa fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="img\Events\e4.PNG" alt="Event #4" />
                <div className="down-content bg-white px-5">
                  <h4>Essence of Clubbing</h4>
                  <p>
                    The most experienced individuals shared their side of the
                    story and conveyed messages to all the students.
                  </p>
                  <div className="text-button-pay">
                    <a href="#">
                      View more <i className="fa fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="img\Events\e5.PNG" alt="" />
                <div className="down-content bg-white px-5">
                  <h4>SPOTLIGHT</h4>
                  <p>
                    Our Guest Speaker for Spotlight was Mahamudul Hassan Tonmoy.
                    Our Guest Speaker for Spotlight was Mahamudul Hassan Tonmoy
                  </p>
                  <div className="text-button-pay">
                    <a href="#">
                      View more <i className="fa fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="img\Events\e6.PNG" alt="" />
                <div className="down-content bg-white px-5">
                  <h4>Explore Engineers Hub with JUKTI</h4>
                  <p>
                    our Guest Speaker A.S.M. Sadman Sakib, Founder & Director at
                    Engineers Hub.
                    <br />
                    on 18th June 2021 at 8pm
                  </p>
                  <div className="text-button-pay">
                    <a href="#">
                      View more <i className="fa fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="img\Events\e7.PNG" alt="" />
                <div className="down-content bg-white px-5">
                  <h4>Startup SPECTACLE</h4>
                  <p>
                    Guest Speaker: Nashid Ali, Founder & CEO of CloudCreative.
                    <br />
                    Time: on 21st August at 8 PM
                  </p>
                  <div className="text-button-pay">
                    <a href="#">
                      View more <i className="fa fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
export default SwiperSection;

import React from "react";

const PastEvents = () => {
  return (
    <>
    <section id="carousel-section">
       <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/img/Events/upevent1.jpg" class="d-block w-100" alt="Slide 1" />
          </div>
          <div class="carousel-item">
            <img src="/img/Events/upevent2.jpg" class="d-block w-100" alt="Slide 2" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <section class="coming-soon" data-section="section3">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <div class="continer centerIt">
              <div>
                <h4>Join us on<em> Next Sunday</em></h4>
                <p class="fs-5">
                  You're invited to our upcoming orientation event where you
                  can learn more about our club, meet fellow members, and get
                  involved in exciting activities. Don't miss out on this
                  opportunity to kickstart your journey with JUKTI CSE Club!
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="row justify-content-between">
              <div class="col-3 bg-main-background">
                <div class="fs-4 text-center mb-4">Days</div>
                <div id="days" class="display-5 fw-bold text-center mb-4">
                  00
                </div>
              </div>
              <div class="col-3 bg-main-background">
                <div class="fs-4 text-center mb-4">Hours</div>
                <div id="hours" class="display-5 fw-bold text-center mb-4">
                  00
                </div>
              </div>
              <div class="col-3 bg-main-background">
                <div class="fs-4 text-center mb-4">Minutes</div>
                <div id="minutes" class="display-5 fw-bold text-center mb-4">
                  00
                </div>
              </div>
              <div class="col-3 bg-main-background">
                <div class="fs-4 text-center mb-4">Seconds</div>
                <div id="seconds" class="display-5 fw-bold text-center mb-4">
                  00
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </section>
    <section id="guest-speakers">
      <div class="speakers_area">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="serction_title_large mb-4">
                <h3>Speakers</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-6 col-md-6">
              <div class="row">
                <div class="col-md-6">
                  <div class="single_speaker">
                    <div class="speaker_thumb">
                      <img src="img\board\Sayed Al Banna - Web Master.jpg" alt="" />
                      <div class="hover_overlay">
                        <div class="social_icon">
                          <a href="#"><i class="fa fa-facebook"></i></a>
                          <a href="#"><i class="fa fa-instagram"></i></a>
                          <a href="#"><i class="fa fa-twitter"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mt-2 bg-main-background">
                  <div class="speaker_details">
                    <div class="speaker_name">
                      <h3 class="speaker_title">Sayed Al Banna</h3>
                      <p class="speaker_job">Web Master</p>
                      <p class="speaker_job">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Consequuntur, optio! Illum, impedit! Sit ipsum
                        voluptatibus nesciunt, minus inventore unde vel soluta
                        corrupti a quibusdam natus voluptatem! Beatae eligendi
                        minima laudantium!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-md-6">
              <div class="row">
                <div class="col-md-6">
                  <div class="single_speaker">
                    <div class="speaker_thumb">
                      <img src="img\board\Istiaq.jpg" alt="" />
                      <div class="hover_overlay">
                        <div class="social_icon">
                          <a href="#"><i class="fa fa-facebook"></i></a>
                          <a href="#"><i class="fa fa-instagram"></i></a>
                          <a href="#"><i class="fa fa-twitter"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="speaker_details">
                    <div class="speaker_name">
                      <h3 class="speaker_title">Istiaq Ahmed</h3>
                      <p class="speaker_job">Treasurer</p>
                      <p class="speaker_job">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Consequuntur, optio! Illum, impedit! Sit ipsum
                        voluptatibus nesciunt, minus inventore unde vel soluta
                        corrupti a quibusdam natus voluptatem! Beatae eligendi
                        minima laudantium!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PastEvents;

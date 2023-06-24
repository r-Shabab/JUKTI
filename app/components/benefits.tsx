import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="pb-5" id="benefits-section">
      <div className="container">
        <div className="border-top1 d-flex justify-content-center">
          <div className="border-line"></div>
        </div>
        <div>
          <h2 className="display-6 fw-bold text-center pb-5">
            Benefits of Joining JUKTI
          </h2>
        </div>
        <div className="row align-items-center mt-5">
          <div className="col-lg-6">
            <h2 className="section-title text-dark-navy">
              Why you should join JUKTI
            </h2>
            <p className="section-description lead">
              By becoming a member of JUKTI, you unlock a range of benefits and opportunities. As a member, one can participate in exclusive workshops and seminars, attend guest lectures by renowned speakers in the field, expand your professional network through industry connections and mentorship opportunities, and receive updates and notifications about upcoming events and opportunities.
            </p>
          </div>
          <div className="col-lg-6 ps-1 ps-lg-5">
            <div className="row align-items-center">
              <div className="col-sm-4">
                <div className="card fixed-height" style={{ width: '20rem', top: '-2rem' }}>
                  <div className="card-body">
                    <div className="text-center pb-3">
                      <img src="/img/icon/skills.png" alt="" style={{ width: '3.5rem' }} />
                    </div>
                    <h6 className="fw-bold fs-5 card-title text-center">Skills</h6>
                    <p className="card-text text-center">
                      JUKTI organizes annual skill-based workshops to surpass academic boundaries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card fixed-height" style={{ width: '20rem', top: '-2rem', right: '-10rem' }}>
                  <div className="card-body">
                    <div className="text-center pb-3">
                      <img src="/img/icon/networking.png" alt="" style={{ width: '3.5rem' }} />
                    </div>
                    <h6 className="fw-bold fs-5 card-title text-center">Networking</h6>
                    <p className="card-text text-center">
                      JUKTI creates a strong platform for students and alumni through seminars, events, and competitions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card fixed-height" style={{ width: '20rem', top: '11rem', right: '14rem' }}>
                  <div className="card-body">
                    <div className="text-center pb-3">
                      <img src="/img/icon/job.png" alt="" style={{ width: '3.5rem' }} />
                    </div>
                    <h6 className="fw-bold fs-5 card-title text-center">Placement</h6>
                    <p className="card-text text-center">
                      JUKTI connects students with the industry to assist with opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default BenefitsSection;

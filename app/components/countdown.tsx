import React from 'react';

const CountdownSection = () => {
  return (
    <section className="bg-white container position-relative elevate" style={{ top: '-2.5rem', borderRadius: '0.5rem' }}>
      <div>
        <div className="row align-items-center">
          <div className="col-6 p-2 text-center">
            <h2 className="fw-bold text-center">
              Join us on <span className="text-orange">Next Sunday</span>
            </h2>
            <p className="lead px-5">
              Stay tuned for exciting
              <span>
                <a href="/upevent.html" className="text-orange fw-bold" style={{ textDecoration: 'none' }}>
                  upcoming events
                </a>
              </span>
              and activities that will keep you engaged and inspired!
            </p>
          </div>
          <div className="col-6 p-2">
            <div className="row">
              <div className="col-3">
                <div className="fs-4 fw-bold text-center mb-4">Days</div>
                <div id="days" className="display-5 fw-bold text-center mb-4">00</div>
              </div>
              <div className="col-3">
                <div className="fs-4 fw-bold text-center mb-4">Hours</div>
                <div id="hours" className="display-5 fw-bold text-center mb-4">00</div>
              </div>
              <div className="col-3">
                <div className="fs-4 fw-bold text-center mb-4">Minutes</div>
                <div id="minutes" className="display-5 fw-bold text-center mb-4">00</div>
              </div>
              <div className="col-3">
                <div className="fs-4 fw-bold text-center mb-4">Seconds</div>
                <div id="seconds" className="display-5 fw-bold text-center mb-4">00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;

import React from "react";

const PastEvents = () => {
  return (
    <>
      <section className="bg-dark-navy">
        <div className="container d-flex flex-column justify-content-center align-items-center py-5">
          <h2 className="display-5 text-light">Collaborate with Us</h2>
          <p className="text-light text-center lead">
            Join our passionate community of tech enthusiasts! By collaborating
            with our university club, you can inspire the next generation,
            engage with our vibrant community, and gain campus-wide recognition.
          </p>
        </div>
        <div className="container d-flex flex-column justify-content-center align-items-center py-5">
          <div className="content-box-lg">
            <div className="container-fluid">
              <div className="row row-cols-1 row-cols-md-4 g-5">
                <div className="col">
                  <div className="collab-item text-center border rounded p-3">
                    <i className="text-light fa-solid fa-handshake"></i>
                    <h3 className="text-orange">Sponsorship</h3>
                    <hr />
                    <p className="text-light text-center">
                      Support our events, seminars, and workshops financially.
                      Gain visibility through logo placement, event recognition,
                      and social media promotion.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="collab-item text-center border rounded p-3">
                    <i className="text-light fa-solid fa-microphone"></i>
                    <h3 className="text-orange">Speaker</h3>
                    <hr />
                    <p className="text-light text-center">
                      Share industry expertise, inspire students, and network
                      with future talent through guest speaking at seminars and
                      workshops.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="collab-item text-center border rounded p-3">
                    <i className=" text-light fa-solid fa-laptop-code"></i>
                    <h3 className="text-orange">Workshops</h3>
                    <hr />
                    <p className="text-light text-center">
                      Partner with us to organize hands-on workshops, fostering
                      skill development and industry-academic interaction.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="collab-item text-center border rounded p-3">
                    <i className="text-light fa-sharp fa-solid fa-business-time"></i>
                    <h3 className="text-orange">Opportunities</h3>
                    <hr />
                    <p className="text-light text-center">
                      Connect with talented engineering students for internships
                      and job placements, leveraging our platform's reach and
                      motivated student base.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Form --> */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="registration-form">
              <h3 className="fw-bold">Reach out to us!</h3>
              <p className="lead">Fill out the form below:</p>
              <form
                action="submit.php"
                method="POST"
                enctype="multipart/form-data"
              >
                <div className="mb-3">
                  <label for="compName" className="form-label">
                    Company/Organization Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="compName"
                    name="compName"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="fullName" className="form-label">
                    Contact Person's Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="contactNumber" className="form-label">
                    Contact Number:
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="contactNumber"
                    name="contactNumber"
                    required
                  />
                </div>
                <div classNamename="mb-3">
                  <label for="compWebsite" className="form-label">
                    Company Website (optional)
                  </label>
                  <input
                    type="website"
                    className="form-control"
                    id="compWebsite"
                    name="compWebsite"
                  />
                </div>
                <div className="mb-3">
                  <label for="interest" className="form-label">
                    Collaboration Interest :
                  </label>
                  <select
                    className="form-select"
                    id="interest"
                    name="interest"
                    onchange="toggleOtherMajor(this.value)"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Sponsorship">Sponsorship</option>
                    <option value="Guest Speaking Engagement">
                      Guest Speaking Engagement
                    </option>
                    <option value="Collaborative Workshops and Projects">
                      Collaborative Workshops and Projects
                    </option>
                    <option value="Internship and Job Opportunities">
                      Internship and Job Opportunities
                    </option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="CollabDescribe" className="form-label">
                    Briefly describe how you would like to collaborate with us:
                  </label>
                  <textarea
                    className="form-control"
                    id="CollabDescribe"
                    name="CollabDescribe"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label for="addition" className="form-label">
                    Additional Comments or Questions:
                  </label>
                  <textarea
                    className="form-control"
                    id="addition"
                    name="addition"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastEvents;

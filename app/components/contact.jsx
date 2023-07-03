import React from "react";
import "./contact.css";
const ContactUs = () => {
  return (
    <>
      <section className="bg-dark-navy">
        <div className="container d-flex flex-column justify-content-center align-items-center py-5">
          <h2 className="display-1 text-light">CONTACT US</h2>
          <p className="text-light text-center lead">
            Got a question or want to collaborate? Contact us today and let's
            make great things happen together!
          </p>
        </div>
      </section>
      <div className="container-lg">
        <div className="m-4 row row-cols-1 row-cols-md-2">
          <div className="col-md-7 pe-md-5">
            <h2 className="text-dark-navy">
              <b>Reach out to us!</b>
            </h2>
            <h6 className="mt-4 opacity-75">
              Feel free to contact us with any questions or concerns you may
              have.
            </h6>

            <form
              action="submit_contact_form.php"
              method="POST"
              className="contact-form"
            >
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
                <label for="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-5 mt-3 mt-md-0 ps-md-5">
            <div className="inResponsive">
              <h2 className="text-dark-navy">
                <b>Collab with Us</b>
              </h2>
              <p id="collab">
                JUKTI fosters collaboration with industry partners like
                TechTrioz and BongoDev, as well as clubs and organizations like
                IUB E-Business Club (EBC) and AUST Innovation and Design.
                Together, we organize workshops and events, providing valuable
                opportunities for members to grow professionally and share
                knowledge. Join our vibrant network for professional growth and
                collaboration.
              </p>
            </div>
            <div className="mt-4 mb-4">
              <h2 className="text-dark-navy">
                <b>Other Ways to Connect</b>
              </h2>
              <div className="d-flex flex-column mt-3" id="description">
                <div className="ms-2 mb-1 d-flex">
                  <div>
                    <a
                      href="https://www.linkedin.com/company/jukti-iub/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin-in fa-2xl text-accent me-2"></i>
                    </a>
                  </div>
                  <div>
                    <p id="linkedin"
                      className="ms-2"
                    >
                      Expand your professional network and stay connected by
                      connecting with us on
                      <a
                        href="https://www.linkedin.com/company/jukti-iub/"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div className="ms-2 mb-1 d-flex">
                  <div>
                    <a
                      href="https://www.facebook.com/jukti.cse.iub"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook-f fa-2xl text-accent me-2"></i>
                    </a>
                  </div>
                  <div>
                    <p id="facebook"
                      className="ms-2"
                    >
                      Stay connected and get the latest updates by joining us on
                      <a
                        href="https://www.facebook.com/jukti.cse.iub"
                        target="_blank"
                      >
                        Facebook
                      </a>
                      !
                    </p>
                  </div>
                </div>
                <div className="ms-2 mb-1 d-flex">
                  <div>
                    <a
                      href="https://www.instagram.com/jukti.official/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram fa-2xl text-accent me-2"></i>
                    </a>
                  </div>
                  <div>
                    <p id="intagram"
                      className="ms-2"
                    >
                      Join us on
                      <a
                        href="https://www.instagram.com/jukti.official/"
                        target="_blank"
                      >
                        Instagram
                      </a>
                      for a visual journey through my world.
                    </p>
                  </div>
                </div>
                <div className="ms-2 mb-1 d-flex">
                  <div>
                    <a
                      href="https://www.youtube.com/@jukti-clubofcseiub2356"
                      target="_blank"
                    >
                      <i className="fa-brands fa-youtube fa-2xl text-accent me-2"></i>
                    </a>
                  </div>
                  <div>
                    <p id="youtube"
                      className="ms-2"
                    >
                      Subscribe to our
                      <a
                        href="https://www.youtube.com/@jukti-clubofcseiub2356"
                        target="_blank"
                      >
                        YouTube
                      </a>
                      channel for engaging and informative content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

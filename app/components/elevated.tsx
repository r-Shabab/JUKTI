const ElevatedSection = () => {
    return (
      <section className="bg-white container position-relative elevate" style={{ top: '-5.5rem', borderRadius: '0.5rem' }}>
        <div>
          <div className="row pt-2 px-2">
            <div className="col-4 p-3">
              <h5 className="fw-bold">
                <i className="fa-solid fa-users fa-lg me-3"></i> Our Community
              </h5>
              <p className="ps-5">
                Join our club and be part of a vibrant community of <strong>passionate learners</strong> and{' '}
                <strong>aspiring innovators</strong>. Together, we are a family of <strong id="member_count">500</strong>{' '}
                <strong>members</strong> and growing!
              </p>
            </div>
            <div className="col-4 p-3">
              <h5 className="fw-bold">
                <i className="fa-solid fa-calendar-check fa-lg me-3"></i> Exciting Events
              </h5>
              <p className="ps-5">
                Experience a wide range of <strong>exciting events</strong> designed to enhance your skills and knowledge
                in the field of computer science. From workshops and coding competitions to tech talks and hackathons,
                we've got it all!
              </p>
            </div>
            <div className="col-4 p-3">
              <h5 className="fw-bold">
                <i className="fa-solid fa-people-line fa-lg me-3"></i> Professional Networking
              </h5>
              <p className="ps-5">
                Connect with industry professionals, alumni, and like-minded individuals through our extensive{' '}
                <strong>networking opportunities</strong>. Expand your connections, gain valuable insights, and unlock new
                career prospects.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default ElevatedSection;  
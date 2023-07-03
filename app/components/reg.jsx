import React from "react";
import "./reg.css";
const Registration = () => {
  return (
    <>
      <section className="bg-dark-navy">
        <div className="container d-flex flex-column justify-content-center align-items-center py-5">
          <h2 className="display-1 text-light">Become a member</h2>
          <p className="text-light text-center lead">
            Ready to become a member? Register now to join our community and
            gain access to exclusive benefits and exciting opportunities!
          </p>
        </div>
      </section>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="registration-form">
              <h3 className="fw-bold">Recruitment Form</h3>
              <p className="lead">Fill out the form below to register:</p>
              <form
                action="submit.php"
                method="POST"
                enctype="multipart/form-data"
              >
                <div className="mb-3">
                  <label for="image" className="form-label">
                    Add Image:
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    name="image"
                    accept="image/*"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="fullName" className="form-label">
                    Full Name:
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
                  <label for="studentId" className="form-label">
                    Student ID:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentId"
                    name="studentId"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="major" className="form-label">
                    Major:
                  </label>
                  <select
                    className="form-select"
                    id="major"
                    name="major"
                    onchange="toggleOtherMajor(this.value)"
                    required
                  >
                    <option value="">Select your major</option>
                    <option value="Computer Science and Engineering (CSE)">
                      Computer Science and Engineering (CSE)
                    </option>
                    <option value="Computer Engineering (CE)">
                      Computer Engineering (CE)
                    </option>
                    <option value="Computer Science (CS)">
                      Computer Science (CS)
                    </option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div
                  className="mb-3"
                  id="otherMajorContainer"
                >
                  <label for="otherMajor" className="form-label">
                    Your Major:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="otherMajor"
                    name="otherMajor"
                  />
                </div>
                <div className="mb-3">
                  <label for="semester" className="form-label">
                    Semester:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="semester"
                    name="semester"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email:
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
                <div className="mb-3">
                  <label for="dob" className="form-label">
                    Date of Birth:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="presentAddress" className="form-label">
                    Present Address:
                  </label>
                  <textarea
                    className="form-control"
                    id="presentAddress"
                    name="presentAddress"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label for="facebook" className="form-label">
                    Link Your Facebook:
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="facebook"
                    name="facebook"
                  />
                </div>
                <div className="mb-3">
                  <label for="linkedin" className="form-label">
                    Link Your LinkedIn:
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="linkedin"
                    name="linkedin"
                  />
                </div>
                <div className="mb-3">
                  <label for="skills" className="form-label">
                    Skills:
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="programming"
                      name="skills[]"
                      value="Programming"
                    />
                    <label className="form-check-label" for="programming">
                      Programming
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="design"
                      name="skills[]"
                      value="Design"
                    />
                    <label className="form-check-label" for="design">
                      Design
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="communication"
                      name="skills[]"
                      value="Communication"
                    />
                    <label className="form-check-label" for="communication">
                      Communication
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customSkills"
                      name="skills[]"
                      value="CustomSkills"
                    />
                    <label className="form-check-label" for="customSkills">
                      Other (Please Specify)
                    </label>
                  </div>
                  <textarea
                    className="form-control"
                    id="customSkillsInput"
                    name="customSkillsInput"
                    rows="2"
                    placeholder="Enter your custom skills"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label for="culturalActivities" className="form-label">
                    Cultural Activities:
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="music"
                      name="culturalActivities[]"
                      value="Music"
                    />
                    <label className="form-check-label" for="music">
                      Music
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="dance"
                      name="culturalActivities[]"
                      value="Dance"
                    />
                    <label className="form-check-label" for="dance">
                      Dance
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="theater"
                      name="culturalActivities[]"
                      value="Theater"
                    />
                    <label className="form-check-label" for="theater">
                      Theater
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCultural"
                      name="culturalActivities[]"
                      value="CustomCultural"
                    />
                    <label className="form-check-label" for="customCultural">
                      Other (Please Specify)
                    </label>
                  </div>
                  <textarea
                    className="form-control"
                    id="customCulturalInput"
                    name="customCulturalInput"
                    rows="2"
                    placeholder="Enter your custom cultural activities"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label for="expectations" className="form-label">
                    What do you expect from this club and what club can get from
                    you?
                  </label>
                  <textarea
                    className="form-control"
                    id="expectations"
                    name="expectations"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label for="reasonToJoin" className="form-label">
                    Why do you want to join this club?
                  </label>
                  <textarea
                    className="form-control"
                    id="reasonToJoin"
                    name="reasonToJoin"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;

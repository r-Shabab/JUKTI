import React, { useEffect } from "react";
import { Collapse } from "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const FAQSection = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      // Enable the accordion functionality after the component has mounted
      const accordions = document.querySelectorAll(".accordion");
      accordions.forEach((accordion) => new Collapse(accordion));
    }
  }, []);
  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title display-6 fw-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="accordion" id="faqAccordion">
          {/* Question 1 */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="faqHeading1">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse1"
                aria-expanded="false"
                aria-controls="faqCollapse1"
              >
                When will the next recruitment start?
              </button>
            </h3>
            <div
              id="faqCollapse1"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading1"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                The next recruitment for JUKTI will begin in the upcoming
                semester. Stay tuned for announcements on our website and social
                media channels for specific dates and details.
              </div>
            </div>
          </div>
          {/* Question 2 */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="faqHeading2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse2"
                aria-expanded="false"
                aria-controls="faqCollapse2"
              >
                What are the mottos of JUKTI?
              </button>
            </h3>
            <div
              id="faqCollapse2"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading2"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p className="faq-answer">
                  JUKTI operates on the following mottos:
                </p>
                <ul className="faq-list">
                  <li>
                    <strong>Skill:</strong> JUKTI aims to enhance skills through
                    workshops, training sessions, and hands-on projects.
                  </li>
                  <li>
                    <strong>Networking:</strong> JUKTI provides networking
                    opportunities to connect with industry professionals,
                    alumni, and like-minded individuals.
                  </li>
                  <li>
                    <strong>Placement:</strong> JUKTI offers support and
                    resources for undergraduates to explore placement
                    opportunities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Question 3 */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="faqHeading3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse3"
                aria-expanded="false"
                aria-controls="faqCollapse3"
              >
                Why should we join JUKTI?
              </button>
            </h3>
            <div
              id="faqCollapse3"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading3"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p className="faq-answer">
                  Joining JUKTI offers several benefits:
                </p>
                <ul className="faq-list">
                  <li>
                    Networking Opportunities: Connect with like-minded
                    individuals, industry professionals, and experts in the
                    field of computer science and engineering.
                  </li>
                  <li>
                    Skill Development: Enhance your technical skills through
                    workshops, seminars, coding competitions, and hands-on
                    projects.
                  </li>
                  <li>
                    Leadership Experience: Get involved in organizing events,
                    managing projects, and holding executive committee positions
                    to develop valuable leadership skills.
                  </li>
                  <li>
                    Community and Support: Join a vibrant community of
                    passionate individuals who share your interests and goals,
                    and receive support from peers and mentors.
                  </li>
                  <li>
                    Industry Exposure: Gain insights into the industry through
                    guest lectures, industrial visits, and internship
                    opportunities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Question 4 */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="faqHeading4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse4"
                aria-expanded="false"
                aria-controls="faqCollapse4"
              >
                What does JUKTI have to offer?
              </button>
            </h3>
            <div
              id="faqCollapse4"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading4"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                <p className="faq-answer">
                  JUKTI offers a wide range of activities and opportunities,
                  including:
                </p>
                <ul className="faq-list">
                  <li>
                    Workshops and Seminars: Participate in hands-on workshops
                    and informative seminars on cutting-edge technologies,
                    programming languages, and industry trends.
                  </li>
                  <li>
                    Hackathons and Coding Competitions: Showcase your coding
                    skills and problem-solving abilities in competitive events
                    supported by JUKTI.
                  </li>
                  <li>
                    Project Showcase: Get the chance to showcase your course and
                    personal projects with fellow members during events, giving
                    you a platform to display your skills and work.
                  </li>
                  <li>
                    Guest Lectures: Attend talks and sessions by industry
                    professionals and renowned experts to gain insights and
                    expand your knowledge.
                  </li>
                  <li>
                    Networking Events: Engage with professionals, alumni, and
                    recruiters through networking events organized by JUKTI.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Question 5 */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="faqHeading5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse5"
                aria-expanded="false"
                aria-controls="faqCollapse5"
              >
                Can students from other departments also join JUKTI?
              </button>
            </h3>
            <div
              id="faqCollapse5"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading5"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, students from other departments are welcome to join JUKTI.
                While our club primarily focuses on computer science and
                engineering, we encourage interdisciplinary collaboration and
                believe that diverse perspectives contribute to a rich learning
                environment.
              </div>
            </div>
          </div>
          {/* Question 6 */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="faqHeading6">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse6"
                aria-expanded="false"
                aria-controls="faqCollapse6"
              >
                How can we join JUKTI?
              </button>
            </h3>
            <div
              id="faqCollapse6"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading6"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Joining JUKTI is easy! Simply visit our booth during the
                recruitment process, which usually takes place at the start of a
                new semester. You will be asked to fill up a couple of forms and
                give an interview soon after. Stay tuned for announcements on
                our website and social media channels for specific dates and
                details.
              </div>
            </div>
          </div>
          {/* Question 7 */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="faqHeading7">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse7"
                aria-expanded="false"
                aria-controls="faqCollapse7"
              >
                Can non-members attend workshops or seminars of JUKTI?
              </button>
            </h3>
            <div
              id="faqCollapse7"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading7"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, non-members are welcome to attend workshops and seminars
                organized by JUKTI. However, priority registration and exclusive
                benefits are usually reserved for JUKTI members. We encourage
                non-members to join the club to take full advantage of all the
                opportunities and resources available.
              </div>
            </div>
          </div>
          {/* Question 8 */}
          <div className="accordion-item">
            <h3 className="accordion-header" id="faqHeading8">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse8"
                aria-expanded="false"
                aria-controls="faqCollapse8"
              >
                How should we contact executives of JUKTI?
              </button>
            </h3>
            <div
              id="faqCollapse8"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading8"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                To get in touch with the executives of JUKTI, you can send an
                email to jukti.iub@gmail.com or send us a message on our
                Facebook page. Alternatively, you can also reach out to us
                through the "Contact Us" section on our website. We are
                responsive and will get back to you as soon as possible.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

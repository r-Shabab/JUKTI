import React, { useEffect } from "react";
// import { Collapse } from "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Accordion } from "react-bootstrap";

const FAQSection = () => {
  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title display-6 fw-bold text-center">
          Frequently Asked Questions
        </h2>
        <Accordion id="faqAccordion">
          {/* Question 1 */}
          <Accordion.Item eventKey="0">
            <Accordion.Header id="faqHeading1">
              When will the next recruitment start?
            </Accordion.Header>
            <Accordion.Body>
              S The next recruitment for JUKTI will begin in the upcoming
              semester. Stay tuned for announcements on our website and social
              media channels for specific dates and details.
            </Accordion.Body>
          </Accordion.Item>
          {/* Question 2 */}
          <Accordion.Item eventKey="1">
            <Accordion.Header id="faqHeading2">
              What are the mottos of JUKTI?
            </Accordion.Header>
            <Accordion.Body>
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
                  opportunities to connect with industry professionals, alumni,
                  and like-minded individuals.
                </li>
                <li>
                  <strong>Placement:</strong> JUKTI offers support and resources
                  for undergraduates to explore placement opportunities.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          {/* Question 3 */}
          <Accordion.Item eventKey="2">
            <Accordion.Header id="faqHeading3">
              Why should we join JUKTI?
            </Accordion.Header>
            <Accordion.Body>
              <p className="faq-answer">
                Joining JUKTI offers several benefits:
              </p>
              <ul className="faq-list">
                <li>
                  Networking Opportunities: Connect with like-minded
                  individuals, industry professionals, and experts in the field
                  of computer science and engineering.
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
                  Community and Support: Join a vibrant community of passionate
                  individuals who share your interests and goals, and receive
                  support from peers and mentors.
                </li>
                <li>
                  Industry Exposure: Gain insights into the industry through
                  guest lectures, industrial visits, and internship
                  opportunities.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          {/* Question 4 */}
          <Accordion.Item eventKey="3">
            <Accordion.Header id="faqHeading4">
              What does JUKTI have to offer?
            </Accordion.Header>
            <Accordion.Body>
              <p className="faq-answer">
                JUKTI offers a wide range of activities and opportunities,
                including:
              </p>
              <ul className="faq-list">
                <li>
                  Workshops and Seminars: Participate in hands-on workshops and
                  informative seminars on cutting-edge technologies, programming
                  languages, and industry trends.
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
                  professionals and renowned experts to gain insights and expand
                  your knowledge.
                </li>
                <li>
                  Networking Events: Engage with professionals, alumni, and
                  recruiters through networking events organized by JUKTI.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          {/* Question 5 */}
          <Accordion.Item eventKey="4">
            <Accordion.Header id="faqHeading5">
              Can students from other departments also join JUKTI?
            </Accordion.Header>
            <Accordion.Body>
              Yes, students from other departments are welcome to join JUKTI.
              While our club primarily focuses on computer science and
              engineering, we encourage interdisciplinary collaboration and
              believe that diverse perspectives contribute to a rich learning
              environment.
            </Accordion.Body>
          </Accordion.Item>
          {/* Question 6 */}
          <Accordion.Item eventKey="5">
            <Accordion.Header id="faqHeading6">
              How can we join JUKTI?
            </Accordion.Header>
            <Accordion.Body>
              Joining JUKTI is easy! Simply visit our booth during the
              recruitment process, which usually takes place at the start of a
              new semester. You will be asked to fill up a couple of forms and
              give an interview soon after. Stay tuned for announcements on our
              website and social media channels for specific dates and details.
            </Accordion.Body>
          </Accordion.Item>
          {/* Question 7 */}
          <Accordion.Item eventKey="6">
            <Accordion.Header id="faqHeading7">
              Can non-members attend workshops or seminars of JUKTI?
            </Accordion.Header>
            <Accordion.Body>
              Yes, non-members are welcome to attend workshops and seminars
              organized by JUKTI. However, priority registration and exclusive
              benefits are usually reserved for JUKTI members. We encourage
              non-members to join the club to take full advantage of all the
              opportunities and resources available.
            </Accordion.Body>
          </Accordion.Item>
          {/* Question 8 */}
          <Accordion.Item eventKey="7">
            <Accordion.Header id="faqHeading8">
              How should we contact executives of JUKTI?
            </Accordion.Header>
            <Accordion.Body>
              To get in touch with the executives of JUKTI, you can send an
              email to jukti.iub@gmail.com or send us a message on our Facebook
              page. Alternatively, you can also reach out to us through the
              "Contact Us" section on our website. We are responsive and will
              get back to you as soon as possible.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

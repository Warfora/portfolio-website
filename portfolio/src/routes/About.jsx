import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

import ScrollToTop from "react-scroll-to-top";
import ProfileImage from "../assets/me_for_portfolio.jpg";

import "./AboutStyles.css";

const About = () => {
  return (
    <div>
      <ScrollToTop
        smooth
        top={20}
        className="scroll-top-btn"
        color="#0f172a"
        component={(
          <svg viewBox="0 0 24 24" aria-hidden="true" className="scroll-top-icon">
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        )}
      />
      <Navbar/>
      <main className="about-page">
        <section className="about-section" aria-labelledby="about-title">
          <div className="about-copy">
            <p className="about-eyebrow">About me</p>
            <h1 id="about-title">Katarina Semjonova</h1>
            <h2 className="about-role">Software Engineering Student</h2>
            <div className="about-description">
              <p>
                I chose software engineering because I enjoy solving complex problems, designing technical solutions, 
                and understanding how systems work. I’m a proactive learner who is curious about emerging technologies.
              </p>

              <p>
                I focus on improving my prompt engineering skills, experimenting with different AI agents, 
                and configuring their skills and constraints. I appreciate how AI can automate repetitive tasks, 
                allowing me to focus more on planning, architecture, and reviewing the software I create.
              </p>

              <p>
                Outside of tech, I’m a sports enthusiast with a particular interest in climbing and paragliding. 
                I also enjoy tinkering with electronics and learning about cybersecurity.
              </p>
            </div>
          </div>
          <div className="about-photo-container">
            <img
              src={ProfileImage}
              alt="Katarina Semjonova"
              className="about-photo"
            />
          </div>
        </section>
        <section className="about-cards" aria-label="More about Katarina">
          <article
            className="about-card"
            style={{ "--about-card-accent": "#59a2f0" }}
          >
            <h2>Areas of Interest in Tech</h2>
            <p className="about-card-subtitle">All the way from binary to a button</p>
            <p className="about-card-description">
              Software architecture, structures, embedded systems, cybersecurity, AI, software infrastructure, and electronics.
            </p>
          </article>
          <article
            className="about-card"
            style={{ "--about-card-accent": "#9b7bff" }}
          >
            <h2>Hobbies</h2>
            <p className="about-card-subtitle">From sports to culture</p>
            <p className="about-card-description">
              I enjoy outdoor activities and cultural events, from snowboarding to musical theatre. I’m also part of the Pahkispeksi musical production team.
            </p>
          </article>
        </section>
        <section className="about-education" aria-labelledby="education-title">
          <h2 id="education-title" className="about-education-heading">Education</h2>
          <ol className="about-education-timeline">
            <li
              className="about-education-entry"
              style={{ "--education-accent": "#25c4b5" }}
            >
              <time className="about-education-date" dateTime="2024-01">
                Jan 2024 – Present
              </time>
              <span className="about-education-track" aria-hidden="true">
                <span className="about-education-marker">02</span>
              </span>
              <article className="about-education-card">
                <h3>Information Technology Studies</h3>
                <p className="about-education-organization">OAMK, Oulu University of Applied Sciences</p>
                <p className="about-education-description">
                  Continuing my studies in information technology, with a focus
                  on software engineering and practical development.
                </p>
              </article>
            </li>
            <li
              className="about-education-entry"
              style={{ "--education-accent": "#59a2f0" }}
            >
              <time className="about-education-date" dateTime="2020-08">
                Aug 2020 – Dec 2023
              </time>
              <span className="about-education-track" aria-hidden="true">
                <span className="about-education-marker">01</span>
              </span>
              <article className="about-education-card">
                <h3>Software Development Studies</h3>
                <p className="about-education-organization">OSAO, Oulu Vocational College</p>
                <p className="about-education-description">
                  Studied software development and built a foundation in
                  programming and game development.
                </p>
              </article>
            </li>
          </ol>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default About
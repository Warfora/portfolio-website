import React from "react";
import "./ExperienceStyles.css";

import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ScrollToTop from "react-scroll-to-top";

const experiences = [
  {
    date: "May 2024 – Oct 2026",
    title: "Full Stack developer Trainee",
    organization: "Nokia",
    description: "Worked as a Full-Stack Developer, contributing to the development of a web-based test planning tool.",
    technologies: "MongoDB, JFrog Artifactory, Cursor AI, Playwright, Angular, Test Analysis, API, Python, TypeScript, Microsoft 365 Copilot",
    color: "#59a2f0",
  },
  {
    date: "Jan 2024 – Apr 2024",
    title: "Mover",
    organization: "Niemi Palvelut Oy",
    description: "Handled furniture and equipment transportation, loading, unloading, and customer service while ensuring safe and efficient moves.",
    technologies: "Long Distance Moving, Residental Moving, Commercial Moving",
    color: "#9b7bff",
  },
  {
    date: "Apr 2023 – Dec 2023",
    title: "Test Software Developer Trainee",
    organization: "Nokia",
    description: "Worked with CI/CD pipelines using YAML and Jenkins, and optimized and refactored test software code to improve code quality and maintainability.",
    technologies: "YAML, Jenkins, CI/CD, Python, Git",
    color: "#25c4b5",
  },
  {
    date: "Dec 2021 – Feb 2022",
    title: "UI/UX Designer Trainee",
    organization: "F-Secure Corporation",
    description:
      "Became familiar with the organization and its typical UI/UX design workflows. " +
      "Researched potential improvements and discussed ideas with the team. Gained insight into UI/UX design practices and collaborative design processes.",
    technologies: "Desing, Communication, Teamwork, English",
    color: "#f5a623",
  },
];

const ExperienceTimeline = () => (
  <main className="experience-page">
    <section className="experience-section" aria-labelledby="experience-title">
      <h1 id="experience-title" className="experience-heading">Professional Experience</h1>
      <ol className="experience-timeline">
        {experiences.map((experience, index) => (
          <li
            className="experience-entry"
            key={`${experience.date}-${index}`}
            style={{ "--experience-accent": experience.color }}
          >
            <time className="experience-date">{experience.date}</time>
            <span className="experience-track" aria-hidden="true">
              <span className="experience-marker">
                {String(experiences.length - index).padStart(2, "0")}
              </span>
            </span>
            <article className="experience-card">
              <h2>{experience.title}</h2>
              <p className="experience-organization">{experience.organization}</p>
              <p className="experience-description">{experience.description}</p>
              <p className="experience-technologies">
                <strong>Technologies:</strong> {experience.technologies}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  </main>
);

const Experience = () => (
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
    <Navbar />
    <ExperienceTimeline />
    <Footer />
  </div>
);

export default Experience;

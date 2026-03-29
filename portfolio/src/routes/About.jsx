import React from 'react'

import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

import ScrollToTop from "react-scroll-to-top";
import ConstructionImage from "../assets/under-construction.jpg";

import "./AboutStyles.css";

const Image = () => {
  return (
    <div className="construction-image-container">
      <img src={ConstructionImage} alt="Under Construction" className="construction-image" />
    </div>
  );
}


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
      <Image classname="construction-image"/>
      <Footer/>
    </div>
  )
}

export default About
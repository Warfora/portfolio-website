import React from 'react'
import "./Experience.css"

import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
// import AboutContent from "../components/AboutContent";

import ScrollToTop from "react-scroll-to-top";


const About = () => {
  return (
    <div>
      <ScrollToTop smooth top="20" />
      <Navbar/>
      <h2>heading="ABOUT." text="Don't mind the cat"</h2>
      {/* <AboutContent/> */}
      <Footer/>
    </div>
  )
}

export default About
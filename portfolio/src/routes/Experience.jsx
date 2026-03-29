import React from 'react'
import "./Experience.css"

import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

import {Link} from 'react-router-dom'

// import ExeperienceSection from "./ExeperienceSection/ExperienceSection.jsx";
import ScrollToTop from 'react-scroll-to-top';

const Project = () => {
  return (
    <div>
      <ScrollToTop smooth top="20"/>
      <Navbar/>
      <h2>heading="EXPERIENCE." text="My work experience"</h2>
      {/* <ExeperienceSection/> */}
      <br/><br/>
      <div className="linking">
      <Link to="/about">
                <button className="btn">
                    About me
                </button>
            </Link>
      </div>
      <Footer/>
    </div>
  )
}

/*<ImageSlider slides={SliderData}/>**/

export default Project;
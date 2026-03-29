import "./HomeSectionStyles.css";

import React from 'react'

import HomeBackgroundPicture from "../../assets/table.jpg"

import {Link} from "react-router-dom";

import { Typewriter } from "react-simple-typewriter";

const HomeSection = () => {
  return (
    <div className= "hero"> 
        <div className="mask">
            <img className = "intro-igm" src={HomeBackgroundPicture} alt ="HomeBackgroundPicture"/>
        </div>
        <div className ="content">
            <p>Hi, I'm fellow</p>

            <h1>
              <span>
                <span
                  style={{
                    fontFamily: "Red Hat Display",
                    color: "#F3D56",
                    fontWeight: 500,
                    fontSize: "1.3em",
                  }}
                >
                  <Typewriter
                    words={["Software Developer", "Graphics Designer"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={120}
                    deleteSpeed={60}
                    delaySpeed={1200}
                  />
                </span>
              </span>
            </h1>

            <div>
                <Link to="/experience" className="btn">experience</Link>
                <Link to="/about" className="btn btn-light">About Me</Link>
            </div> 

        </div>
    </div>
  )
}

export default HomeSection
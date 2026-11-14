import { useState } from "react";
import "./HomeSectionStyles.css";
import HomeBackgroundVideo from "../../assets/paragliding-compressed.mp4"
import {Link} from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const HomeSection = () => {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <div className= "hero"> 
        <div className={`mask${videoReady ? " mask-video-ready" : ""}`}>
            <video
              className="intro-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onCanPlay={() => setVideoReady(true)}
            >
                <source src={HomeBackgroundVideo} type="video/mp4" />
            </video>
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
                    words={["Software Engineer", "Problem Solver", "Graphics Designer"]}
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
                <Link to="/experience" className="btn btn-dark">Experience</Link>
                <Link to="/about" className="btn btn-light">About Me</Link>
            </div> 

        </div>
    </div>
  )
}

export default HomeSection
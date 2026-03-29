import "./HomeSectionStyles.css";
import HomeBackgroundVideo from "../../assets/paragliding-compressed.mp4"
import {Link} from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const HomeSection = () => {
  return (
    <div className= "hero"> 
        <div className="mask">
            <video className = "intro-video" autoPlay loop muted>
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
                    words={["Software Developer", "Graphics Designer", "Problem Solver", "Paragliding Enthusiast"]}
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
                <Link to="/projects" className="btn btn-dark">Projects</Link>
                <Link to="/about" className="btn btn-light">About Me</Link>
            </div> 

        </div>
    </div>
  )
}

export default HomeSection
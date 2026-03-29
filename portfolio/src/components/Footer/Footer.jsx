import "./Footer.css";


import {FaHome, FaPhone, FaMailBulk, FaArtstation, FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";

function OpenLinkedIn(){
  window.open('https://www.linkedin.com/in/katarina-semjonova-964256293/', '_blank', 'noreferrer');
}

function OpenInstagram(){
  window.open('https://www.instagram.com/kata_katakka/', '_blank', 'noreferrer');
}

function OpenGithub(){
  window.open('https://github.com/Warfora/react-portfolio', '_blank', 'noreferrer');
}

function OpenArtstation(){
  window.open('https://www.artstation.com/u8c4c659a', '_blank', 'noreferrer');
}

const Footer = () => {
  return (
    <div className="footer">
        <div>
            <div className="left">
                <div className="text">
                    <p><FaHome size={25} style={{color:"#fff", marginRight: "0.5rem" }}/>Oulu, 90520, Finland</p>
                </div>
                <div className="text">
                    <p><FaPhone size={20} style={{color:"#fff", marginRight: "0.5rem" }}/>
                +358 41 755 1987</p>
                </div>

                <div className="text">
                    <p><FaMailBulk className="social-icon" size={20} style={{color:"#fff", marginRight: "0.5rem" }}/>
                katarina.semjonova@gmail.com</p>
                </div>
            </div>
            <div className="right">
                <div className="thanks-block">
                    <h4>Thank you for your consideration.</h4>
                    <p>- Katarina Semjonova</p>
                </div>
                <div className="social">
                <p>Reach me on different platforms</p>
                    <div className="social-links">
                        <button className="social-btn" onClick={OpenLinkedIn}>
                            <FaLinkedin/>
                        </button>
                        <button className="social-btn" onClick={OpenInstagram}>
                            <FaInstagram/>
                        </button>
                        <button className="social-btn" onClick={OpenGithub}>
                            <FaGithub/>
                        </button>
                        <button className="social-btn" onClick={OpenArtstation}>
                            <FaArtstation/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
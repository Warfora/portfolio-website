import "./Footer.css";

import React from 'react';

import {FaHome, FaPhone, FaMailBulk, FaArtstation, FaLinkedin, FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                    <div>
                        <p>Oulu, 90520</p>
                        <p>Finland</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                +358417551987</h4>
                </div>

                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem" }}/>
                katarina.semjonova@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>Thank you for your consideration.</h4>
                <p>Katarina Semjonova.</p>
                <div className="social">
                <br></br>
                <p>Links at the bottom on the contact page.</p>
                <FaGithub size={30} style={{color:"#fff", marginRight: "1rem" }}/>
                <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem" }}/>
                <FaArtstation size={30} style={{color:"#fff", marginRight: "1rem" }}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
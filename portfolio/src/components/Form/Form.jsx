import "./Form.css"

import React from 'react'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import {FaArtstation, FaLinkedin, FaGithub} from "react-icons/fa";

/* Laitan myöhemmin järkevästi props käyttäen nää funktiot */
function Open(){
  window.open('https://www.linkedin.com/in/katarina-semjonova-964256293/', '_blank', 'noreferrer');
}

function Open2(){
  window.open('https://github.com/Warfora/react-portfolio', '_blank', 'noreferrer');
}

function Open3(){
  window.open('https://www.artstation.com/u8c4c659a', '_blank', 'noreferrer');
}

/* 
function CreateLink() {

  let anchor = document.createElement('a');
  let link = document.createTextNode("LinkedIn");
  anchor.appendChild(link);
  anchor.href = "https://www.linkedin.com/in/katarina-semjonova-b05a57230/";
  document.body.appendChild(anchor);

}
*/

const Form = () => {

  const form = useRef();
  const inputs = useRef();
  const inputs1 = useRef();
  const inputs2 = useRef();
  const inputs3 = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rj3l5jo', 'template_f0591am', form.current, '6NxC1ve2bEoMuROli')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      inputs.current.value = "";
      inputs1.current.value = "";
      inputs2.current.value = "";
      inputs3.current.value = "";
  };

  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
         <p className="heading2">
           Contact me directly.
          </p>
          <label>Your Name</label>
          <input ref={inputs} type="text" placeholder="First and last name" name="user_name" />
          <label>Email</label>
          <input ref={inputs1} type="email" placeholder="Personal or work email" name="user_email" />
          <label>Subject</label>
          <input ref={inputs2} type="text" placeholder="Subject of the matter" name="user_subject"/>
          <label>Message</label>
          <textarea ref={inputs3} rows ="6" placeholder="Type your message here" name="message" />
          <input className="btn" type="submit" value="Submit" />
          <br/><br/><br></br><br></br>
       </form>

       <p className="heading2">
        Me on different platforms.
      </p>
      <button className="button" onClick={Open}>
        LinkedIn&nbsp;&nbsp;
        <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem" }}/>
      </button>
      <br/>
      <button className="button" onClick={Open2}>
        Github&nbsp;&nbsp;
        <FaGithub size={30} style={{color:"#fff", marginRight: "1rem" }}/>
      </button>
      <br/>
      <button className="button" onClick={Open3}>
        ArtStation&nbsp;&nbsp;
        <FaArtstation size={30} style={{color:"#fff", marginRight: "0rem" }}/>
      </button>
      <br/><br/><br/><br/><br/>
    
    </div>
  )
}

export default Form
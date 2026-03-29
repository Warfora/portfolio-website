import "./Form.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
  const nameInput = useRef();
  const emailInput = useRef();
  const subjectInput = useRef();
  const messageInput = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rj3l5jo', 'template_f0591am', form.current, '6NxC1ve2bEoMuROli')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      nameInput.current.value = "";
      emailInput.current.value = "";
      subjectInput.current.value = "";
      messageInput.current.value = "";
  };

  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <label>Your Name</label>
          <input ref={nameInput} type="text" placeholder="Your name" name="user_name" />
          <label>Email</label>
          <input ref={emailInput} type="email" placeholder="Personal or work email" name="user_email" />
          <label>Subject</label>
          <input ref={subjectInput} type="text" placeholder="Subject of the matter" name="user_subject"/>
          <label>Message</label>
          <textarea ref={messageInput} rows ="6" placeholder="Type your message here" name="message" />
          <input className="btn" type="submit" value="Submit" />
       </form>
    </div>
  )
}

export default Form
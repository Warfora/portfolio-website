import "./Form.css"
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {

  const form = useRef();
  const nameInput = useRef();
  const emailInput = useRef();
  const subjectInput = useRef();
  const messageInput = useRef();
  const [showSentPopup, setShowSentPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const publicKey = 'V4CMvCBZRdUaKbw7D';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dz4c7kj', 'template_k4linki', form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setShowSentPopup(true);
          setTimeout(() => {
            setShowSentPopup(false);
          }, 2000);

          nameInput.current.value = "";
          emailInput.current.value = "";
          subjectInput.current.value = "";
          messageInput.current.value = "";
      }, (error) => {
          console.log(error.text);
          setShowErrorPopup(true);
          setTimeout(() => {
            setShowErrorPopup(false);
          }, 3000);
      });
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
         {showSentPopup && <div className="form-sent-popup">Message sent</div>}
         {showErrorPopup && <div className="form-error-popup">Message failed to send</div>}
    </div>
  )
}

export default Form
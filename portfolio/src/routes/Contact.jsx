import React from 'react'

import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Form from '../components/Form/Form.jsx';
import "./Contact.css";

const Contact = () => {

  return (
    <div>
      <Navbar/>
      <h2>heading="CONTACTS." text="Let's chat."</h2>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
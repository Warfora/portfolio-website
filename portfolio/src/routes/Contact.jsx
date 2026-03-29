import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Form from '../components/Form/Form.jsx';
import "./ContactStyles.css";
import cat from "../assets/cat.gif";
import ScrollToTop from 'react-scroll-to-top';

const Contact = () => {
  return (
    <div>
      <ScrollToTop
        smooth
        top={20}
        className="scroll-top-btn"
        color="#0f172a"
        component={(
          <svg viewBox="0 0 24 24" aria-hidden="true" className="scroll-top-icon">
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        )}
      />
      <Navbar/>
      <section className="contact-section">
        <img className="background-video" src={cat} alt="" aria-hidden="true" />
        <div className="heading">
          <h1>Contacts</h1>
          <p>Let's chat!</p>
        </div>
      </section>
      <Form/>
      <Footer/>
    </div>
  )
}
export default Contact
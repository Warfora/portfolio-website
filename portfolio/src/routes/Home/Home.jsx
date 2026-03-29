import React from 'react'
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import HomeSection from "./HomeSection.jsx";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeSection/>
      <Footer/>
    </div>
  )
}

export default Home
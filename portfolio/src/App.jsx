import "./index.css";
import Home from "./routes/Home/Home.jsx"
import About from "./routes/About.jsx"
import Contact from "./routes/Contact.jsx"
import Experience from "./routes/Experience.jsx"
import Projects from "./routes/Projects.jsx"

import{ Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import {Helmet} from "react-helmet-async";

function App() {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Portfolio</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <meta name="description" content="Portfolio" />
    </Helmet>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/experience" element={<Experience />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    </>
  );
}

export default App;
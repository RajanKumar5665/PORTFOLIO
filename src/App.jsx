import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (  
    <div>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}

      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    
    </div>
  )
}
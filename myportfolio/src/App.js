import React from "react";
import Navbar from "./components/navbar/Navbar";
import Resume from "./components/resume/Resume";
import Banner from "./components/banner/Banner";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/aboutme/AboutMe";
import FooterBottom from "./components/footer/FooterBottom";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Projects />
        <Resume />
        <AboutMe />
        <Contact />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;


import React from "react"
import {  FaLinkedinIn, FaGithub} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sai Prathyusha</h3>
        <p className="text-lg font-normal text-gray-400">
          An aspiring Java Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Aspiring Full Stack Developer seeking opportunities to apply my skills in Java, React, and Spring Boot. 
        Passionate about building innovative solutions and eager to contribute to dynamic development teams."
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9515429015</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">prathyusha00k@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/k-v-h-prathyusha-a3506a1a0/" target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </a>
        <a href="https://github.com/Prathyusha587" target="_blank" rel="noopener noreferrer">
      <span className="bannerIcon">
        <FaGithub />
      </span>
    </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;


import React from "react"
import {FaLinkedinIn, FaGithub } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
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
  )
}

export default Media

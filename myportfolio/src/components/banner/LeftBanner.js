
import React from "react"
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["A Tech enthusiast","An aspiring Java Full Stack Developer.", "A passionate problem solver"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Sai Prathyusha</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am an enthusiastic and self-driven developer eager to begin my career in Software Development. 
        With a solid foundation in Java full-stack development, I am committed to continuous learning and growth. 
        I am now looking for an opportunity to apply my skills and contribute to impactful projects.

        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner

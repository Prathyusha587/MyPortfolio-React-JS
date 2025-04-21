import React, { useState } from 'react';
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title';
import { quote, bannerImg } from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const AboutMe = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div style={{ borderRadius: "10px", padding: "10px" }}>
        <ul style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "20px" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <section id="aboutme" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="ABOUT ME" des="Who I Am" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="w-full">
            <div className="flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-center">
                <img
                  className="h-72 rounded-lg object-cover"
                  src={bannerImg}
                  alt="about-img-1"
                />
                <div className="text-center mt-4">
                  <h3 className="text-2xl font-bold">Sai Prathyusha</h3>
                  <p className="text-base tracking-wide text-gray-500">Aspiring Java Full Stack Developer</p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] flex flex-col justify-center p-4 lgl:p-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne">
                <img className="w-20 lgl:w-32 mb-4" src={quote} alt="quote" />
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                  I’m a self-motivated developer with a passion for building responsive web apps using the Java Full Stack. 
                  My journey has been shaped by hands-on learning, tackling real-world problems, and constantly upskilling. 
                  Over the past year, I’ve worked on several projects that enhanced my skills in React, Spring Boot, and MySQL. 
                  I believe in continuous learning and am currently working on a feature-rich e-commerce project to showcase my capabilities. 
                  Outside coding, I value deep conversations, self-growth, and making a positive impact.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="w-full">
            <div className="flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-center">
                <img
                  className="h-72 rounded-lg object-cover"
                  src={bannerImg}
                  alt="about-img-2"
                />
                <div className="text-center mt-4">
                  <h3 className="text-2xl font-bold">My Interests</h3>
                  <p className="text-base tracking-wide text-gray-500">Passionate about creating and solving through code.</p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] flex flex-col justify-center p-4 lgl:p-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne">
                <img className="w-20 lgl:w-32 mb-4" src={quote} alt="quote" />
                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                I’m driven by a deep passion for technology and the satisfaction of building things that solve real problems. Over the past two years, I’ve consistently worked on upskilling, staying focused despite setbacks. What keeps me going is the belief that consistent effort leads to meaningful opportunities. I’m excited to begin my journey as a developer and contribute with both curiosity and commitment.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default AboutMe;

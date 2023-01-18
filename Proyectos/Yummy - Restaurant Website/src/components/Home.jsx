import React from "react";
import { heroIcons } from "../Data";
import hero from "../assets/hero.png";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div
      className="section flex items-center xl:justify-center justify-start flex-wrap gap-20"
      id="home"
    >
      <div className="flex flex-col items-start gap-10">
        <div className="sm:text-[1.3rem] text-[0.9rem] font-nunito font-bold text-pink-400 -mb-10">
          Especial del Chef
        </div>
        <div className="sm:text-[2.5rem] text-[1.8rem] font-extrabold">
          "Tropical de <br />
          Frutas y Verduras"
        </div>
        <a href="#meal" className="btn">
          Ir al Menú <FaArrowRight />
        </a>
        <div className="flex md:gap-6 gap-2">
          {heroIcons.map((heroIcon, index) => {
            return (
              <div
                className="w-12 h-12 bg-pink-400 opacity-40 text-white flex items-center justify-center md:text-3xl text-xl rounded-md hover:scale-125 hover:opacity-70 transition"
                key={index}
              >
                {heroIcon}
              </div>
            );
          })}
        </div>
      </div>
      <div className="min-w-[200px] md:w-[600px] justify-self-center">
        <img src={hero} alt="hero-img" />
      </div>
    </div>
  );
};

export default Home;

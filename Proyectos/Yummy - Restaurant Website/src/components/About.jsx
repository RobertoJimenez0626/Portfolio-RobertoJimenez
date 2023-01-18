import React from "react";
import { FaArrowRight } from "react-icons/fa";
import about from "../assets/about.png"
import chef from "../assets/chef.jpg"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 items-center mb-10 gap-10">
        <div className="flex flex-col justify-center items-start gap-6">
          <div className="sm:text-3xl text-xl font-bold mb-6">
            ¿Comer delicioso y saludable?
          </div>
          <p className="text-sm text-justify opacity-70">
            Llevar una alimentación sana y equilibrada debería ser la norma general en nuestro día a día (aunque de vez en cuando nos demos algún que otro capricho). <br/>Una alimentación saludable ayuda a mantener una buena salud y a prevenir enfermedades no transmisibles como la diabetes, las cardiopatías, los accidentes cerebrovasculares y el cáncer.
          </p>
          <a href="#meal" className="btn text-white text-[0.85rem]">
            Saber más
            <FaArrowRight className="text-white" />
          </a>
        </div>
        <div className="md:row-start-1">
          <img src={about} alt="" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="sm:text-3xl text-xl font-bold mb-6">
            Comida saludable hecha por profesionales.
          </div>
          <p className="text-sm opacity-70">
            Nuestros alimentos son preparados por cocineros profesionales empleando ingredientes de las más alta calidad culinaria. Contamos con la certificación de salud pertinente de expertos en medicina, y garantizamos que nuestros platillos sean del agrado de todos los paladares de nuestros clientes.
          </p>
        </div>
        <div className="rounded-tl-3xl rounded-br-3xl overflow-hidden">
          <img src={chef} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

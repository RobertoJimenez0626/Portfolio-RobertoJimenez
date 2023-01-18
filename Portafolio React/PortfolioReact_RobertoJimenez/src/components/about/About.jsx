import React from 'react'
import './about.css'
import ME from '../../assets/me-about.JPG'
import {TbAward} from 'react-icons/tb'
import {HiOutlineUsers} from 'react-icons/hi'
import {BsFolderCheck} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>¿Quién soy?</h5>
      <h2>Sobre mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="my-picture" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbAward className='about__icon' />
              <h5>Experiencia</h5>
              <small>+1 Año practicando y trabajando como desarrollador Freelance</small>
            </article>
            <article className='about__card'>
              <HiOutlineUsers className='about__icon' />
              <h5>Valores</h5>
              <small>Trabajo en equipo, buena comunicación, resolución de problemas, detallista</small>
            </article>
            <article className='about__card'>
              <BsFolderCheck className='about__icon' />
              <h5>Proyectos</h5>
              <small>+10 Completos usando HTML, CSS y JavaScript/React</small>
            </article>
          </div>
        </div>
        <div className="about__text">
          <div className="about__txt">
            <p>¡Hola! 🧑‍💻 <br />Soy un ingeniero en Mecatrónica apasionado por la tecnología, me gustan las matemáticas, la programación y desarrollo web. He trabajado en desarrollo web con HTML y CSS, manejo de sistema de gestión de paquetes NPM, sistema de control de versiones Git y repositorios GitHub. Actualmente aprendiendo WebApps con React y JavaScript.</p>
          </div>
          <div className="about__btn">
            <a href="#contact" className='btn btn-primary'>¡Hablemos!</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
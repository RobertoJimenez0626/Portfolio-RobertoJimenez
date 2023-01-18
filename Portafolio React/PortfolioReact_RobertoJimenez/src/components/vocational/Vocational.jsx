import React from 'react'
import './vocational.css'
import Cour1 from '../../assets/vocational/fcc_legacy.png'
import Cour2 from '../../assets/vocational/ud_css.jpg'
import Cour3 from '../../assets/vocational/ud_react.jpg'
import Cour4 from '../../assets/vocational/ed_tailwind.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: Cour1,
    name: 'Legacy Responsive Web Design',
    description: 'Estudié sobre el Web Design, y aprendí a usar los lenguajes que los desarrolladores utilizan para construir páginas web, HTML para el contenido, y CSS para el diseño.',
    link: 'https://www.freecodecamp.org/espanol/learn/responsive-web-design/'
  },
  {
    image: Cour2,
    name: 'CSS La Guía Completa - Flexbox, CSS Grid, SASS',
    description: 'Construí de sitios web utilizando Flexbox y Grid, diferenciar cuando es bueno utilizar Flexbox y cuando es bueno Grid, manejo de tecnologías como Gulp, SASS, Fetch API, NPM, Variables CSS.',
    link: 'https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/'
  },
  {
    image: Cour3,
    name: 'React y Firebase: El Curso Completo, Práctico y desde Cero',
    description: 'Aprendí React desde cero, creación de aplicaciones web full stack, Firebase, JSX, Context API, React Hooks, Redux, Localstorage, Styled Components, CSS Modules.',
    link: 'https://www.udemy.com/course/react-desde-cero/'
  },
  {
    image: Cour4,
    name: 'Tailwind CSS desde cero',
    description: 'Aprendí a maquetar sitios web sin escribir mucho código CSS, uso de "utility classes" para dar estilo a la página, configuración de paleta de colores de Tailwind, responsive design, estados (hover, focus, active) y componentes.',
    link: 'https://ed.team/cursos/tailwind'
  }
]

const Vocational = () => {
  return (
    <section id='vocational'>
      <h5>¿Dónde he aprendido?</h5>
      <h2>Formación</h2>

      <Swiper className="container vocational__container"
      // install Swiper modules
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({image, name, link, description}, index) => {
            return (
              <SwiperSlide key={index} className="vocational">
                <div className="course__image">
                  <a href={link} target="_blank" rel="noreferrer"><img src={image} alt="Course" /></a>
                </div>
                <h5 className="course__name">{name}</h5>
                <small className="course__description">{description}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Vocational
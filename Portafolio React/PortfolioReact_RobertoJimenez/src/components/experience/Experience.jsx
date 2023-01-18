import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>¿Qué puedo hacer?</h5>
      <h2>Habilidades</h2>

      <div className="container experience__container">
        <div className="experience__languages">
          <h3>Lenguajes</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <img src="https://img.icons8.com/color/480/null/html-5--v1.png" className='experience__details-icon' />
              {/* <div>
                <h4>HTML</h4>
                <small className='text-light'>Avanzado</small>
              </div> */}
            </article>
            <article className='experience__details'>
              <img src="https://img.icons8.com/color/480/null/css3.png" className='experience__details-icon' />
              <div>
                {/* <h4>CSS</h4>
                <small className='text-light'>Intermedio</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <img src="https://img.icons8.com/color/480/null/javascript--v1.png" className='experience__details-icon' />
              <div>
                {/* <h4>JavaScript</h4>
                <small className='text-light'>Básico</small> */}
              </div>
            </article>
          </div>
        </div>
        <div className="experience__frame-lib">
          <h3>Frameworks y Librerias</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <img src="https://img.icons8.com/color/480/null/react-native.png" className='experience__details-icon' />
              <div>
                {/* <h4>React</h4>
                <small className='text-light'>Intermedio</small> */}
              </div>
            </article>
            {/* <article className='experience__details'>
              <SiRedux className='experience__details-icon' />
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article> */}
            {/* <article className='experience__details'>
              <DiSass className='experience__details-icon' />
              <div>
                <h4>SASS</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article> */}
            <article className='experience__details'>
              <img src="https://img.icons8.com/color/480/null/tailwind_css.png" className='experience__details-icon' />
              <div>
                {/* <h4>Tailwind CSS</h4>
                <small className='text-light'>Intermedio</small> */}
              </div>
            </article>
          </div>
        </div>
        <div className="experience__tech-tools">
          <h3>Tecnologías y Herramientas</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <img src="https://img.icons8.com/color/480/null/npm.png" className='experience__details-icon' />
              <div>
                {/* <h4>NPM</h4>
                <small className='text-light'>Avanzado</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <img src="https://img.icons8.com/color/480/null/git.png" className='experience__details-icon' />
              <div>
                {/* <h4>Git</h4>
                <small className='text-light'>Avanzado</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <img src="https://img.icons8.com/ios-filled/500/null/github.png" className='experience__details-icon' />
              <div>
                {/* <h4>GitHub</h4>
                <small className='text-light'>Avanzado</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <img src="https://cdn.worldvectorlogo.com/logos/vitejs.svg" className='experience__details-icon' />
              <div>
                {/* <h4>GitHub</h4>
                <small className='text-light'>Avanzado</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
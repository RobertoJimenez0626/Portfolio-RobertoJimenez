import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio/portfolio1.jpg'
import IMG2 from '../../assets/portfolio/portfolio2.jpg'
import IMG3 from '../../assets/portfolio/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Youtube Clone v3',
    github: 'https://github.com',
    demo: 'https://youtube-clone-v3.pages.dev/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'The Fit Bulls',
    github: 'https://github.com/RobertoJimenez0626/Portfolio-RobertoJimenez/tree/master/Proyectos/TheFitBulls%20-%20Fitclub%20Website/TheFitBulls_Website',
    demo: 'https://thefitbulls.pages.dev/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Yummy Restaurant',
    github: 'https://github.com',
    demo: 'https://yummy-restaurant.pages.dev/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis proyectos recientes</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank" rel="noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
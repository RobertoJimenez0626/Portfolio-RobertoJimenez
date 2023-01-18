import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio/portfolio1.jpg";
import IMG2 from "../../assets/portfolio/portfolio2.jpg";
import IMG3 from "../../assets/portfolio/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Youtube Clone v3",
    techs: ["https://img.icons8.com/color/480/null/html-5--v1.png", "https://img.icons8.com/color/480/null/css3.png", "https://img.icons8.com/color/480/null/javascript--v1.png", "https://img.icons8.com/color/480/null/react-native.png", "https://img.icons8.com/color/480/null/api-settings.png", "https://img.icons8.com/color/480/null/material-ui.png"],
    lang: "https://img.icons8.com/stickers/100/null/mexico.png",
    github:
      "https://github.com/RobertoJimenez0626/Portfolio-RobertoJimenez/tree/master/Proyectos/Youtube%20Clone%20-%20Videos%20Website/youtube-clone-v3",
    demo: "https://youtube-clone-v3.pages.dev/",
  },
  {
    id: 2,
    image: IMG2,
    title: "The Fit Bulls",
    techs: ["https://img.icons8.com/color/480/null/html-5--v1.png", "https://img.icons8.com/color/480/null/css3.png", "https://img.icons8.com/color/480/null/javascript--v1.png", "https://img.icons8.com/color/480/null/react-native.png", "https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667", "https://www.emailjs.com/logo.png"],
    lang: "https://img.icons8.com/stickers/100/null/usa.png",
    github:
      "https://github.com/RobertoJimenez0626/Portfolio-RobertoJimenez/tree/master/Proyectos/TheFitBulls%20-%20Fitclub%20Website/TheFitBulls_Website",
    demo: "https://thefitbulls.pages.dev/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Yummy Restaurant",
    techs: ["https://img.icons8.com/color/480/null/html-5--v1.png", "https://img.icons8.com/color/480/null/css3.png", "https://img.icons8.com/color/480/null/javascript--v1.png", "https://img.icons8.com/color/480/null/react-native.png", "https://img.icons8.com/color/480/null/tailwind_css.png", "https://cdn.worldvectorlogo.com/logos/vitejs.svg"],
    lang: "https://img.icons8.com/stickers/100/null/mexico.png",
    github:
      "https://github.com/RobertoJimenez0626/Portfolio-RobertoJimenez/tree/master/Proyectos/Yummy%20-%20Restaurant%20Website",
    demo: "https://yummy-restaurant.pages.dev/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mis proyectos recientes</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, techs, lang, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="langs">
                <h4>Idioma</h4>
                <img src={lang} alt="" />
              </div>
              <div className="techs">
              <h4>Tecnologías</h4>
                {
                  techs.map((tech, subid) => {
                    return (
                      <img src={tech} alt="" key={subid} />
                    )
                  })
                }
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

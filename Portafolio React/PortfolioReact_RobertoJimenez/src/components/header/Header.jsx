import React from 'react'
import './header.css'
import scroll from './scroll'
import CV from '../../assets/cv.pdf'

const Header = () => {
  return (
    <div>
      <header>
        <div id='header'>
          <ul>
            {/* <li><a href="#" className='active'>Home</a></li>
            <li><a href="#about">Acerca</a></li>
            <li><a href="#experience">Experiencia</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#vocational">Formación</a></li>
            <li><a href="#portfolio">Portafolio</a></li>
            <li><a href="#contact">Contacto</a></li> */}
          </ul>
          <a href="#contact" className='logo'>darki01</a>
        </div>

        <div className='keyart' id='parallax'>
        {/* <div className='keyart' id='parallax'> */}
            <div class="keyart_layer parallax" id="keyart-0" data-speed="1"></div>		
            {/* <!-- 00.0  2--> */}
            <div class="keyart_layer parallax" id="keyart-1" data-speed="-30"></div>	
            {/* <!-- 12.5  5--> */}
            <div class="keyart_layer parallax" id="keyart-2" data-speed="-45"></div>		
            {/* <!-- 25.0  11--> */}
            <div class="keyart_layer parallax" id="keyart-3" data-speed="1"></div>	
            {/* <!-- 37.5  16--> */}
            
            <div id='headerText' class="keyart_layer">
              <ul>
                <li><p id="name">Roberto Jimenez</p></li>
                <li><p id="desc">Desarrollador Web FrontEnd</p></li>
              </ul>
            </div>   

            <div id='headerCV' class="keyart_layer parallax" data-speed="-300">
              <ul>
                <li><a id='CV' href={CV} download>Descargar CV</a></li>
                <li><a id='Contact' href="#contact">¡Hablemos!</a></li>
              </ul>
            </div>

          <script src={scroll}></script>

        </div> 
      </header>
    </div>
  )
}

export default Header
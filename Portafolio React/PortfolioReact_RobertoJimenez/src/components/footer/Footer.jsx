import React from 'react'
import './footer.css'
import {BsSuitHeartFill} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <div className='footer__container'>
        <div className="footer__text">
          <p>Coded with <BsSuitHeartFill /> by <b>Roberto Jimenez</b></p>
        </div>
        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/roberto-carlos-jimenez-garcia-b16199214/" target="_blank" rel="noreferrer"><FaLinkedin className='footer__social-icon' /></a>  
          <a href="https://github.com/RobertoJimenez0626" target="_blank" rel="noreferrer"><BsGithub className='footer__social-icon' /></a>  
          <a href="https://www.instagram.com/dark0rising/" target="_blank" rel="noreferrer"><BsInstagram className='footer__social-icon' /></a>  
        </div>
      </div>
      <div className="footer__copyright">
        <small>&copy; Roberto Jimenez. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer
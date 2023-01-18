import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vl5ns6g', 'template_lzj9f1p', form.current, 'y_A209zwhnR7nkLvu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>¿Interesado?</h5>
      <h2>Contáctame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailUnread className='contact__option-icon' />
            <h4>Email</h4>
            <h5>robert2000@live.com.mx</h5>
            <a href="mailto:robert2000@live.com.mx" target="_blank" rel="noreferrer">Envia un correo</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Roberto Jimenez</h5>
            <a href="https://m.me/robertocarlos.jimenezgarcia.1" target="_blank" rel="noreferrer">Envia un mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+52 9811772160</h5>
            <a href="https://api.whatsapp.com/send?phone=529811772160" target="_blank" rel="noreferrer">Envia un mensaje</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Tu nombre completo' required />
          <input type="email" name='email' placeholder='Tu correo electrónico' required />
          <textarea name="message" rows="7" placeholder='Tu mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>¡Mandar mensaje!</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
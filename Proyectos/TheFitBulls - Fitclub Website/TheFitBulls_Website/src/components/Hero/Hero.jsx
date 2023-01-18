import React from 'react'
import Header from '../Header/Header'
import './hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import NumberCounter from 'number-counter'

import { motion } from 'framer-motion'

const Hero = () => {
  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth <= 768 ? true : false
  return (
    <div className="hero" id='home'>
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />

        {/* The Best Ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{left: mobile ? "170px" : '226px'}}
            whileInView={{left: '8px'}}
            transition={{...transition, type: 'tween'}}
          ></motion.div>
          <span>the best fitness club in the city</span>
        </div>
        
        {/* Hero Heading */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and live up your life to fullest
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span><NumberCounter start={100} end={140} delay='4' preFix='+' /></span>
            <span>expert coachs</span>
          </div>
          <div>
            <span><NumberCounter start={800} end={978} delay='4' preFix='+' /></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter start={30} end={50} delay='4' preFix='+' /></span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* Hero Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>
        <motion.div 
          transition={transition}
          initial={{right: '-1rem'}}
          whileInView={{right: '4rem'}}
          className="heart-rate">
          <img className='' src={Heart} alt="" />
          <span>Heart Rate</span><span>116 bpm</span>
        </motion.div>

        {/* Hero Images */}
        <img className='hero-image' src={hero_image} alt="" />
        <motion.img 
          transition={transition}
          initial={{right: '11rem'}}
          whileInView={{right: '20rem'}}
          className='hero-image-back' src={hero_image_back} alt="" />

        {/* Calories */}
        <motion.div 
          transition={transition}
          initial={{right: '37rem'}}
          whileInView={{right: '28rem'}}
          className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
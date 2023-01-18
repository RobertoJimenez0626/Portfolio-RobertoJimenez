import React from 'react'
import './programs.css'
import { programsData } from '../../data/programsData'
import { BsArrowRight } from 'react-icons/bs'

const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/* Header */}
      <div className="programs-header">
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>

      <div className="programs-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now"><span>Join Now</span><BsArrowRight /></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs
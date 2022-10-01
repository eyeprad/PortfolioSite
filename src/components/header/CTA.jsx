import React from 'react'
import CV from '../../assets/tech resume_2022.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary'>Download CV</a>
        <a href="#contact" className='btn'>Let's Talk</a>
    </div>
  )
}

export default CTA
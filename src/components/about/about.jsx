import React from 'react'
import './about.css'
import ME from '../../assets/camera.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>ABOUT ME</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Collaboration</h5>
              <small> 15+ Team Involvments</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
           Welcome to my Page! I am a recent graduate from California State University Northridge (CSUN) with my Bachelor's Degree in Computer Science. This website is to document and link my various works in the tech field as well as my love for photography. Feel free to contact me for any business inquiries.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
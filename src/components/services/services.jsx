import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>SERVICES</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Game Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Publishment of LIVE product</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Background in Unreal Engine 4.0</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Background in Unity</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creation of Custom Shaders</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Constant Scrum Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Abide by Agile Methodology</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience with several frameworks</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Experience (UX)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Interface (UI)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strong attention to detail</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Wireframing pages, positioning CTAs, links, and imagery</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>An understanding of SEO</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Continous passion for user & client satisfaction</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Photography</h3>
          </div>

          <ul className='service__list'>
            <li>
             
              <h3>Current Gear:</h3>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>CANON Rebel T3i.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>18-55mm Lens.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>75-300mm Lens</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>iPhone 13 Pro MAX</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services
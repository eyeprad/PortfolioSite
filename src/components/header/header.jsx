import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profilpic.jpg'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
   <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Pratick Shantaiya</h1>
      <h3 className="text-light">FullStack Developer</h3>
      <CTA />
      <HeaderSocial />
      <div className ="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className= 'scroll_down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default header
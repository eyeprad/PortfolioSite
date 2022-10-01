import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
//import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Pratick S.</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Feedback</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/pratick.shantaiya/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/eyeprad/"><FiInstagram/></a>
        {/*<a href="https://twitter.com"><IoLogoTwitter/></a>*/}
      </div>

      <div className="footer__copyright">
        <small>&copy; Pratick Shantaiya 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'

const HeaderSocial = () => {
  return (
    
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/pratick-shantaiya-80a11ab5/" target="_blank"><BsLinkedin style={{fontSize: '33px'}}/></a>
      <a href="https://github.com/eyeprad" target="_blank"><BsGithub style={{fontSize: '33px'}}/></a>
      <a href="malito:prat.shant96@gmail.com" target="_blank"><MdOutlineEmail style={{fontSize: '33px'}}/></a>
    </div>
  )
}

export default HeaderSocial
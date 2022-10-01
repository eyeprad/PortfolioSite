import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/chaja pic.jpg'
import AVTR2 from '../../assets/avatar2.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Kevin Chaja',
    review: "\"Pratick was one of my top students in Senior Software Design at California State University Northridge. Him and his team's work on 'Kunai Strike' was astonishing and with a minimum amount of work outside of class, was enough to publish a full live game on Stream. I will be monitoring Pratick closely, but heavily recommend to whatever endeavor!\""
  },
  {
    avatar: AVTR2,
    name: 'Coming Soon',
    review: 'Future Review'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Associates</h5>
      <h2>Feedback</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
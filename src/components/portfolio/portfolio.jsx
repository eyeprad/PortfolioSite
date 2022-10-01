import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/kunai_strike.jpg'
import IMG2 from '../../assets/portfolio_pic.PNG'
import IMG3 from '../../assets/pomo.PNG'
import IMG4 from '../../assets/blog.PNG'
import IMG5 from '../../assets/giga.PNG'
import IMG6 from '../../assets/resume_pic.PNG'

// TABLE AND DATA

const data = [
  {
    id: 1,
    image: IMG1,
    title:  'Kunai Strike',
    github: 'https://github.com',
    demo:   'https://store.steampowered.com/app/1982430/Kunai_Strike/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Portfolio Website',
    github: 'https://github.com/eyeprad/PortfolioSite',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'PomoPlanner',
    github: 'https://github.com/eyeprad/PomoPlanner',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Blog Site',
    github: 'https://github.com/eyeprad/Blog-Site',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: IMG5,
    title: 'GigaPet',
    github: 'https://github.com/eyeprad/Giga-Pet',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Resume Page',
    github: 'https://github.com/eyeprad/Resume-Page',
    demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>PROJECTS</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
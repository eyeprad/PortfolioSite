import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contacts />
        <Footer />
    </>
  )
}

export default App
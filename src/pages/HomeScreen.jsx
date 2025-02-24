import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import MisionVision from '../components/MisionVision'
import Innovacion from '../components/Innovacion.jsx'
import Investigacion from '../components/Investigacion.jsx'
import Footer from '../components/Footer.jsx'

const HomeScreen = () => {
  return (
    <div className='container'>
        <Hero />
        <About />
        <Innovacion />
        <MisionVision />
        <Investigacion />
        <Footer />
    </div>
  )
}

export default HomeScreen
import React from 'react'
import Features from '../../components/features'
import Footer from '../../components/Footer'
import Hero from '../../components/hero'
import Testimonials from '../../components/Testimonials'


const LandingPage = () => {
  return (
    <div>
       <Hero />
       <Testimonials />
       <Features />
       <Footer />
    </div>
  )
}

export default LandingPage
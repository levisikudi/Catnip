import React, { useState } from 'react'
import HeroContent from '../herocontent'
import Login from '../Login'
import './index.css'

const Hero = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <header className='main'>

      <div className='color-overlay d-flex justify-content-center align-items-center'>
        <div className='content'>
        {showLogin?
        <Login />
        :
        <HeroContent setShowLogin={setShowLogin} />
        }   
        </div>
      </div>

   </header>
  )
}

export default Hero
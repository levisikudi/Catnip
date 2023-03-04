import React from 'react'
import './index.css'
import heroCat from '../../cats/hero-cat.png'

const Hero = () => {
  return (
    <header className='main'>

      <div className='color-overlay d-flex justify-content-center align-items-center'>
        <div className='content'>
          <p className='display-1 mb-5 '>Hello there</p>
          <div className='row w-50 mt-3 gap-2 '>
            <button className='btn btn-outline-success text-white col-12'>Login</button>
            <button className='btn btn-success text-white col-12'>Login with Guest Credentials</button>
          </div>
        </div>
      </div>

   </header>
  )
}

export default Hero
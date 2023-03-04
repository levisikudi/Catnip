import React, { useState } from 'react'


const HeroContent = (props) => {

    let {setShowLogin} = props


    const handleButtonClick = () =>{
    setShowLogin(true)
  }

  return (
    <>
    <p className='display-1 mb-5 '>Hello there</p>
          <div className='row mt-3 gap-2 '>
            <button className='btn btn-outline-success text-white col-12' onClick={handleButtonClick}>Login</button>
            <button className='btn btn-success text-white col-12'>Login with Guest Credentials</button>
          </div>
    </>
  )
}

export default HeroContent
import React, { useState } from 'react'
import { loginUser } from '../../utilities/userUtilities'


const HeroContent = (props) => {

    let {setShowLogin} = props


    const handleButtonClick = () =>{
    setShowLogin(true)
  }


   
      const handleGuestLogin = async () => {
        await loginUser({email: "eli@sch", password: "helpless"});
        // get session info (user)
        let user = await getUserfromSession()
        setUser(user);
        nav('/user/dash')

      }
      

      
   
  

  return (
    <>
    <p className='display-1 mb-5 '>Hello there</p>
          <div className='row mt-3 gap-2 '>
            <button className='btn btn-outline-success text-white col-12' onClick={handleButtonClick}>Login</button>
            <button className='btn btn-success text-white col-12'
            onClick={handleGuestLogin}>Login with Guest Credentials</button>
          </div>
    </>
  )
}

export default HeroContent
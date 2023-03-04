import React, { useState } from 'react'
import './index.css'


const Login = (props) => {

  let {setShowLogin} = props


  const handleButtonClick = () =>{
    setShowLogin(false)
  }

  return (
    <div>
        <form className='rounded'>
      <div class="mb-3">
        <label  class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-4">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
      </div>
      <div className='row d-flex justify-content-around gap-4 pt-2'>
        <button type="back" class="btn btn-outline-primary text-white col" onClick={handleButtonClick}>Go Back</button>
        <button type="submit" class="btn btn-primary col">Submit</button>
      </div>
    </form>
    </div>
  )
}

export default Login
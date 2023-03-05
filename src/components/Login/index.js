import React from 'react'
import './index.css'


const Login = (props) => {

  let {setShowLogin} = props


  const handleButtonClick = () =>{
    setShowLogin(false)
  }

  return (
    <div>
        <form className='rounded'>
      <div className="mb-3">
        <label  className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-4">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
      <div className='row d-flex justify-content-around gap-4 pt-2'>
        <button type="back" className="btn btn-outline-warning border-light text-white col" onClick={handleButtonClick}>Go Back</button>
        <button type="submit" className="btn btn-success col">Submit</button>
      </div>
    </form>
    </div>
  )
}

export default Login
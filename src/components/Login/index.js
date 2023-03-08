import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/userContexts'
import { loginUser , getUserfromSession} from '../../utilities/userUtilities'
import './index.css'



const Login = (props) => {

  let { user , setUser } = useContext(AppContext)
  let {setShowLogin} = props
  
  let Nav = useNavigate()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


 
  useEffect(() => {
    
  if(user){
    Nav('/user/dash')
  }
   
  }, [user])
  
 
    


  const handleButtonClick = () =>{
    setShowLogin(false)
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()

    let data = { email, password }
   
    await loginUser(data)
    let res = await getUserfromSession()
    await setUser(res)

    Nav('/user/dash')
   
  }



  
  return (
    <div>
        <form className='rounded'>
      <div className="mb-3">
        <label  className="form-label">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e)=> setEmail(e.target.value)}/>
        <div className="form-text text-white">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-4">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <div className='row d-flex justify-content-around gap-4 pt-2'>
        <button type="back" className="btn btn-outline-warning border-light text-white col" onClick={handleButtonClick}>Go Back</button>
        <button type="submit" className="btn btn-success col" onClick={(e)=> handleSubmit(e)}>Submit</button>
      </div>
    </form>
    </div>
  )
}

export default Login
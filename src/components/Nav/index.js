import React, { useContext } from 'react'
import { Link , useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import { AppContext } from '../../context/userContexts'
import { getUserfromSession, logout } from '../../utilities/userUtilities'

const Nav = () => {

    let Nav = useNavigate()

  const location = useLocation().pathname;
  let { user, setUser } = useContext(AppContext)

  const handleLogOut = async (e) =>{

    e.preventDefault()
   
    await logout()
    setUser(false)
    console.log('logged out');
    Nav('/')
    
    

  }

  return (
    <nav id="navbar" className="navbar navbar-expand-md sticky-top navbar-dark bg-black  ">
        <div className="container ">
            <div id='logo' className="navbar-brand"><Link to ="/" className='nav-link'>Catnip</Link></div>
            <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#expandation">
                <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="expandation">
                <ul className="navbar-nav navbar-nav-scroll">

                    <li className="nav-item mx-4"><Link to ="/" className="nav-link">Home</Link></li>
                    <li className="nav-item mx-4"><Link to ="/" className="nav-link">Testimonials</Link></li>
                    <li className="nav-item mx-4"><Link to ="/" className="nav-link">Features</Link></li>
                    <li className="nav-item mx-4"><Link to ="/" className="nav-link">Links</Link></li>




                    {location === '/' && !user ?
                    <Link to="/signup" className="btn btn-success ">Sign Up</Link>
                    :
                    <></>
                }
                    {user?
                    <button className="btn btn-success" onClick={(e)=>handleLogOut(e)}>Log Out</button>
                    :
                    <></>
                    }


                </ul> 
            </div>       
        </div>
    </nav>
  )
}

export default Nav
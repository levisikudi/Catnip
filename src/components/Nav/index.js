import React, { useContext } from 'react'
import { Link , useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import { AppContext } from '../../context/authContexts'
import { getUserfromSession, deleteUserbyId, logout } from '../../utilities/userUtilities'

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
  const handleDelete = async (e) =>{
    e.preventDefault()
    console.log(user._id);
    let res = await deleteUserbyId(user._id)
    
    // console.log(res);
    Nav('/user/dash')

  }

  return (
    <nav id="navbar" className="navbar w-100 navbar-expand-md sticky-top navbar-dark bg-black  ">
        <div className="container ">
            <div id='logo' 
            className="navbar-brand"
            >
                

                <Link to ={user? '/user/dash': "/"} className='nav-link'>Catnip</Link>
                
                </div>
            <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#expandation">
                <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="expandation">
                <ul className="navbar-nav navbar-nav-scroll">

                    {user?
                    <>
                        <li className="nav-item mx-4">
                        <Link to ="/user/dash" className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link to ="/user/profile" className="nav-link">Profile</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link to ="/user/dash" className="nav-link">Chats</Link>
                        </li>
                        
                        
                    </>
                    :
                    <>
                        <li className="nav-item mx-4">
                            <Link to ="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link to ="/" className="nav-link">Testimonials</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link to ="/" className="nav-link">Features</Link>
                        </li>
                        <li className="nav-item mx-4">
                            <Link to ="/" className="nav-link">Links</Link>
                        </li>
                    </>
                    }

                    {location === '/' && !user ?
                    <Link to="/signup" className="btn btn-success ">Sign Up</Link>
                    :
                    <></>
                }
                    {user?
                    <div>

                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <Link to='/user/profile'>
                            <img 
                            id='avatar'
                            className='img-fluid rounded-circle'
                            src={user.picture}
                            />
                            </Link>
                        </a>
                        <ul class="dropdown-menu bg-dark p-3 ">
                            
                        <li>
                            <button className="btn btn-success mb-3 text-bg-success rounded dropdown-item " onClick={(e)=>handleLogOut(e)}>Log Out
                            </button>
                        </li>
                        <li>
                             <button id='delete-btn' className=' dropdown-item rounded text-bg-danger btn text-bg-danger'
                            onClick={(e)=>handleDelete(e)}>Delete Account
                             </button>
                         </li>
                        </ul>
                        </li>

                        
                        
                    </div>
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
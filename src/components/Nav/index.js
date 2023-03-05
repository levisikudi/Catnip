import React from 'react'
import { Link , useLocation } from 'react-router-dom'
import './index.css'

const Nav = () => {

  const location = useLocation().pathname;

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
                    {location === '/signup'?
                    <></>
                    :
                    <Link to="/signup" className="btn btn-success ">Sign Up</Link>
                    }


                </ul> 
            </div>       
        </div>
    </nav>
  )
}

export default Nav
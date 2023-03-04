import React from 'react'
import './index.css'

const Nav = () => {
  return (
    <nav id="navbar" className="navbar navbar-expand-md sticky-top navbar-dark bg-black  ">
        <div className="container ">
            <div className="navbar-brand">(CatnipLogo)</div>
            <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#expandation">
                <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="expandation">
                <ul className="navbar-nav navbar-nav-scroll">
                  
                    <li className="nav-item mx-4"><a href="#hero-section" className="nav-link">Home</a></li>
                    <li className="nav-item mx-4"><a href="#testimonials" className="nav-link">Testimonials</a></li>
                    <li className="nav-item mx-4"><a href="#features" className="nav-link">Features</a></li>
                    <li className="nav-item mx-4"><a href="#footer" className="nav-link">Links</a></li>
                    <button type="submit" class="btn btn-success col">Sign Up</button>

                </ul> 
            </div>       
        </div>
    </nav>
  )
}

export default Nav
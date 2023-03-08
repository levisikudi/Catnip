import { set } from 'mongoose';
import React, { useState, useEffect } from 'react'
import { getAllCats } from '../../utilities/functions';
import './index.css'

const DisplayCats = () => {

    const [cats, setcats] = useState([])

    
    
    const makeServerCall = async () => {
        let serverResponse = await getAllCats()

        let catArray = serverResponse.data;
        console.log(catArray);
        setcats(catArray)
    }

     useEffect(() => {
        console.log("making cat call");
        makeServerCall()
    }, []);

    let catSlideJSX = cats.map((el)=>{
        <div className='carousel-item' >
            <div id='active' className="carousel-item active d-flex justify-content-center"  >
            <img 
            src='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' className="card-img-top d-block w-100"/>
                <div className="card-body">
                    <h1 className='display-4'>Welcome!</h1>  
                </div>
            </div>
        </div>
        if (el.cat){
            console.log(el);
            return(
                 <div id='card' className='carousel-item' key={el._id}>
                    <img className='img-fluid'src={el.cat.picture}  />
                    <h1 className='display-4'>{el.cat.name}</h1>  
                </div> 
                
                

            )
        }
    })


  return (
  <div>
    <div id="carouselExample" className="carousel slide">
     <div className="carousel-inner">
        <div className='carousel-item' >
            <div id='active' className="carousel-item active d-flex justify-content-center"  >
            <img 
            src='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' className="carou-cat w-100"/>
                <div className="card-body">
                    <h1 className='display-4'>Welcome!</h1>  
                </div>
            </div>
        </div>

    {catSlideJSX}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


  </div>
  )
}

export default DisplayCats
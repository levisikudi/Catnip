import { set } from 'mongoose';
import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ProfileContext } from '../../context/profileContext';
import { getAllCats } from '../../utilities/functions';
import './index.css'

const DisplayCats = () => {

    const [cats, setcats] = useState([])

    let nav = useNavigate()
    
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

   const {setViewCat, viewCat} = useContext(ProfileContext)
    
   const handleViewClick = (el) =>{
    setViewCat(el)
        nav('/cat/display/profile')
   }
   
    let catSlideJSX = cats.map((el)=>{
       
        if (el.cat){
            console.log(el);
            return(
                
                
                
                <div key={el._id} id='search-card'className="card">
                    <img src={el.cat.picture} className="card-img-top" alt={el.cat.name}/>
                    <div className="card-body">
                    <h5 className="card-title">{el.cat.name}</h5>
                    <p className="card-text">{el.firstName}</p>
                    <button 
                    className="btn btn-outline-warning"
                    onClick={(e)=>handleViewClick(el)}
                    >See Profile</button>
                    </div>
                </div>

            )
        }
    })


  return (
  <div className='container px-3'>
    <div className='d-flex justify-context-around gap-5'>
        {catSlideJSX}
    </div>
  </div>
  )
}

export default DisplayCats
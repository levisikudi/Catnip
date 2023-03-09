import React, { useContext, useState } from 'react'
import { ProfileContext } from '../../context/profileContext'
import './index.css'
import moment from 'moment';
import Footer from '../../components/Footer';


const CatProfile = () => {
   
  const {singleCat, searchUser} = useContext(ProfileContext)
  
  let birthday=moment.utc(singleCat.dob).format("MMM Do YYYY")



  return (
    <section id='profile-container' className='container-fluid'>
    <div className='container w-100 pt-1'>
      <div className=''>
        <h1 className='display-1 my-5 col-12 fw-bold'>Meet {singleCat.name},</h1>
          <p className='fst-italic fw-light'>AKA <span className='fw-bold'>{singleCat.othername}</span></p>

        <div className='d-flex justify-content-center mt-5'>
          <img id='single-cat-picture' className='w-75'src={singleCat.picture}/>
        </div>
        <hr className='mt-5'/>

        <div className='row mt-5 px-4'>
          <p className='fs-5 col-5'>Gender: <span>{singleCat.gender}</span></p>
          <p className='fs-5 col-5'>Birthday: <span>{birthday}</span></p>
          <p className='fs-5 col-5'>Hypoallergenic: <span>{singleCat.hypoallergenic}</span></p>
        </div>
        
        <div className='px-4 mt-5'>
          <p className='fs-5 '>Some of {singleCat.name}'s hobbies include:</p>
          <span className='fs-5'>{singleCat.hobbies}</span>
        </div>



      </div>
    </div>
    <div className='w-100 bg-danger-subtle p-3 mx-0'></div>
    </section>
  )
}

export default CatProfile
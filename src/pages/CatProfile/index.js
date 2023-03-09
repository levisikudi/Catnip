import React, { useContext, useState } from 'react'
import { ProfileContext } from '../../context/profileContext'
import './index.css'


const CatProfile = () => {
   
  const {singleCat, searchUser} = useContext(ProfileContext)

  return (
    <div>
      <div className='container'>
        <h1 className='display-1 my-5'>Meet {singleCat.name},</h1>
        <div className='d-flex justify-content-center mt-5'>
          <img id='single-cat-picture' className='w-75'src={singleCat.picture}/>
        </div>

      </div>
    </div>
  )
}

export default CatProfile
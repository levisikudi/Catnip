import React, { useContext, useState } from 'react'
import { ProfileContext } from '../../context/profileContext'


const OtherCatProfile = () => {

    const {viewCat} = useContext(ProfileContext)

  return (
    <div>
      <div className='container'>
        <h1 className='display-1 my-5'>Meet {viewCat.cat.name},</h1>
        <div className='d-flex justify-content-center mt-5'>
          <img id='single-cat-picture' className='w-75'src={viewCat.cat.picture}/>
        </div>

        <div>
          <p>Nickname: {viewCat.cat.othername}</p>
          <p>Gender: {viewCat.cat.gender}</p>
          <p>Birthday:{viewCat.cat.dob}</p>
          <p>Hypoallergenic: {viewCat.cat.hypoallergenic}</p>
        </div>
        <div>
          <p>Some of {viewCat.cat.name}'s hobbies include:</p>
          <p>{viewCat.cat.hobbies}</p>
        </div>



      </div>
    </div>
  )
}

export default OtherCatProfile
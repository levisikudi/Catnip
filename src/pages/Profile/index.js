import React, { useState } from 'react'
import ChatNav from '../../components/chatNav'
import ProfileContent from '../../components/mainProfileContent'
import './index.css'

const Profile = () => {

  // ...................UNDER CONSTRUCTION.......................


  const [editMode, setEditMode] = useState(false)

  return (
    <section id='main-profile'>
    
        {/* <ChatNav /> */}
       
         <ProfileContent />
     
    </section>
  )
}

export default Profile
import React, { useState } from 'react'
import ChatNav from '../../components/chatNav'
import EditContent from '../../components/EditContent'
import ProfileContent from '../../components/mainProfileContent'
import './index.css'

const Profile = () => {

  const [editMode, setEditMode] = useState(false)

  return (
    <section id='main-profile'>
     

        <div id='sidebar' >
        <ChatNav />
        </div>

        <div id='main-profile-content'>    
          {editMode?
          <EditContent setEditMode={setEditMode}/>
          :
          <ProfileContent />
          }
        </div> 

    </section>
  )
}

export default Profile
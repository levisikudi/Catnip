import React, { useState } from 'react'
import ChatNav from '../../components/chatNav'
import EditContent from '../../components/EditContent'
import ProfileContent from '../../components/mainProfileContent'
import './index.css'

const Profile = () => {

  const [editMode, setEditMode] = useState(false)

  return (
    <section id='profile' className='d-flex justify-content-start '>
      <div id='sidebar'className='border border-end' >
      <ChatNav />
      </div>
    {editMode?
     <EditContent setEditMode={setEditMode}/>
    :
     <ProfileContent />
    }
    </section>
  )
}

export default Profile
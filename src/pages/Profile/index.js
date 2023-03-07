import React from 'react'
import ProfileContent from '../../components/mainProfileContent'
import Sidebar from '../../components/sidebar'

const Profile = () => {
  return (
    <div className='d-'>
      <Sidebar />
      <ProfileContent />
    </div>
  )
}

export default Profile
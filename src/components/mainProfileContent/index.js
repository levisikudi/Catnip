import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/userContexts'

const ProfileContent = () => {

  const {user, setUser} = useContext(AppContext)

  
  return (
    <div> profile-content</div>
  )
}

export default ProfileContent
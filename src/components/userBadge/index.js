import React from 'react'

const UserBadge = ({user, handleFunction}) => {


  return (
    <>
    <span className="badge fs-6 m-2 p-2 text-bg-light" onClick={handleFunction}> {user.firstName} <button type="button" className="btn-close ml-3 p-1" aria-label="Close"></button></span>


    </>
  )
}

export default UserBadge
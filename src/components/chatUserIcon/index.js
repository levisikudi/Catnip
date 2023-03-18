import React from 'react'
import './index.css'

const ChatUserIcon = ({user, handleFunction}) => {

   
    console.log(user);
    console.log(handleFunction);

  return (
    <div onClick={handleFunction} className='container d-flex align-items-center'>
        <img id='icon-image' className='img-fluid' src={user.picture}/>
        <div>
            <p className='d-flex align-items-center'>{user.firstName} {user.surname}</p>
        </div>
    </div>
  )
}

export default ChatUserIcon
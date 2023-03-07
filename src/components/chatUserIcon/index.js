import React from 'react'
import './index.css'

const ChatUserIcon = (props) => {

    const {chatUser} = props

  return (
    <div className='container d-flex align-items-center'>
        <img id='icon-image' className='img-fluid' src={chatUser.picture}/>
        <div>
            <p className='d-flex align-items-center'>{chatUser.firstName} {chatUser.surname}</p>
        </div>
    </div>
  )
}

export default ChatUserIcon
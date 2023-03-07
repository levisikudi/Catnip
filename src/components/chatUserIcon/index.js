import React from 'react'

const ChatUserIcon = (props) => {

    const {chatUser} = props

  return (
    <div>
        <img src={chatUser.picture}/>
        <div>
            <p>{chatUser.firstName} {chatUser.surname}</p>
        </div>
    </div>
  )
}

export default ChatUserIcon
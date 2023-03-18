import React, { useContext, useState } from 'react'
import { ChatContext } from '../../context/chatContext'


const Chatbar = () => {

  const {isChatSearch, setIsChatSearch} = useContext(ChatContext)

  const handleClick = (e) =>{
    e.preventDefault()
    setIsChatSearch(true)
  }


  return (
    <section className='container d-flex flex-column' >
      <div>
        <h1 className='display-6'>Chats</h1>
        <div onClick={(e)=>handleClick(e)}>New Chat</div>
      </div>
    </section>
  )
}

export default Chatbar
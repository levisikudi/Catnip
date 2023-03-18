import React, { useContext, useState, useEffect } from 'react'
import { ChatContext } from '../../context/chatContext'
import { AppContext } from '../../context/authContexts'
import { getAllChats } from '../../utilities/chatUtilities'



const Chatbar = () => {

  const {user} = useContext(AppContext)
  const { selectedChat, setSelectedChat, chats, setChats, setIsChatSearch} = useContext(ChatContext)

  const handleClick = (e) =>{
    e.preventDefault()
    setIsChatSearch(true)
  }
   
  const getChats = async () =>{

    try {

      let data = getAllChats
      setChats(data)  

      console.log(data);

    } catch (error) {
      
      console.log("Error fetching chats");
    }
  }

  useEffect(() => {
    getAllChats()
  
  }, [])
  

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
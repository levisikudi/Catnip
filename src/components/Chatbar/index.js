import React, { useContext, useState, useEffect } from 'react'
import { ChatContext } from '../../context/chatContext'
import { AppContext } from '../../context/authContexts'
import { getAllChats, getSender } from '../../utilities/chatUtilities'
import './index.css'
import ChatList from '../ChatList'
import GroupChatModal from '../GroupChatModal'



const Chatbar = () => {

  const {user} = useContext(AppContext)
  const { selectedChat, setSelectedChat, chats, setChats, setIsChatSearch} = useContext(ChatContext)

  const handleClick = (e) =>{
    e.preventDefault()
    setIsChatSearch(true)
  }
   
  const getChats = async () =>{

    try {

      let data = await getAllChats()
      setChats(data.data)  

      console.log(chats);

    } catch (error) {
      
      console.log("Error fetching chats");
    }
  }

  useEffect(() => {
    getChats()
    console.log(chats);
  
  }, [])
  
  console.log(chats);

 

  return (
    <section id='chatBar' className='container d-flex flex-column' >
      <div>
        <h1 className='display-6'>Chats</h1>
      </div>

      <div className=' d-flex justify-content-between'>
        <button className='btn btn-sm ' onClick={(e)=>handleClick(e)} >New Chat</button>

        <GroupChatModal />


      </div>

        {chats?
        chats.map((chat) =>(
          <div
          key={chat._id}
          chat={chat} 
          onClick={() => setSelectedChat(chat)}
          className='border border-black'>
            <div className='text p-2'>
              {!chat.isGroupChat? getSender(user, chat.users): chat.chatName}
            </div>
          </div>
          
          
        ))
        
        :
        <></>
        }


    </section>
  )
}

export default Chatbar
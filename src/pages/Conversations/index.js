import React, { useContext, useEffect } from 'react'
import Chatbar from '../../components/Chatbar'
import ChatNav from '../../components/chatNav'
import MessageBox from '../../components/messageBox'
import { ChatContext } from '../../context/chatContext'
import './index.css'

const Conversations = () => {

  const {isChatSearch, setIsChatSearch} = useContext(ChatContext)
  useEffect(() => {
    setIsChatSearch(false)
  }, [])
  

  return (
    <div id="main" >
      {isChatSearch?
        <ChatNav />
      :
        <Chatbar/>
      }
      <MessageBox />
    </div>
    
  )
}

export default Conversations
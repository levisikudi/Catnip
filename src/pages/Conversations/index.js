import React from 'react'
import Chatbar from '../../components/Chatbar'
import ChatNav from '../../components/chatNav'
import MessageBox from '../../components/messageBox'
// import { AppContext } from '../../context/userContexts'
import './index.css'

const Conversations = () => {

  // const {user} = AppContext()
// ................UNDER CONSTRUCTION....................
  return (
    <div id="main" >
      <ChatNav />
      {/* <Chatbar/> */}
      <MessageBox />
    </div>
    
  )
}

export default Conversations
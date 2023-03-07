import React from 'react'
import ChatNav from '../../components/chatNav'
import MessageBox from '../../components/messageBox'
// import { AppContext } from '../../context/userContexts'
import './index.css'

const Conversations = () => {

  // const {user} = AppContext()

  return (
    <div id="main" className='d-flex w-100 justify-content-between'>
      <ChatNav />
      <MessageBox />
    </div>
    
  )
}

export default Conversations
import React, { useState } from 'react'
import { getSingleUser } from '../../utilities/userUtilities'
import ChatUserIcon from '../chatUserIcon'
import ChatUserList from '../ChatUserList'


const ChatNav = () => {

  const [search, setSearch] = useState('')
  const [chatUser, setChatUser] = useState({})

  const [loading, setLoading] = useState(false)

  const handleUserSearch = async (e) =>{
    e.preventDefault()
    console.log(search);
    if(search!== ''){
      let res = await getSingleUser(search)
      console.log(res);
      setChatUser(res)
      setLoading(true)

    }
    setLoading(false)
  }

 



  return (
    <div>
      <div>
         <div className='d-flex justify-content-center'>
        <input
        type='search'
        placeholder='Search by Name'
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button
        onClick={(e)=>handleUserSearch(e)}>Search</button>
        </div>
        {loading?
        <p className='card-text placeholder-glow'>
          <span className="placeholder col-12"></span>
        </p>
        :
          <ChatUserIcon chatUser={chatUser}/>
        }
      </div>
    </div>
  )
}

export default ChatNav
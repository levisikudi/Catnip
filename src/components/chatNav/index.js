import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/userContexts'
import { deleteUserbyId, getSingleUser } from '../../utilities/userUtilities'
import ChatUserIcon from '../chatUserIcon'
import ChatUserList from '../ChatUserList'


const ChatNav = () => {
  const {user} = useContext(AppContext)

  const [search, setSearch] = useState('')
  const [chatUser, setChatUser] = useState({})

  const [loading, setLoading] = useState(false)

  const handleUserSearch = async (e) =>{
    e.preventDefault()
    console.log(search);
    if(search!== ''){
      let res = await getSingleUser(search)
      console.log(res);
      if(res === undefined){
        setChatUser({})
        return;
      }
      setChatUser(res)
      setLoading(true)

    }
    setLoading(false)
  }

  const handleDelete = async (e) =>{
    e.preventDefault()
    console.log(user._id);
    let res = await deleteUserbyId(user._id)
    
    // console.log(res);
    

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
        <button
        onClick={(e)=>handleDelete(e)}>Delete Account</button>
      </div>
    </div>
  )
}

export default ChatNav
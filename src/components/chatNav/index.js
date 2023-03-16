import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/authContexts'
import {  getSingleUser } from '../../utilities/userUtilities'
import ChatUserIcon from '../chatUserIcon'
import './index.css'
// import ChatUserList from '../ChatUserList'


const ChatNav = () => {
  const {user} = useContext(AppContext)
  let navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [chatUser, setChatUser] = useState([])

  const [loading, setLoading] = useState(false)

  const handleUserSearch = async (e) =>{
    e.preventDefault()
    setLoading(true)
    console.log(search);
    if(search != ''){
      let res = await getSingleUser(search)
      console.log(res);
      setChatUser(res)
      if(res === undefined){
        setChatUser([])
        console.log(chatUser);
        return;
      }
      console.log(chatUser);
      setLoading(true)

    }
    setLoading(false)
  }

  
 const accessChat = (user._id) = {



 }



  return (
    <div id='side-nav' className='container d-flex flex-column'>
      <div className='row'>
         <div id='input-field'className='col-12 align-items-start '>
          
            <div className='input-group my-2 mr-2'>
              <input
              type='search' className='form-control'
              aria-describedby="button-addon3"
              placeholder='Search by human'
              onChange={(e)=>setSearch(e.target.value)}
              />
              <button
              onClick={(e)=>handleUserSearch(e)}
              id="button-addon3">Search</button>
            </div>

            {/* ......UNDER CONSTRUCTION...... */}
        
            {loading?
            <p className='card-text placeholder-glow w-100'>
              <span className="placeholder col-12" placeholder='People will apperar here'></span>
              <span className="placeholder col-12" placeholder='People will apperar here'></span>
              <span className="placeholder col-12" placeholder='People will apperar here'></span>
              <span className="placeholder col-12" placeholder='People will apperar here'></span>
              <span className="placeholder col-12" placeholder='People will apperar here'></span>
              <span className="placeholder col-12" placeholder='People will apperar here'></span>
            </p>
            :
            chatUser?.map(user =>(
              <ChatUserIcon 
              user={user} 
              key={user._id}
              handleFunction={()=>accessChat(user._id)}
              
              />
            ))
              
            }
          
        </div>
      </div>
    </div>
  )
}

export default ChatNav
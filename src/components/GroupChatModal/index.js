import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/authContexts'
import { ChatContext } from '../../context/chatContext'

const GroupChatModal = () => {

    const {chats, setChats} = useContext(ChatContext)
    const {user}= useContext(AppContext)

    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [selectedUsers, setSelectedUsers] = useState([])
    const [groupChatName, setGroupChatName] = useState('')
    const [loading, setLoading] = useState(false)




  return (
    <>
        <button className='btn btn-sm' data-bs-toggle="modal" data-bs-target="#groupChatModal" >New Group Chat</button>

        <div className="modal fade" id="groupChatModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header ">
                <h1 className="modal-title fs-5 text-center">Create Cat Party</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                
                <div class="mb-3">
                    <label  class="form-label">Party Name</label>
                    <input type="text" class="form-control" placeholder=" 'Cat-astrophy' "/>
                    </div>
                    <div class="mb-3">
                    <label class="form-label">Party Members</label>
                    < input class="form-control" />
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Create Party</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default GroupChatModal
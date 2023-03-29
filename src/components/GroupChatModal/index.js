import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/authContexts'
import { ChatContext } from '../../context/chatContext'
import { getSingleUser } from '../../utilities/userUtilities'
import UserBadge from '../userBadge'
import ChatUserIcon from '../chatUserIcon'

const GroupChatModal = () => {

    

    const {chats, setChats} = useContext(ChatContext)
    const {user}= useContext(AppContext)

    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [selectedUsers, setSelectedUsers] = useState([])
    const [groupChatName, setGroupChatName] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSearch = async (person) =>{
        setSearch(person)
        if(!person){return}

        try {
            setLoading(true)
            const data = await getSingleUser(person)
            setSearchResults(data)
            console.log(searchResults);
            setLoading(false)
        } catch (error) {
            console.log("Couldn't load search results");
        }

    }
    const handleCreate = async () =>{

    }
    const handleDelete = (userToBeDeleted) =>{
       let data = selectedUsers.filter((selUser)=>{
        return selUser._id !== userToBeDeleted._id
       })
       setSelectedUsers(data)
    }
    const handleGroup = (newPerson) =>{
        if (selectedUsers.includes(newPerson)){
            return
        }else{
            setSelectedUsers([...selectedUsers, newPerson])
            console.log(selectedUsers);
        }
    }




  return (
    <>
        <button className='btn btn-sm' data-bs-toggle="modal" data-bs-target="#groupChatModal" >New Group Chat</button>

        <div className="modal fade" id="groupChatModal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header ">
                <h1 className="modal-title fs-5 text-center">Create Cat Party</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                
                <div className="mb-3">
                    <label  className="form-label">Party Name</label>
                    <input type="text" className="form-control" 
                    placeholder=" 'Cat-astrophy' " onChange={(e)=>setGroupChatName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Add Party Members</label>
                    < input className="form-control" onChange={(e)=>handleSearch(e.target.value)}/>

                    {/* render selected users */}
                    {selectedUsers.map((user)=>(
                        <UserBadge key={user._id} user={user} handleFunction={()=>handleDelete(user)}/>
                    ))}


                    {/* render search results */}
                    {loading? <div>Loading</div>
                    :

                        (searchResults?.slice(0,4).map((person)=>(
                            <ChatUserIcon key={person._id + 1} user={person} handleFunction={()=>handleGroup(person)}/>
                        ))
                           
                        )
                    }
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary"
                onClick={handleCreate()}>Create Party</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default GroupChatModal
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProfileContext } from '../../context/profileContext'
import { getSingleCat } from '../../utilities/functions'
import './index.css'

const TopDrawer = () => {


  const {singleCat, setSingleCat, searchUser, setViewCat, setSearchUser} = useContext(ProfileContext)
  const [search, setSearch] = useState('')

  const [result, setResult] = useState(false)

  const [close, setClose] = useState(false)

  let navigate = useNavigate()


  const handleSearch = async (e) =>{
    e.preventDefault()
    console.log(search);
    if (!search || search !== '') {
        let res = await getSingleCat(search)
        console.log(res.data);
        setSingleCat(res.data.cat)
        setSearchUser(res.data.user)
        setResult(true)

        
      }else{setResult(false)}
  }

  const handleViewClick = (e) =>{
    e.preventDefault()

    navigate('/cat/profile') 
  }

  const handleClose = (e) =>{
    e.preventDefault()
    setResult(false)
    setSearch('')
  }


  
  return (
    <div className='container-fluid bg-danger-subtle'>

   
    <div className='container mb-4 '>
      <div className='d-flex justify-content-center my-3'>
  

        <div class="input-group pt-3 w-50">
          <input type="text" class="form-control" 
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search cat here" 
          aria-label="Search cat here" aria-describedby="button-addon2"/>
          <button class="btn btn-outline-secondary" 
          onClick={(e)=>handleSearch(e)}
          type="button" id="button-addon2">Search</button>
        </div>

      

      </div>
      <div className='d-flex justify-content-center'>
      {result?

      <div id='search-card'className="card">
        <img src={singleCat.picture} className="card-img-top" alt={singleCat.name}/>
        <div className="card-body">
          <h5 className="card-title">{singleCat.name}</h5>
          <p className="card-text">{searchUser.city}, <span className='fw-light fst-italic'>{searchUser.state}</span></p>
          
          <div className='d-flex justify-content-between align-items-center'>
            <button 
            className="btn btn-outline-warning"
            onClick={(e)=>handleViewClick(e)}
            >See Profile</button>
            
            <button type="button" 
            className="btn-close btn-"
            onClick={(e)=>handleClose(e)} 
            aria-label="Close"></button>
          
          </div>
        </div>
      </div>
      :
      <></>
      }

      </div>
      <hr className='border text-black border-1 '/>
    </div>
     </div>
  )
}

export default TopDrawer
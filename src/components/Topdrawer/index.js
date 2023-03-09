import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProfileContext } from '../../context/profileContext'
import { getSingleCat } from '../../utilities/functions'
import './index.css'

const TopDrawer = () => {


  const {singleCat, setSingleCat, searchUser, setSearchUser} = useContext(ProfileContext)
  const [search, setSearch] = useState('')
  // const [singleCat, setSingleCat] = useState({})

  const [result, setResult] = useState(false)
  // const [searchUser, setSearchUser] = useState({})

  let navigate = useNavigate()


  const handleSearch = async (e) =>{
    e.preventDefault()
    console.log(search);
    if (search !== '') {
        let res = await getSingleCat(search)
        console.log(res);
        setSingleCat(res.data.cat)
        setSearchUser(res.data.user)
        setResult(true)
      }
  }

  const handleViewClick = (e) =>{
    e.preventDefault()
    navigate('/cat/profile') 
  }


  
  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <input
        type='search'
        placeholder='Search Cat here'
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button
        onClick={(e)=>handleSearch(e)}>Search</button>

      </div>
      <div className='d-flex justify-content-center'>
      {result?

      <div id='search-card'className="card">
        <img src={singleCat.picture} className="card-img-top" alt={singleCat.name}/>
        <div className="card-body">
          <h5 className="card-title">{singleCat.name}</h5>
          <p className="card-text">{searchUser.firstName}</p>
          <button 
          className="btn btn-outline-warning"
          onClick={(e)=>handleViewClick(e)}
          >See Profile</button>
        </div>
      </div>
      :
      <></>
      }

      </div>
    </div>
  )
}

export default TopDrawer
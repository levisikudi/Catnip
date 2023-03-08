import React, { useState } from 'react'
import { getSingleCat } from '../../utilities/functions'


const TopDrawer = () => {

  const [search, setSearch] = useState('')
  const [singleCat, setSingleCat] = useState({})

  const [result, setResult] = useState(false)


  const handleSearch = async (e) =>{
    e.preventDefault()
    let lowerSearch = search.toLowerCase()
    if (search !== '') {
        let res = await getSingleCat(lowerSearch)
        console.log(res);
        setSingleCat(res)
        setResult(true)

      }
      setResult(false)

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
      <div>
      {result?
      <div>
        <img src={singleCat.picture}/>
        <h1>{singleCat.name}</h1>
      </div>
      :
      <></>
      }

      </div>
    </div>
  )
}

export default TopDrawer
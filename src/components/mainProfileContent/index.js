import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/userContexts'
import DisplayCats from '../displayCats'
import moment from 'moment';

import './index.css'

const ProfileContent = () => {

  const {user, setUser} = useContext(AppContext)
  let cat = user.cat
  const [pronoun, setPronoun] = useState(cat.gender == "Female"? "she": "he")
  const [posPronoun, setPosPronoun] = useState(cat.gender == "Female"? "Her": "His")
  const [catDisplay, setCatDisplay] = useState(true)
  let birthday = moment.utc(cat.dob).format("MMM Do YY")


  
  return (
    <div id='main-content'>
      

      <h1>{cat.name}</h1>
      {cat.othername?
       <p>Also known as {cat.othername}</p>
      :
      <></>
      }
      <div>
        <img src={cat.picture}/>
      </div>
      <p>What {pronoun} likes doing: <span>{cat.hobbies}</span></p>
      <p>Where {pronoun} calls home: <span>{user.city}</span></p>
      <p>When {pronoun} was born: <span>{birthday}</span></p>
      <p>
        <span>{user.firstName} (the supposed owner) feeds and takes care of {(posPronoun).toLowerCase()}</span>
      </p>

      <hr/>
    </div>
  )
}

export default ProfileContent
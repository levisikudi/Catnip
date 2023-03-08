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
  const [editMode, setEditMode] = useState(false)

  // .............STATES..............
  const [name, setName] = useState()
  const [othername, setOthername] = useState()
  const [gender, setGender] = useState()
  const [breed, setBreed] = useState()
  const [hypoallergenic, setHypoallergenic] = useState()
  const [hobbies, setHobbies] = useState()
  const [dob, setDob] = useState()
  const [picture, setPicture] = useState()

  const [loading, setLoading] = useState(false)

  // .............END OF STATES..............

  const handleEditButton = (e) =>{
    e.preventDefault()
    console.log('button clicked');
    !editMode? setEditMode(true) : setEditMode(false)
    console.log(editMode);
  }


  
  return (
    <div id='main-content'>
      
      <div >
        <div className='d-flex justify-content-between'>
          <h1>{cat.name}</h1>
          <button 
          className='btn btn-outline-success' 
          onClick={(e)=>handleEditButton(e)}>Edit Profile
        </button>
       
          </div>
            {editMode? 
            <input 
            type="text" 
            className="form-control" 
            defaultValue={cat.name}
            onChange={(e)=>setName(e.target.value)} 
            aria-label="Name"
            />
            :
            <></> }
          </div>

      {cat.othername?
      <div>
        <p>Also known as {cat.othername}</p>
        {editMode? 
        <input 
          type="text" 
          className="form-control" 
          defaultValue={cat.othername}
          onChange={(e)=>setOthername(e.target.value)} 
          aria-label="Othername"
          />
        :
        <></> }
      </div>
      :
      <></>
      }
    
      <div>
        <img id='cat-image' src={cat.picture}/>
      </div>


      <div>
        <p>Gender: <span>{cat.gender}</span></p>
        {editMode?
        <div>
           <div className="form-check">
            <input className="form-check-input" 
            type="radio" 
            name="gender" 
            value='Male'
            id="male"
             onChange={(e)=>setGender('Male')}
            />

            <label className="form-check-label">
             Male
            </label>

          </div>

          <div className="form-check">
            <input className="form-check-input" 
            type="radio" 
            name="gender" 
            value='Female'
            id="female"
            onChange={(e)=>setGender('Female')}
            />
            <label 
            className="form-check-label" >
              Female
            </label>
          </div>
          </div>

        :
        <></>
        }

      </div>

      <div>
        <p>Breed: <span>{cat.breed}</span></p>
        {editMode?
        <input 
            type='text' 
            className="form-control"
            defaultValue={cat.breed} 
            onChange={(e)=>setBreed(e.target.value)}
            />
        :
        <></>
        }
      </div>

        <div>
          <p>When {pronoun} was born: <span>{birthday}</span></p>
          {editMode? 
          <input 
            className="form-control" 
            type="date" 
            defaultValue={cat.dob}
            onChange={(e)=>setDob(e.target.value)} 
            />
          :
  
          <></> }
  
        </div>
      
      <div>
       <p>What {pronoun} likes doing: <span>{cat.hobbies}</span></p>
        {editMode? 
        <textarea 
            type='text-box' 
            className="form-control" 
            defaultValue={cat.hobbies}
            onChange={(e)=>setHobbies(e.target.value)}
        ></textarea>
        :
        <></> }
      </div>

      <div>
        <p>Hypoallergy Status: <span>{cat.hypoallergenic}</span></p>
        
        {editMode?
        <div>
          <div className="form-check">
              <input className="form-check-input" 
              type="radio" 
              name="radio" 
              value='Yes'
              id="yes"
              onChange={(e)=>setHypoallergenic('She/He is Hypoallergenic')}
              />
              <label className="form-check-label">
              Yes
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" 
              type="radio" 
              name="radio" 
              defaultValue='no'
              id="no"
              onChange={(e)=>setHypoallergenic('She/He is not Hypoallergenic')}
              />
              <label className="form-check-label">
              No
              </label>
            </div>
        </div>
        :
        <></>
        }
        {editMode?
        <div className='mt-4 text-end'>
          <button className='btn btn-outline-success'> Update {cat.name}'s cat-formation</button>
        </div>
      
        :
        <></>
        }
      </div>


      {/* .......USER EDIT........ */}

      <hr className='my-5 py-4'/>

      <div>
        <p>
          Owner : <span>{user.firstName} {user.surname}</span>
          {editMode?
          <div>Wait</div>
          :
          <></>
          }
        </p>

        <div>
        <p>Where {user.firstName} resides: <span>{user.city}</span></p>
        {editMode? <input type='text' defaultValue={user.city}/>:<></> }
      </div>

      </div>

      <hr/>
    </div>
  )
}

export default ProfileContent
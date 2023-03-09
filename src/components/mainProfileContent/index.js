import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/authContexts'
import DisplayCats from '../displayCats'
import moment from 'moment';

import './index.css'
import { CatContext } from '../../context/catContext';
import { updateCatById } from '../../utilities/functions';
import UserProfile from '../userProfile';
import { loginUser } from '../../utilities/userUtilities';

const ProfileContent = () => {

  const {user, setUser} = useContext(AppContext)
  const {   name, setName,
            othername, setOthername,
            gender, setGender,
            breed, setBreed,
            hypoallergenic, setHypoallergenic,
            hobbies, setHobbies,
            dob, setDob,
            picture, setPicture,
            } = useContext(CatContext)

  
  let cat = user.cat
  // console.log(cat._id);
  
  const [catDisplay, setCatDisplay] = useState(true)
  let birthday = moment.utc(cat.dob).format("MMM Do YY")
  const [editMode, setEditMode] = useState(false)


  const handleEditButton = (e) =>{
    e.preventDefault()
    console.log('button clicked');
    !editMode? setEditMode(true) : setEditMode(false)

    console.log(editMode);
  }


  const postDetails = (photo) =>{
    if(photo === undefined){
      alert('Please Select an Image')
      return;
    }

    if (photo.type === 'image/jpeg' || photo.type === 'image/png'){
     const data = new FormData();
     data.append('file', photo)
     data.append('upload_preset','Catnip') 
     data.append('cloud_name','dtvq6pgc4') 

     fetch('https://api.cloudinary.com/v1_1/dtvq6pgc4/image/upload',{
       method: 'POST',
       body : data
     }).then((res) => res.json())
        .then(data => {
          setPicture(data.url.toString())
          console.log(data.url.toString());
          console.log('photo posted');
        })
        .catch((err)=>{
          console.log(err);
        })
    }else{
      alert('File not supported, Please select valid image')
    }
  }

  const handleCatUpdate = async (e) =>{
    console.log('triggered upload');
    let data = {
      name, othername, gender, breed, dob, hypoallergenic, hobbies, picture
    }

    const cleanData = Object.entries(data)
      .filter(([key, value]) => value !== undefined)
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
      console.log(data);
      console.log(cleanData);
      let dataPack = [cleanData, cat._id]
      console.log(dataPack);
      let res = await updateCatById(dataPack)
      console.log(res);

  }

  
  return (
    <div id='main-content'>
      
      <div >
        <div className='d-flex justify-content-between'>
          <h1 className='display-1'>{cat.name}</h1>
          <span>
            <button 
            id='edit-btn'
            className='btn btn-outline-success ' 
            onClick={(e)=>handleEditButton(e)}>Edit Profile
          </button>
          </span>
       
          </div>
            {editMode? 
            <input 
            type="text" 
            className="form-control w-50" 
            defaultValue={cat.name}
            onChange={(e)=>setName(e.target.value)} 
            aria-label="Name"
            />
            :
            <></> }
          </div>

      {cat.othername?
      <div>
        <p className='fst-italic fw-light'>Also known as {cat.othername}</p>
        {editMode? 
        <input 
          type="text" 
          className="form-control w-50" 
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
    
      <div className='text-center'>
        <img id='cat-image' src={cat.picture}/>
        {editMode?
        <div className="col-md-6">
            <p>Update the image of your cat</p>
            <input 
            type="file" 
            accept='image/*' 
            className="form-control"
            aria-label="Picture" 
            onChange={(e)=>postDetails(e.target.files[0])} />
        </div>
        :
        <></>
        }
      </div>

  <div className='row py-3 '>
      <div className='col-md-6'>
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

      <div className='col-md-6'>
        <p>Breed: <span>{cat.breed}</span></p>
        {editMode?
        <input 
            type='text' 
            className="form-control w-50"
            defaultValue={cat.breed} 
            onChange={(e)=>setBreed(e.target.value)}
            />
        :
        <></>
        }
      </div>

        <div className='col-md-6'>
          <p>When {cat.name} was born: <span>{birthday}</span></p>
          {editMode? 
          <input 
            className="form-control w-50" 
            type="date" 
            defaultValue={cat.dob}
            onChange={(e)=>setDob(e.target.value)} 
            />
          :
  
          <></> }
  
        </div>
      
      <div>
       <p>What {cat.name} likes doing: <span>{cat.hobbies}</span></p>
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
  </div>


        {editMode?
        <div className='mt-4 text-end'>
          <button 
          className='btn btn-outline-success'
          onClick={(e)=>handleCatUpdate(e)}
          > Update {cat.name}'s 'cat'-formation</button>
        </div>
      
        :
        <></>
        }
      </div>


      {/* .......USER EDIT........ */}

      <hr className='my-5 py-4'/>

        <UserProfile user={user} editMode={editMode}/>
    </div>
  )
}

export default ProfileContent
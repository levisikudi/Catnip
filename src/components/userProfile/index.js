import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { updateById } from '../../utilities/userUtilities'
import './index.css'



const UserProfile = (props) => {

    //...........STATES AND HOOKS................
    const { user, editMode} = props

    const {
        firstName, setFirstName,
        surname, setSurname,
        city, setCity,
        state, setState, 
        picture, setPicture, } = useContext(UserContext)
        

    //................FUNCTIONS..................    

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
      const handleUserUpdate = async (e) =>{

    console.log('triggered upload');
    let data = { firstName, surname, city, state, picture}
    // console.log(data);

    const cleanData = Object.entries(data)
      .filter(([key, value]) => value !== undefined)
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
      // console.log(data);
      // console.log(cleanData);
      // console.log(user)
      let dataPack = [cleanData, user._id]
      console.log(dataPack);
      let res = await updateById(dataPack)
      console.log(res);


      }


   //................RETURN STATEMENT............ 
  return (
    <div>
      <h1 className='display-2'>You</h1>
      <div>
        <div>
          <p>Owner : <span>{user.firstName} {user.surname}</span></p>
          {editMode?
          <div className='d-flex'>

              <input type="text "
              className="form-control" 
              onChange={(e)=>setFirstName(e.target.value)} 
              placeholder='First Name'
              aria-label="First name"/>

              <input type="text" 
              className="form-control" 
              placeholder='Last Name'
              onChange={(e)=>setSurname(e.target.value)} 
              aria-label="Last name"/>

          </div>
          :
          <></>
          }
        </div>


        <div>
            <img id='user-image' src={user.picture} alt={user.name}/>
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

        <div>
            <p>City/Town where {user.name} resides: <span>{user.city}</span></p>
            {editMode? 
            <input type='text' 
            placeholder='Man-catt-han (Get it?)'
            onChange={(e)=>setCity(e.target.value)} 
            />
            :
            <></>
            }
        </div>
        
        <div>
            <p>State where {user.firstName} resides: <span>{user.state}</span></p>
            {editMode? 
            <>
            <label className="form-label">State</label>
            <select 
            className="form-select w-50" 
            onChange={(e)=>setState(e.target.value)}>
                <option default>Choose State...</option>
                <option>NY</option>
                <option>NJ</option>
            </select>
            </>
            :
            <></>
            }
        </div>

        {editMode?
        <div className='mt-4 text-end'>
          <button 
          className='btn btn-outline-success'
          onClick={(e)=>handleUserUpdate(e)}
          > Update your info?</button>
        </div>
      
        :
        <></>
        }
      

            

      </div>


            

      
      <hr className='my-5 '/>
    </div>
  )
}

export default UserProfile
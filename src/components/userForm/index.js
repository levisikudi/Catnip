import axios from 'axios'
import { React, useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/authContexts'
import { UserContext } from '../../context/userContext'
import { getUserfromSession, loginUser, signUp } from '../../utilities/userUtilities'
import './index.css'

const UserForm = () => {
  const [show, setshow] = useState(false)
   
  const { firstName, setFirstName,
          surname, setSurname,
          email, setEmail,
          password, setPassword,
          confirm, setConfirm,
          city, setCity,
          state, setState, 
          picture, setPicture,} = useContext(UserContext)

  // const [firstName, setFirstName] = useState()
  // const [surname, setSurname] = useState()
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  // const [confirm, setConfirm] = useState()
  // const [city, setCity] = useState()
  // const [state, setState] = useState()
  // const [picture, setPicture] = useState()


  const [loading, setLoading] = useState(false)

  const {user, setUser} = useContext(AppContext)

  let Nav = useNavigate()


  const handleShowClick = () =>{
    setshow(show? false:true)
  }


  
  const handleSubmit = async (e) =>{
    setLoading()
     e.preventDefault();
     if (!firstName || !surname || !email || !state || !password ){
       alert('fill in all the required fields');
      }

      //check if passwords are the same
      if (password !== confirm){
      alert('Paswords not okay');
    }
    //Takes all states and places them in an object
    let data = ( { firstName, surname, email, password, city, state, picture }

    )

    console.log(data);
    let response = await signUp(data)
    console.log(response);

    let loginData = {email, password}
    // login the user with the credentials made
    await loginUser(loginData)
    let res = await getUserfromSession()
    console.log(res);
    await setUser(res)



    Nav('/catform')

  }
  
  const postDetails = (photo) =>{
    setLoading(true)
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
          setLoading(false)
          console.log('photo posted');
        })
        .catch((err)=>{
          console.log(err);
          setLoading(false)
        })
    }else{
      alert('File not supported, Please select valid image')
      setLoading(false)
    }
  }


  

  return (
  <div className='main d-flex justify-content-center align-items-center'>

    <form className="row g-3 w-75 mt-4 rounded">
        <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" onChange={(e)=>setFirstName(e.target.value)} aria-label="First name"/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Last Name</label>
          <input type="text" className="form-control" onChange={(e)=>setSurname(e.target.value)} aria-label="Last name"/>
        </div>
        <div className="col-md-12">
          <label className="form-label">Email</label>
          <input type="email" className="w-75 form-control" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="col-md-8">
          <label className="form-label">Password</label>
            <div className='input-group'>
            <input type={show?"text":"password"} className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
              <button className="btn btn-light" type="button" onClick={handleShowClick}>{show? 'Hide':'Show'}</button>
            </div>
        </div>
        <div className="col-md-8">
          <label className="form-label">Confirm Password</label>
            <div className='input-group'>
            <input type={show?"text":"password"} className="form-control" onChange={(e)=>setConfirm(e.target.value)}/>
              <button className="btn btn-light" type="button" onClick={handleShowClick}>
                {show? 'Hide':'Show'}
              </button>
            </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">City</label>
          <input type="text" placeholder='New Cat City' className="form-control" id="inputCity" onChange={(e)=>setCity(e.target.value)}/>
        </div>
        <div className="col-md-4">
          <label className="form-label">State</label>
          <select className="form-select" onChange={(e)=>setState(e.target.value)}>
            <option default>Choose State...</option>
            <option>NY</option>
            <option>NJ</option>
          </select>
        </div>

        <div className="col-md-6">
            <label className="form-label">Upload an image of yourself</label>
            <input type="file" accept='image/*' className="form-control" aria-label="First name" onChange={(event)=>postDetails(event.target.files[0])}/>
        </div>
        
        <div className="col-12 text-end">
          <button type="submit" className="btn btn-outline-warning text-white border-white" onClick={(e)=> handleSubmit(e)}>
            {loading?
          "Loading..."
          :  
          "Submit"
          }
            </button>
        </div>
    </form>
  </div>
  )
}

export default UserForm
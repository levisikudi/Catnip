import { React, useState } from 'react'
import { signUp } from '../../utilities/userUtilities'
import './index.css'


const UserForm = () => {
  const [show, setshow] = useState(false)

  const [firstName, setFirstName] = useState()
  const [surname, setSurname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirm, setConfirm] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [zip, setZip] = useState()
  const [photo, setPhoto] = useState()

  const [formdata, setFormdata] = useState({})

  const handleShowClick = () =>{
    setshow(show? false:true)
  }

  const postDetails = (photo) =>{

  }

  const handleSubmit = async (e) =>{
     e.preventDefault();
     if (!firstName || !surname || !email || !state || !password ){
       alert('fill in all the required fields');
      }

      //check if passwords are the same
      if (password !== confirm){
      alert('Paswords not okay');
    }
    //Takes all states and places them in an object
    setFormdata(
      {
        firstName,
        surname,
        email,
        password,
        city,
        state,
        photo
      }
    )
    console.log(formdata);
    let response = await signUp(formdata)
    console.log(response);

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
          <input type="text" className="form-control" id="inputCity" onChange={(e)=>setCity(e.target.value)}/>
        </div>
        <div className="col-md-4">
          <label className="form-label">State</label>
          <select className="form-select" onChange={(e)=>setState(e.target.value)}>
            <option default>Feline-nopolis...</option>
            <option>NY</option>
            <option>NJ</option>
          </select>
        </div>
        <div className="col-md-2">
          <label className="form-label">Zip</label>
          <input type="text" className="form-control" id="inputZip" onChange={(e)=>setZip(e.target.value)}/>
        </div>

        <div className="col-md-6">
            <label className="form-label">Upload an image of yourself</label>
            <input type="file" accept='image/*' className="form-control" aria-label="First name" onChange={(event)=>postDetails(event.target.files[0])}/>
        </div>
        
        <div className="col-12 text-end">
          <button type="submit" className="btn btn-outline-warning text-white border-white" onClick={(e)=> handleSubmit(e)}>Submit</button>
        </div>
    </form>
  </div>
  )
}

export default UserForm
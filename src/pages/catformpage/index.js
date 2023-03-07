import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createCat } from '../../utilities/functions'

const CatformPage = () => {

  let Nav = useNavigate()

  const [name, setName] = useState()
  const [othername, setOthername] = useState()
  const [gender, setGender] = useState()
  const [breed, setBreed] = useState()
  const [hypoallergenic, setHypoallergenic] = useState()
  const [hobbies, setHobbies] = useState()
  const [dob, setDob] = useState()
  const [picture, setPicture] = useState()

  const [loading, setLoading] = useState(false)


const handleSubmit = async (e) =>{
  setLoading()
  e.preventDefault();

  let data = { name, othername, gender, breed, hypoallergenic, hobbies, dob, picture}

  console.log(data);
  let cat = await createCat(data)
  // if (cat){
  //   Nav('/user/dash')
  // }

}

const handleSkip = () =>{
  Nav('/user/dash')
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
    <form className="row g-3 w-75 mt-4 rounded ">
        <div className="col-md-6">
            <label className="form-label">What is your cat's name?</label>
            <input 
            type="text" 
            className="form-control" 
            onChange={(e)=>setName(e.target.value)} 
            aria-label="Name"
            />
        </div>

        <div className="col-md-6">
            <label className="form-label">Does your cat have another name?</label>
          <input 
          type="text" 
          className="form-control" 
          onChange={(e)=>setOthername(e.target.value)} 
          aria-label="Othername"
          />
        </div>

        <div className="col-md-12">

          <label className='form-label'>When was your cat born?</label>
          <input 
          id="startDate" 
          className="form-control" 
          type="date" 
          onChange={(e)=>setDob(e.target.value)} 
          />

          </div>
          <div className='col-6'>
          <label className='form-label'>What is your cat's gender?</label>
          
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

            <div className='col-6'>

            <label className='form-label col-6'>Is She/He Hypoallergenic?</label>
            
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
              value='no'
              id="no"
              onChange={(e)=>setHypoallergenic('She/He is not Hypoallergenic')}
              />
              <label className="form-check-label">
              No
              </label>
            </div>
            </div>




        <div className="col-md-7">
          <label className="form-label">What breed is your cat</label>
            <div className='input-group'>
            <input 
            type='text' 
            className="form-control" 
            onChange={(e)=>setBreed(e.target.value)}
            />
           </div> 
        </div>


            <div className="col-md-12">
              <label className="form-label">What does your Cat like to do?</label>
                <div className='input-group'>
                <textarea 
                type='text-box' 
                className="form-control" 
                onChange={(e)=>setHobbies(e.target.value)}
                ></textarea>
              </div> 
            </div>

      

        <div className="col-md-6">
            <label className="form-label">Upload an image of your Cat</label>
            <input 
            type="file" 
            accept='image/*' 
            className="form-control" 
            aria-label="Picture" 
            onChange={(event)=>postDetails(event.target.files[0])} />
        </div>
        
        <div className="col-12 d-flex justify-content-between mt-5">

          <button
          className='btn btn-outline-warning text-white px-4 border-white'
          onClick={handleSkip}
          >Skip</button>


          <button 
          type="submit" 
          className="btn btn-outline-warning text-white border-white" 
          onClick={(e)=> handleSubmit(e)}
          >
            {loading?
          "Loading..."
          :  
          "Let's go!"
          }
          </button>

        </div>
    </form>
    </div>
  )
}

export default CatformPage
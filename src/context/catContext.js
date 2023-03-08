import {useState, createContext} from 'react';

export const CatContext = createContext();

const CatContextProvider = (props) => {

   const [name, setName] = useState()
  const [othername, setOthername] = useState()
  const [gender, setGender] = useState()
  const [breed, setBreed] = useState()
  const [hypoallergenic, setHypoallergenic] = useState()
  const [hobbies, setHobbies] = useState()
  const [dob, setDob] = useState()
  const [picture, setPicture] = useState()

  const [loading, setLoading] = useState(false)
 
    return (
        <CatContext.Provider value={{
            // user, setUser,
            name, setName,
            othername, setOthername,
            gender, setGender,
            breed, setBreed,
            hypoallergenic, setHypoallergenic,
            hobbies, setHobbies,
            dob, setDob,
            picture, setPicture,
            loading, setLoading,

        }}>
            {props.children}
        </CatContext.Provider>
    )
}

export default CatContextProvider;
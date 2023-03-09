import {useState, createContext} from 'react';

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {

    const [singleCat, setSingleCat] = useState({})
    const [searchUser, setSearchUser] = useState({})

    

   
 
    return (
        <ProfileContext.Provider value={{
            singleCat, setSingleCat,
            searchUser, setSearchUser
            
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}

export default ProfileContextProvider;
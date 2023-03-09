import {useState, createContext} from 'react';

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {

    const [singleCat, setSingleCat] = useState({})
    const [searchUser, setSearchUser] = useState({})
    const [viewCat, setViewCat] = useState({})

    

   
 
    return (
        <ProfileContext.Provider value={{
            singleCat, setSingleCat,
            searchUser, setSearchUser,
            viewCat, setViewCat,
            
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}

export default ProfileContextProvider;
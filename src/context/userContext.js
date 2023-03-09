import {useState, createContext} from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const [firstName, setFirstName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirm, setConfirm] = useState()
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [picture, setPicture] = useState()
   
 
    return (
        <UserContext.Provider value={{

            firstName, setFirstName,
            surname, setSurname,
            email, setEmail,
            password, setPassword,
            confirm, setConfirm,
            city, setCity,
            state, setState, 
            picture, setPicture,


        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;








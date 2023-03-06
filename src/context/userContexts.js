import {useState, createContext} from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [user, setUser] = useState(false);
   
 
    return (
        <AppContext.Provider value={{
            user, setUser,

        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
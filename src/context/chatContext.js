import {useState, createContext} from 'react';

export const ChatContext = createContext();

const ChatContextProvider = (props) => {

   
 
    return (
        <ChatContext.Provider value={{

        }}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatContextProvider;
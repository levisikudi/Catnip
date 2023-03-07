import {useState, createContext} from 'react';

export const ConversationContext = createContext();

const ChatContextProvider = (props) => {

   
 
    return (
        <ConversationContext.Provider value={{

        }}>
            {props.children}
        </ConversationContext.Provider>
    )
}

export default ChatContextProvider;
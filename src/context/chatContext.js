import {useState, createContext} from 'react';

export const ChatContext = createContext();

const ChatContextProvider = (props) => {

   const [selectedChat, setSelectedChat] = useState()
   const [chats, setChats] = useState()
   const [isChatSearch, setIsChatSearch] = useState()// in production the state is true allow me to code the functionalities
 
    return (
        <ChatContext.Provider value={{
            selectedChat, setSelectedChat,
            chats, setChats,
            isChatSearch, setIsChatSearch,
        }}>
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatContextProvider;
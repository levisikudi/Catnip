import axios from "axios";



export const createChat = async (userId) =>{
    console.log(userId);
    console.log("hitting creating chat utilities route")
     let serverResponse = await axios({
            method: "POST",
            url: `/chat/${userId}`, // route to do create chat
        });

    return serverResponse;   
   
}

export const getAllChats = async () => {
     console.log('hitting fetching chats utilities');
    let serverResponse = await axios({
        method: 'GET',
        url: `/chat`
    });
    
    return serverResponse;

}

export const getSender = (user, users) =>{
    return users[0]._id === user._id? users[1].firstName : users[0].firstName
}
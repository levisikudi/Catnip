import axios from "axios";


export const createChat = async (userId) =>{
    console.log(userId);
    console.log("hitting utilities route")
     let serverResponse = await axios({
            method: "POST",
            url: `/chat/${userId}`, // route to do create chat
        });

    return serverResponse;   
   
}

export const getAllChats = async () => {

    let serverResponse = await axios({
        method: 'GET',
        url: `/chat`
    });

    return serverResponse;

}
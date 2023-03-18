import axios from "axios";


export const createChat = async (userId) =>{
     let serverResponse = await axios({
            method: "POST",
            url: "/chat", // route to do create chat
            data: userId
        });

    return serverResponse;   
   
}
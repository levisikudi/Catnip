import axios from "axios";


export const signUp = async (formData) =>{
    let serverResponse = await axios({
            method: "POST",
            url: "http://localhost:4000/user/signup", // route to do signup
            data: formData
        });

    return serverResponse;
}
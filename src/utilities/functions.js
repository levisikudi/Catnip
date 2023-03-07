import axios from "axios";


export const createCat = async (formData) =>{
    let serverResponse = await axios({
            method: "POST",
            url: "/cat/create", // route to do signup
            data: formData
        });

    return serverResponse;
}

import axios from "axios";


export const signUp = async (formData) =>{
    let serverResponse = await axios({
            method: "POST",
            url: "/user/signup", // route to do signup
            data: formData
        });

    return serverResponse;
}

export const loginUser = async (formData) =>{
     let serverResponse = await axios({
            method: "POST",
            url: "/user/login", // route to do login
            data: formData
        });

    return serverResponse;   
   
}
export const logout = async () =>{

    try {
        let serverResponse = await axios({
            method: "POST",
            url: "/user/logout", // route to do logout
            withCredentials: true,

        });

    return serverResponse;   
        
    } catch (error) {
         console.error(error);
    }

     
   
}

export const getUserfromSession = async () =>{
    let response = await axios('/user/getuser')
        console.log(response);

        return response.data.session.passport.user
    }

export const getSingleUser = async (name) => {
    console.log(name);

    let serverResponse = await axios(`/user/getSingleUser?search=${name}`)
    console.log(serverResponse);
     
    let finalData = serverResponse.data
    console.log(finalData);

    return finalData;
}

export const deleteUserbyId = async (id)  => {
 console.log(id);
    let serverResponse = await axios({
        method:'DELETE',
        url:`/user/deleteUser/${id}`})
    console.log(serverResponse);

    return serverResponse.data
}

export const updateById = async (dataPack) =>{

    console.log(dataPack);

    let serverResponse = await axios({
            method: "PUT",
            url: `/user/updateById/${dataPack[1]}`, // route to update user
            data: dataPack[0]
        });

    return serverResponse;

}
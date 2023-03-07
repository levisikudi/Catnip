import axios from "axios";


export const createCat = async (formData) =>{
    console.log(formData);
    let serverResponse = await axios({
            method: "POST",
            url: "/cat/create", // route to create cat
            data: formData
        });

    return serverResponse;
}

export const getcats = async () => {

    let serverResponse = await axios({
        method: 'GET',
        url: `/cat/getcats`
    });

    return serverResponse;

}
export const getSingleCat = async (name) => {

    let serverResponse = await axios({
        method: 'GET',
        url: `/cat/getSingleCat:${name}`
    });

    return serverResponse;
}
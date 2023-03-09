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

export const getAllCats = async () => {

    let serverResponse = await axios({
        method: 'GET',
        url: `/cat/get_all_cats`
    });

    return serverResponse;

}
export const getSingleCat = async (name) => {

    let serverResponse = await axios({
        method: 'GET',
        url: `/cat/getSingleCat/${name}`
    });

        return serverResponse;
    

    
}

export const updateCatById = async (dataPack) =>{

    console.log(dataPack);

    let serverResponse = await axios({
            method: "PUT",
            url: `/cat/updateCatById/${dataPack[1]}`, // route to update cat
            data: dataPack[0]
        });

    return serverResponse;

}
const Cat = require( "../models/catModel" );

const createCat = async (res, req) =>{
    console.log(req.body);

    const { name, othername, gender, breed, hypoallergenic, hobbies, dob, picture} = req.body

    const cat = await Cat.create({
        name, 
        othername, 
        gender, 
        breed, 
        hypoallergenic, 
        hobbies, 
        dob, 
        picture
    })

    


    res.json("hitting the route")
}

module.exports = { createCat }
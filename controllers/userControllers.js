const User = require('../models/userModel.js')

const register = async (req, res)=>{

    const { firstName, surname, email, password, description, gender, location, photo} = req.body
    // Check if user exists
    const userExists = await User.findOne({email})

    //if so, send error. If not, create User
    if (userExists){
        res.send('User Exists')
        console.log('User Exists');
    }
     
    const user = await User.create({
        firstName,
        surname,
        email,
        password,
        description,
        gender,
        location,
        photo
    })


    if(user){
        res.status(201).json({surname : user.surname}+'created')
    }else{
        res.status(400)
    }

    
}

module.exports = {register} 
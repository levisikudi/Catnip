const User = require('../models/userModel.js')
const bcrypt = require('bcrypt')

const register = async (req, res)=>{

    const { firstName, surname, email, password, description, gender, location, photo} = req.body
    // Check if user exists
    const userExists = await User.findOne({email})

    //if so, send error. If not, create User
    if (userExists){
        res.status(400)
        throw new Error('User exists')    
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
        throw new Error ('Failed to create user')
    }

    
}

const login = async (req, res) =>{
    const { email, password } = req.body

    console.log(req.body);
    res.send('Logged in')
}


module.exports = {register , login} 
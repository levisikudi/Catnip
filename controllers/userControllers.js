const User = require('../models/userModel.js')
const bcrypt = require('bcrypt')

const register = async (req, res)=>{

    console.log(req.body);

    const { firstName, surname, email, password, description, gender, city, state, picture} = req.body
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
        city,
        state,
        picture
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
    res.json(req.body.data)
}


module.exports = {register , login, } 
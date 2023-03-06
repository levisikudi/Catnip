const User = require('../models/userModel.js')
const bcrypt = require('bcrypt')
const passport = require('passport');

const initializePassport = require('../config/passport-config')

initializePassport(
    passport,
    
    async email => {
        let user = User.findOne({email: email})
        return user;
    },
    async id => {
        let user = User.findById(id);
        return user;
    },
);


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
    
    let hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        firstName,
        surname,
        email,
        password : hashedPassword,
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

const login = async (req, res, next) =>{
    console.log(req.body);
    // passport authentication
    passport.authenticate("local", (err, user, message) => {
        console.log(message);
        console.log("authenicated");

        if (err) throw err;
        if (!user) {
            res.json({
                message: "login failed",
                user: false
            })
        } else {
            // delete user.password
            req.logIn(user, err => {
                if (err) throw err;
                res.json({
                    message: "successfully authenticated",
                    // remove user
                })
                console.log("authenticated");
            })
        }
    })
    (req, res, next)
}

const logout = async (req, res, next) =>{
    console.log(req);

    try {
        
    req.logout(function(err) {
    if (err) 
    { 
        return next(err); 
    }
  })
    } catch (error) {
         console.error(error);

    }
  res.json("logout successful");
};


const getuser = async (req, res) =>{
    console.log();
    res.json({session:req.session})
}


module.exports = {register , login, getuser, logout} 
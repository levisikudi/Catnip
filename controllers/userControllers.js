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
    console.log(user);
    if(user){
        res.json({user:user})
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
        console.log("authentication process...");

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
    console.log(req.session);
    res.json({session:req.session})
};

const getSingleUser = async (req, res) =>{
    console.log('hitting route');
    console.log(req.query.search);
    let keyword = req.query.search ? {
        $or: [
         { firstName: {$regex : req.query.search, $options : "i"}},
         { surname: {$regex : req.query.search, $options : "i"}},
         { email: {$regex : req.query.search, $options : "i"}}

      ]  
    }:{};
    console.log(keyword);

    const users = await User.find(keyword).populate('cat')
    res.send(users)
    
}






const getAllUsers = async (req, res) =>{
    try {
    const user = await User.find({}).select('firstName surname picture cat')
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  
}

const deleteUserbyId = async (req, res) =>{
    console.log('hitting delete route');
    console.log(req.params);
    let response =  await User.deleteOne({ _id: req.params.id });
    res.send(response)

}

const updateUser = async (req, res) =>{

    console.log("hitting user route");
   let userId = {_id:`${req.params.userId}`}
   console.log(req.body);
   console.log(userId);
   res.json(req.body)
   let myData = req.body
   try {
    let response = await User.findByIdAndUpdate(userId, myData, {new:true})
   console.log(response);   
   res.json({userId, body:response})
   } catch (error) {
      console.log(error);
   }


}

module.exports = {register , login, getuser, logout, getSingleUser, getAllUsers, deleteUserbyId, updateUser} 
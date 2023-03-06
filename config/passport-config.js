const User = require( "../models/userModel" );
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

module.exports = async function(passport){
    passport.use(

    new localStrategy({usernameField: "email"}, async (email, password, done) =>{
        const user = await User.findOne({email: email})
            console.log('got user!');
            
            if(!user) return done(null, false,{message: "Email or password incorrect"})

            bcrypt.compare(password, user.password, (err, result)=>{
                if (err) throw err;
                if(result){
                    return done(null, user, {message: "Found user - passwords match"})
                }else{
                    return done(null, false,{message: "Email or password incorrect"})
                }
            })

    })

    )

    // 2. add seralize function to passport library
    // place use in a session
    // callback function - a function that runs after another function (or at a specific trigger)
    passport.serializeUser((user, cb) => {
        // do stuff here
        cb(null, user)
    });
    // 3. add deserialize function to passport library
    // take out of session
    passport.deserializeUser(async (id, cb) => {
        return cb(null, await User.findById(id))
    });

}
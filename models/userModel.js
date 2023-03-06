 const mongoose = require('mongoose')

 const userSchema = mongoose.Schema({
     firstName: {
         type: String,
         required: true
     },

     surname: {
         type: String,
         required: true
     },

     description: {
        type: String,
      //   required: true
     },

     email: {
         type: String,
         required: true,
         unique: true
     },

     password: {
         type: String,
         required: true,
         minLength: 6
     },

     gender: {
        type: String,
      //   required: true
     },

     picture:{
        type: String,
        default: 'https://i.imgur.com/xCvzudW.png'
     },

     city: {type: String},
     state:{type: String},
    }, 
    {timestamps:true}
 )

 const User = mongoose.model('User', userSchema)

 module.exports = User;
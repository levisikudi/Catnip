 const mongoose = require('mongoose')

 const userSchema = mongoose.Schema({
     firstname: {
         type: String,
         required: true
     },

     lastname: {
         type: String,
         required: true
     },

     description: {
        type: String,
        required: true
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
        required: true
     },

     picture:{
        type: String,
        required: true,
        default: 'https://i.imgur.com/xCvzudW.png'
     },

     location: {
        type: String,
        required: true,
     },

     cat: {
        type: mongoose.Schema.Types.ObjectId , 
        ref: 'Cat'
     }
    }, 
    {timestamps:true}
 )

 const User = mongoose.model('User', userSchema)

 module.exports = User;
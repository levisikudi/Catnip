 const mongoose = require('mongoose')

 const userSchema = mongoose.Schema({
     username: {
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
     picture:{
        type: String,
        required: true,
        default: 'jjf'
     },
     location: {
        type: String,
        required: true,
     },
     cat: {
        type: Schema.Types.ObjectId , 
        ref: 'Cat'
     }
     
 }, 
    {timestamps:true}
 )

 const User = mongoose.model('User', userSchema)

 module.exports = User;
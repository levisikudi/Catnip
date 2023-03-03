 const mongoose = require('mongoose')

 const catSchema = new mongoose.Schema({
     firstname: {
         type: String,
         required: true
     },
     lastname: {type: String,},
     nickname: {type: String,},
     gender:{
        type: String,
        required: true
     },
     picture:[{
        type: String,
        required: true,
        default: 'jjf'
     }],
     breed: {
        type: String,
        required: true
     },
     hypoallergenic: { type : String },
     hobbies:[{
        type: String,
        required: true
     }],
     dob:{
        type: Date,
        required: true
     }
 },
 {
    timestamps:true,
 }
 )

  const Cat = mongoose.model('Cat', catSchema)

 module.exports = Cat;
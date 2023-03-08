 const mongoose = require('mongoose')

 const catSchema = new mongoose.Schema({
     name: {
         type: String,
     },
     othername: {type: String,},
     gender:{
        type: String,
     },
     picture:{
        type: String,
        default: 'https://i.imgur.com/vVGSIyEb.jpg'
     },
     breed: {
        type: String,
     },
     hypoallergenic: { type : String },
     hobbies:{
        type: String,
     },
     dob:{
        type: Date,
     },
     
 },
 {
    timestamps:true,
 }
 )

  const Cat = mongoose.model('Cat', catSchema)

 module.exports = Cat;
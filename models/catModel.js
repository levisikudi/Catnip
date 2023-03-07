 const mongoose = require('mongoose')

 const catSchema = new mongoose.Schema({
     name: {
         type: String,
     },
     othername: {type: String,},
     gender:{
        type: String,
     },
     picture:[{
        type: String,
        default: 'jjf'
     }],
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
      owner :{
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'User'
    },
 },
 {
    timestamps:true,
 }
 )

  const Cat = mongoose.model('Cat', catSchema)

 module.exports = Cat;
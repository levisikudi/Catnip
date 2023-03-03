 const mongoose = require('mongoose')

 const catSchema = new mongoose.Schema({
     name: {
         type: String,
         required: true
     },
     gender:{
        type: String,
        required: true
     },
     picture:[{
        type: String,
        required: true,
        default: 'jjf'
     }],
     hobbies:[{
        type: String,
        required: true
     }]
     
 },
 {
    timestamps:true,
 }
 )

  const Cat = mongoose.model('Cat', catSchema)

 module.exports = Cat;
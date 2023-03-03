const express = require('express')
const path = require('path')
const logger = require('morgan')

// cross origin access 
const cors = require('cors')


//models
const User = require('./models/userModel.js')
const Cat = require('./models/catModel')
const Chat = require('./models/chatModel.js')
const Message = require('./models/messajeModel.js')


// configs
require('dotenv').config();
require('./config/database.js');



const app = express()


//access
app.use(cors({
    origin: "*"
}))


// logs different requests to our server
app.use(logger('dev'))

// parse stringified json objects
app.use(express.json())

// serve our build folder
app.use(express.static(path.join(__dirname, 'build')))

//routes
app.post('/users/signup',async (req, res) => {

    const {firstname, lastname, description, email, password, gender, picture, location } = req.body
    let user = await User.create({
       firstname, lastname, description, email, password, gender, picture, location 
    })
    

    if (user){
        res.status(201).json({
            _id: user._id,
            name: user.firstname,
            location: user.location
        })
    }else{
        res.status(400)
        throw new Error('Failed to create user')
    }

    // sending user response after creation or login
    res.json("user created")
});



// Catch-all route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


app.listen(4000, () => {
    console.log(`Server is Listening on 4000..`)
})
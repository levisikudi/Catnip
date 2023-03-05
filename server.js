const express = require('express')
const path = require('path')
const logger = require('morgan')
const userRoutes = require('./routes/userRoutes')

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

app.use('/user', userRoutes)







// Catch-all route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


app.listen(4000, () => {
    console.log(`Server is Listening on 4000..`)
})
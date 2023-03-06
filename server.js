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

// auth
const passport = require('passport');
const session = require('express-session');
const initializePassport = require('./config/passport-config.js')


// logs different requests to our server
app.use(logger('dev'))
// parse stringified json objects
app.use(express.json())
// serve our build folder


initializePassport(
    passport
    ,
    // passport tells us that they want a function that will return the correct user given an email
    async email => {
        let user = User.findOne({email: email})
        return user;
    },
    async id => {
        let user = User.findById(id);
        return user;
    },
);

app.use(session({
    secure: true,
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { originalMaxAge: 3600000 }
}))
app.use(passport.session());

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
const express = require('express')
const path = require('path')
const logger = require('morgan')

// cross origin access 
const cors = require('cors')


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




// Catch-all route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


app.listen(4000, () => {
    console.log(`Server is Listening on 4000..`)
})
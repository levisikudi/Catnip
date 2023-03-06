const express = require('express')

const { register , login, getuser } = require('../controllers/userControllers')

const router = express.Router()

router.post('/signup', register)
// router.post('/login',authUser)

router.post('/login', login)


// router.post('/getuser', login)


module.exports = router;
const express = require('express')

const { register , login, allusers } = require('../controllers/userControllers')

const router = express.Router()

router.post('/signup', register)
// router.post('/login',authUser)

router.post('/login', login)


module.exports = router;
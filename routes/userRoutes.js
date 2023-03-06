const express = require('express')

const { register , login, getuser, logout } = require('../controllers/userControllers')

const router = express.Router()

router.post('/signup', register)
// router.post('/login',authUser)

router.post('/login', login)

router.post('/logout', logout)


router.get('/getuser', getuser)


module.exports = router;
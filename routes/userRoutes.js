const express = require('express')

const { register , login, getuser, logout , getSingleUser, getAllUsers} = require('../controllers/userControllers')

const router = express.Router()

router.post('/signup', register)
// router.post('/login',authUser)

router.post('/login', login)

router.post('/logout', logout)


router.get('/getuser', getuser)

router.get('/getSingleUser/:firstName', getSingleUser)

router.get('/get_all_users', getAllUsers)


module.exports = router;
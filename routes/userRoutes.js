const express = require('express')

const { register , login, getuser, logout , getSingleUser, getAllUsers, deleteUserbyId, updateUser} = require('../controllers/userControllers')

const router = express.Router()



// .................POST ROUTES.............
router.post('/signup', register)
// router.post('/login',authUser)

router.post('/login', login)

router.post('/logout', logout)



// ..............PUT ROUTES...............

router.put('/updateById/:userId', updateUser)



// ..............GET ROUTES..............
router.get('/getuser', getuser)

router.get('/getSingleUser', getSingleUser)

router.get('/getAllUsers', getAllUsers)



// ..............DELETE ROUTES...............

router.delete('/deleteUser/:id', deleteUserbyId)


module.exports = router;
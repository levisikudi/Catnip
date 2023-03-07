const express = require('express')

const { createCat } = require('../controllers/catControllers')

const router = express.Router()


router.post('/create', createCat)





module.exports = router;
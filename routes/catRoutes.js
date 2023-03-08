const express = require('express')

const { createCat, getAllCats } = require('../controllers/catControllers')

const router = express.Router()


router.post('/create', createCat)

router.get('/get_all_cats', getAllCats)





module.exports = router;
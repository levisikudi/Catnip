const express = require('express')

const { createCat, getAllCats, getSingleCat, updateCat } = require('../controllers/catControllers')

const router = express.Router()


router.post('/create', createCat)

router.put('/updateCatById/:catId', updateCat)

router.get('/get_all_cats', getAllCats)

router.get('/getSingleCat/:name', getSingleCat)





module.exports = router;
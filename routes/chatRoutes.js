const express = require('express')

const {accessChat, getChat, createGroupChat, addToGroup,  renameGroupChat, removeFromGroup} = require('../controllers/chatControllers')
const router = express.Router()



//.................. GET ROUTES..............................
router.get('/', getChat)


//..................POST ROUTES............................
router.post('/groupChat', createGroupChat)
router.post('/:userId', accessChat)

//..................PUT ROUTES............................
router.put('/renameGroup', renameGroupChat)

router.put('/removeGroup', removeFromGroup)
router.put('/addGroup', addToGroup)

module.exports = router;
 
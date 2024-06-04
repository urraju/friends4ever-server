
const express =require('express');
const { getFriends } = require('../controlers/friends');
 
 

const router = express.Router()

// friends api 
router.use('/friends', getFriends)

module.exports = router
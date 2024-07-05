
const express =require('express');
const { getFriends, getSingleFriends } = require('../controlers/friends');
const { postUsers } = require('../controlers/user');
const { getCategory } = require('../controlers/category');
const { postStory, getCategoryStory } = require('../controlers/allStory');
 
 

const router = express.Router()

// friends api 
router.get('/friends', getFriends)
router.get('/friends/:id', getSingleFriends)

// user api 
router.post('/users', postUsers)

// category api 
router.get('/category', getCategory)

// story api 
router.post('/stories', postStory)
router.get('/stories/:categoryStory', getCategoryStory)
module.exports = router
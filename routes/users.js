const express = require('express');
const router = express.Router()
const users = require('../controllers/users')

// get all users
router.get('/', users.allUsers);

// add a new user
router.post('/new-user', users.addUser);

module.exports = router
const express = require('express');
const router = express.Router();
const authentication = require('../middleware/authentication');
const users = require('../controllers/users');

// get all users
router.get('/',authentication, users.allUsers);

// add a new user
router.post('/new-user', users.addUser);

// user edit
router.put('/edit-user/:id', users.editUser);

// get user profile || get a user
router.get('/user-profile/:id', users.findAUser);

module.exports = router
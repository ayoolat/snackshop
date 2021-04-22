const express = require('express');
const router = express.Router();
const authentication = require('../middleware/authentication');
const authorization = require('../middleware/authorization');
const users = require('../controllers/users');

// get all users
router.get('/',authentication, authorization(process.env.ADMIN), users.allUsers);

// add a new user
router.post('/new-user',authentication, users.addUser);

// user edit
router.put('/edit-user/:id',authentication, users.editUser);

// get user profile || get a user
router.get('/user-profile/:id', authentication, users.findAUser);

module.exports = router
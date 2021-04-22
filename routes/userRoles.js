const express = require('express');
const router = express.Router();
const authentication = require('../middleware/authentication');
const authorization = require('../middleware/authorization')
const users = require('../controllers/userRoles');

// get all roles
router.get('/', authentication, authorization(process.env.ADMIN), users.getAllRoles);

// add a new role
router.post('/add_new_role', authentication, authorization(process.env.ADMIN), users.addUserRole);

module.exports = router

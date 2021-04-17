const express = require('express');
const router = express.Router()
const users = require('../controllers/userRoles')

// get all roles
router.get('/', users.getAllRoles);

// add a new role
router.post('/add_new_role', users.addUserRole);

module.exports = router

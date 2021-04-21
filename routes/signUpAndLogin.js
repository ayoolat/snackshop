const express = require('express');
const router = express.Router();
const logInSignUp = require('../controllers/signUpAndLogin');

// sign up user
router.post('/signUp', logInSignUp.signUp);

// login user
router.get('/login', logInSignUp.login);

module.exports = router
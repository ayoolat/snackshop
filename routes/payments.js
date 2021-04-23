const express = require ('express');
const router = express.Router();
const payment = require('../controllers/payments');
const authentication = require('../middleware/authentication');
const authorization = require('../middleware/authorization');
const payments = require('../models/payments');

// make payments for cake
router.post('/payment/', authentication, authorization(process.env.USER) ,payment.initiatePayment);

// complete payment and verify payment status
router.post('/payment/', payment.verifyPayment);

module.exports = router;

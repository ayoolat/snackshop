const express = require('express');
const router = express.Router();
const price = require('../controllers/pricing');
const authentication = require('../middleware/authentication');
const authorization = require('../middleware/authorization');

router.get('/', authentication, authorization(process.env.ADMIN), price.getCakePrice);
router.post('/add-price', authentication, authorization(process.env.ADMIN), price.addASize);
router.put('/update-price/:id', authentication, authorization(process.env.ADMIN), price.editPrice);
router.put('/update-number-of-available-cakes', authentication, authorization(process.env.ADMIN), price.editCakeNo);

module.exports = router;
const express = require ('express');
const router = express.Router();
const size = require('../controllers/sizes');
const authentication = require('../middleware/authentication');
const authorization = require('../middleware/authorization');

// get all sizes
router.get('/', authentication, authorization(process.env.INTERNAL), size.getAllSizes);

// add a new size
router.post('/add-size', authentication, authorization(process.env.ADMIN), size.addASize);

// edit a size
router.put('/edit-size/:id', authentication, authorization(process.env.ADMIN), size.editSize);

// delete a size
router.delete('/delete', authentication, authorization(process.env.ADMIN), size.deleteSize);

module.exports = router;